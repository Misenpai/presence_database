import { Router } from 'express';
import { 
    hrLogin, 
    getAllPIs, 
    requestDataFromPIs, 
    getSubmissionStatus, 
    downloadReport,
    getPIUsersWithAttendance,
    downloadPIReport  
} from '../controllers/hr.controller.js';
import { flexibleAuth } from '../middleware/auth.js';

const router = Router();

router.post('/hr/login', hrLogin);
router.get('/hr/pis', flexibleAuth, getAllPIs);
router.post('/hr/request-data', flexibleAuth, requestDataFromPIs);
router.get('/hr/submission-status', flexibleAuth, getSubmissionStatus);
router.get('/hr/download-report', flexibleAuth, downloadReport);

// Add the new routes here
router.get('/hr/pi/:username/attendance', flexibleAuth, getPIUsersWithAttendance);
router.get('/hr/pi/:username/download', flexibleAuth, downloadPIReport);

export default router;
