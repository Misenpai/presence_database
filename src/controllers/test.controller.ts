import type { Request, Response } from 'express';
import { getiitAuthService } from '../services/iitAuthService.js';

export const testiitAuth = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        error: 'Username and password are required for testing'
      });
    }

    console.log(`[Test] Testing iit authentication for: ${username}`);
    
    const iitAuth = getiitAuthService();
    const result = await iitAuth.authenticateUser({ username, password });
    
    res.status(200).json({
      success: true,
      testResult: result,
      message: 'iit authentication test completed'
    });

  } catch (error: any) {
    console.error('[Test] iit auth test error:', error.message);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};