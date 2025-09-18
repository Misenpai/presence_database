import type { Request, Response } from 'express';
import { PrismaClient } from '../../generated/prisma/index.js';

const prisma = new PrismaClient();

export const getCalendarData = async (req: Request, res: Response) => {
  try {
    const { year, month } = req.query;

    let whereCondition: any = {};

    if (year && month) {
      const queryYear = parseInt(year as string);
      const queryMonth = parseInt(month as string);
      
      const startDate = new Date(queryYear, queryMonth - 1, 1);
      const endDate = new Date(queryYear, queryMonth, 0);
      
      whereCondition.date = {
        gte: startDate,
        lte: endDate
      };
    } else if (year) {
      const queryYear = parseInt(year as string);
      
      const startDate = new Date(queryYear, 0, 1);
      const endDate = new Date(queryYear, 11, 31);
      
      whereCondition.date = {
        gte: startDate,
        lte: endDate
      };
    } else {
      // Default to current year
      const currentYear = new Date().getFullYear();
      const startDate = new Date(currentYear, 0, 1);
      const endDate = new Date(currentYear, 11, 31);
      
      whereCondition.date = {
        gte: startDate,
        lte: endDate
      };
    }

    const calendarEntries = await prisma.calendar.findMany({
      where: whereCondition,
      orderBy: {
        date: 'asc'
      }
    });

    // Format response for easier consumption by the app
    const formattedCalendar = calendarEntries.map(entry => ({
      date: entry.date,
      isHoliday: entry.isHoliday,
      isWeekend: entry.isWeekend,
      description: entry.description,
      dayOfWeek: entry.date.getDay(),
      dayOfMonth: entry.date.getDate()
    }));

    // Group by month for easier display in calendar view
    const groupedByMonth: { [key: string]: any[] } = {};
    
    formattedCalendar.forEach(entry => {
      const monthKey = `${entry.date.getFullYear()}-${String(entry.date.getMonth() + 1).padStart(2, '0')}`;
      
      if (!groupedByMonth[monthKey]) {
        groupedByMonth[monthKey] = [];
      }
      
      groupedByMonth[monthKey].push(entry);
    });

    res.status(200).json({
      success: true,
      data: {
        entries: formattedCalendar,
        byMonth: groupedByMonth,
        totalHolidays: calendarEntries.filter(e => e.isHoliday).length,
        totalWeekends: calendarEntries.filter(e => e.isWeekend).length
      }
    });

  } catch (error: any) {
    console.error("Get calendar data error:", error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

export const getHolidayList = async (req: Request, res: Response) => {
  try {
    const { year } = req.query;
    
    const queryYear = year ? parseInt(year as string) : new Date().getFullYear();
    
    const holidays = await prisma.calendar.findMany({
      where: {
        isHoliday: true,
        date: {
          gte: new Date(queryYear, 0, 1),
          lte: new Date(queryYear, 11, 31)
        }
      },
      orderBy: {
        date: 'asc'
      }
    });

    const formattedHolidays = holidays.map(holiday => ({
      date: holiday.date,
      description: holiday.description,
      isWeekend: holiday.isWeekend,
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][holiday.date.getDay()],
      month: holiday.date.toLocaleString('default', { month: 'long' })
    }));

    res.status(200).json({
      success: true,
      year: queryYear,
      totalHolidays: holidays.length,
      holidays: formattedHolidays
    });

  } catch (error: any) {
    console.error("Get holiday list error:", error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};