import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navber() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // নেভিগেশন আইটেমগুলোর জন্য একটি অ্যারে
  const navItems = [
    { id: 'home', text: 'Home', path: '/', icon: <i className="fa-solid fa-house"></i> },
    { id: 'about', text: 'About', path: '/about', icon: <i className="fa-solid fa-user"></i> },
    { id: 'contact', text: 'Contact', path: '/contact', icon: <i className="fa-solid fa-phone-volume"></i> },
    { id: 'message', text: 'Message', path: '/dashboard', icon: <i className="fa-brands fa-facebook-messenger"></i> },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // মেনু খোলা থাকলে পেছনের কন্টেন্টের স্ক্রলিং বন্ধ করার জন্য
  useEffect(() => {
    // শুধুমাত্র মোবাইল মেনু খোলা থাকলেই body স্ক্রল লক করবে
    if (window.innerWidth < 768 && isMenuOpen) { 
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* মূল নেভিগেশন বার - ফিক্সড পজিশনিং এবং উচ্চ Z-Index */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md shadow-xl border-b border-gray-700/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* লোগো এবং নাম */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center gap-3">
                <img className='h-12 w-12 rounded-full object-cover' src="/logo2.jpg" alt="Logo" />
                <span className='text-white text-2xl font-bold tracking-wider'>MyPortfolio</span>
              </Link>
            </div>

            {/* ডেস্কটপ নেভিগেশন */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                {navItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.path}
                    className={({ isActive }) =>
                      `relative text-gray-300 hover:text-cyan-400 py-2 text-lg font-medium transition-colors duration-300 group
                      ${isActive ? 'text-cyan-400' : ''}`
                    }
                  >
                    {item.text}
                    {/* অ্যানিমেটেড আন্ডারলাইন */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform transition-transform duration-300 ease-out
                      ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}
                    ></span>
                  </NavLink>
                ))}
              </div>
            </div>

            {/* মোবাইল ডিভাইসের জন্য হ্যামবার্গার মেনু বাটন */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                {/* অ্যানিমেটেড হ্যামবার্গার/ক্লোজ আইকন */}
                <div className="w-6 h-6 flex flex-col justify-around">
                  <span className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[0.5rem]' : ''}`}></span>
                  <span className={`block w-full h-0.5 bg-current transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[0.5rem]' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* মোবাইল মেনু ওভারলে */}
      <div
        className={`fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-sm transition-opacity duration-300 ease-in-out md:hidden
        ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={handleLinkClick} // ওভারলেতে ক্লিক করলে মেনু বন্ধ হবে
      >
        <div className="flex flex-col items-center justify-center h-full gap-y-4 pt-20" onClick={(e) => e.stopPropagation()}> 
          {/* pt-20 added to avoid overlapping with the fixed Navber */}
          {navItems.map((item, index) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => 
                `flex items-center gap-4 w-4/5 max-w-sm justify-center py-4 px-6 rounded-xl text-3xl font-extrabold transition-all duration-300 transform border-2 
                hover:scale-105 hover:bg-cyan-500/10
                ${isActive ? 'text-cyan-400 border-cyan-400' : 'text-gray-200 border-gray-700/50'}
                ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`
              }
              style={{ transitionDelay: `${150 + index * 100}ms` }}
              onClick={handleLinkClick}
            >
              <div className="w-8 text-center">{item.icon}</div>
              <span>{item.text}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* একটি উচ্চতা যোগ করুন যাতে আপনার অন্যান্য কন্টেন্ট নেভিগেশন বারের নিচে শুরু হয় */}
      <div className="h-20 md:h-20"></div> 
    </>
  );
}

export default Navber;
