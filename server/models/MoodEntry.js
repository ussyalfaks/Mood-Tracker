import mongoose from 'mongoose';

const moodEntrySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  mood: {
    type: String,
    enum: ['amazing', 'good', 'okay', 'bad', 'terrible'],
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

export default mongoose.model('MoodEntry', moodEntrySchema);