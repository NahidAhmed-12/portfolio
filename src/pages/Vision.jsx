import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

// Background Component (To match Hero Styles)
const VisionBackground = () => (
  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-[#020617]"></div>
      {/* Soft Gradient Blobs */}
      <div className="absolute top-[20%] left-[20%] w-[40vw] h-[40vh] rounded-full bg-orange-600/10 blur-[100px] opacity-60"></div>
      <div className="absolute bottom-[20%] right-[20%] w-[40vw] h-[40vh] rounded-full bg-red-900/10 blur-[100px] opacity-60"></div>
      {/* Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
  </div>
);

function Vision() {
  return (
    <section className='relative py-24 px-4 md:px-8 overflow-hidden'>
        
        {/* 1. Shared Background */}
        <VisionBackground />

        <div className="max-w-5xl mx-auto relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                
                // 2. Glassmorphic Card Style (Similar to Hero's SlideshowCard)
                className='relative bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl overflow-hidden group hover:border-orange-500/20 transition-colors duration-500'
            >
                {/* Decorative Grid/Glow */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-orange-500/10 blur-[80px] rounded-full"></div>

                {/* Big Quote Icon Watermark */}
                <FaQuoteLeft className="absolute top-10 left-10 text-8xl text-white/5 -z-10 transform -translate-y-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />
                <FaQuoteRight className="absolute bottom-10 right-10 text-8xl text-white/5 -z-10 transform translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-700" />

                {/* 3. Badge Style (Matches Hero's EST badge) */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/5 backdrop-blur-sm shadow-[0_0_15px_rgba(249,115,22,0.1)] mb-8">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    <span className="text-orange-400 text-xs font-bold tracking-[0.2em] uppercase">
                        My Philosophy
                    </span>
                </div>

                {/* 4. Main Text Typography (Matches Hero Font) */}
                <h2 className='text-white/90 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-4xl mx-auto tracking-tight relative z-10'>
                    Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 font-bold">intuitive</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500 font-bold">engaging</span> digital experiences with clean, user-focused code.
                </h2>
                
                {/* 5. Author/Signature Footer */}
                <div className="mt-10 flex flex-col items-center justify-center gap-3">
                    <div className="w-16 h-1 rounded-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
                    <p className="text-slate-500 font-serif italic text-lg">" Simplicity is the soul of efficiency "</p>
                </div>

            </motion.div>
        </div>
    </section>
  )
}

export default Vision;