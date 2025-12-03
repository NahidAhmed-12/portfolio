import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLayerGroup } from 'react-icons/fa';

function TechStack() {
    // Animation Variants
    const fadeLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
    };

    return (
        <section className='relative w-full py-20 md:py-32 bg-[#050505] overflow-hidden'>
            
            {/* Background Details */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[120px] -z-10"></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16'>

                    {/* Image Container (Left Side) */}
                    <motion.div 
                        className='w-full md:w-1/2 flex justify-center items-center'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeLeft}
                    >
                        <div className="relative group">
                            {/* Card Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            
                            {/* Glass Container for Image */}
                            <div className="relative bg-[#0f0f0f]/80 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-2xl shadow-2xl">
                                <img 
                                    className='w-full max-w-sm h-auto transform transition-transform duration-500 group-hover:scale-105' 
                                    src="/assets/tech-stack-illustration.png" 
                                    alt="Tech Stack" 
                                />
                                {/* Decoration Dots */}
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content (Right Side) */}
                    <motion.div 
                        className='w-full md:w-1/2 text-center md:text-left'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeRight}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
                            <FaLayerGroup />
                            <span>Development Tools</span>
                        </div>

                        <h2 className='text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight'>
                            The Technologies <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                I Use Everyday
                            </span>
                        </h2>

                        <p className='text-gray-400 text-base md:text-lg leading-relaxed mb-8'>
                            I enjoy building modern, fast, and scalable web applications. My primary stack includes 
                            <span className="text-white font-semibold"> React</span> for dynamic UIs and 
                            <span className="text-white font-semibold"> Tailwind CSS</span> for styling. 
                            I'm passionate about writing clean code to deliver the best possible user experience.
                        </p>

                        <div className='flex justify-center md:justify-start'>
                             <a 
                                href="/contact" 
                                className="relative overflow-hidden group px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-semibold transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                             >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative flex items-center gap-3">
                                    <FaCode className="text-cyan-400" />
                                    Let's Build Together
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