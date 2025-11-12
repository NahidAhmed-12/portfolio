import React from 'react'

// ফাইলটির নাম DebitCard.jsx থেকে FeaturedProject.jsx পরিবর্তন করতে পারেন
function FeaturedProject() {
  return (
    <>
        <section className='flex md:px-24 px-5 py-24 items-center flex-col-reverse md:flex-row'>
            <div className='w-full md:w-1/2 text-center md:text-start'>
                <h1 className='text-3xl lg:text-4xl font-bold max-w-lg'>Featured Project: Modern Web App</h1>
                <p className='text-md py-5 max-w-md'>
                    A showcase of a dynamic and responsive web application built with React and modern web technologies. This project features a seamless user experience, interactive UI components, and is optimized for high performance.
                </p>
                <div className='flex flex-col md:flex-row items-center gap-5'>
                     <button radius="full" className='bg-[#772AB3] btn text-white'>
                        View Live Demo <i className="fa-solid fa-arrow-up-right-from-square ml-2"></i>
                     </button>
                     <button radius="full" className='bg-transparent border border-gray-400 hover:bg-gray-800 btn text-white'>
                        View on GitHub <i className="fa-brands fa-github ml-2"></i>
                     </button>
                </div>
            </div>

            <div className='md:w-1/2 mb-10 flex justify-center'>
                {/* এখানে আপনার প্রজেক্টের একটি মকআপ বা স্ক্রিনশট ব্যবহার করুন */}
                <img className='text-center w-[90%] md:w-full' src="./programing.svg" alt="Featured project mockup" />
            </div>
        </section>
    </>
  )
}

export default FeaturedProject;
