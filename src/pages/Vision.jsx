import React from 'react';
import { motion } from 'framer-motion';

function Vision() {
  return (
    <section className='py-12 px-4 md:px-8 bg-[#050505] flex justify-center'>
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            
            // Container Styling: No Border, Soft Background, Responsive Padding
            className='w-full max-w-4xl bg-gradient-to-b from-[#121212] to-transparent rounded-3xl p-6 md:p-12 text-center'
        >
            
            {/* Title: Small & Elegant */}
            <h2 className='text-sm md:text-base font-bold text-cyan-500 tracking-[0.2em] uppercase mb-4'>
                My Philosophy
            </h2>

            {/* Main Text: Responsive Font Size */}
            <p className='text-white/90 text-lg sm:text-xl md:text-3xl font-medium leading-relaxed max-w-3xl mx-auto'>
                Crafting <span className="text-cyan-200">intuitive</span> and <span className="text-cyan-200">engaging</span> digital experiences with clean, user-focused code.
            </p>
            
            {/* Optional Subtle Glow underneath text (No borders) */}
            <div className="mt-8 h-1 w-20 bg-cyan-500/50 rounded-full mx-auto blur-sm"></div>

        </motion.div>
    </section>
  )
}

export default Vision;