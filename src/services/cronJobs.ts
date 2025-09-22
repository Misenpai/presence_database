import cron from "node-cron";
import { PrismaClient, AttendanceType } from "../../generated/prisma/index.js";

export function initCronJobs() {
  const prisma = new PrismaClient();

  cron.schedule("0 23 * * *", async () => {
    try {
      console.log("Running 11 PM attendance auto-completion...");

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const incompleteAttendances = await prisma.attendance.findMany({
        where: {
          date: today,
          checkoutTime: null,
          checkinTime: { not: null },
        },
      });

      for (const attendance of incompleteAttendances) {
        await prisma.attendance.update({
          where: {
            employeeNumber_date: {
              employeeNumber: attendance.employeeNumber,
              date: attendance.date,
            },
          },
          data: {
            attendanceType: AttendanceType.FULL_DAY,
          },
        });
      }

      console.log(
        `Auto-completed ${incompleteAttendances.length} attendance records at 11 PM`,
      );
    } catch (error) {
      console.error("Error in 11 PM auto-completion:", error);
    }
  });

  console.log("Cron jobs initialized");
}
