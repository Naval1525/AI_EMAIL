import { google } from 'googleapis';
import User from '../models/User.js'; // adjust path if needed
import base64url from 'base64url';

export const replyToEmail = async (userId, { to, subject, messageId, threadId, body }) => {
  const user = await User.findById(userId);

  if (!user?.tokens?.access_token) {
    throw new Error('No valid tokens found');
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  oauth2Client.setCredentials({
    access_token: user.tokens.access_token,
    refresh_token: user.tokens.refresh_token,
  });

  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

  const rawMessage = [
    `To: ${to}`,
    `Subject: Re: ${subject}`,
    `In-Reply-To: ${messageId}`,
    `References: ${messageId}`,
    'Content-Type: text/plain; charset="UTF-8"',
    '',
    body,
  ].join('\n');

  const encodedMessage = base64url.encode(rawMessage); // base64url encodes without padding

  const res = await gmail.users.messages.send({
    userId: 'me',
    requestBody: {
      raw: encodedMessage,
      threadId, // optional, but helps Gmail keep it threaded
    },
  });

  return res.data;
};
