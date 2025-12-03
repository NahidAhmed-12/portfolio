import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaDraftingCompass, FaCode, FaRocket } from 'react-icons/fa';

function Workflow() {
    const steps = [
        {
            id: "01",
            title: "Planning",
            description: "Analyzing requirements and creating a solid roadmap for success.",
            icon: <FaLightbulb />
        },
        {
            id: "02",
            title: "Design",
            description: "Creating wireframes and high-fidelity UI designs with focus on UX.",
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
        <section className="relative w-full py-20 md:py-32 bg-[#020617]" id="workflow">
            
            {/* Global Background Noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-5 md:px-10 relative z-10">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        How I <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Work</span>
                    </h2>
                    <p className="text-slate-400 text-lg">From concept to reality in four simple steps.</p>
                </motion.div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Connecting Line (Desktop Only - Orange Gradient) */}
                    <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-red-500/20 -z-10 border-t border-dashed border-orange-500/30"></div>

                    {steps.map((step, index) => (
                        <motion.div 
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-slate-900/40 backdrop-blur-sm border border-white/5 p-6 pt-10 rounded-2xl hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Hover Gradient Bg */}
                            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>

                            {/* Floating Icon */}
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-slate-800 border border-orange-500/20 flex items-center justify-center text-2xl text-orange-400 shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all duration-300 z-20">
                                {step.icon}
                            </div>

                            {/* Content */}
                            <div className="relative z-10 text-center mt-4">
                                {/* Big Number Background */}
                                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-white/5 select-none -z-10 group-hover:text-orange-500/5 transition-colors">
                                    {step.id}
                                </span>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed font-light">
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