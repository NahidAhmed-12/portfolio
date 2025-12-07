import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaBriefcase, FaMapMarkerAlt, FaDownload, FaArrowRight } from 'react-icons/fa';


const About = () => {
  return (
    <section id="about" className="relative py-20 bg-slate-950 overflow-hidden font-sans text-slate-300">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[80px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
             Who I Am
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight relative inline-block">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500">Me</span>
            <svg className="absolute -bottom-3 left-0 w-full h-3 text-orange-500/40" viewBox="0 0 200 9" fill="none">
                <path d="M2.00025 6.99999C45.5002 1.5 130 -2.5 198.5 3.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
    
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 flex justify-center relative group"
          >
            <div className="absolute inset-0 m-auto w-[110%] h-[110%] border border-dashed border-orange-500/20 rounded-full animate-[spin_30s_linear_infinite] pointer-events-none"></div>
            <div className="relative z-10 p-3 bg-slate-900/50 rounded-2xl border border-orange-500/20 backdrop-blur-sm shadow-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-xl">
                    <img 
                      src="/Hero/Nahid.avif" 
                      alt="Nahid" 
                      className="w-full max-w-[320px] md:max-w-[360px] object-cover rounded-xl shadow-lg grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60"></div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-slate-800/90 backdrop-blur-md border border-orange-500/30 p-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] z-20 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg">
                        {/* Used Icon instead of Number */}
                        <FaCode className="text-lg" />
                    </div>
                    <div>
                        <p className="text-white font-bold text-sm">Quality</p>
                        <p className="text-orange-400 text-xs font-bold uppercase tracking-wide">Code</p>
                    </div>
                </div>
       

            </div>
          </motion.div>

        
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="w-full lg:w-7/12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              I'm <span className="text-orange-400">Nahid Hasan</span>, a passionate Developer.
            </h3>
            <h4 className="text-lg font-medium text-slate-400 mb-6">Frontend Web Developer & UI Designer</h4>
            
            <p className="text-slate-400 text-base leading-relaxed mb-8 border-l-2 border-orange-500/50 pl-5">
              I specialize in crafting pixel-perfect, responsive web applications. My journey is driven by a love for clean code and intuitive design. 
              I transform complex requirements into seamless digital experiences, ensuring every project is fast, accessible, and visually stunning.
            </p>

          
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                    { icon: <FaUser />, label: "Name", value: "Nahid Hasan" },
                    { icon: <FaCode />, label: "Role", value: "Frontend Dev" },
                   
                    { icon: <FaBriefcase />, label: "Status", value: "Available for Work" }, 
                    { icon: <FaMapMarkerAlt />, label: "Location", value: "Dhaka, BD" },
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-slate-800/40 p-4 rounded-xl border border-white/5 hover:border-orange-500/30 hover:bg-slate-800/60 transition-all duration-300 group">
                        <span className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-orange-400 text-lg group-hover:text-orange-300 group-hover:border-orange-500/30 transition-colors shadow-sm">
                            {item.icon}
                        </span>
                        <div>
                            <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">{item.label}</p>
                            <p className="text-slate-200 font-medium text-sm">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="/cv.pdf" 
                download 
                className="relative px-8 py-3.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white font-bold shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                Download CV <FaDownload className="text-sm" />
              </a>
              
           
              <a 
                href="https://www.fiverr.com/your_username" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-lg border border-slate-700 hover:border-orange-500/50 bg-slate-800/50 hover:bg-slate-800 text-white font-medium transition-all duration-300 flex items-center gap-2 backdrop-blur-sm group"
              >
                Hire Me <FaArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform duration-300 text-orange-400" />
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;