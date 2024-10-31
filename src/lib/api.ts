const API_URL = 'http://localhost:5000/api';

export async function register(data: { name: string; email: string; password: string }) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error);
  }
  
  return res.json();
}

export async function login(data: { email: string; password: string }) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error);
  }
  
  return res.json();
}

export async function logout() {
  await fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });
}

export async function getProfile() {
  const res = await fetch(`${API_URL}/auth/profile`, {
    credentials: 'include',
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch profile');
  }
  
  return res.json();
}

export async function createMoodEntry(data: { mood: string; description?: string }) {
  const res = await fetch(`${API_URL}/moods`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data),
  });
  
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error);
  }
  
  return res.json();
}

export async function getMoodEntries() {
  const res = await fetch(`${API_URL}/moods`, {
    credentials: 'include',
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch mood entries');
  }
  
  return res.json();
}