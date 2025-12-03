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
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
       <section className='relative w-full py-20 md:py-32 bg-[#020617] overflow-hidden'>
          
          {/* Global Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-orange-600/10 rounded-full blur-[100px] opacity-40"></div>
              <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-red-900/10 rounded-full blur-[100px] opacity-40"></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          </div>

          <div className='max-w-7xl mx-auto px-6 md:px-10 relative z-10'>
              
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='text-center mb-16'
              >
                   <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-sm mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                        <span className="text-orange-400 text-[10px] uppercase font-bold tracking-widest">Feedback</span>
                   </div>

                  <h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
                      What My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">Clients Say</span>
                  </h2>
                  
                  {/* Styled Divider */}
                  <div className="flex items-center justify-center gap-2 opacity-50">
                      <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-orange-500"></div>
                      <div className="w-2 h-2 rounded-full border border-orange-500"></div>
                      <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-orange-500"></div>
                  </div>
              </motion.div>
              
              {/* Grid */}
              <motion.div 
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
              >
                   {testimonials.map((testimonial, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariant}
                            className='group relative bg-slate-900/40 backdrop-blur-md border border-white/5 p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:border-orange-500/30 hover:-translate-y-2'
                        >
                           {/* Hover Gradient Effect */}
                           <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                           <div className='relative z-10 flex flex-col h-full'>
                               {/* Top Row: Quote Icon & Stars */}
                               <div className="flex justify-between items-start mb-6">
                                   <div className="text-orange-500/50 text-4xl group-hover:text-orange-500 transition-colors duration-300">
                                       <FaQuoteLeft />
                                   </div>
                                   <div className="flex gap-1">
                                       {[...Array(5)].map((_, i) => (
                                           <FaStar key={i} className="text-amber-500/40 group-hover:text-amber-400 text-xs transition-colors" />
                                       ))}
                                   </div>
                               </div>
                               
                               <p className='text-slate-300 text-base leading-relaxed mb-8 flex-grow font-light italic'>
                                   "{testimonial.comment}"
                               </p>
                               
                               {/* Client Info */}
                               <div className='flex items-center gap-4 pt-6 border-t border-white/5 group-hover:border-orange-500/20 transition-colors'>
                                  <div className="relative">
                                    {/* Image Glow */}
                                    <div className="absolute -inset-1 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full blur opacity-0 group-hover:opacity-40 transition duration-500"></div>
                                    <img 
                                        className='relative w-12 h-12 object-cover rounded-full border border-slate-700 group-hover:border-orange-500/50 transition-colors' 
                                        src={testimonial.profileImg} 
                                        alt={testimonial.userName} 
                                    />
                                  </div>
                                  <div>
                                     <h3 className='font-bold text-slate-100 text-sm group-hover:text-orange-200 transition-colors'>{testimonial.userName}</h3>
                                     <p className='text-xs text-slate-500 group-hover:text-slate-400 transition-colors'>{testimonial.userTitle}</p>
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