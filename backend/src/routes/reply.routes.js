import express from 'express';
import { sendReply } from '../controllers/reply.controller.js';
import { protect } from '../middleware/auth.middleware.js';


const router = express.Router();

router.post('/reply', protect, sendReply);

export default router;
