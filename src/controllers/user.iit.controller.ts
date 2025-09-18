import type { Request, Response } from 'express';
import { PrismaClient } from '../../generated/prisma/index.js';
import { createUserFolder } from '../utils/folderUtils.js';
import { generateToken } from '../utils/jwt.js';
import { getiitAuthService } from '../services/iitAuthService.js';

const prisma = new PrismaClient();

export const loginUserIIT = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ 
        success: false, 
        error: "Username and password are required" 
      });
    }

    // Step 1: Authenticate with IIT backend
    try {
      console.log(`[IIT-Login] Verifying credentials with IIT backend for: ${username}`);
      const iitAuth = getiitAuthService();
      const authResult = await iitAuth.authenticateUser({ username, password });

      if (!authResult.success || !authResult.valid) {
        console.log(`[IIT-Login] IIT authentication failed for: ${username}`);
        return res.status(401).json({ 
          success: false, 
          error: "Invalid username or password" 
        });
      }

      console.log(`[IIT-Login] IIT authentication successful for: ${username}`);
    } catch (error: any) {
      console.error('[IIT-Login] IIT authentication error:', error.message);
      return res.status(503).json({ 
        success: false, 
        error: "Authentication service unavailable. Please try again later." 
      });
    }

    // Step 2: Check if user exists in local database
    let user = await prisma.user.findUnique({
      where: { username: username }
    });

    // If user doesn't exist locally, create a basic profile
    if (!user) {
      console.log(`[IIT-Login] Creating local profile for IIT user: ${username}`);
      
      user = await prisma.user.create({
        data: {
          employeeNumber: username, // Using username as employeeNumber for now
          username: username.trim(),
          empClass: 'PJ' // Default class
        }
      });

      console.log(`[IIT-Login] Local profile created for: ${username}`);
    }

    createUserFolder(user.username);

    // Generate JWT token
    const token = generateToken({
      employeeNumber: user.employeeNumber,
      username: user.username
  , empClass: user.empClass
    });

    res.status(200).json({ 
      success: true, 
      employeeNumber: user.employeeNumber,
      username: user.username,
      user: {
        employeeNumber: user.employeeNumber,
        username: user.username,
        empClass: user.empClass,
        dateOfResign: user.dateOfResign
      },
      token,
      message: "Login successful (IIT Verified)"
    });
  } catch (error: any) {
    console.error("IIT Login user error:", error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

export const syncUserFromIIT = async (req: Request, res: Response) => {
  try {
    const { username, employeeNumber, empClass } = req.body;

    if (!username || !employeeNumber) {
      return res.status(400).json({ 
        success: false, 
        error: "Username and employeeNumber are required" 
      });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { employeeNumber: employeeNumber.trim() },
          { username: username.trim() }
        ]
      }
    });

    if (existingUser) {
      return res.status(409).json({ 
        success: false, 
        error: "User already exists in local database" 
      });
    }

    // Create user entry for admin purposes
    const user = await prisma.user.create({
      data: {
        employeeNumber: employeeNumber.trim(),
        username: username.trim(),
        empClass: empClass || 'PJ'
      }
    });

    createUserFolder(user.username);

    res.status(201).json({
      success: true, 
      message: "User synced from IIT successfully",
      user: user
    });
  } catch (error: any) {
    console.error("Sync user from IIT error:", error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

export const testIITConnection = async (req: Request, res: Response) => {
  try {
    const iitAuth = getiitAuthService();
    const isConnected = await iitAuth.testConnection();

    res.status(200).json({
      success: true,
      connected: isConnected,
      message: isConnected ? 'IIT backend is reachable' : 'IIT backend is not reachable'
    });
  } catch (error: any) {
    console.error("Test IIT connection error:", error);
    res.status(500).json({
      success: false,
      connected: false,
      error: error.message
    });
  }
};