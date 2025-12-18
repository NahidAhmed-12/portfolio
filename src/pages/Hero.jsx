import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { FaGithub, FaReact, FaArrowRight, FaLinkedinIn, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiNextdotjs } from 'react-icons/si';
import { FaBriefcase } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import '../index.css';

// --- DATA ---
const techSlides = [
  { icon: <SiNextdotjs />, name: "React & Next.js", label: "Expert In" },
  { icon: <SiJavascript />, name: "Modern JavaScript", label: "Core Skill" },
  { icon: <FaFigma />, name: "UI/UX Design", label: "Creative" },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};


const imageRevealVariants = {
  hidden: { opacity: 0, x: 30, filter: "blur(8px)" }, 
  visible: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 }
  },
};


const SlideshowCard = memo(() => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % techSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-5 left-5 right-5 z-20">
        <motion.div 
            className="bg-slate-900/95 md:bg-slate-900/85 md:backdrop-blur-md border border-orange-500/20 p-4 rounded-xl shadow-lg overflow-hidden transform-gpu"
        >
            <AnimatePresence mode="wait">
            <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-4"
            >
                <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white text-xl shadow-lg shrink-0">
                    {techSlides[currentSlide].icon}
                </div>
                <div>
                    <h4 className="text-white font-bold text-sm">{techSlides[currentSlide].name}</h4>
                    <p className="text-orange-400 text-[10px] uppercase font-bold tracking-wide">{techSlides[currentSlide].label}</p>
                </div>
            </motion.div>
            </AnimatePresence>
            
            <div className="flex gap-1 mt-3 justify-start">
                {techSlides.map((_, idx) => (
                    <div key={idx} className={`h-1 rounded-full transition-all duration-300 ${idx === currentSlide ? 'w-6 bg-orange-500' : 'w-1.5 bg-slate-600'}`}></div>
                ))}
            </div>
        </motion.div>
    </div>
  );
});

// --- MAIN HERO ---
const Hero = () => {
  const currentYear = new Date().getFullYear();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 25, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 25, damping: 30 });

  const cardRef = useRef(null);
  const rectRef = useRef(null);
  const isHovering = useRef(false);
  
  const [isMobile, setIsMobile] = useState(true);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
     
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      
   
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseEnter = useCallback((e) => {
    if (isMobile) return;
    isHovering.current = true;
    rectRef.current = e.currentTarget.getBoundingClientRect();
  }, [isMobile]);

  const handleMouseMove = useCallback((e) => {
    if (isMobile || !isHovering.current || !rectRef.current) return;
    const xPct = (e.clientX - rectRef.current.left) / rectRef.current.width - 0.5;
    const yPct = (e.clientY - rectRef.current.top) / rectRef.current.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }, [x, y, isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (isMobile) return;
    isHovering.current = false;
    x.set(0);
    y.set(0);
  }, [x, y, isMobile]);

  return (
    <div className="relative w-full text-white overflow-hidden font-sans selection:bg-orange-500/30 selection:text-orange-100">
      
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center lg:justify-between h-auto lg:min-h-screen px-6 pt-28 pb-10 lg:pt-20 lg:pb-0 relative z-10 gap-8 lg:gap-0">
        
      
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          
            className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-left z-20 relative transform-gpu"
        >
             <div className="space-y-4 relative z-10">
              
              {/* Badge */}
              <motion.div variants={textRevealVariants} className="flex justify-center md:justify-start">
                <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm shadow-[0_0_15px_rgba(249,115,22,0.1)] hover:border-orange-500/60 transition-colors duration-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    <p className="text-orange-400 font-bold tracking-widest text-xs uppercase">
                       EST. {currentYear} • Portfolio
                    </p>
                </div>
              </motion.div>
              
              {/* Heading */}
              <motion.h1 variants={textRevealVariants} className="font-sans font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.1] relative inline-block drop-shadow-sm">
                <svg className="absolute -top-8 -right-8 w-10 h-10 text-orange-500 animate-[spin_8s_linear_infinite] opacity-80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>

                {/* Gradient Title */}
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-slate-200 to-slate-400">
                    Hi, I'm 
                </span> 
                <br />
                
                <span className="relative inline-block z-10 mt-2">
                  <span className="Nahid text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-red-500 z-10 relative px-1 pb-1">
                    Nahid
                  </span>
                  <svg className="absolute -bottom-3 left-0 w-full h-4 text-orange-500/40 -z-10" viewBox="0 0 200 9" fill="none">
                      <path d="M2.00025 6.99999C45.5002 1.5 130 -2.5 198.5 3.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </motion.h1>
              
              <motion.div variants={textRevealVariants} className="text-slate-400 text-lg sm:text-2xl font-light min-h-[40px] flex items-center justify-center md:justify-start whitespace-nowrap">
                 <span>I am a&nbsp;</span>
                 <span className="font-semibold text-slate-100 text-left">
                    <TypeAnimation
                        sequence={[
                            'Frontend Developer', 2000,
                            'React Specialist', 2000,
                            'UI/UX Designer', 2000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className="text-orange-200"
                        cursor={true}
                    />
                 </span>
              </motion.div>

              {/* Gradient Paragraph */}
              <motion.p 
                variants={textRevealVariants} 
                className="bg-clip-text text-transparent bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 text-base sm:text-lg max-w-md mx-auto md:mx-0 leading-relaxed font-light"
              >
                Crafting pixel-perfect web experiences with a warm touch. I transform complex problems into simple, beautiful, and intuitive designs.
              </motion.p>
            </div>

            <motion.div variants={textRevealVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-5 relative z-10">
                <button 
                    onClick={scrollToProjects}
                    className="relative w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2"
                >
                    View My Work 
                    <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </button>
              
                <Link 
                  to="/services"
                  className="relative w-full sm:w-auto px-8 py-3.5 rounded-lg border border-slate-700 hover:border-orange-500/50 bg-slate-800/50 hover:bg-slate-800 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm group"
                >
                  Services
                  <FaBriefcase className="text-sm text-slate-400 group-hover:text-orange-400 transition-colors" />
                </Link>
            </motion.div>

            <motion.div variants={textRevealVariants} className="flex items-center justify-center md:justify-start gap-8 pt-4 relative z-10">
              <div className="flex gap-5 items-center">
                  {[FaGithub, FaLinkedinIn, SiFiverr].map((Icon, i) => (
                  <a 
                      key={i} 
                      href="#" 
                      className={`text-slate-400 hover:text-orange-400 transition-colors transform hover:scale-110 ${i === 2 ? 'text-4xl' : 'text-xl'}`}
                  >
                      <Icon />
                  </a>
                  ))}
              </div>
              <div className="w-px h-8 bg-slate-700"></div>
              <div>
                  <p className="text-2xl font-serif text-white">100%</p>
                  <p className="text-[10px] text-orange-500/80 uppercase tracking-wider mt-0 font-medium">Quality Work</p>
               </div>
            </motion.div>
        </motion.div>

       
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={imageRevealVariants}
          
            className="w-full md:w-1/2 flex justify-center md:justify-end relative perspective-1000 z-30 will-change-transform"
            onMouseEnter={!isMobile ? handleMouseEnter : undefined}
            onMouseMove={!isMobile ? handleMouseMove : undefined}
            onMouseLeave={!isMobile ? handleMouseLeave : undefined}
            ref={cardRef}
        >
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 pointer-events-none flex items-center justify-center">
                 <div className="absolute w-[350px] h-[350px] bg-orange-500/20 rounded-full blur-[60px] md:blur-[80px]"></div>
                 <div className={`absolute w-[400px] h-[400px] border border-orange-500/10 rounded-full ${isMobile ? '' : 'animate-[spin_15s_linear_infinite]'} border-dashed will-change-transform`}></div>
                 <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:20px_20px] opacity-20 mask-image-radial-gradient"></div>
             </div>

             <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-6 right-10 z-40 text-orange-400 bg-slate-900 p-3 rounded-xl border border-orange-500/30 shadow-xl will-change-transform"><FaReact className="text-3xl animate-spin-slow"/></motion.div>
             <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-16 -left-6 z-40 text-amber-400 bg-slate-900 p-3 rounded-xl border border-amber-500/30 shadow-xl will-change-transform"><SiRedux className="text-3xl"/></motion.div>

             <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={!isMobile ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
              
                className="relative w-[300px] h-[420px] sm:w-[350px] sm:h-[480px] rounded-[24px] border border-white/10 shadow-2xl p-2 bg-gradient-to-br from-white/5 to-transparent transform-gpu will-change-transform"
             >
                <div 
                    className="w-full h-full rounded-[20px] overflow-hidden relative group bg-[#0f172a]"
                    style={{ transform: !isMobile ? "translateZ(30px)" : "none" }}
                >
                   
                    <img 
                        src="/Hero/Nahid.jpg" 
                        alt="Nahid" 
                        loading="eager"
                        width={350}
                        height={480}
                        className="w-full h-full object-cover object-top 
                                   opacity-90 group-hover:opacity-100 
                                   grayscale-0
                                   brightness-[1.15] contrast-[1.1] saturate-[1.1] 
                                   md:brightness-100 md:contrast-100 md:saturate-100
                                   group-hover:brightness-105
                                   transition-all duration-500 will-change-transform" 
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90"></div>
                    <SlideshowCard />
                </div>
             </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
