import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart, PlusCircle, User } from 'lucide-react';
import Logo from '../../public/Logo.png'

export function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#629878]  shadow-sm">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex  items-center px-2 py-2 text-gray-900">
                <img src={Logo} className='w-12 h-12' alt="" />
                <span className="text-xl font-semibold text-[#fff5DC]">MoodMate</span>
              </Link>
            </div>
            <div className="flex space-x-4 2">
              <NavLink to="/" icon={<PlusCircle />}  label="Log Mood" />
              <NavLink to="/stats" icon={<BarChart />} label="Statistics" />
              <NavLink to="/profile" icon={<User />} label="Profile" />
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}

function NavLink({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center py-1 px-2 my-2 rounded-full text-sm font-medium ${
        isActive
          ? 'text-[#629878] bg-[#fff5DC]'
          : 'text-[#fff5DC] hover:text-white'
      }`}
    >
      {React.cloneElement(icon as React.ReactElement, {
        className: 'w-5 h-5 mr-1.5',
      })}
      {label}
    </Link>
  );
}