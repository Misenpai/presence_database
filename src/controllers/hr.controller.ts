import type { Request, Response } from "express";
import { PrismaClient, AttendanceType } from "../../generated/prisma/index.js";
import { generateToken } from "../utils/jwt.js";
import { createObjectCsvStringifier } from "csv-writer";
import { hrRequests, submittedData } from "../shared/state.js";

const prisma = new PrismaClient();

const HR_USER = { username: "HRUser", password: "123456" };

// Helper function to calculate working days
async function calculateWorkingDays(startDate: Date, endDate: Date): Promise<number> {
    // Get total days in the month
    const totalDays = endDate.getDate(); // This gives the last day of the month
    
    // Get holidays and weekends from calendar
    const holidaysAndWeekends = await prisma.calendar.findMany({
        where: {
            date: {
                gte: startDate,
                lte: endDate
            },
            OR: [
                { isHoliday: true },
                { isWeekend: true }
            ]
        }
    });
    
    // Working days = Total days - (holidays + weekends)
    const workingDays = totalDays - holidaysAndWeekends.length;
    
    console.log('Working days calculation:', {
        totalDaysInMonth: totalDays,
        holidaysAndWeekends: holidaysAndWeekends.length,
        workingDays: workingDays
    });
    
    return workingDays;
}

export const hrLogin = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (username === HR_USER.username && password === HR_USER.password) {
        const token = generateToken({ employeeNumber: 'HR01', username: 'HRUser', empClass: 'HR' });
        return res.json({ success: true, message: "HR Login Successful", token });
    }
    return res.status(401).json({ success: false, error: "Invalid credentials" });
};

export const getAllPIs = async (req: Request, res: Response) => {
    try {
        const pis = await prisma.pI.findMany({
            select: { username: true },
            orderBy: { username: 'asc' }
        });
        const piUsernames = pis.map(p => p.username);
        return res.json({ success: true, data: piUsernames });
    } catch (error) {
        return res.status(500).json({ success: false, error: "Could not retrieve PI list." });
    }
};

export const requestDataFromPIs = async (req: Request, res: Response) => {
    const { piUsernames, month, year } = req.body;
    if (!piUsernames || !Array.isArray(piUsernames) || !month || !year) {
        return res.status(400).json({ success: false, error: "PI usernames array, month, and year are required." });
    }

    const requestKey = `${month}-${year}`;
    piUsernames.forEach((pi: string) => {
        if (!hrRequests[pi]) hrRequests[pi] = {};
        hrRequests[pi][requestKey] = { requestedAt: Date.now() };
    });

    return res.json({ success: true, message: `Request sent to ${piUsernames.length} PIs for ${requestKey}` });
};

export const getSubmissionStatus = async (req: Request, res: Response) => {
    try {
        const { month, year } = req.query;
        if (!month || !year) {
            return res.status(400).json({ success: false, error: "Month and year are required." });
        }
        const requestKey = `${month}-${year}`;
        const statuses: Record<string, string> = {};

        const pis = await prisma.pI.findMany({ select: { username: true } });
        const piUsernames = pis.map(p => p.username);

        piUsernames.forEach(pi => {
            const hasSubmitted = submittedData[pi] && submittedData[pi][requestKey];
            const hasRequest = hrRequests[pi] && hrRequests[pi][requestKey];
            const isPending = hasRequest && !hasSubmitted;

            if (hasSubmitted) {
                const isComplete = submittedData[pi][requestKey].length > 0;
                statuses[pi] = isComplete ? 'complete' : 'pending';
            } else if (isPending) {
                statuses[pi] = 'requested';
            } else {
                statuses[pi] = 'none';
            }
        });

        return res.json({ success: true, data: statuses });
    } catch (error) {
        return res.status(500).json({ success: false, error: "Could not retrieve submission statuses." });
    }
};

export const downloadReport = async (req: Request, res: Response) => {
    const { piUsernames, month, year } = req.query;
    if (!piUsernames || !month || !year) {
        return res.status(400).json({ success: false, error: "Missing required parameters." });
    }
    const piList = (piUsernames as string).split(',');
    const requestKey = `${month}-${year}`;

    const queryYear = parseInt(year as string);
    const queryMonth = parseInt(month as string);
    
    // Fixed: Consistent date calculation
    const startDate = new Date(queryYear, queryMonth - 1, 1);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(queryYear, queryMonth, 0);
    endDate.setHours(23, 59, 59, 999);

    // Calculate total working days using the new helper function
    const totalWorkingDays = await calculateWorkingDays(startDate, endDate);

    let allUsersData: any[] = [];
    piList.forEach(pi => {
        if (submittedData[pi]?.[requestKey]) {
            allUsersData = [...allUsersData, ...submittedData[pi][requestKey]];
        }
    });

    if (allUsersData.length === 0) {
        return res.status(404).json({ success: false, error: "No data has been submitted for the selected criteria." });
    }

    const records = allUsersData.map(user => {
        // presentDays is the number of days the user was present
        const presentDays = user.monthlyStatistics.totalDays;
        // absentDays is total working days minus present days
        const absentDays = Math.max(0, totalWorkingDays - presentDays);

        return {
            Project_Staff_Name: user.username,
            'Total Working Days': totalWorkingDays,
            'Present Days': presentDays.toFixed(1),
            'Absent Days': absentDays.toFixed(1)
        };
    });

    const csvStringifier = createObjectCsvStringifier({
        header: [
            { id: 'Project_Staff_Name', title: 'Project_Staff_Name' },
            { id: 'Total Working Days', title: 'Total Working Days' },
            { id: 'Present Days', title: 'Present Days' },
            { id: 'Absent Days', title: 'Absent Days' }
        ]
    });

    const csvData = csvStringifier.getHeaderString() + csvStringifier.stringifyRecords(records);

    const fileName = piList.length > 1 ? `Combined_Report_${month}_${year}.csv` : `${piList[0]}_Report_${month}_${year}.csv`;
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.send(csvData);
};

export const getPIUsersWithAttendance = async (req: Request, res: Response) => {
    try {
        const { username: piUsername } = req.params;
        const { month, year } = req.query;

        if (!piUsername) {
            return res.status(400).json({ success: false, error: "PI username is required." });
        }

        const queryMonth = month ? parseInt(month as string) : new Date().getMonth() + 1;
        const queryYear = year ? parseInt(year as string) : new Date().getFullYear();

        // Create start and end dates with time set to cover full day range
        const startDate = new Date(queryYear, queryMonth - 1, 1);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(queryYear, queryMonth, 0); // Last day of month
        endDate.setHours(23, 59, 59, 999);

        console.log('Date range for query:', {
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
            month: queryMonth,
            year: queryYear
        });

        const piWithProjects = await prisma.pI.findUnique({
            where: { username: piUsername },
            include: { piProjects: true },
        });

        if (!piWithProjects) {
            return res.status(404).json({ success: false, error: "PI not found." });
        }

        const projectCodes = piWithProjects.piProjects.map(p => p.projectCode);

        // Calculate total working days using the new helper function
        const totalWorkingDays = await calculateWorkingDays(startDate, endDate);

        console.log('Total working days for the month:', totalWorkingDays);

        const users = await prisma.user.findMany({
            where: { userProjects: { some: { projectCode: { in: projectCodes } } } },
            include: {
                attendances: {
                    where: { 
                        date: { 
                            gte: startDate, 
                            lte: endDate 
                        } 
                    },
                    orderBy: { date: 'asc' },
                },
            },
            orderBy: { username: 'asc' },
        });

        const formattedUsers = users.map(user => {
            // Count unique days with attendance
            const uniqueDates = new Set(
                user.attendances.map(a => a.date.toISOString().split('T')[0])
            );
            const presentDays = uniqueDates.size;
            const absentDays = Math.max(0, totalWorkingDays - presentDays);

            return {
                username: user.username,
                workingDays: totalWorkingDays,
                presentDays,
                absentDays,
                attendances: user.attendances,
            };
        });

        res.json({
            success: true,
            data: {
                piUsername,
                month: queryMonth,
                year: queryYear,
                totalWorkingDays,
                users: formattedUsers
            },
        });

    } catch (error: any) {
        console.error("Get PI users attendance error:", error);
        res.status(500).json({ success: false, error: error.message });
    }
};

export const downloadPIReport = async (req: Request, res: Response) => {
    try {
        const { username: piUsername } = req.params;
        const { month, year } = req.query;

        const queryMonth = month ? parseInt(month as string) : new Date().getMonth() + 1;
        const queryYear = year ? parseInt(year as string) : new Date().getFullYear();

        // Create start and end dates with time set to cover full day range
        const startDate = new Date(queryYear, queryMonth - 1, 1);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(queryYear, queryMonth, 0); // Last day of month
        endDate.setHours(23, 59, 59, 999);

        const piWithProjects = await prisma.pI.findUnique({
            where: { username: piUsername },
            include: { piProjects: true },
        });
        if (!piWithProjects) return res.status(404).send('PI not found');

        const projectCodes = piWithProjects.piProjects.map(p => p.projectCode);

        const users = await prisma.user.findMany({
            where: { userProjects: { some: { projectCode: { in: projectCodes } } } },
            orderBy: { username: 'asc' },
        });

        // Calculate total working days using the new helper function
        const totalWorkingDays = await calculateWorkingDays(startDate, endDate);

        const records = await Promise.all(users.map(async user => {
            const attendances = await prisma.attendance.findMany({
                where: {
                    employeeNumber: user.employeeNumber,
                    date: {
                        gte: startDate,
                        lte: endDate
                    }
                }
            });

            // Count unique days with attendance
            const uniqueDates = new Set(
                attendances.map(a => a.date.toISOString().split('T')[0])
            );
            const presentDays = uniqueDates.size;
            const absentDays = Math.max(0, totalWorkingDays - presentDays);

            return {
                Username: user.username,
                'Working Days': totalWorkingDays,
                'Present Days': presentDays,
                'Absent Days': absentDays,
            };
        }));

        const csvStringifier = createObjectCsvStringifier({
            header: [
                { id: 'Username', title: 'Username' },
                { id: 'Working Days', title: 'Working Days' },
                { id: 'Present Days', title: 'Present Days' },
                { id: 'Absent Days', title: 'Absent Days' },
            ]
        });

        const csvData = csvStringifier.getHeaderString() + csvStringifier.stringifyRecords(records);
        const fileName = `PI_${piUsername}_Report_${month}_${year}.csv`;
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
        res.send(csvData);

    } catch (error: any) {
        console.error("Download PI report error:", error);
        res.status(500).send('Failed to generate report');
    }
};
