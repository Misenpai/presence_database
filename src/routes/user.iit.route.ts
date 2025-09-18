import { Router } from 'express';
import { 
  loginUserIIT, 
  syncUserFromIIT, 
  testIITConnection 
} from '../controllers/user.iit.controller.js';

const router = Router();

// IIT-integrated authentication routes
router.post('/iit/login', loginUserIIT);
router.post('/iit/sync-user', syncUserFromIIT);
router.get('/iit/test-connection', testIITConnection);

export default router;