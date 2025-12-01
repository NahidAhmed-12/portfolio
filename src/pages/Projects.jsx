import React, { useState } from 'react';

function Projects() {
    // স্টেট ডিক্লেয়ার করা হলো: শুরুতে ৩টি প্রজেক্ট দেখাবে
    const [visibleProjects, setVisibleProjects] = useState(3);

    // আপনার প্রজেক্টের তথ্য এখানে (আমি মোট ৬টি প্রজেক্ট দিয়েছি যাতে লোড করার মতো ডাটা থাকে)
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
            techStack: ["React.js", "API", "Tailwind "],
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
        // --- নিচে নতুন ৩টি প্রজেক্ট যোগ করা হলো যা বাটনে ক্লিক করলে আসবে ---
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
            image: "/Projects/Ai-img.avif",
            techStack: ["React", "Pollinations.ai API", "Tailwind"],
            liveLink: "https://ai-image-10.vercel.app/",
            codeLink: "#"
        },

         {
            id: 6,
            title: "Survey Jumper Tool",
            description: "An interactive survey management tool that allows users to navigate through questionnaires and submit responses efficiently.",
            image: "/Projects/Survey.avif",
            techStack: ["React", "Firebase", "Tailwind "],
            liveLink: "#",
            codeLink: "#"
        }
    ];

    // বাটন ক্লিক হ্যান্ডলার
    const handleViewMore = () => {
        setVisibleProjects((prevValue) => prevValue + 3);
    };

    return (
        <section className="py-12 md:py-20 px-5 md:px-24 w-full" id="projects">
            {/* এনিমেশনের জন্য স্টাইল ট্যাগ যোগ করা হলো */}
            <style>
                {`
                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(40px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-card {
                        animation: fadeInUp 0.6s ease-out forwards;
                    }
                `}
            </style>

            <div className="flex flex-col items-center mb-12">
                {/* টাইটেল - Hero সেকশনের ফন্টের সাথে মিল রেখে */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
                    My Recent <span className="text-blue-400">Projects</span>
                </h2>
                <p className="text-gray-400 text-center max-w-lg">
                    Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
                </p>
            </div>

            {/* প্রজেক্ট গ্রিড */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectList.slice(0, visibleProjects).map((project) => (
                    <div key={project.id} 
                         className="bg-neutral-900/50 rounded-xl border border-neutral-800 overflow-hidden
                                    transform transition-all duration-300 ease-in-out
                                    hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/50 group
                                    animate-card" // এখানে কাস্টম এনিমেশন ক্লাস যোগ করা হয়েছে
                    >
                        
                        {/* প্রজেক্ট ইমেজ */}
                        <div className="relative overflow-hidden h-48 w-full">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* ইমেজের উপর ওভারলে */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold border border-white px-4 py-1 rounded-full">View Details</span>
                            </div>
                        </div>

                        {/* প্রজেক্ট কন্টেন্ট */}
                        <div className="p-6">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                {project.description}
                            </p>

                            {/* টেকনোলজি ট্যাগস */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.techStack.map((tech, index) => (
                                    <span key={index} className="text-xs font-medium text-cyan-300 bg-cyan-900/30 px-2 py-1 rounded-md border border-cyan-800/50">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* বাটন সেকশন */}
                            <div className="flex items-center justify-between gap-4">
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" 
                                   className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-1 transition-all duration-300">
                                    <i className="fa-solid fa-eye"></i> Live Demo
                                </a>
                                
                                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" 
                                   className="flex-1 flex items-center justify-center gap-2 bg-neutral-800 border border-neutral-700 text-gray-300 text-sm font-bold py-2 px-4 rounded-lg hover:text-cyan-500 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1 transition-all duration-300">
                                    <i className="fa-brands fa-github"></i> Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
             {/* See More Button: যদি দৃশ্যমান প্রজেক্ট লিস্টের মোট দৈর্ঘ্যের চেয়ে কম হয়, তবেই বাটন দেখাবে */}
             {visibleProjects < projectList.length && (
                 <div className='flex justify-center mt-12'>
                    <button 
                        onClick={handleViewMore}
                        className='flex items-center gap-2 border-2 border-cyan-500 text-cyan-500 font-bold py-2 px-6 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 ease-in-out'
                    >
                        <span>View More Projects</span>
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
             )}
        </section>
    );
}

export default Projects;