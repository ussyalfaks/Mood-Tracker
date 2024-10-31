import MoodEntry from '../models/MoodEntry.js';

export const createMoodEntry = async (req, res) => {
  try {
    const moodEntry = new MoodEntry({
      ...req.body,
      userId: req.user._id
    });
    await moodEntry.save();
    res.status(201).json(moodEntry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getMoodEntries = async (req, res) => {
  try {
    const entries = await MoodEntry.find({ userId: req.user._id })
      .sort({ timestamp: -1 })
      .limit(30);
    res.json(entries);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};