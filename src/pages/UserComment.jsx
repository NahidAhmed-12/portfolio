import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

function Testimonials() {
    const testimonials = [
        {
            comment: "Working with them was a fantastic experience. They delivered a high-quality product on schedule. Excellent communication throughout.",
            profileImg: "/Clients Say/client-1.jpg", 
            userName: "Sarah Johnson",
            userTitle: "Project Manager, Tech Solutions"
        },
        {
            comment: "Perfectly translated my Figma designs into a pixel-perfect, interactive web application. Highly recommended for attention to detail!",
            profileImg: "/Clients Say/client-2.jpg", 
            userName: "Michael Chen",
            userTitle: "Lead UI/UX Designer"
        },
        {
            comment: "Built a fast and responsive website and provided great suggestions to improve the user experience. Invaluable technical expertise.",
            profileImg: "/Clients Say/client-3.jpg", 
            userName: "David Lee",
            userTitle: "Founder, Innovate Co."
        }
    ];

    // Animation Variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
       <section className='relative w-full py-20 md:py-32 bg-[#050505] overflow-hidden'>
          
          {/* Background Gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
              <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-cyan-900/10 rounded-full blur-[100px]"></div>
              <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-blue-900/10 rounded-full blur-[100px]"></div>
          </div>

          <div className='max-w-7xl mx-auto px-5 md:px-10 relative z-10'>
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='text-center mb-16'
              >
                  <h2 className='text-3xl md:text-5xl font-bold text-white mb-4'>
                      What My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Clients Say</span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
              </motion.div>
              
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              >
                   {testimonials.map((testimonial, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariant}
                            className='group relative bg-[#0f0f0f] border border-white/5 p-8 rounded-2xl overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]'
                        >
                            {/* Hover Glow Effect */}
                           <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                           <div className='relative z-10 flex flex-col h-full'>
                               <div className="mb-6 text-cyan-500 text-4xl opacity-50">
                                   <FaQuoteLeft />
                               </div>
                               
                               <p className='text-gray-300 text-lg leading-relaxed mb-8 flex-grow'>
                                   "{testimonial.comment}"
                               </p>
                               
                               <div className='flex items-center gap-4 pt-6 border-t border-white/10'>
                                  <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-[2px] opacity-50"></div>
                                    <img 
                                        className='relative w-12 h-12 object-cover rounded-full border border-white/20' 
                                        src={testimonial.profileImg} 
                                        alt={testimonial.userName} 
                                    />
                                  </div>
                                  <div>
                                     <h3 className='font-bold text-white group-hover:text-cyan-400 transition-colors'>{testimonial.userName}</h3>
                                     <p className='text-sm text-gray-500'>{testimonial.userTitle}</p>
                                  </div>
                               </div>
                           </div>
                        </motion.div>
                    ))}
              </motion.div>
          </div>
       </section>
    );
}

export default Testimonials;