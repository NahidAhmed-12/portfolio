import React from 'react';

function Contact() {
  return (
    <section id="contact" className="w-full py-20 bg-transparent text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 pb-2">
            Contact Me
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            আপনার প্রজেক্ট বা আইডিয়া নিয়ে কথা বলতে চাই? আমাকে মেসেজ করুন।
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Left Side: Contact Info (Glassmorphism Card) */}
          <div className="flex flex-col justify-between p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl hover:border-cyan-500/30 transition-all duration-300">
            <div>
              <h3 className="text-3xl font-bold text-white">Nahid</h3>
              <p className="text-cyan-400 text-xl font-medium mt-2">Frontend Developer</p>
              <p className="text-gray-400 mt-4 leading-relaxed">
                আমি মডার্ন এবং রেসপন্সিভ ওয়েবসাইট তৈরি করতে ভালোবাসি। আপনার যদি কোনো প্রজেক্ট থাকে বা শুধুই হ্যালো বলতে চান, নির্দ্বিধায় যোগাযোগ করুন।
              </p>
            </div>

            {/* Contact Details with SVG Icons */}
            <div className="mt-10 space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-3 rounded-full bg-white/10 group-hover:bg-cyan-500/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email Me</p>
                  <p className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">nahid@example.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="p-3 rounded-full bg-white/10 group-hover:bg-cyan-500/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call Me</p>
                  <p className="text-lg font-medium text-white group-hover:text-cyan-400 transition-colors">+880 1234 567890</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-full bg-white/10 group-hover:bg-cyan-500/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-lg font-medium text-white">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form (Glassmorphism Card) */}
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:from-cyan-600 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-cyan-500/30"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
