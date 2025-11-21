import React from 'react';

function About() {
  return (
    // পরিবর্তন: 'py-12' বা আগের ভ্যালুর বদলে 'pt-0' দেওয়া হয়েছে যাতে উপরে কোনো ফাঁকা জায়গা না থাকে।
    // 'pb-12 md:pb-20' রাখা হয়েছে যাতে নিচের দিকে স্পেস ঠিক থাকে।
    <section id="about" className="pt-0 pb-12 md:pt-0 md:pb-20 relative overflow-hidden">
      
      {/* --- Background Glow (Skills সেকশনের সাথে মিল রেখে) --- */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wide">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Get to know me better. Here is a little brief about my journey as a developer.
          </p>
        </div>

        {/* --- Main Content --- */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left Side: Image with Gradient Border */}
          <div className="w-full md:w-5/12 flex justify-center">
            {/* 
               সংশোধন: আগের 'p-1 bg-gradient...' সরিয়ে সরাসরি 'border-2 border-cyan-500' দেওয়া হয়েছে।
               এর ফলে ব্যাকগ্রাউন্ড এখন সম্পূর্ণ transparent থাকবে এবং নীল দেখাবে না। 
            */}
            <div className="rounded-2xl border-2 border-cyan-500 shadow-2xl shadow-cyan-500/20">
              <div className="bg-transparent rounded-xl overflow-hidden">
                <img 
                  src="/person.webp" 
                  alt="Nahid" 
                  className="w-72 h-72 md:w-80 md:h-80 object-cover transition-transform duration-500 hover:scale-110 opacity-90 hover:opacity-100"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-7/12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Nahid</span>
            </h3>
            <h4 className="text-xl font-semibold text-gray-300 mb-4">
              A Passionate Frontend Developer
            </h4>
            
            <p className="text-gray-400 leading-relaxed mb-8 text-base md:text-lg border-l-4 border-cyan-500 pl-4 bg-neutral-800/30 py-2 rounded-r-lg">
              I specialize in building responsive, user-friendly, and aesthetic web applications. With a strong foundation in modern web technologies, I transform creative ideas into functional code. I am always eager to learn new tools and improve my skills.
            </p>

            {/* --- Personal Info Grid (Icons Added) --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              
              <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <i className="fa-solid fa-user text-cyan-500"></i>
                <span className="font-bold min-w-[80px]">Name:</span>
                <span>Nahid</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <i className="fa-solid fa-code text-cyan-500"></i>
                <span className="font-bold min-w-[80px]">Role:</span>
                <span>Frontend Dev</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <i className="fa-solid fa-envelope text-cyan-500"></i>
                <span className="font-bold min-w-[80px]">Email:</span>
                <span className="cursor-pointer">nahid@example.com</span>
              </div>

              <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                <i className="fa-solid fa-location-dot text-cyan-500"></i>
                <span className="font-bold min-w-[80px]">Location:</span>
                <span>Dhaka, BD</span>
              </div>

            </div>

            {/* --- Buttons --- */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transform hover:-translate-y-1 transition-all duration-300">
                Download CV <i className="fa-solid fa-download ml-2"></i>
              </button>
              
              <a href="/contact" className="px-8 py-3 rounded-lg border-2 border-cyan-500/50 text-cyan-400 font-bold hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300">
                Contact Me
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About;