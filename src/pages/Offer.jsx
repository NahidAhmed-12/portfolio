import React from 'react';
import { motion } from 'framer-motion';

function Offer() {
    const services = [
        {
            Imge: "/Icons/Group 1.svg",
            Heading: "Responsive Web Design",
            Des: "Crafting websites that provide an optimal viewing and interaction experience across all devices."
        },
        {
            Imge: "/Icons/Group 23.svg",
            Heading: "Interactive UI Development",
            Des: "Building dynamic, engaging, and user-friendly interfaces using modern JavaScript frameworks like React."
        },
        {
            Imge: "/Icons/analytics.png",
            Heading: "Performance Optimization",
            Des: "Optimizing web applications for maximum speed and efficiency to ensure a seamless user experience."
        }
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section className='bg-[#050505] py-20 px-5 md:px-24'>
            
            {/* Header Section */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='text-center mb-16'
            >
                <h1 className='text-3xl md:text-5xl font-bold text-white mb-4'>
                    What I <span className="text-cyan-400">Offer</span>
                </h1>
                <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
                    High-quality web solutions tailored to your specific needs.
                </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            >
               {services.map((service, i) => ( 
                <motion.div 
                    key={i} 
                    variants={cardVariants}
                    // Card Styling: Clean, Dark, No Border, Hover Effect
                    className='group bg-[#0F0F0F] hover:bg-[#141414] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2'
                >
                    {/* Icon Container with Glow */}
                    <div className='w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-gray-800 to-black flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/20 transition-all duration-300'>
                       <img 
                            className='w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110' 
                            src={service.Imge} 
                            alt={service.Heading} 
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className='text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300'>
                            {service.Heading}
                        </h2>
                        <p className='text-gray-400 text-sm md:text-base leading-relaxed'>
                            {service.Des}
                        </p>
                    </div>
                </motion.div>
               ))}
            </motion.div>
        </section>
    )
}

export default Offer;