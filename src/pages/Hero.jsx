import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const Hero = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* --- CUSTOM CSS FOR ANIMATIONS (Same as Reference) --- */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1.2s ease-in-out forwards;
        }
        .animate-zoom-in {
          animation: zoomIn 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
      `}</style>

      {/* Main Container - Dark Premium Background */}
      <div className="w-full min-h-screen bg-[#050505] text-white relative overflow-hidden font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
        
        {/* Background Orbs (Replaced Pink with Tech Colors) */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-cyan-600/20 to-blue-600/10 rounded-full blur-[160px] pointer-events-none translate-x-1/4 -translate-y-1/4 opacity-0 animate-fade-in" style={{ animationDelay: '0ms' }}></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-purple-600/20 to-indigo-600/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/4 translate-y-1/4 opacity-0 animate-fade-in" style={{ animationDelay: '0ms' }}></div>

        {/* Main Wrapper */}
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between h-full min-h-screen px-6 py-20 lg:pt-28 gap-12 lg:gap-0 relative z-10">
          
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 text-center lg:text-left z-20 relative">
            
            <div className="space-y-6 relative z-10">
              
              {/* Tagline (Flower Style) */}
              <div className="flex items-center justify-center lg:justify-start gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <span className="w-10 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent inline-block"></span>
                  <p className="text-cyan-400 font-bold tracking-[0.25em] text-xs uppercase shadow-sm">
                     Est. {currentYear} • Portfolio
                  </p>
              </div>
              
              {/* H1 Title (Huge Font like Reference) */}
              <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-7xl text-white leading-[1.1] relative inline-block drop-shadow-sm opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                
                {/* Rotating Star Icon */}
                <svg className="absolute -top-8 -right-8 w-10 h-10 text-cyan-300 animate-[spin_8s_linear_infinite]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>

                Hi, I'm <br />
                
                <span className="relative inline-block z-10 mt-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 z-10 relative px-1 pb-1">
                    Nahid
                  </span>
                  {/* Underline SVG (Same as reference but cyan) */}
                  <svg className="absolute -bottom-3 left-0 w-full h-4 text-cyan-500/50 -z-10" viewBox="0 0 200 9" fill="none">
                      <path d="M2.00025 6.99999C45.5002 1.5 130 -2.5 198.5 3.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              
              {/* Typing Animation Subtitle */}
              <div className="text-gray-400 text-lg sm:text-2xl font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                 I am a <span className="font-semibold text-gray-200">
                    <TypeAnimation
                        sequence={[
                            'Frontend Developer', 2000,
                            'React Specialist', 2000,
                            'UI/UX Designer', 2000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                 </span>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed font-light opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                Crafting pixel-perfect web experiences. I transform complex problems into simple, beautiful, and intuitive designs.
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-8 relative z-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              
              {/* Primary Button */}
              <button className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg text-sm font-bold tracking-wide hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
                View My Work
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              
              {/* Secondary Button */}
              <button className="group flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 text-gray-300 rounded-lg text-sm font-bold tracking-wide hover:border-cyan-500 hover:text-white transition-all duration-300 bg-white/5 backdrop-blur-sm">
                Contact Me
              </button>
            </div>

            {/* Stats / Socials */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-10 relative z-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
               <div className="flex gap-5">
                  {[FaGithub, FaLinkedinIn, FaFacebookF].map((Icon, i) => (
                    <a key={i} href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-xl">
                        <Icon />
                    </a>
                  ))}
               </div>
               <div className="w-px h-8 bg-gray-800"></div>
               <div>
                  <p className="text-2xl font-serif text-white">20+</p>
                  <p className="text-[10px] text-cyan-500/80 uppercase tracking-wider mt-0 font-medium">Projects Done</p>
               </div>
            </div>
          </div>


          {/* --- RIGHT SIDE: IMAGE (Styled like the Flower Card) --- */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative opacity-0 animate-zoom-in" style={{ animationDelay: '400ms' }}>
            
            {/* Background Rings */}
            <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-[190px] -translate-x-1/2 lg:translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] z-0 hidden sm:block pointer-events-none">
               <div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-[spin_30s_linear_infinite]"></div>
               <div className="absolute inset-4 border border-dashed border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
            </div>

            {/* Image Frame Container */}
            <div className="relative w-full max-w-sm aspect-[3/4] group z-10">
              
              {/* Frame Border Effect */}
              <div className="absolute -inset-3 border border-white/10 rounded-2xl z-0 hidden lg:block backdrop-blur-[2px]"></div>

              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/20 z-10 bg-[#0a0a0a]">
                  
                  {/* Image */}
                  <img 
                    src="/Hero/person.avif" 
                    alt="Nahid" 
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105" 
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>

                  {/* Glass Card Overlay (Like the Flower Price Card) */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-lg animate-[fadeInUp_0.5s_ease-out]">
                      <div className="flex justify-between items-end">
                          <div>
                            <p className="text-cyan-400 text-[10px] tracking-widest uppercase mb-1 font-bold">
                                Expert In
                            </p>
                            <h3 className="text-white text-lg font-sans tracking-wide">
                                React & Next.js
                            </h3>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-lg">
                              JS
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;