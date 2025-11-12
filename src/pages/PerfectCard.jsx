import React from 'react'

// ফাইলের নাম পরিবর্তন করে TechStack.jsx রাখতে পারেন
function TechStack() {
  return (
    <>
        <section className='flex items-center flex-col md:flex-row md:gap-12 lg:gap-16 px-5 sm:px-10 md:px-16 lg:px-24 py-16 md:py-20'>
            
            {/* ইমেজ / SVG (বাম পাশ) */}
            <div className='w-full md:w-1/2 mb-10 md:mb-0 flex justify-center'>
                {/* unDraw বা Storyset থেকে Tech Stack সম্পর্কিত একটি ছবি যুক্ত করুন */}
                <img 
                    className='text-center w-full max-w-md md:max-w-full' 
                    src="/assets/tech-stack-illustration.png" // নতুন ছবির পাথ
                    alt="Technology stack illustration" 
                />
            </div>

            {/* টেক্সট কন্টেন্ট (ডান পাশ) */}
            <div className='w-full md:w-1/2'>
                <h1 className='text-3xl md:text-4xl font-bold text-center md:text-start'>
                    The Technologies I Use
                </h1>
                <p className='text-sm md:max-w-lg py-7 text-center md:text-start'>
                    I enjoy building modern, fast, and scalable web applications with a powerful set of tools. My primary tech stack includes **React** for building dynamic user interfaces and **Tailwind CSS** for efficient styling. I am passionate about writing clean, maintainable code to deliver the best possible user experience.
                </p>
               <div className='text-center md:text-start'>
                 <button radius="full" className='btn bg-[#772AB3] hover:bg-purple-800 transition-colors duration-300 text-white'>
                    Let's Build Together
                 </button>
               </div>
            </div>
       
        </section>
    </>
  )
}

export default TechStack;
