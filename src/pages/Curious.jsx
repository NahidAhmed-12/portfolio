import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaArrowRight } from 'react-icons/fa';

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
        <section className='relative w-full py-20 md:py-32 bg-[#050505] overflow-hidden flex items-center justify-center'>
            
            {/* Background Glow (Purple/Pink for differentiation but consistent dark theme) */}
            <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] opacity-40"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] opacity-40"></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20'>
                    
                    {/* Text Content */}
                    <motion.div 
                        className='w-full md:w-1/2 text-center md:text-left'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    >
                        <motion.div variants={fadeUp}>
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight'>
                                Curious How This <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                    Site Was Built?
                                </span>
                            </h2>
                        </motion.div>

                        <motion.p variants={fadeUp} className='text-gray-400 text-base md:text-lg mb-8 leading-relaxed max-w-lg mx-auto md:mx-0'>
                            This portfolio was brought to life using <span className='text-cyan-300 font-medium'>React</span> and <span className='text-purple-300 font-medium'>Tailwind CSS</span>, with a strong focus on clean, reusable code and modern animations. Explore the codebase to see the magic behind the scenes.
                        </motion.p>

                        <motion.div variants={fadeUp} className='flex justify-center md:justify-start'>
                            <a 
                                href="https://github.com/NahidAhmed-12/portfolio.git" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="relative group"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                                <button className='relative flex items-center gap-3 bg-[#0a0a0a] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 group-hover:bg-[#151515]'>
                                    <FaGithub className="text-xl group-hover:text-purple-400 transition-colors" />
                                    <span>View Source Code</span>
                                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                                </button>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Image / Illustration */}
                    <motion.div 
                        className='w-full md:w-1/2 flex justify-center'
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative"
                        >
                             {/* Decorative Elements behind image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 rounded-full blur-2xl transform scale-90"></div>
                            
                            <img 
                                className='relative w-full max-w-sm md:max-w-md drop-shadow-2xl' 
                                src="/assets/programing.svg" 
                                alt="Programming illustration" 
                            />
                        </motion.div>
                    </motion.div>
                    
                </div>
            </div>
        </section>
    );
}

export default Curious;