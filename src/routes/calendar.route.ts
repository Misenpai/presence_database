import { Router } from 'express';
import { 
  getCalendarData,
  getHolidayList
} from '../controllers/calendar.controller.js';

const router = Router();

// Public calendar routes (for viewing)
router.get('/calendar', getCalendarData);
router.get('/calendar/holidays', getHolidayList);

export default router;