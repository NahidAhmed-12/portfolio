import React from 'react'

function About() {
  return (
    // পরিবর্তন: 
    // আগে 'py-20' ছিল যা উপরে-নিচে অনেক জায়গা নিচ্ছিল।
    // এখন 'pt-10' (উপরে কম জায়গা) এবং 'pb-20' (নিচে ঠিকঠাক জায়গা) করা হয়েছে।
    // যদি আরও উপরে উঠাতে চান, 'pt-10' এর বদলে 'pt-5' ব্যবহার করতে পারেন।
    <section id="about" className="pt-10 pb-20 md:pt-16 bg-transparent text-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">
            About <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Get to know me better. Here is a little brief about my journey as a developer.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Side: Image */}
          <div className="w-full md:w-5/12 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-700">
              <img 
                src="/person.webp" 
                alt="Nahid" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-7/12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              I'm <span className="text-blue-500">Nahid</span>, a Passionate Frontend Developer
            </h3>
            
            <p className="text-slate-300 leading-relaxed mb-6 text-base md:text-lg">
              I specialize in building responsive, user-friendly, and aesthetic web applications. With a strong foundation in modern web technologies, I transform creative ideas into functional code. I am always eager to learn new tools and improve my skills to deliver high-quality solutions.
            </p>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8 text-slate-300">
              <div className="flex items-center">
                <span className="font-bold min-w-[80px] text-white">Name:</span>
                <span>Nahid</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold min-w-[80px] text-white">Role:</span>
                <span>Frontend Developer</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold min-w-[80px] text-white">Email:</span>
                <span className="text-blue-400 hover:underline cursor-pointer">nahid@example.com</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold min-w-[80px] text-white">Location:</span>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1">
                Download CV
              </button>
              <a href="#contact" className="px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300">
                Contact Me
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
