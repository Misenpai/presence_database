import type { Request, Response } from 'express';
import { PrismaClient } from '../../generated/prisma/index.js';

const prisma = new PrismaClient();

export const getUserProfileByEmployeeNumber = async (req: Request, res: Response) => {
  try {
    const { employeeNumber } = req.params; // Use employeeNumber for profile operations

    if (!employeeNumber) {
      return res.status(400).json({
        success: false,
        error: "Employee number is required"
      });
    }

    const user = await prisma.user.findUnique({
      where: { employeeNumber: employeeNumber },
      select: {
        employeeNumber: true,
        username: true,
        empClass: true
      }
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "Employee not found"
      });
    }
    res.status(200).json({
      success: true,
      data: user
    });

  } catch (error: any) {
    console.error("Get user profile by employee number error:", error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

export const updateUserProfile = async (req: Request, res: Response) => {
  try {
    const { employeeNumber } = req.params;
    const { username, empClass } = req.body;

    if (!employeeNumber) {
      return res.status(400).json({
        success: false,
        error: "Employee Number is required"
      });
    }

    const updateUserData: any = {};
    if (username) updateUserData.username = username.trim();
    if (empClass) updateUserData.empClass = empClass;

    if (Object.keys(updateUserData).length === 0) {
      return res.status(400).json({
        success: false,
        error: "At least one field is required for update"
      });
    }

    if (username) {
      const existingUser = await prisma.user.findFirst({
        where: {
          AND: [
            { username: username.trim() },
            { NOT: { employeeNumber: employeeNumber } }
          ]
        }
      });

      if (existingUser) {
        return res.status(409).json({
          success: false,
          error: "Username is already taken by another user"
        });
      }
    }

    const updatedUser = await prisma.user.update({
      where: { employeeNumber: employeeNumber },
      data: updateUserData,
      select: {
        employeeNumber: true,
        username: true,
        empClass: true
      }
    });

    res.status(200).json({
      success: true,
      data: updatedUser,
      message: "Profile updated successfully"
    });

  } catch (error: any) {
    console.error("Update user profile error:", error);
    
    if (error.code === 'P2025') {
      return res.status(404).json({
        success: false,
        error: "Employee not found"
      });
    }

    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};