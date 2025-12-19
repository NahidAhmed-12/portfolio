import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLayerGroup, FaArrowRight } from 'react-icons/fa';

function TechStack() {
    const fadeLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className='relative w-full py-20 md:py-32 bg-transparent overflow-hidden'>
       

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20'>

                    <motion.div 
                        className='w-full md:w-1/2 flex justify-center items-center perspective-1000'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeLeft}
                    >
                        <div className="relative group w-full max-w-md">
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            
                         
                            <div className="relative bg-[#0f172a]/80 md:bg-[#0f172a]/60 backdrop-blur-md md:backdrop-blur-xl border border-white/10 p-2 rounded-2xl shadow-2xl overflow-hidden">
                                <div className="bg-[#020617]/50 border-b border-white/5 p-4 flex gap-2 rounded-t-xl">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                </div>
                                
                                <div className="p-8 md:p-12 flex justify-center bg-gradient-to-b from-[#1e293b]/50 to-transparent">
                                    <img 
                                        className='w-full h-auto drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1' 
                                        src="/assets/tech-stack-illustration.png" 
                                        alt="Tech Stack" 
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='w-full md:w-1/2 text-center md:text-left'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeRight}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-widest uppercase mb-6">
                            <FaLayerGroup />
                            <span>Development Tools</span>
                        </div>

                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight'>
                            The Technologies <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                                I Use Everyday
                            </span>
                        </h2>

                        <p className='text-slate-400 text-base md:text-lg leading-relaxed mb-8 font-light'>
                            I enjoy building modern, fast, and scalable web applications. My primary stack includes 
                            <span className="text-orange-200 font-semibold"> React</span> for dynamic UIs and 
                            <span className="text-amber-200 font-semibold"> Tailwind CSS</span> for styling. 
                        </p>

                        <div className='flex justify-center md:justify-start'>
                             <a 
                                href="https://www.fiverr.com/nahidahmad10" target='blank'
                                className="relative group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-slate-800 to-slate-900 border border-white/10 text-white font-semibold transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)] overflow-hidden"
                             >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative flex items-center gap-3">
                                    <FaCode className="text-orange-400 group-hover:rotate-12 transition-transform" />
                                    <span>Let's Build Together</span>
                                    <FaArrowRight className="text-sm text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                </span>
                             </a>
                        </div>
                    </motion.div>
       
                </div>
            </div>
        </section>
    );
}

export default TechStack;