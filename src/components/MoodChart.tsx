import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import type { MoodEntry } from '../types';

const moodValues = {
  amazing: 5,
  good: 4,
  okay: 3,
  bad: 2,
  terrible: 1,
};

interface MoodChartProps {
  entries: MoodEntry[];
}


export function MoodChart({ entries }: MoodChartProps) {
  const data = entries.map(entry => ({
    date: format(new Date(entry.timestamp), 'MMM d'),
    value: moodValues[entry.mood],
    mood: entry.mood,
  }));

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
          className='capitalize'
            domain={[1, 5]}
            ticks={[1, 2, 3, 4, 5]}
            tickFormatter={(value) => 
              Object.entries(moodValues).find(([, v]) => v === value)?.[0] || ''
            }
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="bg-white p-4 rounded-lg shadow-lg border">
                    <p className="text-sm text-gray-500">{data.date}</p>
                    <p className="font-medium capitalize">{data.mood}</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#629878"
            strokeWidth={2}
            dot={{ fill: '#629878', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}