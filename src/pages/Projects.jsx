import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaEye, FaArrowRight, FaLayerGroup } from 'react-icons/fa';

function Projects() {
   
    const [visibleProjects, setVisibleProjects] = useState(3);

    const projectList = [
        {
            id: 1,
            title: "E-Commerce Website",
            description: "A full-featured e-commerce platform with cart functionality, payment gateway integration, and user dashboard.",
            image: "/Projects/e-commerce.avif",
            techStack: ["React", "Tailwind", "Redux"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            id: 2,
            title: "Flowers Landing page",
            description: "A visually appealing and responsive landing page designed for a floral shop, featuring elegant animations and product showcases.",
            image: "/Projects/flower.avif",
            techStack: ["React", "Swing Library", "Tailwind"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Real-time weather forecasting app fetching data from OpenWeatherMap API with location support.",
            image: "/Projects/weathers.avif",
            techStack: ["JavaScript", "API", "Tailwind"],
            liveLink: "https://weathers-10.vercel.app/",
            codeLink: "#"
        },
        {
            id: 4,
            title: "Crypto Hunter Dashboard",
            description: "A comprehensive cryptocurrency tracking dashboard that displays real-time market trends, coin prices, and historical data.",
            image: "/Projects/crypto.avif",
            techStack: ["React.js", "API", "Tailwind"],
            liveLink: "https://crypto-10.vercel.app/",
            codeLink: "#"
        },
        {
            id: 5,
            title: "AI Image Generator",
            description: "An AI-powered application that generates images based on user prompts using Pollinations.ai API",
            image: "/Projects/ai-image.avif",
            techStack: ["React", "Pollinations.ai API", "Tailwind"],
            liveLink: "https://ai-image-10.vercel.app/",
            codeLink: "#"
        },
        {
            id: 6,
            title: "Survey Jumper Tool",
            
            description: "This is my first Paid Survey Bypass Tool. An interactive survey management tool that allows users to navigate through questionnaires and submit responses efficiently.",
            image: "/Projects/baul.avif",
            techStack: ["React", "Firebase", "Tailwind"],
            liveLink: "#",
            codeLink: "#"
        }
    ];

   
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setVisibleProjects(6); 
            } else {
                setVisibleProjects(3);
            }
        };

      
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleViewMore = () => {
        setVisibleProjects((prevValue) => prevValue + 3);
    };

    return (
        <section className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden" id="projects">
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-20 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold tracking-widest uppercase mb-4">
                        <FaLayerGroup />
                        <span>Portfolio</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        My Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Projects</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-base md:text-lg font-light leading-relaxed">
                        Explore some of the projects I've worked on, showcasing my expertise in modern web development and UI/UX design.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {projectList.slice(0, visibleProjects).map((project) => (
                            <motion.div 
                                layout
                                key={project.id} 
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                                transition={{ duration: 0.5 }}
                                className="group relative bg-slate-900/90 md:bg-slate-900/40 md:backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative w-full h-auto overflow-hidden bg-slate-950">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        loading="lazy"
                                        className="w-full h-auto transition-transform duration-700 group-hover:scale-105 brightness-110 group-hover:brightness-125"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60 z-20"></div>
                                </div>

                                <div className="p-6 flex flex-col flex-1 relative z-20">
                                    {/* Title Section Updated with Paid Badge logic */}
                                    <div className="flex items-center flex-wrap gap-2 mb-3 -mt-4 md:mt-0">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        {/* Survey Jumper Tool (ID 6) এর জন্য Paid ব্যাজ */}
                                        {project.id === 6 && (
                                            <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide text-white bg-gradient-to-r from-emerald-500 to-green-600 shadow-[0_0_10px_rgba(16,185,129,0.4)] border border-emerald-400/30">
                                                Paid
                                            </span>
                                        )}
                                    </div>
                                    
                                    <p className="text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed font-light">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.techStack.map((tech, index) => (
                                            <span key={index} className="text-[11px] font-semibold text-orange-200 bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/10">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" 
                                           className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 py-3 text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:shadow-orange-500/50 hover:-translate-y-1">
                                            <FaEye className="text-white" /> 
                                            <span className="text-sm font-bold">Live Demo</span>
                                        </a>
                                        
                                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" 
                                           className="flex-1 flex items-center justify-center gap-2 bg-slate-800/50 border border-white/10 text-slate-300 text-sm font-bold py-3 rounded-lg hover:bg-slate-700 hover:text-white hover:border-white/20 transition-all duration-300">
                                            <FaGithub size={16} /> Code
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
              
                {visibleProjects < projectList.length && (
                    <div className='flex justify-center mt-12 md:hidden'>
                        <button 
                            onClick={handleViewMore}
                            className="group relative inline-flex items-center justify-center px-8 py-3 w-full sm:w-auto overflow-hidden font-bold text-white rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-orange-500/30"
                        >
                           
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600"></span>
                            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-white opacity-10 group-hover:rotate-90 ease"></span>
                            
                            <span className="relative flex items-center gap-3">
                                View More Projects <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Projects;