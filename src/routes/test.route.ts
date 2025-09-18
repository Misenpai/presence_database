import { Router } from 'express';
import { testiitAuth } from '../controllers/test.controller.js';

const router = Router();

// Test endpoint - remove this in production
router.post('/test/iit-auth', testiitAuth);

export default router;