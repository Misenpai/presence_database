// src/routes/userLocation.route.ts
import { Router } from 'express';
import {
  saveFieldTrips,
  getFieldTrips,
  getUserFieldTrips,
  getUserFieldTripsByUsername, // Keep for username operations
  getUserFieldTripsByEmployeeNumber, // Add for employeeNumber operations
  checkAndDeactivateExpiredFieldTrips,
  processFieldTripAttendance,
  deleteFieldTrip,
  getAllActiveFieldTrips,
  updateFieldTrip
} from '../controllers/userLocation.controller.js';
import { flexibleAuth } from '../middleware/auth.js';

const router = Router();

// Field trip management routes (protected)
router.put('/field-trips', flexibleAuth, saveFieldTrips);
router.get('/field-trips/:employeeNumber', flexibleAuth, getFieldTrips);
router.get('/user-field-trips/:employeeNumber', flexibleAuth, getUserFieldTrips);

// Keep both username and employeeNumber endpoints for flexibility
router.get('/user-field-trips/username/:username', flexibleAuth, getUserFieldTripsByUsername);
router.get('/user-field-trips/employee/:employeeNumber', flexibleAuth, getUserFieldTripsByEmployeeNumber);

// Additional field trip management routes
router.delete('/field-trip/:fieldTripKey', flexibleAuth, deleteFieldTrip);
router.patch('/field-trip/:fieldTripKey', flexibleAuth, updateFieldTrip);
router.get('/field-trips', flexibleAuth, getAllActiveFieldTrips);

// Admin/system routes for field trip management
router.post('/field-trips/check-expired', flexibleAuth, checkAndDeactivateExpiredFieldTrips);
router.post('/field-trips/process-attendance', flexibleAuth, processFieldTripAttendance);

export default router;