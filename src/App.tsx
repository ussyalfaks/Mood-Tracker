import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Stats } from './pages/Stats';
import { Profile } from './pages/Profile';
import { Dashboard } from '../src/pages/Dashboard'
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { useAuth } from './contexts/AuthContext';
import "./index.css"

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const [delayComplete, setDelayComplete] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading || !delayComplete) {
    return (
      <div className="loader-wrapper flex justify-center items-center bg-orange-50">
        <span className="loader"></span>
      </div>
    );
  }
    
  if (!user) {
    return <Navigate to="/Dashboard" />;
  }

  return <Layout>{children}</Layout>;
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/"  element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="/stats" element={
              <PrivateRoute>
                <Stats />
              </PrivateRoute>
            }
          />
          <Route path="/profile" element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;