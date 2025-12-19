import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  FiMenu, FiX, FiHome, FiLayers, FiUser, FiBriefcase, FiGrid, FiArrowUpRight 
} from "react-icons/fi";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import "../index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const navLinks = [
    { title: "Home", path: "/", icon: <FiHome /> },
    { title: "Projects", path: "/#projects", icon: <FiLayers /> }, 
    { title: "About", path: "/about", icon: <FiUser /> },
    { title: "Services", path: "/services", icon: <FiGrid /> }, 
  ];

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.replace("#", "");
      const element = document.getElementById(elementId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 500); 
      }
    }
  }, [location]);

  const handleNavClick = (e, path) => {
    setIsOpen(false); 
    if (path.includes("#")) {
      if (location.pathname === "/") {
        e.preventDefault(); 
        const elementId = path.split("#")[1];
        const element = document.getElementById(elementId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 300);
        }
      }
    } else {
      window.scrollTo(0, 0);
    }
  };

  const fiverrLink = "https://www.fiverr.com/nahidahmad10"; 

  // Custom Font Style Object
  const fontStyle = { fontFamily: "'Outfit', sans-serif" };

  return (
    <motion.nav
      style={fontStyle} 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
        scrolled
          ? "py-3 bg-[#030712]/80 backdrop-blur-xl border-white/5 shadow-2xl"
          : "py-6 bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* --- LOGO --- */}
          <Link 
            to="/" 
            className="group flex items-center gap-2"
            onClick={() => window.scrollTo(0, 0)}
          >
           
            <div className="headerlogo w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500 ease-out shadow-lg shadow-orange-500/20">
                <span className="text-white font-bold text-xl -rotate-45 group-hover:rotate-0 transition-transform duration-500">N</span>
            </div>
            
            <div className="flex flex-col">
                <span className=" headername text-2xl font-extrabold text-white tracking-tight leading-none group-hover:text-orange-500 transition-colors duration-300">
                  NAHID
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-[0.2em] uppercase">
                   Portfolio
                </span>
            </div>
          </Link>

         <div className="hidden md:flex items-center bg-white/5 border border-white/5 px-2 py-1.5 rounded-xl backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = link.path.includes("#")
                ? location.hash === "#" + link.path.split("#")[1]
                : location.pathname === link.path && location.hash === "";

              return (
                <Link
                  key={link.title}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)} 
                  className="relative px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  {isActive && (
                    <motion.div
                      layoutId="desktopNav"
                     
                      className="absolute inset-0 bg-white/10 rounded-lg border border-white/5"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                
                  <span className={`relative z-10 flex items-center gap-2 ${isActive ? "text-orange-400 font-semibold" : "text-slate-400 hover:text-white"}`}>
                    {link.title}
                  </span>
                  
                 
                  {isActive && (
                     <motion.div 
                        layoutId="activeLine"
                        className="absolute bottom-1 left-3 right-3 h-[2px] bg-orange-500 rounded-full" 
                     />
                  )}
                </Link>
              );
            })}
          </div>

      
       
          <div className="flex items-center gap-4">
            
            
            <motion.a
              href={fiverrLink} 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-lg border border-slate-700 bg-slate-900/50 hover:bg-orange-600 hover:border-orange-500 text-white font-semibold text-sm tracking-wide transition-all duration-300 shadow-lg group"
            >
              <span>Hire Me</span>
              <FiBriefcase className="text-orange-500 group-hover:text-white transition-colors" />
            </motion.a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-3 rounded-lg bg-slate-800 text-white border border-slate-700 hover:border-orange-500 hover:text-orange-500 transition-colors"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, idx) => {
                 const isActive = link.path.includes("#")
                    ? location.hash === "#" + link.path.split("#")[1]
                    : location.pathname === link.path && location.hash === "";
                    
                 return (
                  <motion.div
                    key={link.title}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={(e) => handleNavClick(e, link.path)} 
                      className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-300 ${
                        isActive
                          ? "bg-white/5 border-orange-500/30 text-orange-400"
                          : "border-transparent text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                          <span className={isActive ? "text-orange-500" : ""}>{link.icon}</span>
                          <span className="font-medium">{link.title}</span>
                      </div>
                      {isActive && <FiArrowUpRight />}
                    </Link>
                  </motion.div>
                );
              })}
              
              <div className="pt-4 mt-4 border-t border-white/10">
                 <a 
                    href={fiverrLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center w-full py-3 rounded-lg bg-orange-600 text-white font-bold hover:bg-orange-700 transition-colors"
                 >
                    Hire Me
                 </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;