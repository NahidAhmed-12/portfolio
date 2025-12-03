import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaEye } from 'react-icons/fa';

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
        <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#050505] overflow-hidden" id="projects">
            
            {/* Background Elements */}
            <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        My Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-center max-w-2xl text-base md:text-lg">
                        Explore some of the projects I've worked on, showcasing my expertise in modern web development and UI/UX design.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-6"></div>
                </motion.div>

                {/* Projects Grid */}
                {/* layout prop যোগ করা হয়েছে স্মুথ রি-সাইজিং এর জন্য */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {projectList.slice(0, visibleProjects).map((project, index) => (
                            <motion.div 
                                layout
                                key={project.id} 
                                // এখানে সরাসরি animate প্রপ ব্যবহার করা হয়েছে যাতে মাউন্ট হওয়ার সাথে সাথেই এনিমেশন হয়
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="group relative bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative h-56 overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                        <span className="text-xs font-semibold text-cyan-400">Featured</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    
                                    <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.techStack.map((tech, index) => (
                                            <span key={index} className="text-xs font-medium text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex items-center gap-4 mt-auto">
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" 
                                           className="flex-1 group/btn relative overflow-hidden rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                            <div className="relative h-full w-full bg-[#0a0a0a] group-hover/btn:bg-transparent transition-colors duration-300 rounded-lg flex items-center justify-center py-2.5">
                                                <span className="flex items-center gap-2 text-sm font-bold text-white">
                                                    <FaEye className="text-cyan-400 group-hover/btn:text-white" /> Live Demo
                                                </span>
                                            </div>
                                        </a>
                                        
                                        <a href={project.codeLink} target="_blank" rel="noopener noreferrer" 
                                           className="flex-1 flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-gray-300 text-sm font-bold py-3 rounded-lg hover:bg-white/10 hover:text-white transition-all duration-300">
                                            <FaGithub size={18} /> Code
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
                            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                        >
                            <span className="mr-2">View More Projects</span>
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
}

export default Projects;