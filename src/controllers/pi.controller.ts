// src/controllers/pi.controller.ts
import type { Request, Response } from "express";
import { PrismaClient, AttendanceType } from "../../generated/prisma/index.js";
// Import shared state
import { hrRequests, submittedData } from "../shared/state.js";  // Adjust path if needed

const prisma = new PrismaClient();

export const getPIUsersAttendanceSSO = async (req: Request, res: Response) => {
  try {
    const { month, year } = req.query;
    const { username, projectCodes } = req.body;  // Already using req.body for SSO

    if (!username || !projectCodes || !Array.isArray(projectCodes)) {
      return res.status(400).json({
        success: false,
        error: "Invalid SSO data",
      });
    }

    const queryMonth = month
      ? parseInt(month as string)
      : new Date().getMonth() + 1;
    const queryYear = year
      ? parseInt(year as string)
      : new Date().getFullYear();

    const startDate = new Date(queryYear, queryMonth - 1, 1);
    const endDate = new Date(queryYear, queryMonth, 0);

    const users = await prisma.user.findMany({
      where: {
        userProjects: {
          some: {
            projectCode: {
              in: projectCodes,
            },
          },
        },
      },
      include: {
        userProjects: {
          include: {
            project: true,
          },
          where: {
            projectCode: {
              in: projectCodes,
            },
          },
        },
        attendances: {
          where: {
            date: {
              gte: startDate,
              lte: endDate,
            },
          },
          orderBy: {
            date: "desc",
          },
        },
        fieldTrips: {
          where: {
            isActive: true,
          },
        },
      },
      orderBy: {
        username: "asc",
      },
    });

    const formattedUsers = users.map((user) => {
      const fullDays = user.attendances.filter(
        (a) => a.attendanceType === AttendanceType.FULL_DAY,
      ).length;
      const halfDays = user.attendances.filter(
        (a) => a.attendanceType === AttendanceType.HALF_DAY,
      ).length;
      const notCheckedOut = user.attendances.filter(
        (a) => !a.checkoutTime,
      ).length;
      const totalDays = fullDays + halfDays + notCheckedOut;

      return {
        employeeNumber: user.employeeNumber,
        username: user.username,
        empClass: user.empClass,
        projects: user.userProjects.map((up) => ({
          projectCode: up.projectCode,
          department: up.project.department,
        })),
        hasActiveFieldTrip: user.fieldTrips.length > 0,
        monthlyStatistics: {
          totalDays,
          fullDays,
          halfDays,
          notCheckedOut,
        },
        attendances: user.attendances.map((att) => ({
          date: att.date,
          checkinTime: att.checkinTime,
          checkoutTime: att.checkoutTime,
          sessionType: att.sessionType,
          attendanceType: att.attendanceType,
          isFullDay: att.attendanceType === AttendanceType.FULL_DAY,
          isHalfDay: att.attendanceType === AttendanceType.HALF_DAY,
          isCheckedOut: !!att.checkoutTime,
          takenLocation: att.takenLocation,
          location: {
            takenLocation: att.takenLocation,
            latitude: att.latitude,
            longitude: att.longitude,
            county: att.county,
            state: att.state,
            postcode: att.postcode,
            address:
              att.locationAddress ||
              (att.county || att.state || att.postcode
                ? `${att.county || ""}, ${att.state || ""}, ${att.postcode || ""}`
                    .replace(/^, |, , |, $/g, "")
                    .trim()
                : null),
          },
          photo: att.photoUrl
            ? {
                url: att.photoUrl,
              }
            : null,
          audio: att.audioUrl
            ? {
                url: att.audioUrl,
                duration: att.audioDuration,
              }
            : null,
        })),
      };
    });

    res.status(200).json({
      success: true,
      month: queryMonth,
      year: queryYear,
      totalUsers: formattedUsers.length,
      data: formattedUsers,
    });
  } catch (error: any) {
    console.error("Get PI users attendance error:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getPIUsersAttendance = async (req: Request, res: Response) => {
  try {
    const { month, year } = req.query;

    if (!req.user) {
      return res.status(401).json({
        success: false,
        error: "Authentication required"
      });
    }

    const { username, projects, projectCode } = req.user;
    const userProjects = projects || [projectCode];

    const queryMonth = month
      ? parseInt(month as string)
      : new Date().getMonth() + 1;
    const queryYear = year
      ? parseInt(year as string)
      : new Date().getFullYear();

    const startDate = new Date(queryYear, queryMonth - 1, 1);
    const endDate = new Date(queryYear, queryMonth, 0);

    const users = await prisma.user.findMany({
      where: {
        userProjects: {
          some: {
            projectCode: {
              in: userProjects,
            },
          },
        },
      },
      include: {
        userProjects: {
          include: {
            project: true,
          },
          where: {
            projectCode: {
              in: userProjects,
            },
          },
        },
        attendances: {
          where: {
            date: {
              gte: startDate,
              lte: endDate,
            },
          },
          orderBy: {
            date: "desc",
          },
        },
        fieldTrips: {
          where: {
            isActive: true,
          },
        },
      },
      orderBy: {
        username: "asc",
      },
    });

    const formattedUsers = users.map((user) => {
      const fullDays = user.attendances.filter(
        (a) => a.attendanceType === AttendanceType.FULL_DAY,
      ).length;
      const halfDays = user.attendances.filter(
        (a) => a.attendanceType === AttendanceType.HALF_DAY,
      ).length;
      const notCheckedOut = user.attendances.filter(
        (a) => !a.checkoutTime,
      ).length;
      const totalDays = fullDays + halfDays * 0.5 + notCheckedOut * 0.5;

      return {
        employeeNumber: user.employeeNumber,
        username: user.username,
        empClass: user.empClass,
        projects: user.userProjects.map((up) => ({
          projectCode: up.projectCode,
          department: up.project.department,
        })),
        hasActiveFieldTrip: user.fieldTrips.length > 0,
        monthlyStatistics: {
          totalDays,
          fullDays,
          halfDays,
          notCheckedOut,
        },
        attendances: user.attendances.map((att) => ({
          date: att.date,
          checkinTime: att.checkinTime,
          checkoutTime: att.checkoutTime,
          sessionType: att.sessionType,
          attendanceType: att.attendanceType,
          isFullDay: att.attendanceType === AttendanceType.FULL_DAY,
          isHalfDay: att.attendanceType === AttendanceType.HALF_DAY,
          isCheckedOut: !!att.checkoutTime,
          takenLocation: att.takenLocation,
          location: {
            takenLocation: att.takenLocation,
            latitude: att.latitude,
            longitude: att.longitude,
            county: att.county,
            state: att.state,
            postcode: att.postcode,
            address:
              att.locationAddress ||
              (att.county || att.state || att.postcode
                ? `${att.county || ""}, ${att.state || ""}, ${att.postcode || ""}`
                    .replace(/^, |, , |, $/g, "")
                    .trim()
                : null),
          },
          photo: att.photoUrl
            ? {
                url: att.photoUrl,
              }
            : null,
          audio: att.audioUrl
            ? {
                url: att.audioUrl,
                duration: att.audioDuration,
              }
            : null,
        })),
      };
    });

    res.status(200).json({
      success: true,
      month: queryMonth,
      year: queryYear,
      totalUsers: formattedUsers.length,
      data: formattedUsers,
    });
  } catch (error: any) {
    console.error("Get PI users attendance error:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getPiNotifications = async (req: Request, res: Response) => {
  const piUsername = req.user?.username;
  if (!piUsername) {
    return res.status(401).json({ success: false, error: "Unauthorized PI" });
  }
  const notifications = hrRequests[piUsername] ?
    Object.keys(hrRequests[piUsername]).map(key => {
      const [month, year] = key.split('-');
      return { month, year };
    }) : [];
  return res.json({ success: true, data: notifications });
};

export const submitDataToHR = async (req: Request, res: Response) => {
  try {
    const piUsername = req.user?.username;
    const piProjects = req.user?.projects || (req.user?.projectCode ? [req.user.projectCode] : []);

    if (!piUsername || piProjects.length === 0) {
      return res.status(401).json({ success: false, error: "Unauthorized PI or no projects associated" });
    }

    const { month, year } = req.body;
    const requestKey = `${month}-${year}`;

    if (!hrRequests[piUsername]?.[requestKey]) {
      return res.status(404).json({ success: false, error: "No active data request found from HR for this period." });
    }

    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0);

    const users = await prisma.user.findMany({
      where: { userProjects: { some: { projectCode: { in: piProjects } } } },
      include: {
        attendances: { where: { date: { gte: startDate, lte: endDate } } }
      }
    });

    const formattedUsers = users.map(user => {
      const fullDays = user.attendances.filter(a => a.attendanceType === AttendanceType.FULL_DAY).length;
      const halfDays = user.attendances.filter(a => a.attendanceType === AttendanceType.HALF_DAY).length;
      const notCheckedOut = user.attendances.filter(a => !a.checkoutTime).length;

      // Calculate total days - ANY attendance counts as 1 full day
      // Full days count as 1, half days count as 1, not checked out count as 1
      const totalDays = fullDays + halfDays + notCheckedOut;

      return {
        username: user.username,
        monthlyStatistics: {
          totalDays: totalDays, // Total days present (any attendance = 1 day)
        }
      };
    });

    if (!submittedData[piUsername]) submittedData[piUsername] = {};
    submittedData[piUsername][requestKey] = formattedUsers;
    delete hrRequests[piUsername][requestKey];

    console.log(`Data submitted by PI: ${piUsername} for ${requestKey}`);
    return res.json({ success: true, message: `Attendance data for ${month}/${year} submitted to HR successfully.` });
  } catch (error: any) {
    console.error("Submit data to HR error:", error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
