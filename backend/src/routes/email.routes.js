import express from 'express';

import { protect } from '../middleware/auth.middleware.js';
import { getEmails } from '../controllers/email.controller.js';


const router = express.Router();

router.get('/inbox', protect, getEmails);

export default router;
