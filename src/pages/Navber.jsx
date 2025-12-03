import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Handling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation Variants
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" // Deep Dark Scrolled
          : "bg-transparent py-4" // Transparent Top
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 z-50">
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Logo Glow Effect */}
                <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-40 rounded-full group-hover:opacity-60 transition-opacity duration-300"></div>
                <img
                  className="h-10 w-10 relative z-10 object-cover"
                  src="/Images/Exclude.svg"
                  alt="Logo"
                />
              </motion.div>
              <span className="text-2xl font-bold text-white font-poppins tracking-wider group-hover:text-cyan-400 transition-colors duration-300">
                Creative<span className="text-cyan-400">Hub</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  className="relative px-4 py-2 text-sm font-medium group"
                >
                  {({ isActive }) => (
                    <>
                      {/* Hover & Active Background Glow */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-bg"
                          className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/20 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      
                      {/* Text Styling */}
                      <span
                        className={`relative z-10 transition-colors duration-300 ${
                          isActive ? "text-cyan-400" : "text-gray-400 group-hover:text-white"
                        }`}
                      >
                        {link.title}
                      </span>

                      {/* Bottom Animated Line */}
                      {!isActive && (
                        <span className="absolute bottom-1 left-1/2 w-0 h-[2px] bg-gray-600 group-hover:w-1/2 group-hover:bg-cyan-400 transition-all duration-300 ease-out -translate-x-1/2"></span>
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all focus:outline-none"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <FiX size={26} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                  >
                    <FiMenu size={26} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 absolute w-full top-16 left-0 shadow-2xl"
          >
            <div className="px-4 pt-4 pb-8 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 border border-transparent ${
                        isActive
                          ? "bg-cyan-900/20 text-cyan-400 border-cyan-500/30 shadow-[0_0_10px_rgba(34,211,238,0.1)]"
                          : "text-gray-400 hover:bg-white/5 hover:text-white border-white/5"
                      }`
                    }
                  >
                    {link.title}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;