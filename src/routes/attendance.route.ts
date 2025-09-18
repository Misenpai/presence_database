import { Router } from 'express';
import { 
  createAttendance,
  checkoutAttendance,
  getTodayAttendance,
  getUserAttendanceCalendar,
} from '../controllers/attendance.controller.js';
import { upload } from '../utils/fileUpload.js';
import { flexibleAuth } from '../middleware/auth.js';

const router = Router();

// Mixed approach: attendance creation uses username (for files), other operations use employeeNumber
router.post('/attendance', flexibleAuth, upload.any(), createAttendance); // Uses username in body
router.post('/attendance/checkout', flexibleAuth, checkoutAttendance); // Uses employeeNumber in body
router.get('/attendance/today/:employeeNumber', flexibleAuth, getTodayAttendance); // Uses employeeNumber in URL
router.get('/attendance/calendar/:employeeNumber', flexibleAuth, getUserAttendanceCalendar); // Uses employeeNumber in URL

export default router;