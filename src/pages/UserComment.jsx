import React from 'react'

// ফাইলের নাম UserComment.jsx থেকে Testimonials.jsx পরিবর্তন করতে পারেন
function Testimonials() {
    const testimonials = [
        {
            quoteIcon: "/Images/quote-icon.svg", // একটি সুন্দর উক্তি আইকন ব্যবহার করুন
            comment: "Working with them was a fantastic experience. They are a highly skilled developer who delivered a high-quality product on schedule. Their communication was excellent throughout the entire project.",
            profileImg: "/Images/client-1.jpg", // ক্লায়েন্ট ১ এর ছবি
            userName: "Sarah Johnson",
            userTitle: "Project Manager, Tech Solutions Inc."
        },
        {
            quoteIcon: "/Images/quote-icon.svg",
            comment: "As a designer, it's a dream to work with a developer who pays such close attention to detail. They perfectly translated my Figma designs into a pixel-perfect, interactive web application. Highly recommended!",
            profileImg: "/Images/client-2.jpg", // ক্লায়েন্ট ২ এর ছবি
            userName: "Michael Chen",
            userTitle: "Lead UI/UX Designer, Creative Minds"
        },
        {
            quoteIcon: "/Images/quote-icon.svg",
            comment: "Their technical expertise and problem-solving skills were invaluable to our startup. They not only built a fast and responsive website but also provided great suggestions to improve the user experience.",
            profileImg: "/Images/client-3.jpg", // ক্লায়েন্ট ৩ এর ছবি
            userName: "David Lee",
            userTitle: "Founder, Innovate Co."
        }
    ];

  return (
     <>
       <section className='md:px-24 px-5 py-20'>
          {/* সেকশনের শিরোনাম */}
          <h1 className='text-3xl lg:text-4xl text-center mb-12 font-bold'>What My Clients Say</h1>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
               {testimonials.map((testimonial, index) => (
                    // কার্ডটিকে flex কন্টেইনার বানানো হয়েছে যাতে কন্টেন্ট সমানভাবে থাকে
                    <div key={index} className='bg-[#27322F3D] p-6 rounded-xl backdrop-blur-sm hover:bg-[#1c26233d] transition-all duration-300 shadow-lg flex flex-col h-full'>
                       <div>
                          <img src={testimonial.quoteIcon} alt="Quote icon" className='w-8 h-8' />
                       </div>
                       
                       {/* flex-grow ব্যবহার করে এই অংশটি বাকি জায়গা নিয়ে নেবে */}
                       <div className='flex-grow'>
                          <p className='py-6 text-base text-gray-300'>{testimonial.comment}</p>
                       </div>
                       
                       <div className='flex gap-4 items-center mt-auto'>
                          <div>
                            <img className='w-12 h-12 object-cover rounded-full' src={testimonial.profileImg} alt={`${testimonial.userName}'s profile`} />
                          </div>
                          <div>
                             <h3 className='font-semibold text-white'>{testimonial.userName}</h3>
                             <p className='text-sm text-gray-400'>{testimonial.userTitle}</p>
                          </div>
                       </div>
                    </div>
                ))}
          </div>
       </section>
     </>
  )
}

export default Testimonials;
