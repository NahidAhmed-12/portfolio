import React from 'react';

function Contact() {
  // সোশ্যাল মিডিয়া ডাটা কনফিগারেশন (যাতে প্রতিটির আলাদা কালার হয়)
  const socialLinks = [
    { 
        name: 'facebook', 
        icon: 'fa-facebook-f', 
        gradient: 'hover:from-blue-600 hover:to-blue-400', 
        shadow: 'hover:shadow-blue-500/50' 
    },
    { 
        name: 'twitter', 
        icon: 'fa-twitter', 
        gradient: 'hover:from-sky-500 hover:to-cyan-400', 
        shadow: 'hover:shadow-sky-500/50' 
    },
    { 
        name: 'linkedin', 
        icon: 'fa-linkedin-in', 
        gradient: 'hover:from-indigo-600 hover:to-blue-500', 
        shadow: 'hover:shadow-indigo-500/50' 
    },
    { 
        name: 'github', 
        icon: 'fa-github', 
        gradient: 'hover:from-violet-600 hover:to-fuchsia-600', 
        shadow: 'hover:shadow-violet-500/50' 
    }
  ];

  return (
    <section id="contact" className="pt-0 pb-16 md:pt-0 md:pb-24 relative overflow-hidden bg-transparent">
      
      {/* --- Background Effects --- */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] -z-10"></div>

      <div className="max-w-6xl mx-auto px-5 md:px-12 relative z-10">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-12 md:mb-20" data-aos="fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Touch</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full shadow-lg shadow-cyan-500/50"></div>
          <p className="text-gray-400 mt-6 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or just want to say hello? I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          
          {/* --- Left Side: Contact Info --- */}
          <div className="flex flex-col gap-8">
            
            <div className="space-y-2">
                <h3 className="text-3xl font-bold text-white">Let's Collaborate</h3>
                <p className="text-gray-400 text-lg">
                    I'm available for freelance work and open to discussing new projects.
                </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              
              {/* Email Card */}
              <a href="mailto:nahid@example.com" className="group relative flex items-center gap-5 p-1 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 hover:from-cyan-500 hover:to-blue-600 transition-all duration-500">
                <div className="relative w-full flex items-center gap-5 p-5 rounded-xl bg-neutral-900/90 backdrop-blur-xl border border-white/5 group-hover:border-transparent transition-all duration-300 overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:bg-cyan-500/20 transition-all duration-500"></div>
                  <div className="relative h-14 w-14 shrink-0 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 z-10">
                     <i className="fa-solid fa-envelope text-xl"></i>
                  </div>
                  <div className="z-10">
                    <p className="text-sm text-gray-400 font-medium group-hover:text-cyan-300 transition-colors mb-1">Email Me</p>
                    <h4 className="text-lg md:text-xl font-bold text-white group-hover:tracking-wide transition-all">nahid@example.com</h4>
                  </div>
                  <div className="absolute right-5 opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-400">
                     <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a href="tel:+8801234567890" className="group relative flex items-center gap-5 p-1 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 hover:from-blue-500 hover:to-indigo-600 transition-all duration-500">
                <div className="relative w-full flex items-center gap-5 p-5 rounded-xl bg-neutral-900/90 backdrop-blur-xl border border-white/5 group-hover:border-transparent transition-all duration-300 overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:bg-blue-500/20 transition-all duration-500"></div>
                  <div className="relative h-14 w-14 shrink-0 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300 z-10">
                      <i className="fa-solid fa-phone text-xl"></i>
                  </div>
                  <div className="z-10">
                    <p className="text-sm text-gray-400 font-medium group-hover:text-blue-300 transition-colors mb-1">Call Me</p>
                    <h4 className="text-lg md:text-xl font-bold text-white group-hover:tracking-wide transition-all">+880 1234 567890</h4>
                  </div>
                   <div className="absolute right-5 opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-400">
                     <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="group relative flex items-center gap-5 p-1 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 hover:from-teal-500 hover:to-emerald-600 transition-all duration-500">
                <div className="relative w-full flex items-center gap-5 p-5 rounded-xl bg-neutral-900/90 backdrop-blur-xl border border-white/5 group-hover:border-transparent transition-all duration-300 overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-teal-500/10 blur-[50px] rounded-full translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:bg-teal-500/20 transition-all duration-500"></div>
                  <div className="relative h-14 w-14 shrink-0 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] transition-all duration-300 z-10">
                      <i className="fa-solid fa-location-dot text-xl"></i>
                  </div>
                  <div className="z-10">
                    <p className="text-sm text-gray-400 font-medium group-hover:text-teal-300 transition-colors mb-1">Location</p>
                    <h4 className="text-lg md:text-xl font-bold text-white group-hover:tracking-wide transition-all">Dhaka, Bangladesh</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* --- UPDATED: Social Media Links --- */}
            <div className="mt-6">
                <p className="text-gray-400 mb-5 text-sm font-medium uppercase tracking-widest">Follow Me</p>
                <div className="flex gap-5">
                    {socialLinks.map((social, idx) => (
                        <a 
                          key={idx} 
                          href="#" 
                          className={`
                            group h-12 w-12 rounded-xl bg-neutral-800/50 backdrop-blur-md border border-white/10 
                            flex items-center justify-center text-gray-400 
                            bg-gradient-to-br ${social.gradient}
                            transition-all duration-500 ease-out
                            hover:text-white hover:scale-110 hover:-translate-y-2 
                            hover:border-transparent shadow-lg ${social.shadow}
                          `}
                        >
                            <i className={`fa-brands ${social.icon} text-xl transition-transform duration-300 group-hover:rotate-6`}></i>
                        </a>
                    ))}
                </div>
            </div>

          </div>

          {/* --- Right Side: Form --- */}
          <div className="p-8 rounded-3xl bg-neutral-900/50 backdrop-blur-xl border border-white/5 shadow-[0_0_50px_-12px_rgba(6,182,212,0.15)] relative">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6 relative z-10">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-cyan-400 transition-colors">
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <input 
                          type="text" 
                          className="w-full pl-11 pr-4 py-4 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-black/40 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300"
                          placeholder="Nahid Hasan"
                        />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">Phone</label>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-blue-400 transition-colors">
                            <i className="fa-solid fa-phone-volume"></i>
                        </div>
                        <input 
                          type="text" 
                          className="w-full pl-11 pr-4 py-4 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-black/40 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300"
                          placeholder="+880 1XXX..."
                        />
                    </div>
                  </div>
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-cyan-400 transition-colors">
                        <i className="fa-regular fa-envelope"></i>
                    </div>
                    <input 
                      type="email" 
                      className="w-full pl-11 pr-4 py-4 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-black/40 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300"
                      placeholder="nahid@example.com"
                    />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Your Message</label>
                <div className="relative group">
                    <div className="absolute top-4 left-0 pl-4 pointer-events-none text-gray-500 group-focus-within:text-blue-400 transition-colors">
                        <i className="fa-regular fa-message"></i>
                    </div>
                    <textarea 
                      rows="4" 
                      className="w-full pl-11 pr-4 py-4 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-black/40 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 resize-none"
                      placeholder="How can I help you?"
                    ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg tracking-wide
                           shadow-[0_0_20px_rgba(6,182,212,0.3)] 
                           hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 active:scale-95
                           transition-all duration-300 ease-in-out flex justify-center items-center gap-3 group"
              >
                Send Message 
                <i className="fa-solid fa-paper-plane group-hover:translate-x-1 transition-transform"></i>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;