// src/controllers/auth.controller.js
import { oauth2Client, SCOPES } from "../config/google.config.js";
import { google } from "googleapis";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const googleLogin = (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: SCOPES,
  });
  res.redirect(authUrl);
};
export const googleCallback = async (req, res) => {
  try {
    const { code } = req.query;

    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const oauth2 = google.oauth2({
      auth: oauth2Client,
      version: "v2",
    });

    const { data } = await oauth2.userinfo.get();

    let user = await User.findOne({ email: data.email });

    if (!user) {
      user = new User({
        name: data.name,
        email: data.email,
        googleId: data.id,
        profilePic: data.picture,
        tokens: {
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token,
        },
      });
    } else {
      // Update existing user's tokens
      user.tokens = {
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
      };
    }

    await user.save();

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    console.log("✅ Redirecting with token:", token);
    res.redirect(`https://ai-email-frontend-taupe.vercel.app?token=${token}`);
  } catch (error) {
    console.error("OAuth callback error:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

export const getUserProfile = async (req, res) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return user data (excluding sensitive information)
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar || null,
    });
  } catch (error) {
    console.error("Profile error:", error);

    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }

    res.status(500).json({ message: "Server error", error: error.message });
  }
};
