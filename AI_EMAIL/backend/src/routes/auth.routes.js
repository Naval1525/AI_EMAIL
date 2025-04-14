// src/routes/auth.routes.js
import { Router } from 'express';
import { googleLogin, googleCallback, getUserProfile } from '../controllers/auth.controller.js';

const router = Router();

router.get('/google', googleLogin);
router.get('/google/callback', googleCallback);
router.get('/profile', getUserProfile);

export default router;