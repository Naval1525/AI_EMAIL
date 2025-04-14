import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  receiver: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    default: '',
  },
  body: {
    type: String,
    default: '',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  threadId: {
    type: String,
  },
  labelIds: [String],
  snippet: {
    type: String,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  user: {
    // Reference to the User who owns this email
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

const Email = mongoose.model('Email', emailSchema);

export default Email;
