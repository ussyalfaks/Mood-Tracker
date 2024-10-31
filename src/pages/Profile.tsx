import React, { useState } from 'react';
import { User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export function Profile() {
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogout = async () => {
    try {
      setLoading(true);
      await logout();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to logout');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
        <div className="text-center mb-8">
          <div className="inline-block p-2 rounded-full border-2 border-[#629878] bg-gray-100 mb-4">
            <User className="w-16 h-16 text-gray-600 " />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Your Profile</h1>
        </div>

        {error && (
          <div className="rounded-xl bg-red-50 p-4 mb-6">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <p className="mt-1 p-2 block w-full rounded-xl border border-gray-300 bg-gray-50">
              {user?.name}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <p className="mt-1 p-2 block w-full rounded-xl border border-gray-300 bg-gray-50">
              {user?.email}
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={handleLogout}
              disabled={loading}
              className="w-full py-3 px-4 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
            >
              {loading ? 'Logging out...' : 'Logout'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}