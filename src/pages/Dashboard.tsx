import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../../public/Logo.png'
import Emotional from '../../public/emotional.png'

export function Dashboard ()  {



  return (
    <div className='bg-[#fff5DC]'>
   <div className='flex justify-between items-center bg-[#629878]'>
   <Link to="/" className="flex  items-center px-2 py-2 text-gray-900">
      <img src={Logo} className='w-12 h-12' alt="" />
      <span className="text-xl font-semibold text-[#fff5DC]">MoodMate</span>
    </Link> 
    
    <div className="flex space-x-4 2">
        <NavLink to="/" label="Article" />
        <NavLink to="/" label="About" /> 
        <NavLink to="/" label="Licenses" />
    </div>

    <div>
      <Link to="/register">
        <button className='bg-[#fff5DC] text-[#629878] mx-5 py-2 px-5 rounded-3xl font-semibold'>Register</button>
      </Link>
    </div>

   </div>
   <div className="bg-orange-50 md:min-h-[80vh] min-h-[70vh] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 pb-4 pt-10 md:py-12">
          <div className="flex-1 space-y-6">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-wide text-center md:text-left text-gray-900">
              Track and Improve
              <span className="block mt-2">Your Emotional</span>
              <span className="block mt-2">Well-being</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-xl text-center md:text-left">
              Start your journey to better mental health today with our comprehensive tracking tools.
            </p>
            
            <div className="flex flex-row gap-4 justify-center md:justify-start">
              <Link to="/register">
              <button className="bg-[#629878] text-white px-8 py-3 rounded-3xl font-medium transition-colors duration-200">
                Get Started
              </button>
              </Link>
              <button className="border-2 border-[#629878] text-[#629878] px-8 py-3 rounded-3xl font-medium hover:bg-orange-50 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex-1 ">
            <div className=" w-full aspect-square max-w-lg mx-auto">
              <img
                src={Emotional}
                alt="Emotional img"
                className="rounded-2xl "
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  )
}


function NavLink({ to,  label }: { to: string;  label: string }) {
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
     
      {label}
    </Link>
  );
}