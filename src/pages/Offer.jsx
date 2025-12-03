import React from 'react';
import { motion } from 'framer-motion';
import { FaMobileAlt, FaLayerGroup, FaBolt, FaArrowRight } from 'react-icons/fa';

function Offer() {
    const services = [
        {
            icon: <FaMobileAlt />,
            title: "Responsive Design",
            description: "Crafting pixel-perfect websites that provide an optimal viewing experience across all devices, from mobile to desktop."
        },
        {
            icon: <FaLayerGroup />,
            title: "UI Development",
            description: "Building dynamic, engaging, and user-friendly interfaces using modern JavaScript frameworks like React & Next.js."
        },
        {
            icon: <FaBolt />,
            title: "Performance",
            description: "Optimizing web applications for maximum speed, SEO efficiency, and smooth accessibility to ensure a seamless user experience."
        }
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section className='relative py-20 px-4 md:px-8 overflow-hidden bg-[#020617]'>
            
            {/* 1. Global Background Effects (Matches Hero) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] bg-orange-500/5 blur-[120px] rounded-full"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* 2. Header Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-16'
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                        <span className="text-orange-400 text-[10px] uppercase font-bold tracking-widest">My Services</span>
                    </div>
                    
                    <h2 className='text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight'>
                        What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Offer</span>
                    </h2>
                    <p className="text-slate-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
                        High-quality web solutions tailored to your specific needs, focusing on design, functionality, and performance.
                    </p>
                </motion.div>

                {/* 3. Services Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
                >
                   {services.map((service, i) => ( 
                    <motion.div 
                        key={i} 
                        variants={cardVariants}
                        // Premium Card Styling: Glassmorphism + Gradient Border Effect
                        className='group relative bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-2 overflow-hidden'
                    >
                        {/* Hover Gradient Glow Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Icon Container */}
                        <div className='relative w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/5 flex items-center justify-center shadow-lg group-hover:shadow-orange-500/20 group-hover:scale-110 transition-all duration-300'>
                            <div className="text-2xl text-orange-400 group-hover:text-orange-300 transition-colors">
                                {service.icon}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className='text-xl font-bold text-slate-100 mb-3 group-hover:text-orange-100 transition-colors'>
                                {service.title}
                            </h3>
                            <p className='text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors'>
                                {service.description}
                            </p>
                            
                            {/* Decorative Arrow */}
                            <div className="flex items-center gap-2 text-xs font-bold text-orange-500/80 uppercase tracking-wider group-hover:text-orange-400 transition-colors cursor-pointer">
                                Learn more <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </motion.div>
                   ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Offer;