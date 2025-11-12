import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Navber() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // স্ক্রল করলে নেভিগেশন বারের স্টাইল পরিবর্তন করার জন্য
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // কম্পোনেন্ট আনমাউন্ট হলে ইভেন্ট লিসেনার রিমুভ করা হবে
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
    { title: 'Message', path: '/dashboard' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-xl py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Portfolio Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                className="h-12 w-12 rounded-full object-cover border-2 border-cyan-400/50 group-hover:border-purple-500 transition-all duration-300"
                src="/logo2.jpg"
                alt="Logo"
              />
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 transition-colors duration-300">
                MyPortfolio
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-gray-300 font-medium tracking-wide transition-colors duration-300 group ${
                      isActive ? 'text-cyan-400' : 'hover:text-cyan-300'
                    }`
                  }
                >
                  {link.title}
                  <span className="absolute bottom-[-6px] left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                  {/* Active Link Indicator */}
                   <span className={`absolute bottom-[-6px] left-0 w-full h-0.5 bg-purple-500 transition-transform duration-300 ease-out ${ ({isActive}) => isActive ? 'scale-x-100' : 'scale-x-0' }`}></span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Animated Hamburger Menu Icon for Mobile */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="z-50 flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <span className={`block w-full h-0.5 bg-white rounded-full transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-white rounded-full transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-full h-0.5 bg-white rounded-full transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide-in from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-900/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-20 pb-4 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.path}
              onClick={closeMenu} // লিঙ্কে ক্লিক করলে মেনু বন্ধ হয়ে যাবে
              className={({ isActive }) =>
                `block text-lg font-semibold px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300'
                    : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navber;
