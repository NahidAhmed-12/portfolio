import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiJavascript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

function Skills() {
    const skills = [
        { 
            title: "React.js", 
            level: "Expert",
            desc: "Building complex web apps with modern hooks & functional components.",
            icon: <SiReact />,
            color: "text-cyan-400",
            borderColor: "group-hover:border-cyan-500/50",
            shadowColor: "group-hover:shadow-cyan-500/20"
        },
        { 
            title: "JavaScript (ES6+)", 
            level: "Advanced",
            desc: "Deep understanding of Asynchronous programming, DOM & Logic.",
            icon: <SiJavascript />,
            color: "text-yellow-400",
            borderColor: "group-hover:border-yellow-500/50",
            shadowColor: "group-hover:shadow-yellow-500/20"
        },
        { 
            title: "Tailwind CSS", 
            level: "Expert",
            desc: "Rapidly building custom designs with utility-first CSS framework.",
            icon: <SiTailwindcss />,
            color: "text-cyan-300",
            borderColor: "group-hover:border-cyan-300/50",
            shadowColor: "group-hover:shadow-cyan-300/20"
        },
        { 
            title: "Next.js", 
            level: "Intermediate",
            desc: "Server Side Rendering (SSR) and Static Site Generation (SSG).",
            icon: <SiNextdotjs />,
            color: "text-white",
            borderColor: "group-hover:border-white/50",
            shadowColor: "group-hover:shadow-white/20"
        }
    ];

    return (
        <section className="relative w-full py-20 md:py-32 bg-[#050505] overflow-hidden">
            
             {/* Background Glow */}
            <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Proficiency</span>
                    </h2>
                    <p className='text-gray-400 max-w-xl mx-auto'>
                        Tools and technologies I use to bring products to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {skills.map((skill, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl transition-all duration-300 
                                        hover:-translate-y-1 ${skill.borderColor} hover:shadow-lg ${skill.shadowColor}`}
                        >
                            <div className="flex items-start gap-6">
                                {/* Icon Container */}
                                <div className={`p-4 rounded-xl bg-white/5 border border-white/10 text-4xl ${skill.color} 
                                                transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/10`}>
                                    {skill.icon}
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                            {skill.title}
                                        </h3>
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 ${skill.color}`}>
                                            {skill.level}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {skill.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;