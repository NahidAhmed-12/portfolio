import React, { useState, useEffect } from 'react';

function Hiro() {
    // টাইপিং অ্যানিমেশনের জন্য স্টেট
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    
    // যে টেক্সটগুলো দেখানো হবে
    const toRotate = [
        "A Frontend Web Developer", 
        "Specializing in React & JavaScript", 
        "Building Modern Web Applications"
    ];
    const period = 2000; // প্রতিটি টেক্সটের মধ্যেকার সময়

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, typingSpeed);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setTypingSpeed(prevSpeed => prevSpeed / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setTypingSpeed(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setTypingSpeed(150);
        }
    }


    return (
        <>
            <section className='flex justify-between flex-col-reverse md:flex-row py-40'>
                <div className='flex justify-center items-center md:items-start gap-12 md:justify-between flex-col-reverse md:flex-row w-full md:px-24'>

                    <div className=''>
                        <div className='text-center md:text-start px-5 mb-20 flex flex-col gap-1.5 md:gap-3' >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Hi, I'm <span className="text-blue-400">Auly ullah</span></h2>
                            
                            {/* টাইপিং অ্যানিমেশন এখানে দেখানো হবে */}
                            <p className="text-lg md:text-2xl lg:text-3xl font-[500] mt-2 max-w-xl h-16 md:h-auto">
                                {text}
                                <span className="border-r-4 border-blue-400 animate-pulse"></span>
                            </p>

                            <p className="text-gray-400 max-w-md mb-6 ">
                                I create modern, responsive and user-friendly web applications using React.js, Next.js, Tailwind CSS, Bootstrap, Material Ui, Hiro Ui, More... Passionate about clean code and great user experiences.
                            </p>

                            <div className='flex gap-4 justify-center md:justify-start pb-4 '>
                                <a href="https://www.facebook.com/m.aul.ulla.2024" target="_blank" rel="noopener noreferrer">
                                    <button className='icons text-cyan-500 text-2xl transform hover:scale-125 hover:text-blue-500 transition-all duration-300'><i className="fa-brands fa-facebook-f"></i></button>
                                </a>
                                <a href="https://www.instagram.com/auly_ullah?igsh=MTFocm13ZHBlOWQ4ag==" target="_blank" rel="noopener noreferrer">
                                    <button className='icons text-cyan-500 text-2xl transform hover:scale-125 hover:text-pink-500 transition-all duration-300'><i className="fa-brands fa-instagram"></i></button>
                                </a>
                                <a href="https://www.youtube.com/@CodedByAuly" target="_blank" rel="noopener noreferrer">
                                    <button className='icons text-cyan-500 text-2xl transform hover:scale-125 hover:text-red-500 transition-all duration-300'><i className="fa-brands fa-youtube"></i></button>
                                </a>
                                <a href="https://www.linkedin.com/in/auly-ullah-244604352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                                    <button className='icons text-cyan-500 text-2xl transform hover:scale-125 hover:text-blue-700 transition-all duration-300'><i className="fa-brands fa-linkedin-in"></i></button>
                                </a>
                               <a href="https://www.tiktok.com/@codedbyauly?_t=ZS-8vLC83UDfLs&_r=1" target="_blank" rel="noopener noreferrer">
                                   <button className='icons text-cyan-500 text-2xl transform hover:scale-125 hover:text-black transition-all duration-300'><i className="fa-brands fa-tiktok"></i></button>
                               </a>
                            </div>
                            <div className='flex justify-center md:justify-start'>
                                <button className='bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300'>
                                    Read More
                                </button>
                            </div>

                        </div>
                    </div>

                    <div className='px-5'>
                        <div className='flex items-center justify-center'>
                            <div className={`bg-[url("/myp7.jpg")] h-72 md:h-96 md:w-96 w-72 bg-im rounded-full bg-no-repeat bg-center bg-cover`}>
                            </div>
                         </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hiro;
