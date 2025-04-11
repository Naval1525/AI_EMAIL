import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token; // You’re using cookies, so get token from cookies

    if (!token) {
      return res.status(401).json({ message: 'Not authorized, no token' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return res.status(401).json({ message: 'Not authorized, user not found' });
    }

    req.user = user; // ✅ THIS is what your controller depends on
    next();
  } catch (err) {
    console.error('Auth error:', err);
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};
