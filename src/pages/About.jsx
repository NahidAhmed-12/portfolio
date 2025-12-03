import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaEnvelope, FaMapMarkerAlt, FaDownload, FaArrowRight } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="relative py-20 bg-[#050505] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 flex justify-center relative"
          >
            {/* Decorative Ring */}
            <div className="absolute inset-0 border-2 border-dashed border-cyan-500/20 rounded-2xl animate-[spin_20s_linear_infinite] pointer-events-none"></div>
            
            <div className="relative z-10 p-2 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-2xl backdrop-blur-sm">
                <img 
                  src="/person.webp" 
                  alt="Nahid" 
                  className="w-full max-w-[350px] md:max-w-[400px] rounded-xl shadow-2xl border border-white/10"
                />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#0a0a0a] border border-cyan-500/30 p-4 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.2)] z-20">
                <p className="text-cyan-400 font-bold text-3xl">2+</p>
                <p className="text-gray-400 text-xs uppercase tracking-wider">Years Exp.</p>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="w-full lg:w-7/12"
          >
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
              Hi, I'm <span className="text-cyan-400">Nahid</span>
            </h3>
            <h4 className="text-xl font-medium text-gray-300 mb-6">Frontend Web Developer</h4>
            
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 border-l-4 border-cyan-500/50 pl-6">
              I specialize in building responsive, user-friendly, and aesthetic web applications. 
              My journey started with a curiosity for how websites work, which turned into a passion for clean code and pixel-perfect design.
              I am always eager to learn new tools and improve my skills to deliver the best possible user experience.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {[
                    { icon: <FaUser />, label: "Name", value: "Nahid Hasan" },
                    { icon: <FaCode />, label: "Role", value: "Frontend Dev" },
                    { icon: <FaEnvelope />, label: "Email", value: "nahid@example.com" },
                    { icon: <FaMapMarkerAlt />, label: "Location", value: "Dhaka, BD" },
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5 hover:border-cyan-500/30 transition-all duration-300">
                        <span className="text-cyan-400 text-xl">{item.icon}</span>
                        <div>
                            <p className="text-gray-500 text-xs uppercase">{item.label}</p>
                            <p className="text-white font-medium">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="/cv.pdf" download className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-bold shadow-lg shadow-cyan-500/25 overflow-hidden transition-all hover:shadow-cyan-500/40">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-2">Download CV <FaDownload /></span>
              </a>
              
              <a href="#contact" className="px-8 py-3 rounded-full border border-cyan-500/50 text-cyan-400 font-bold hover:bg-cyan-500/10 hover:border-cyan-500 transition-all flex items-center gap-2">
                Contact Me <FaArrowRight />
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About;