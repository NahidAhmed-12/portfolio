import React from 'react';

function Projects() {
    // আপনার প্রজেক্টের তথ্য এখানে পরিবর্তন করবেন
    const projectList = [
        {
            id: 1,
            title: "E-Commerce Website",
            description: "A full-featured e-commerce platform with cart functionality, payment gateway integration, and user dashboard.",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&auto=format&fit=crop&q=60", // আপনার প্রজেক্টের ছবির লিংক দিন
            techStack: ["React", "Tailwind", "Redux"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            id: 2,
            title: "Crypto vision",
            description: "A clean, responsive, and dark-themed personal portfolio website template for developers.",
            image: "/Images/crypto-10.vercel.app_(Nest Hub Max) (1).png",
            techStack: ["React.js", "API", "Tailwind "],
            liveLink: "https://crypto-10.vercel.app/",
            codeLink: "#"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Real-time weather forecasting app fetching data from OpenWeatherMap API with location support.",
            image: "/Images/weathers-10.vercel.app_(Nest Hub Max) (4) (1).png",
            techStack: ["JavaScript", "API", "Tailwind"],
            liveLink: "https://weathers-10.vercel.app/",
            codeLink: "#"
        }
    ];

    return (
        <section className="py-12 md:py-20 px-5 md:px-24 w-full" id="projects">
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
                {projectList.map((project) => (
                    <div key={project.id} 
                         className="bg-neutral-900/50 rounded-xl border border-neutral-800 overflow-hidden
                                    transform transition-all duration-300 ease-in-out
                                    hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/50 group">
                        
                        {/* প্রজেক্ট ইমেজ */}
                        <div className="relative overflow-hidden h-48 w-full">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* ইমেজের উপর ওভারলে (ঐচ্ছিক) */}
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

                            {/* বাটন সেকশন - Hero সেকশনের বাটনের স্টাইল কপি করা হয়েছে */}
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
            
             {/* See More Button (Optional) */}
             <div className='flex justify-center mt-12'>
                <button className='flex items-center gap-2 border-2 border-cyan-500 text-cyan-500 font-bold py-2 px-6 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 ease-in-out'>
                    <span>View All Projects</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </section>
    );
}

export default Projects;
