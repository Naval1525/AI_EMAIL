# 📧 AI Gmail Replying System

> Smart email replies powered by Gemini AI - respond to emails with one click!

## 🚀 Overview

The AI Gmail Replying System is a powerful MERN stack application that seamlessly integrates with Gmail to provide intelligent, context-aware email responses. By leveraging Gemini AI, users can respond to emails with just one click, significantly improving productivity and email management.

## ✨ Key Features

- 🔐 **Secure Google Authentication** - Log in safely with your Google account via OAuth2
- 📥 **Gmail Integration** - Access and manage your Gmail inbox directly
- 🤖 **AI-Powered Responses** - Generate smart, contextually appropriate replies using Gemini AI
- 💨 **One-Click Reply System** - Send AI-suggested responses instantly
- 🎨 **Clean, Intuitive UI** - User-friendly interface built with React
- 🔄 **Real-time Updates** - Stay in sync with your Gmail inbox

## 🛠️ Technology Stack

- **Frontend:** React, Redux, Material UI
- **Backend:** Node.js, Express
- **Database:** MongoDB (for optional session storage and logs)
- **APIs:**
  - Google Gmail API - For email access and management
  - Google Gemini API - For intelligent response generation
  - OAuth2 - For secure authentication

## 📋 Prerequisites

- Node.js v16.x or higher
- MongoDB instance (local or Atlas)
- Google Cloud Platform account with Gmail API enabled
- Gemini API access

## 🔧 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Naval1525/AI_EMAIL.git
```

2. **Install dependencies**

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

3. **Set up environment variables**

Create a `.env` file in the root directory and add:

```
# Server Configuration
PORT=8000
MONGODB_URI=your_mongodb_connection_string

# Google Auth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
REDIRECT_URI=http://localhost:5000/api/auth/callback

# Gemini AI
GEMINI_API_KEY=your_gemini_api_key
```

4. **Start the development server**

```bash
# Run backend and frontend concurrently
npm run dev

# Or separately
npm run server
npm run client
```

## 🔒 Security

- OAuth2 authentication flow ensures secure access to Gmail data
- No email content is stored in the database
- API keys are securely managed through environment variables
- Token-based session management

## 🖥️ Usage

1. **Login** with your Google account
2. Browse your **inbox** within the application
3. Click on an email to view its content
4. Select the **"Generate AI Reply"** button to see suggested responses
5. Choose your preferred response or edit it before sending
6. Click **"Send"** to reply to the email

## 📱 Screenshots

![Login Screen](https://placeholder-image-url.com/login-screen.png)
![Inbox View](https://placeholder-image-url.com/inbox-view.png)
![AI Reply Generation](https://placeholder-image-url.com/ai-reply.png)

## 🧠 How It Works

1. **Authentication**: Users authenticate with Google OAuth2, granting the app access to their Gmail account
2. **Email Fetching**: The app fetches emails from the user's inbox using the Gmail API
3. **Content Analysis**: When a user selects an email, Gemini AI analyzes the content
4. **Response Generation**: The AI generates contextually appropriate response options
5. **One-Click Reply**: Users can select a suggested response and send it with one click

## 🚧 Roadmap

- [ ] Add support for email attachments
- [ ] Implement AI-based email categorization
- [ ] Add customizable response templates
- [ ] Create mobile application versions
- [ ] Support for multiple language responses
- [ ] Add email scheduling features

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Google Gmail API](https://developers.google.com/gmail/api)
- [Google Gemini AI](https://ai.google.dev/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)

## 📞 Contact

For questions or support, please reach out to: navalbihani15@gmail.com

---

⭐ **Star this repo if you find it useful!** ⭐
