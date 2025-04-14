import express from 'express';
import { getAIReply } from '../controllers/gemini.controller.js';

const router = express.Router();

// POST /api/gemini/reply
router.post('/reply', getAIReply);

export default router;
