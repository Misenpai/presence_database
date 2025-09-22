import type { Request, Response } from "express";
import {
  PrismaClient,
  AttendanceSession,
  AttendanceType,
  LocationType,
  type Attendance,
} from "../../generated/prisma/index.js";
import path from "path";
import axios from "axios";

const prisma = new PrismaClient();

type ProcessedAttendance = Attendance & {
  autoCompleted?: boolean;
};

async function getLocationDetails(lat: number, lng: number) {
  try {
    console.log("This is running");
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;
    const response = await axios.get(url, {
      headers: {
        "User-Agent": "MyAPP/1.0",
      },
    });

    const data = response.data;
    return {
      locationAddress: data.display_name || null,
      county:
        data.address?.county ||
        data.address?.city ||
        data.address?.village ||
        null,
      state: data.address?.state || null,
      postcode: data.address?.postcode || null,
    };
  } catch (error) {
    console.error("Error fetching location details:", error);
    return { locationAddress: null, county: null, state: null, postcode: null };
  }
}

function getSessionType(time: Date): AttendanceSession {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const timeInMinutes = hours * 60 + minutes;

  if (timeInMinutes >= 570 && timeInMinutes < 780) {
    return AttendanceSession.FN;
  } else if (timeInMinutes >= 780 && timeInMinutes <= 1050) {
    return AttendanceSession.AF;
  }

  if (timeInMinutes < 570) {
    return AttendanceSession.FN;
  }
  return AttendanceSession.AF;
}

function determineAttendanceType(
  checkinTime: Date,
  checkoutTime: Date | null,
  sessionType: AttendanceSession,
): AttendanceType | null {
  if (!checkoutTime) {
    return null;
  }

  const hoursWorked =
    (checkoutTime.getTime() - checkinTime.getTime()) / (1000 * 60 * 60);

  if (sessionType === AttendanceSession.FN && hoursWorked >= 6) {
    return AttendanceType.FULL_DAY;
  }

  return AttendanceType.HALF_DAY;
}

function getTodayDate(): Date {
  const today = new Date();
  return new Date(
    Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()),
  );
}

export const createAttendance = async (req: Request, res: Response) => {
  try {
    console.log("Received request body:", req.body);
    console.log("Received files:", req.files);

    const {
      username,
      location,
      audioDuration,
      latitude,
      longitude,
      locationType = LocationType.CAMPUS,
    } = req.body;

    if (!username || username === "undefined") {
      console.log("Username is missing or undefined:", username);
      return res
        .status(400)
        .json({ error: "Username is required and cannot be undefined" });
    }

    console.log("Processing attendance for:", {
      username,
      location: location || "Not provided",
      latitude: latitude || "Not provided",
      longitude: longitude || "Not provided",
    });

    const user = await prisma.user.findFirst({
      where: { username },
      include: {
        fieldTrips: {
          where: {
            isActive: true,
            startDate: { lte: new Date() },
            endDate: { gte: new Date() },
          },
        },
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isOnFieldTrip = user.fieldTrips.length > 0;
    const finalLocationType = isOnFieldTrip
      ? LocationType.FIELDTRIP
      : locationType;

    const currentTime = new Date();
    const sessionType = getSessionType(currentTime);
    const todayDate = getTodayDate();

    const existingAttendance = await prisma.attendance.findUnique({
      where: {
        employeeNumber_date: {
          employeeNumber: user.employeeNumber,
          date: todayDate,
        },
      },
    });

    if (existingAttendance && existingAttendance.checkoutTime) {
      return res.status(409).json({
        error: "You have already completed your attendance for today.",
        existingAttendance,
      });
    }

    const files = (req.files as Express.Multer.File[]) || [];
    const audioFile = files.find((f) => f.mimetype.startsWith("audio/"));
    const photoFile = files.find((f) => f.mimetype.startsWith("image/"));

    const baseUrl = `${req.protocol}://${req.get("host")}`;

    const photoUrl = photoFile
      ? `${baseUrl}/${path.relative(process.cwd(), photoFile.path).replace(/\\/g, "/")}`
      : null;

    const audioUrl = audioFile
      ? `${baseUrl}/${path.relative(process.cwd(), audioFile.path).replace(/\\/g, "/")}`
      : null;

    const parsedAudioDuration = audioDuration ? parseInt(audioDuration) : null;
    const lat = latitude ? parseFloat(latitude) : null;
    const lng = longitude ? parseFloat(longitude) : null;

    let locationDetails = {
      locationAddress: null,
      county: null,
      state: null,
      postcode: null,
    };
    if (lat && lng) {
      locationDetails = await getLocationDetails(lat, lng);
    }

    let takenLocation = location || null;
    if (isOnFieldTrip) {
      takenLocation = "Outside IIT (Field Trip)";
    }

    if (existingAttendance && !existingAttendance.checkoutTime) {
      const updatedAttendance = await prisma.attendance.update({
        where: {
          employeeNumber_date: {
            employeeNumber: user.employeeNumber,
            date: todayDate,
          },
        },
        data: {
          checkinTime: currentTime,
          sessionType,
          locationType: finalLocationType,
          takenLocation,
          photoUrl,
          audioUrl,
          audioDuration: parsedAudioDuration,
          latitude: lat,
          longitude: lng,
          locationAddress: locationDetails.locationAddress,
          county: locationDetails.county,
          state: locationDetails.state,
          postcode: locationDetails.postcode,
        },
      });

      return res.status(200).json({
        success: true,
        data: updatedAttendance,
        message: `Re-checkin updated for ${sessionType} session.`,
      });
    }

    const newAttendance = await prisma.attendance.create({
      data: {
        employeeNumber: user.employeeNumber,
        date: todayDate,
        checkinTime: currentTime,
        sessionType,
        locationType: finalLocationType,
        takenLocation,
        photoUrl,
        audioUrl,
        audioDuration: parsedAudioDuration,
        latitude: lat,
        longitude: lng,
        locationAddress: locationDetails.locationAddress,
        county: locationDetails.county,
        state: locationDetails.state,
        postcode: locationDetails.postcode,
      },
    });

    res.status(201).json({
      success: true,
      data: newAttendance,
      message: `Check-in successful for ${sessionType} session. Remember to checkout.`,
    });
  } catch (error: any) {
    console.error("Create attendance error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const checkoutAttendance = async (req: Request, res: Response) => {
  try {
    const { employeeNumber } = req.body;

    const tokenEmployeeNumber = req.user?.employeeNumber;
    const finalEmployeeNumber = employeeNumber || tokenEmployeeNumber;

    if (!finalEmployeeNumber) {
      return res.status(400).json({ error: "Employee number is required" });
    }

    const user = await prisma.user.findUnique({
      where: { employeeNumber: finalEmployeeNumber },
    });

    if (!user) {
      return res.status(404).json({ error: "Employee not found" });
    }

    const todayDate = getTodayDate();

    const attendance = await prisma.attendance.findUnique({
      where: {
        employeeNumber_date: {
          employeeNumber: user.employeeNumber,
          date: todayDate,
        },
      },
    });

    if (!attendance) {
      return res.status(404).json({
        error: "No check-in found for today. Please check-in first.",
      });
    }

    if (attendance.checkoutTime) {
      return res.status(409).json({
        error: "You have already checked out for today.",
        checkOutTime: attendance.checkoutTime,
      });
    }

    const checkOutTime = new Date();
    const checkInTime = attendance.checkinTime || new Date();
    const sessionType = attendance.sessionType || AttendanceSession.FN;

    const attendanceType = determineAttendanceType(
      checkInTime,
      checkOutTime,
      sessionType,
    );

    const updatedAttendance = await prisma.attendance.update({
      where: {
        employeeNumber_date: {
          employeeNumber: user.employeeNumber,
          date: todayDate,
        },
      },
      data: {
        checkoutTime: checkOutTime,
        attendanceType: attendanceType || AttendanceType.HALF_DAY,
      },
    });

    const finalType = attendanceType || AttendanceType.HALF_DAY;
    res.status(200).json({
      success: true,
      data: updatedAttendance,
      message: `Checkout successful. Attendance marked as ${finalType}.`,
    });
  } catch (error: any) {
    console.error("Checkout error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getTodayAttendance = async (req: Request, res: Response) => {
  try {
    const { employeeNumber } = req.params;

    if (!employeeNumber) {
      return res.status(400).json({ error: "Employee number is required" });
    }

    const user = await prisma.user.findUnique({
      where: { employeeNumber },
    });

    if (!user) {
      return res.status(404).json({ error: "Employee not found" });
    }

    const todayDate = getTodayDate();

    const attendance = await prisma.attendance.findUnique({
      where: {
        employeeNumber_date: {
          employeeNumber: user.employeeNumber,
          date: todayDate,
        },
      },
    });

    if (!attendance) {
      return res.status(404).json({
        success: false,
        error: "No attendance found for today",
      });
    }

    const now = new Date();
    const currentHour = now.getHours();

    let processedAttendance: ProcessedAttendance = { ...attendance };

    if (
      currentHour >= 23 &&
      !attendance.checkoutTime &&
      attendance.checkinTime
    ) {
      processedAttendance = {
        ...attendance,
        attendanceType: AttendanceType.FULL_DAY,
        autoCompleted: true,
      };
    }

    res.status(200).json({
      success: true,
      data: processedAttendance,
    });
  } catch (error: any) {
    console.error("Get today attendance error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getUserAttendanceCalendar = async (
  req: Request,
  res: Response,
) => {
  try {
    const { employeeNumber } = req.params;
    const { year, month } = req.query;

    if (!employeeNumber) {
      return res.status(400).json({ error: "Employee Number is required" });
    }

    const queryYear = year
      ? parseInt(year as string)
      : new Date().getFullYear();
    const queryMonth = month ? parseInt(month as string) : null;

    let whereCondition: any = {
      employeeNumber: employeeNumber,
    };

    if (queryMonth) {
      const startDate = new Date(queryYear, queryMonth - 1, 1);
      const endDate = new Date(queryYear, queryMonth, 0);

      whereCondition.date = {
        gte: startDate,
        lte: endDate,
      };
    } else {
      const startDate = new Date(queryYear, 0, 1);
      const endDate = new Date(queryYear, 11, 31);

      whereCondition.date = {
        gte: startDate,
        lte: endDate,
      };
    }

    const attendances = await prisma.attendance.findMany({
      where: whereCondition,
      orderBy: {
        date: "asc",
      },
    });

    const now = new Date();
    const currentHour = now.getHours();
    const today = now.toISOString().split("T")[0];

    const processedAttendances: ProcessedAttendance[] = attendances.map(
      (attendance) => {
        const attendanceDate = attendance.date.toISOString().split("T")[0];

        if (
          attendanceDate === today &&
          currentHour >= 23 &&
          !attendance.checkoutTime &&
          attendance.checkinTime
        ) {
          return {
            ...attendance,
            attendanceType: AttendanceType.FULL_DAY,
            autoCompleted: true,
          };
        }

        return attendance;
      },
    );

    const totalFullDays = processedAttendances.filter(
      (a) =>
        a.attendanceType === AttendanceType.FULL_DAY ||
        a.autoCompleted === true,
    ).length;

    const totalHalfDays = processedAttendances.filter(
      (a) => a.attendanceType === AttendanceType.HALF_DAY && !a.autoCompleted,
    ).length;

    const notCheckedOut = processedAttendances.filter(
      (a) => !a.checkoutTime && !a.autoCompleted && a.checkinTime,
    ).length;

    const totalDays = totalFullDays + totalHalfDays + notCheckedOut;

    res.status(200).json({
      success: true,
      data: {
        attendances: processedAttendances,
        statistics: {
          totalDays,
          totalFullDays,
          totalHalfDays,
          notCheckedOut,
          year: queryYear,
          month: queryMonth,
        },
      },
    });
  } catch (error: any) {
    console.error("Get user attendance calendar error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};
