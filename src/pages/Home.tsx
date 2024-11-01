import React, { useState } from 'react';
import { MoodSelector } from '../components/MoodSelector';
import type { Mood } from '../types';
import * as api from '../lib/api';
import { useAuth } from '../contexts/AuthContext';


export function Home() {
  const [mood, setMood] = useState<Mood | null>(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood) return;

    setLoading(true);
    setError('');

    try {
      await api.createMoodEntry({ mood, description });
      setMood(null);
      setDescription('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to log mood');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <p className='m-5 font-semibold md:text-xl text-lg capitalize font-serif text-[#629878]'>Welcome Back {user?.name}</p>
      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          How are you feeling today?
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <MoodSelector selected={mood} onSelect={setMood} />
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Want to add some thoughts? (Optional)
            </label>
            <textarea
              id="description"
              rows={4}
              className="block w-full rounded-md border-[#229378] shadow-sm focus:border-[#229378] focus:ring-[#229378]"
              placeholder="Write your thoughts here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={!mood || loading}
            className="w-full py-3 px-4 rounded-md bg-[#629878] text-[#fff5DC] font-medium hover:bg-[#229378] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#629878] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging...' : 'Log Your Mood'}
          </button>
        </form>
      </div>
    </div>
  );
}