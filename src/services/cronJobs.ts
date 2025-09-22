// src/services/cronJobs.ts
import cron from "node-cron";
import { PrismaClient, AttendanceType } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

// Run at 11:00 PM every day
cron.schedule("0 23 * * *", async () => {
  try {
    console.log("Running 11 PM attendance auto-completion...");

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Find all attendances for today that are not checked out
    const incompeleteAttendances = await prisma.attendance.findMany({
      where: {
        date: today,
        checkoutTime: null,
        checkinTime: { not: null },
      },
    });

    // Update them to FULL_DAY
    for (const attendance of incompeleteAttendances) {
      await prisma.attendance.update({
        where: {
          employeeNumber_date: {
            employeeNumber: attendance.employeeNumber,
            date: attendance.date,
          },
        },
        data: {
          attendanceType: AttendanceType.FULL_DAY,
          // Note: We're NOT setting checkoutTime, keeping it null
          // This indicates auto-completion
        },
      });
    }

    console.log(
      `Auto-completed ${incompeleteAttendances.length} attendance records at 11 PM`,
    );
  } catch (error) {
    console.error("Error in 11 PM auto-completion:", error);
  }
});
