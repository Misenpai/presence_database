// src/middleware/flexibleAuth.ts
import type { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.js';

interface SSO_User {
  username: string;
  projectCodes: string[];
  timestamp: number;
}

// Enhanced middleware that supports both SSO and token auth
export const flexibleAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const ssoHeader = req.headers['x-sso-user'];
  const token = authHeader && authHeader.split(' ')[1];

  // Try SSO first
  if (ssoHeader) {
    try {
      const ssoData: SSO_User = JSON.parse(ssoHeader as string);
      
      // Validate SSO data structure
      if (!ssoData.username || !ssoData.projectCodes || !Array.isArray(ssoData.projectCodes)) {
        throw new Error('Invalid SSO data structure');
      }

      // Check token age (5 minutes max)
      const tokenAge = Date.now() - ssoData.timestamp;
      const maxAge = 5 * 60 * 1000; // 5 minutes
      if (tokenAge > maxAge) {
        throw new Error('SSO token expired');
      }

      // Set user info for SSO
      req.user = {
        username: ssoData.username,
        projectCode: ssoData.projectCodes[0], // Primary project
        projects: ssoData.projectCodes,
        isSSO: true
      };
      
      return next();
    } catch (error) {
      console.error('SSO validation error:', error);
      // Fall through to token auth
    }
  }

  // Try token auth
  if (token) {
    try {
      const decoded = verifyToken(token);
      req.user = {
        ...decoded,
        isSSO: false
      };
      return next();
    } catch (error) {
      return res.status(403).json({
        success: false,
        error: 'Invalid or expired token. Please login again.'
      });
    }
  }

  // No valid auth found
  return res.status(401).json({
    success: false,
    error: 'Access token or SSO authentication is required'
  });
};

// Optional auth - doesn't require authentication but adds user if present
export const optionalFlexibleAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const ssoHeader = req.headers['x-sso-user'];
  const token = authHeader && authHeader.split(' ')[1];

  // Try SSO first
  if (ssoHeader) {
    try {
      const ssoData: SSO_User = JSON.parse(ssoHeader as string);
      
      if (ssoData.username && ssoData.projectCodes && Array.isArray(ssoData.projectCodes)) {
        const tokenAge = Date.now() - ssoData.timestamp;
        const maxAge = 5 * 60 * 1000;
        
        if (tokenAge <= maxAge) {
          req.user = {
            username: ssoData.username,
            projectCode: ssoData.projectCodes[0],
            projects: ssoData.projectCodes,
            isSSO: true
          };
        }
      }
    } catch {
      // Continue without user
    }
  } else if (token) {
    try {
      const decoded = verifyToken(token);
      req.user = {
        ...decoded,
        isSSO: false
      };
    } catch {
      // Continue without user
    }
  }

  next();
};