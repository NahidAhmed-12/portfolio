import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaCode, FaPaintBrush, FaMobileAlt, FaArrowRight, FaRocket } from 'react-icons/fa';
import { SiNextdotjs, SiFigma, SiTailwindcss } from 'react-icons/si';

const Services = () => {
  
 
  const fiverrProfile = "https://www.fiverr.com/nahidahmad10";

  const servicesData = [
    {
      id: 1,
      title: "Convert Figma/XD to React",
      icon: <SiFigma />,
      description: "I will convert your Figma, XD, or PSD designs into pixel-perfect, responsive React/Next.js code.",
      features: ["100% Hand-coded", "Mobile Responsive", "Pixel Perfect", "Hover Effects"],
      price: "Starting at $15",
      link: fiverrProfile 
    },
    {
      id: 2,
      title: "React Landing Page",
      icon: <FaPaintBrush />,
      description: "Need a modern landing page? I will build a high-converting, fast-loading landing page for your business.",
      features: ["Modern UI/UX", "Fast Loading", "SEO Friendly", "Scroll Animations"],
      price: "Starting at $40", 
      link: fiverrProfile
    },
    {
      id: 3,
      title: "Complete Frontend Website",
      icon: <FaCode />,
      description: "A complete multi-page React application with routing, state management, and API integration.",
      features: ["3-5 Pages", "API Integration", "Dynamic Content", "Contact Form"],
      price: "Starting at $80", 
      link: fiverrProfile
    }
  ];
  return (
    <section id="services" className="relative py-20 bg-slate-950 overflow-hidden font-sans">
      
      {/* --- BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px]"></div>
         
          
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-400 text-xs font-bold uppercase tracking-widest mb-4">
             What I Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Services</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Professional web development services tailored to your needs. I deliver high-quality, clean, and maintainable code.
          </p>
        </motion.div>

        {/* --- SERVICE CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => (
                <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="group relative h-full"
                >
                    {/* Hover Glow Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur opacity-20"></div>
                    
                    <div className="relative h-full bg-slate-900/80 backdrop-blur-xl border border-white/5 group-hover:border-orange-500/30 p-8 rounded-2xl flex flex-col transition-all duration-300 group-hover:-translate-y-2">
                        
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-xl bg-slate-800 border border-slate-700 group-hover:bg-orange-500 group-hover:border-orange-400 flex items-center justify-center text-2xl text-orange-500 group-hover:text-white transition-all duration-300 shadow-lg mb-6">
                            {service.icon}
                        </div>

                        {/* Title & Desc */}
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                            {service.description}
                        </p>

                        {/* Features List */}
                        <ul className="space-y-2 mb-8">
                            {service.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                                    <span className="text-orange-500 text-xs">⚡</span> {feature}
                                </li>
                            ))}
                        </ul>

                        {/* Price & Action */}
                        <div className="mt-auto pt-6 border-t border-slate-800 flex items-center justify-between">
                            <div>
                                <p className="text-slate-500 text-xs uppercase font-bold">Starting at</p>
                                <p className="text-white font-bold text-lg">{service.price}</p>
                            </div>
                            
                            <a 
                                href={service.link}
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-orange-500 border border-slate-700 hover:border-orange-400 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 transform group-hover:rotate-[-45deg]"
                            >
                                <FaArrowRight />
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* --- EXTRA CTA --- */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
        >
             <p className="text-slate-400 mb-6">Looking for a custom package?</p>
             <a 
                href={fiverrProfile} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold shadow-lg shadow-orange-500/20 transition-all active:scale-95"
             >
                <FaRocket /> View More on Fiverr
             </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;