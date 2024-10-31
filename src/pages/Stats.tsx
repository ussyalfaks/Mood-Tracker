import React, { useEffect, useState } from 'react';
import { MoodChart } from '../components/MoodChart';
import type { MoodEntry } from '../types';
import * as api from '../lib/api';

export function Stats() {
  const [entries, setEntries] = useState<MoodEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const data = await api.getMoodEntries();
        setEntries(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch mood entries');
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-28 w-28 border-4 border-[#629878] border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-md bg-red-50 p-4">
        <p className="text-sm text-red-700">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Mood History</h1>
        
        {entries.length === 0 ? (
          <p className="text-center text-gray-500">No mood entries yet. Start tracking your mood!</p>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Mood Trends</h2>
              <MoodChart entries={entries} />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Entries</h2>
              <div className="space-y-4">
                {entries.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50"
                  >
                    <div>
                      <p className="font-medium capitalize text-gray-900">{entry.mood}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(entry.timestamp).toLocaleDateString()}
                      </p>
                      {entry.description && (
                        <p className="mt-2 text-gray-700">{entry.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}