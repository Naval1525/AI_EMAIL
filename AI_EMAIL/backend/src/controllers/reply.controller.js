import { replyToEmail } from '../services/reply.service.js';

export const sendReply = async (req, res) => {
  try {
    const { to, subject, messageId, threadId, body } = req.body;

    if (!to || !subject || !messageId || !body) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const result = await replyToEmail(req.user.id, {
      to,
      subject,
      messageId,
      threadId,
      body
    });

    res.status(200).json({ message: 'Reply sent successfully', result });
  } catch (error) {
    console.error('Error sending reply:', error);
    res.status(500).json({ message: 'Failed to send reply', error: error.message });
  }
};
