import React from 'react'

function TechStack() {
  return (
    <>
        {/* কলামের মধ্যে একটি মাঝারি গ্যাপ এবং সমান প্রস্থ রাখা হয়েছে */}
        <section className='flex items-center flex-col md:flex-row md:gap-12 px-5 sm:px-10 md:px-16 lg:px-24 py-16 md:py-20'>
            
            {/* ইমেজ কন্টেইনার (বাম পাশ) - ৫০% প্রস্থ */}
            <div className='w-full md:w-1/2 mb-10 md:mb-0 flex justify-center'>
                {/* এখন ছবিটি তার কন্টেইনারের পুরো জায়গা নেবে */}
                <img 
                    className='text-center w-full' 
                    src="/assets/tech-stack-illustration.png" // আপনার ছবির পাথ
                    alt="Technology stack illustration" 
                />
            </div>

            {/* টেক্সট কন্টেইনার (ডান পাশ) - ৫০% প্রস্থ */}
            <div className='w-full md:w-1/2'>
                <h1 className='text-3xl md:text-4xl font-bold text-center md:text-start'>
                    The Technologies I Use
                </h1>
                {/* পাঠযোগ্যতার জন্য টেক্সটের আকার ঠিক রাখা হয়েছে */}
                <p className='py-7 text-center md:text-start text-base lg:text-lg leading-relaxed'>
                    I enjoy building modern, fast, and scalable web applications with a powerful set of tools. My primary tech stack includes <strong>React</strong> for building dynamic user interfaces and <strong>Tailwind CSS</strong> for efficient styling. I am passionate about writing clean, maintainable code to deliver the best possible user experience.
                </p>
               <div className='text-center md:text-start'>
                 <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 font-semibold bg-transparent border-2 border-gray-500 rounded-full text-white transition-colors duration-300 hover:bg-gray-700 hover:border-gray-700"
                 >
                    <i className="fa-solid fa-code mr-3"></i>
                    Let's Build Together
                 </a>
               </div>
            </div>
       
        </section>
    </>
  )
}

export default TechStack;
