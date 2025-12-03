import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaEye, FaLayerGroup } from 'react-icons/fa';

function Projects() {
    const [visibleProjects, setVisibleProjects] = useState(3);

    const projectList = [
        {
            id: 1,
            title: "E-Commerce Website",
            description: "A full-featured e-commerce platform with cart functionality, payment gateway integration, and user dashboard.",
            image: "/Projects/e-commrs.avif",
            techStack: ["React", "Tailwind", "Redux"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            id: 2,
            title: "Crypto Hunter Dashboard",
            description: "A comprehensive cryptocurrency tracking dashboard that displays real-time market trends, coin prices, and historical data.",
            image: "/Projects/Crypto.avif",
            techStack: ["React.js", "API", "Tailwind"],
            liveLink: "https://crypto-10.vercel.app/",
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
            title: "Flowers Landing page",
            description: "A visually appealing and responsive landing page designed for a floral shop, featuring elegant animations and product showcases.",
            image: "/Projects/Flower.avif",
            techStack: ["React", "Swing Library", "Tailwind"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            id: 5,
            title: "AI Image Generator",
            description: "An AI-powered application that generates images based on user prompts using Pollinations.ai API",
            image: "/Projects/AI-img.avif",
            techStack: ["React", "Pollinations.ai API", "Tailwind"],
            liveLink: "https://ai-image-10.vercel.app/",
            codeLink: "#"
        },
        {
            id: 6,
            title: "Survey Jumper Tool",
            description: "An interactive survey management tool that allows users to navigate through questionnaires and submit responses efficiently.",
            image: "/Projects/Survey.avif",
            techStack: ["React", "Firebase", "Tailwind"],
            liveLink: "#",
            codeLink: "#"
        }
    ];

    const handleViewMore = () => {
        setVisibleProjects((prevValue) => prevValue + 3);
    };

    return (
        <section className="relative w-full py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#020617] overflow-hidden" id="projects">
            
            {/* Global Background (Consistent) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] left-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            </div>

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
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {projectList.slice(0, visibleProjects).map((project) => (
                            <motion.div 
                                layout
                                key={project.id} 
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="group relative bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative h-60 overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90 z-20"></div>
                                    
                                    <div className="absolute top-4 right-4 z-30 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-orange-500/30">
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400">Featured</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 pt-0 flex flex-col flex-1 relative z-20">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-slate-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed font-light">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.techStack.map((tech, index) => (
                                            <span key={index} className="text-[11px] font-semibold text-orange-200 bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/10">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex items-center gap-4 mt-auto">
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" 
                                           className="flex-1 group/btn relative overflow-hidden rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 p-[1px] shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                                            <div className="relative h-full w-full bg-[#020617] group-hover/btn:bg-transparent transition-colors duration-300 rounded-lg flex items-center justify-center py-2.5">
                                                <span className="flex items-center gap-2 text-sm font-bold text-white group-hover/btn:text-white transition-colors">
                                                    <FaEye className="text-orange-400 group-hover/btn:text-white" /> Live Demo
                                                </span>
                                            </div>
                                        </a>
                                        
                                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" 
                                           className="flex-1 flex items-center justify-center gap-2 bg-slate-800/50 border border-white/10 text-slate-300 text-sm font-bold py-2.5 rounded-lg hover:bg-slate-700 hover:text-white hover:border-white/20 transition-all duration-300">
                                            <FaGithub size={16} /> Code
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                
                {/* View More Button */}
                {visibleProjects < projectList.length && (
                    <motion.div 
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className='flex justify-center mt-16'
                    >
                        <button 
                            onClick={handleViewMore}
                            className="group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-bold text-white rounded-full bg-slate-800 border border-white/10 transition-all duration-300 hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            <span className="relative flex items-center gap-2">
                                View More Projects <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

export default Projects;