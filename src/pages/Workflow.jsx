import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaDraftingCompass, FaCode, FaRocket } from 'react-icons/fa';

function Workflow() {
    const steps = [
        {
            id: "01",
            title: "Planning",
            description: "Analyzing requirements and creating a solid roadmap.",
            icon: <FaLightbulb />
        },
        {
            id: "02",
            title: "Design",
            description: "Creating wireframes and high-fidelity UI designs.",
            icon: <FaDraftingCompass />
        },
        {
            id: "03",
            title: "Development",
            description: "Writing clean, scalable code with modern tech stacks.",
            icon: <FaCode />
        },
        {
            id: "04",
            title: "Launch",
            description: "Testing, optimization, and deployment to live server.",
            icon: <FaRocket />
        }
    ];

    return (
        <section className="relative w-full py-20 md:py-32 bg-[#050505]" id="workflow">
            <div className="max-w-7xl mx-auto px-5 md:px-10">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        How I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Work</span>
                    </h2>
                    <p className="text-gray-400">From concept to reality in four simple steps.</p>
                </motion.div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Connecting Line (Desktop Only) */}
                    <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 -z-10 border-t border-dashed border-white/10"></div>

                    {steps.map((step, index) => (
                        <motion.div 
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-[#0a0a0a] border border-white/5 p-6 rounded-2xl hover:border-cyan-500/30 transition-all duration-300"
                        >
                            {/* Hover Gradient Bg */}
                            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>

                            {/* Icon & Number Header */}
                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className="w-14 h-14 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-2xl text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300">
                                    {step.icon}
                                </div>
                                <span className="text-5xl font-bold text-white/5 group-hover:text-cyan-500/10 transition-colors">
                                    {step.id}
                                </span>
                            </div>

                            {/* Text Content */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Workflow;