import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiJavascript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

function Skills() {
    const skills = [
        { 
            title: "React.js", 
            level: "90%",
            levelText: "Expert",
            desc: "Building complex web apps with modern hooks & functional components.",
            icon: <SiReact />,
            color: "text-sky-400", // Original Tech Color
            bgGlow: "group-hover:bg-sky-500/10",
            borderGlow: "group-hover:border-sky-500/50"
        },
        { 
            title: "JavaScript (ES6+)", 
            level: "85%",
            levelText: "Advanced",
            desc: "Deep understanding of Asynchronous programming, DOM & Logic.",
            icon: <SiJavascript />,
            color: "text-yellow-400",
            bgGlow: "group-hover:bg-yellow-500/10",
            borderGlow: "group-hover:border-yellow-500/50"
        },
        { 
            title: "Tailwind CSS", 
            level: "95%",
            levelText: "Expert",
            desc: "Rapidly building custom designs with utility-first CSS framework.",
            icon: <SiTailwindcss />,
            color: "text-cyan-400",
            bgGlow: "group-hover:bg-cyan-500/10",
            borderGlow: "group-hover:border-cyan-500/50"
        },
        { 
            title: "Next.js", 
            level: "80%",
            levelText: "Intermediate",
            desc: "Server Side Rendering (SSR) and Static Site Generation (SSG).",
            icon: <SiNextdotjs />,
            color: "text-white",
            bgGlow: "group-hover:bg-white/10",
            borderGlow: "group-hover:border-white/50"
        }
    ];

    return (
        <section className="relative w-full py-20 md:py-32 bg-[#020617] overflow-hidden">
            
             {/* Global Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[20%] right-[-5%] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-red-900/10 rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-sm mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                        <span className="text-orange-400 text-[10px] uppercase font-bold tracking-widest">Core Competencies</span>
                   </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Proficiency</span>
                    </h2>
                    <p className='text-slate-400 max-w-xl mx-auto font-light'>
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
                            className={`group relative bg-slate-900/40 backdrop-blur-md border border-white/5 p-8 rounded-2xl transition-all duration-300 
                                        hover:-translate-y-1 ${skill.borderGlow} hover:shadow-lg overflow-hidden`}
                        >
                            {/* Hover Background Flash */}
                            <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${skill.bgGlow}`}></div>

                            <div className="relative z-10 flex items-start gap-6">
                                {/* Icon Container */}
                                <div className={`p-4 rounded-xl bg-slate-800/50 border border-white/5 text-4xl ${skill.color} 
                                                transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                                    {skill.icon}
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-orange-100 transition-colors">
                                            {skill.title}
                                        </h3>
                                        <span className={`text-xs font-bold px-2 py-1 rounded border border-white/10 text-slate-300 bg-slate-800/50`}>
                                            {skill.levelText}
                                        </span>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4 font-light">
                                        {skill.desc}
                                    </p>

                                    {/* Progress Bar */}
                                    <div className="w-full h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: skill.level }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className={`h-full rounded-full ${skill.color === 'text-white' ? 'bg-slate-200' : skill.color.replace('text-', 'bg-')}`}
                                        />
                                    </div>
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