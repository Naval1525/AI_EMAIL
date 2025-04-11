// src/controllers/auth.controller.js
import { oauth2Client, SCOPES } from '../config/google.config.js';
import { google } from 'googleapis';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const googleLogin = (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
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
        version: 'v2'
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
            refresh_token: tokens.refresh_token
          }
        });
      } else {
        // Update existing user's tokens
        user.tokens = {
          access_token: tokens.access_token,
          refresh_token: tokens.refresh_token
        };
      }

      await user.save();

      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );

      console.log('✅ Redirecting with token:', token);
      res.redirect(`http://localhost:5173?token=${token}`);
    } catch (error) {
      console.error('OAuth callback error:', error.message);
      res.status(500).send('Internal Server Error');
    }
  };
// export const googleCallback = async (req, res) => {
//     try {
//       const { code } = req.query;

//       const { tokens } = await oauth2Client.getToken(code);
//       oauth2Client.setCredentials(tokens);

//       const oauth2 = google.oauth2({
//         auth: oauth2Client,
//         version: 'v2'
//       });

//       const { data } = await oauth2.userinfo.get();

//       let user = await User.findOne({ email: data.email });

//       if (!user) {
//         user = new User({
//           name: data.name,
//           email: data.email,
//           googleId: data.id,
//           profilePic: data.picture
//         });
//         await user.save();
//       }

//       const token = jwt.sign(
//         { userId: user._id, email: user.email },
//         process.env.JWT_SECRET,
//         { expiresIn: '1d' }
//       );

//       console.log('✅ Redirecting with token:', token);
//       res.redirect(`http://localhost:5173?token=${token}`);
//     } catch (error) {
//       console.error('OAuth callback error:', error.message);
//       res.status(500).send('Internal Server Error');
//     }
//   };

// export const googleCallback = async (req, res) => {
//     try {
//       const { code } = req.query;

//       const { tokens } = await oauth2Client.getToken(code);
//       oauth2Client.setCredentials(tokens);

//       const oauth2 = google.oauth2({
//         auth: oauth2Client,
//         version: 'v2'
//       });

//       const { data } = await oauth2.userinfo.get();

//       const existingUser = await User.findOne({ email: data.email });

//       if (existingUser) {
//         return res.status(200).json({ message: 'User already exists', user: existingUser });
//       }

//       const newUser = new User({
//         name: data.name,
//         email: data.email,
//         googleId: data.id, // 👈 This is the important part!
//         profilePic: data.picture
//       });

//       await newUser.save();
//       const user = existingUser || newUser;

//       const token = jwt.sign(
//         { userId: user._id, email: user.email },
//         process.env.JWT_SECRET,
//         { expiresIn: '1d' }
//       );

//       res.redirect(`http://localhost:5173?token=${token}`);



//       res.redirect(`http://localhost:5173?token=${token}`);
//     } catch (error) {
//       console.error('OAuth callback error:', error.message);
//       res.status(500).send('Internal Server Error');
//     }
// };











// export const googleCallback = async (req, res) => {
//   try {
//     const { code } = req.query;
//     const { tokens } = await oauth2Client.getToken(code);
//     oauth2Client.setCredentials(tokens);

//     // Use token to get user info
//     const oauth2 = google.oauth2({ version: 'v2', auth: oauth2Client });
//     const { data } = await oauth2.userinfo.get();

//     // Store in DB (create or update user)
//     let user = await User.findOne({ email: data.email });
//     if (!user) {
//       user = await User.create({
//         email: data.email,
//         name: data.name,
//         picture: data.picture,
//         tokens,
//       });
//     } else {
//       user.tokens = tokens;
//       await user.save();
//     }

//     res.json({ message: 'Login successful', user });
//   } catch (error) {
//     console.error('OAuth callback error:', error.message);
//     res.status(500).json({ error: 'Authentication failed' });
//   }
// };
