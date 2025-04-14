// src/models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: String,
    googleId: { type: String, required: true },
    avatar: String,
    tokens: {
      access_token: String,
      refresh_token: String
    },
    createdAt: { type: Date, default: Date.now }
  });


const User = mongoose.model('User', userSchema);

export default User;
