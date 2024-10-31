import React from 'react';
import { Smile, Meh, Frown, Heart, AlertCircle } from 'lucide-react';
import type { Mood } from '../types';
import { clsx } from 'clsx';

interface MoodSelectorProps {
  selected: Mood | null;
  onSelect: (mood: Mood) => void;
}

const moods: { value: Mood; icon: React.ReactNode; label: string; color: string }[] = [
  { value: 'amazing', icon: <Heart className="w-8 h-8" />, label: 'Amazing', color: 'text-pink-500 hover:text-pink-600' },
  { value: 'good', icon: <Smile className="w-8 h-8" />, label: 'Good', color: 'text-green-500 hover:text-green-600' },
  { value: 'okay', icon: <Meh className="w-8 h-8" />, label: 'Okay', color: 'text-yellow-500 hover:text-yellow-600' },
  { value: 'bad', icon: <Frown className="w-8 h-8" />, label: 'Bad', color: 'text-orange-500 hover:text-orange-600' },
  { value: 'terrible', icon: <AlertCircle className="w-8 h-8" />, label: 'Terrible', color: 'text-red-500 hover:text-red-600' },
];

export function MoodSelector({ selected, onSelect }: MoodSelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {moods.map(({ value, icon, label, color }) => (
        <button
          key={value}
          onClick={() => onSelect(value)}
          className={clsx(
            'flex flex-col items-center p-4 rounded-xl transition-all transform',
            'hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#229378]',
            selected === value ? 'bg-gray-100 scale-110' : 'hover:bg-gray-50',
            color
          )}
        >
          {icon}
          <span className="mt-2 text-sm font-medium text-gray-700">{label}</span>
        </button>
      ))}
    </div>
  );
}