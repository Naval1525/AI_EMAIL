import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateReply = async (emailContent) => {
  const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-pro" });

  const prompt = `
You are an email assistant. Read the following email content and generate a professional and concise reply:

"${emailContent}"

Reply:
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
};
