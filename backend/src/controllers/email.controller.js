// import { google } from 'googleapis';
// import User from '../models/User.js'; // adjust path if needed

// export const getEmails = async (req, res) => {
//   try {
//     if (!req.user || !req.user.id) {
//         return res.status(401).json({ message: 'Unauthorized' });
//       }

//     const user = await User.findById(req.user.id); // assuming auth middleware sets req.user

//     if (!user || !user.tokens || !user.tokens.access_token) {
//       return res.status(401).json({ message: 'No valid tokens found' });
//     }

//     const oauth2Client = new google.auth.OAuth2(
//       process.env.GOOGLE_CLIENT_ID,
//       process.env.GOOGLE_CLIENT_SECRET,
//       process.env.GOOGLE_REDIRECT_URI
//     );

//     oauth2Client.setCredentials({
//       access_token: user.tokens.access_token,
//       refresh_token: user.tokens.refresh_token
//     });

//     const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

//     const response = await gmail.users.messages.list({
//       userId: 'me',
//       maxResults: 10
//     });

//     const messages = await Promise.all(
//       (response.data.messages || []).map(async (msg) => {
//         const fullMessage = await gmail.users.messages.get({
//           userId: 'me',
//           id: msg.id
//         });

//         const headers = fullMessage.data.payload.headers;
//         const subject = headers.find((h) => h.name === 'Subject')?.value;
//         const from = headers.find((h) => h.name === 'From')?.value;

//         return {
//           messageId: msg.id,
//           from,
//           subject,
//           snippet: fullMessage.data.snippet
//         };
//       })
//     );

//     res.json(messages);
//   } catch (err) {
//     console.error('Error fetching emails:', err);
//     res.status(500).json({ message: 'Failed to fetch emails' });
//   }
// };
import { google } from 'googleapis';
import User from '../models/User.js';

export const getEmails = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const user = await User.findById(req.user.id);

    if (!user || !user.tokens?.access_token) {
      return res.status(401).json({ message: 'No valid tokens found' });
    }

    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oauth2Client.setCredentials({
      access_token: user.tokens.access_token,
      refresh_token: user.tokens.refresh_token
    });

    const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

    const response = await gmail.users.messages.list({
      userId: 'me',
      maxResults: 10
    });

    const messages = await Promise.all(
      (response.data.messages || []).map(async (msg) => {
        const fullMessage = await gmail.users.messages.get({
          userId: 'me',
          id: msg.id,
          format: 'full'
        });

        const headers = fullMessage.data.payload.headers;
        const getHeader = (name) => headers.find(h => h.name.toLowerCase() === name.toLowerCase())?.value;

        return {
          messageId: msg.id,
          from: getHeader('From'),
          to: getHeader('To'),
          subject: getHeader('Subject'),
          date: getHeader('Date'),
          snippet: fullMessage.data.snippet,
          message:fullMessage.data,
        };
      })
    );

    res.json(messages);
  } catch (err) {
    console.error('Error fetching emails:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
