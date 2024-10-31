export type Mood = 'amazing' | 'good' | 'okay' | 'bad' | 'terrible';

export interface MoodEntry {
  id: string;
  mood: Mood;
  description: string;
  timestamp: string;
  userId: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}