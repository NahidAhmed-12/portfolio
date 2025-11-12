import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navber() {
  // মোবাইল মেনু খোলা বা বন্ধ করার জন্য স্টেট
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // নেভিগেশন আইটেমগুলোর জন্য একটি অ্যারে
  const navItems = [
    { id: 'home', text: 'Home', path: '/', icon: <i className="fa-solid fa-house"></i> },
    { id: 'about', text: 'About', path: '/about', icon: <i className="fa-solid fa-user"></i> },
    { id: 'contact', text: 'Contact', path: '/contact', icon: <i className="fa-solid fa-phone-volume"></i> },
    { id: 'message', text: 'Message', path: '/dashboard', icon: <i className="fa-brands fa-facebook-messenger"></i> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-opacity-80 backdrop-blur-md shadow-lg border-b border-gray-700/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo and Portfolio Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <img className='h-12 w-12 rounded-full object-cover' src="/logo2.jpg" alt="Logo" />
              <span className='text-white text-xl md:text-2xl font-bold tracking-wider'>MyPortfolio</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) => 
                    `relative text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-md font-medium transition-all duration-300 group
                    ${isActive ? 'text-cyan-400' : ''}`
                  }
                >
                  {item.text}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-400 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                // Hamburger Icon
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                // Close Icon
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Sliding Animation) */}
      <div
        className={`md:hidden transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 h-full w-full bg-gray-900 bg-opacity-95 transition-transform duration-300 ease-in-out`}
        id="mobile-menu"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-4 text-gray-300 hover:bg-gray-700 hover:text-white px-6 py-3 rounded-lg text-2xl font-bold transition-colors duration-300
                ${isActive ? 'text-cyan-400 bg-gray-800' : ''}`
              }
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {item.icon}
              <span>{item.text}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navber;
