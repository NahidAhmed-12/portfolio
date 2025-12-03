import React, { useState, useEffect, useRef, memo, useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { FaGithub, FaReact, FaDownload, FaArrowRight, FaLinkedinIn, FaFacebookF, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiNextdotjs } from 'react-icons/si';

// --- DATA ---
const techSlides = [
  { icon: <SiNextdotjs />, name: "React & Next.js", label: "Expert In" },
  { icon: <SiJavascript />, name: "Modern JavaScript", label: "Core Skill" },
  { icon: <FaFigma />, name: "UI/UX Design", label: "Creative" },
];

// --- 1. GLOBAL BACKGROUND ---
const GlobalBackground = memo(() => (
  <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-[#020617]"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vh] rounded-full bg-orange-600/10 blur-[100px] transform-gpu"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vh] rounded-full bg-red-900/10 blur-[100px] transform-gpu"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
  </div>
));

// --- 2. CARD SLIDESHOW ---
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
            className="bg-slate-900/85 backdrop-blur-md border border-orange-500/20 p-4 rounded-xl shadow-lg overflow-hidden transform-gpu"
        >
            <AnimatePresence mode="wait">
            <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
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
  const mouseX = useSpring(x, { stiffness: 30, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 30, damping: 30 });

  const cardRef = useRef(null);
  const rectRef = useRef(null);
  const isHovering = useRef(false);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseEnter = useCallback((e) => {
    isHovering.current = true;
    rectRef.current = e.currentTarget.getBoundingClientRect();
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isHovering.current || !rectRef.current) return;
    const xPct = (e.clientX - rectRef.current.left) / rectRef.current.width - 0.5;
    const yPct = (e.clientY - rectRef.current.top) / rectRef.current.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    isHovering.current = false;
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <div className="relative w-full min-h-screen bg-[#020617] text-white overflow-hidden font-sans selection:bg-orange-500/30 selection:text-orange-100">
      
      <GlobalBackground />

      {/* FIX 1: Padding 조정 
          - pt-32 (Mobile): Navbar থেকে নামানো হয়েছে কিন্তু খুব বেশি নয়।
          - lg:pt-28 (Desktop): আগেরবারের (pt-36) চেয়ে কমিয়ে উপরে তোলা হয়েছে, কিন্তু অরিজিনাল (pt-20) এর চেয়ে বাড়িয়ে গ্যাপ ঠিক রাখা হয়েছে। 
      */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between h-full min-h-screen px-6 pt-32 pb-10 lg:pt-28 relative z-10 gap-12 lg:gap-0">
        
        {/* --- LEFT SIDE: CONTENT --- */}
        <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left z-20 relative"
        >
             {/* Spacing কমিয়ে 'space-y-4' রাখা হয়েছে */}
             <div className="space-y-4 relative z-10">
              
              {/* Badge */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/5 backdrop-blur-sm shadow-[0_0_15px_rgba(249,115,22,0.1)] hover:border-orange-500/60 transition-colors duration-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    <p className="text-orange-400 font-bold tracking-widest text-xs uppercase">
                       EST. {currentYear} • Portfolio
                    </p>
                </div>
              </div>
              
              {/* Heading */}
              <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.1] relative inline-block drop-shadow-sm">
                <svg className="absolute -top-8 -right-8 w-10 h-10 text-orange-500 animate-[spin_8s_linear_infinite] opacity-80" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>

                Hi, I'm <br />
                <span className="relative inline-block z-10 mt-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-red-500 z-10 relative px-1 pb-1">
                    Nahid
                  </span>
                  <svg className="absolute -bottom-3 left-0 w-full h-4 text-orange-500/40 -z-10" viewBox="0 0 200 9" fill="none">
                      <path d="M2.00025 6.99999C45.5002 1.5 130 -2.5 198.5 3.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              
              {/* FIX 2: Typing Animation (whitespace-nowrap added to keep in one line) */}
              <div className="text-slate-400 text-lg sm:text-2xl font-light min-h-[40px] flex items-center justify-center lg:justify-start whitespace-nowrap">
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
              </div>

              {/* Description */}
              <p className="text-slate-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed font-light">
                Crafting pixel-perfect web experiences with a warm touch. I transform complex problems into simple, beautiful, and intuitive designs.
              </p>
            </div>

            {/* FIX 3: Buttons Spacing Reduced (pt-6 -> pt-5) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-5 relative z-10">
                <button className="relative w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg flex items-center justify-center gap-2">
                    View My Work 
                    <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </button>
                <button className="relative w-full sm:w-auto px-8 py-3.5 rounded-lg border border-slate-700 hover:border-orange-500/50 bg-slate-800/50 hover:bg-slate-800 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm group">
                    Contact Me 
                    <FaDownload className="text-sm text-slate-400 group-hover:text-orange-400 transition-colors" />
                </button>
            </div>

            {/* FIX 3: Social Spacing Reduced (pt-5 -> pt-4) to move it UP */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4 relative z-10">
               <div className="flex gap-5">
                  {[FaGithub, FaLinkedinIn, FaFacebookF].map((Icon, i) => (
                    <a key={i} href="#" className="text-slate-400 hover:text-orange-400 transition-colors text-xl transform hover:scale-110">
                        <Icon />
                    </a>
                  ))}
               </div>
               <div className="w-px h-8 bg-slate-700"></div>
               <div>
                  <p className="text-2xl font-serif text-white">20+</p>
                  <p className="text-[10px] text-orange-500/80 uppercase tracking-wider mt-0 font-medium">Projects Done</p>
               </div>
            </div>
        </motion.div>


        {/* --- RIGHT SIDE --- */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative perspective-1000 z-30"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={cardRef}
        >
             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 pointer-events-none flex items-center justify-center">
                 <div className="absolute w-[350px] h-[350px] bg-orange-500/20 rounded-full blur-[80px]"></div>
                 <div className="absolute w-[400px] h-[400px] border border-orange-500/10 rounded-full animate-[spin_10s_linear_infinite] border-dashed will-change-transform"></div>
                 <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:20px_20px] opacity-20 mask-image-radial-gradient"></div>
             </div>

             <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-6 right-10 z-40 text-orange-400 bg-slate-900 p-3 rounded-xl border border-orange-500/30 shadow-xl" style={{ willChange: 'transform' }}><FaReact className="text-3xl animate-spin-slow"/></motion.div>
             <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-16 -left-6 z-40 text-amber-400 bg-slate-900 p-3 rounded-xl border border-amber-500/30 shadow-xl" style={{ willChange: 'transform' }}><SiRedux className="text-3xl"/></motion.div>

             <motion.div 
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-[300px] h-[420px] sm:w-[350px] sm:h-[480px] rounded-[24px] border border-white/10 shadow-2xl p-2 bg-gradient-to-br from-white/5 to-transparent"
             >
                <div 
                    className="w-full h-full rounded-[20px] overflow-hidden relative group bg-[#0f172a]"
                    style={{ transform: "translateZ(30px)" }}
                >
                    <img 
                        src="/Hero/person.avif" 
                        alt="Nahid" 
                        width={350}
                        height={480}
                        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90"></div>
                    <SlideshowCard />
                </div>
             </motion.div>
        </motion.div>

      </div>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .animate-spin-slow { animation: spin 12s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .mask-image-radial-gradient { -webkit-mask-image: radial-gradient(circle, black 40%, transparent 70%); }
        .transform-gpu { transform: translate3d(0,0,0); }
        .will-change-transform { will-change: transform; }
      `}</style>
    </div>
  );
};

export default Hero;