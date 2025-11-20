import React from 'react'

function Curious() {
  return (
    <>
        {/* মূল সেকশন কন্টেইনার */}
        <section className='flex items-center flex-col-reverse md:flex-row md:gap-12 lg:gap-16 px-5 sm:px-10 md:px-16 lg:px-24 py-16 md:py-24'>
            
            {/* টেক্সট কন্টেন্ট (বাম পাশ) */}
            <div className='w-full md:w-1/2 text-center md:text-start'>
                <h1 className='text-3xl lg:text-4xl font-bold max-w-lg'>
                    Curious How This Site Was Built?
                </h1>
                <p className='text-md py-5 max-w-md'>
                    This portfolio was brought to life using React and Tailwind CSS, with a strong focus on clean, reusable code. You can explore the entire codebase on my GitHub to see how everything works behind the scenes.
                </p>
                <div className='flex justify-center md:justify-start mt-4'>
                     <a 
                        href="https://github.com/NahidAhmed-12/portfolio.git" // এখানে আপনার গিটহাব রিপোজিটরির লিংক দিন
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='bg-[#772AB3] hover:bg-purple-800 transition-colors duration-300 text-white font-bold py-3 px-6 rounded-full inline-flex items-center'
                     >
                        <i className="fa-brands fa-github mr-3"></i>
                        View Source Code
                     </a>
                </div>
            </div>

            {/* ইমেজ / SVG (ডান পাশ) */}
            <div className='w-full md:w-1/2 mb-10 md:mb-0 flex justify-center'>
                <img 
                    className='text-center w-full max-w-md md:max-w-full' 
                    src="/assets/programing.svg" 
                    alt="Programming illustration" 
                />
            </div>
            
        </section>
    </>
  )
}

export default Curious;
