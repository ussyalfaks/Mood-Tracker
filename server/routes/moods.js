import express from 'express';
import { createMoodEntry, getMoodEntries } from '../controllers/moodController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.use(auth);

router.post('/', createMoodEntry);
router.get('/', getMoodEntries);

export default router;