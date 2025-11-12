

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.split('/')[1];
    if (currentPath === '') {
      setActiveLink('Home');
    } else {
      setActiveLink(currentPath.charAt(0).toUpperCase() + currentPath.slice(1));
    }
  }, [location]);

  const navLinks = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/About' },
    { name: 'Contact', link: '/Contact' },
    { name: 'Message', link: '/Dashboard' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-30 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Portfolio Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="/logo2.jpg"
                alt="Logo"
              />
              <span className="text-white text-2xl font-bold">MyPortfolio</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.link}
                  onClick={() => setActiveLink(item.name)}
                  className={`relative text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    activeLink === item.name ? 'text-white' : ''
                  }`}
                >
                  {item.name}
                  {activeLink === item.name && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-amber-500 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                onClick={() => {
                  setActiveLink(item.name);
                  setIsOpen(false);
                }}
                className={`block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                  activeLink === item.name ? 'bg-gray-900 text-white' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navber;
