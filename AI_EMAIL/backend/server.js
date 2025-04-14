// backend/index.js

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./src/config/db.js";
import cookieParser from "cookie-parser";

import authRoutes from "./src/routes/auth.routes.js";
import emailRoutes from "./src/routes/email.routes.js";
import geminiRoutes from "./src/routes/gemini.routes.js";
import replyRoutes from "./src/routes/reply.routes.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();



// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://ai-email-frontend-taupe.vercel.app",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/gemini", geminiRoutes);
app.use("/api/gmail", replyRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("🔥 AI Gmail Reply Backend is running!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
