import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Hiro() {
    return (
        // এখানে md:py-28 কে পরিবর্তন করে md:pt-20 md:pb-28 করা হয়েছে
        // যাতে শুধু ডেস্কটপ স্ক্রিনে উপরের প্যাডিং কমে যায়।
        <section className='py-20 md:pt-20 md:pb-28 px-4'>
            {/* 
              মূল কন্টেইনার:
              - মোবাইলে কলাম আকারে (ছবি উপরে, টেক্সট নিচে) থাকবে।
              - ডেস্কটপে সারি আকারে (টেক্সট বামে, ছবি ডানে) থাকবে।
              - কন্টেন্টগুলোকে সব স্ক্রিনে সুন্দরভাবে সাজানোর জন্য 'items-center' এবং 'justify-center' ব্যবহার করা হয়েছে।
            */}
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8'>

                {/* === টেক্সট কন্টেন্ট সেকশন === */}
                {/* 
                  - 'order-2' দিয়ে মোবাইলে এটিকে ছবির নিচে দেখানো হয়েছে।
                  - 'md:order-1' দিয়ে ডেস্কটপে এটিকে প্রথমে (বামে) দেখানো হয়েছে।
                */}
                <div className='flex-1 order-2 md:order-1'>
                    <div className='text-center md:text-start flex flex-col items-center md:items-start gap-3 md:gap-4'>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Hi, I'm <span className="text-blue-400">Nahid</span></h2>

                        {/* টাইপিং অ্যানিমেশন (মোবাইলের জন্য উচ্চতা নির্দিষ্ট করা হয়েছে) */}
                        <div className="text-lg md:text-2xl lg:text-3xl font-[500] mt-2 h-16 md:h-auto">
                            <TypeAnimation
                                sequence={[
                                    'A Frontend Web Developer',
                                    1000,
                                    'Specializing in React & JavaScript',
                                    1000,
                                    'Building Modern Web Applications',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </div>

                        <p className="text-gray-400 max-w-md mb-6">
                            I create modern, responsive and user-friendly web applications using React.js, Next.js, Tailwind CSS, Bootstrap, Material Ui, Hiro Ui, More... Passionate about clean code and great user experiences.
                        </p>

                        {/* সোশ্যাল আইকন */}
                        <div className='flex gap-4 justify-center md:justify-start pb-4'>
                            <a href="https://www.facebook.com/m.aul.ulla.2024" target="_blank" rel="noopener noreferrer"
                                className='h-12 w-12 rounded-full bg-neutral-800 border-2 border-neutral-700 flex justify-center items-center text-neutral-400
                                           transform transition-all duration-300 ease-in-out
                                           hover:text-cyan-500 hover:border-cyan-500
                                           hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30'>
                                <i className="fa-brands fa-facebook-f text-xl"></i>
                            </a>
                            <a href="https://www.instagram.com/auly_ullah?igsh=MTFocm13ZHBlOWQ4ag==" target="_blank" rel="noopener noreferrer"
                                className='h-12 w-12 rounded-full bg-neutral-800 border-2 border-neutral-700 flex justify-center items-center text-neutral-400
                                           transform transition-all duration-300 ease-in-out
                                           hover:text-cyan-500 hover:border-cyan-500
                                           hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30'>
                                <i className="fa-brands fa-instagram text-xl"></i>
                            </a>
                            <a href="https://www.youtube.com/@CodedByAuly" target="_blank" rel="noopener noreferrer"
                                className='h-12 w-12 rounded-full bg-neutral-800 border-2 border-neutral-700 flex justify-center items-center text-neutral-400
                                           transform transition-all duration-300 ease-in-out
                                           hover:text-cyan-500 hover:border-cyan-500
                                           hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30'>
                                <i className="fa-brands fa-youtube text-xl"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/auly-ullah-244604352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"
                                className='h-12 w-12 rounded-full bg-neutral-800 border-2 border-neutral-700 flex justify-center items-center text-neutral-400
                                           transform transition-all duration-300 ease-in-out
                                           hover:text-cyan-500 hover:border-cyan-500
                                           hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30'>
                                <i className="fa-brands fa-linkedin-in text-xl"></i>
                            </a>
                            <a href="https://www.tiktok.com/@codedbyauly?_t=ZS-8vLC83UDfLs&_r=1" target="_blank" rel="noopener noreferrer"
                                className='h-12 w-12 rounded-full bg-neutral-800 border-2 border-neutral-700 flex justify-center items-center text-neutral-400
                                           transform transition-all duration-300 ease-in-out
                                           hover:text-cyan-500 hover:border-cyan-500
                                           hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/30'>
                                <i className="fa-brands fa-tiktok text-xl"></i>
                            </a>
                        </div>

                        {/* বাটন */}
                        <div className='flex justify-center md:justify-start'>
                            <button className='flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-gradient-to-l transform hover:-translate-y-1 transition-all duration-300 ease-in-out'>
                                <span>Read More</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* === ইমেজ সেকশন === */}
                {/* 
                  - 'order-1' দিয়ে মোবাইলে এটিকে প্রথমে (উপরে) দেখানো হয়েছে।
                  - 'md:order-2' দিয়ে ডেস্কটপে এটিকে দ্বিতীয়তে (ডানে) দেখানো হয়েছে।
                */}
                <div className='flex-1 flex justify-center items-center order-1 md:order-2 -mt-20 md:mt-0'>
                    {/* 
                      রেসপন্সিভ ইমেজ সাইজ:
                      - ছোট স্ক্রিনে: h-64 w-64
                      - মাঝারি স্ক্রিনে: md:h-80 md:w-80
                      - বড় স্ক্রিনে: lg:h-96 lg:w-96
                    */}
                    <div className={`bg-[url("/myimg.webp")] h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full bg-no-repeat bg-center bg-cover border-4 border-blue-400 shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-blue-500/50`}>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hiro;
