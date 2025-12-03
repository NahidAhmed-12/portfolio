import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight, FaCode } from 'react-icons/fa';

function Curious() {
    // Animation Variants
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className='relative w-full py-20 md:py-32 overflow-hidden flex items-center justify-center bg-[#020617]'>
            
            {/* 1. Global Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] opacity-40"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px] opacity-40"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className='max-w-6xl mx-auto px-6 lg:px-8 relative z-10'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20'>
                    
                    {/* --- LEFT SIDE: TEXT --- */}
                    <motion.div 
                        className='w-full md:w-1/2 text-center md:text-left'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    >
                        {/* Badge */}
                        <motion.div variants={fadeUp} className="flex justify-center md:justify-start mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md">
                                <FaCode className="text-orange-400 text-xs" />
                                <span className="text-orange-300 text-[10px] font-bold tracking-widest uppercase">Open Source</span>
                            </div>
                        </motion.div>

                        {/* Heading */}
                        <motion.div variants={fadeUp}>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.2] tracking-tight'>
                                Curious How This <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-red-500 relative">
                                    Site Was Built?
                                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-500/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                    </svg>
                                </span>
                            </h2>
                        </motion.div>

                        {/* Description */}
                        <motion.p variants={fadeUp} className='text-slate-400 text-base md:text-lg mb-8 leading-relaxed max-w-lg mx-auto md:mx-0 font-light'>
                            This portfolio was brought to life using <span className='text-orange-200 font-semibold'>React</span> and <span className='text-amber-200 font-semibold'>Tailwind CSS</span>. I focused on clean architecture, reusable components, and smooth animations.
                        </motion.p>

                        {/* UPDATED BUTTON STYLE */}
                        <motion.div variants={fadeUp} className='flex justify-center md:justify-start'>
                            <a 
                                href="https://github.com/NahidAhmed-12/portfolio.git" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group relative inline-block"
                            >
                                {/* Blur Effect Behind Button */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur opacity-50 group-hover:opacity-90 transition duration-500 animate-pulse"></div>
                                
                                {/* Main Button */}
                                <button className='relative flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3.5 px-8 rounded-xl shadow-xl hover:shadow-[0_0_20px_rgba(234,88,12,0.5)] transform hover:scale-105 transition-all duration-300'>
                                    <FaGithub className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                                    <span>View Source Code</span>
                                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* --- RIGHT SIDE: VISUAL --- */}
                    <motion.div 
                        className='w-full md:w-1/2 flex justify-center relative perspective-1000'
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-500/5 rounded-full blur-3xl -z-10"></div>
                        
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10"
                        >
                            <div className="relative p-2 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/5 backdrop-blur-sm shadow-2xl">
                                <div className="bg-[#020617]/80 rounded-xl overflow-hidden p-6 relative">
                                    <div className="flex gap-2 mb-4 opacity-50">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    
                                    <img 
                                        className='relative w-full max-w-sm drop-shadow-lg opacity-90 hover:opacity-100 transition-opacity' 
                                        src="/assets/programing.svg" 
                                        alt="Programming illustration" 
                                    />
                                </div>
                            </div>

                            <motion.div 
                                animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -right-4 top-10 bg-slate-800 p-2 rounded-lg border border-orange-500/30 shadow-lg text-orange-400 text-xs font-mono"
                            >
                                &lt;Code /&gt;
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    
                </div>
            </div>
        </section>
    );
}

export default Curious;