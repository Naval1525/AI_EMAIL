import { generateReply } from '../services/gemini.service.js';

export const getAIReply = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Message content is required" });
    }

    const aiReply = await generateReply(message);
    res.status(200).json({ reply: aiReply });
  } catch (error) {
    console.error("Error generating AI reply:", error);
    res.status(500).json({ message: "Something went wrong with AI response." });
  }
};
