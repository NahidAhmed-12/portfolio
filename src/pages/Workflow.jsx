import React from 'react';

function Workflow() {
    const steps = [
        {
            id: "01",
            title: "Planning & Strategy",
            description: "First, I analyze requirements, understand the target audience, and create a solid roadmap for the project structure.",
            icon: "fa-solid fa-lightbulb"
        },
        {
            id: "02",
            title: "Design & Prototype",
            description: "I create low-fidelity wireframes and high-fidelity UI designs to visualize the final look before writing a single line of code.",
            icon: "fa-solid fa-pen-ruler"
        },
        {
            id: "03",
            title: "Development",
            description: "This is where the magic happens. I write clean, scalable code using React, Tailwind, and modern tech stacks.",
            icon: "fa-solid fa-code"
        },
        {
            id: "04",
            title: "Testing & Launch",
            description: "Finally, I test across devices for responsiveness and bugs, optimize performance, and deploy the project live.",
            icon: "fa-solid fa-rocket"
        }
    ];

    return (
        // পরিবর্তন: এখানে bg-neutral-950 সরিয়ে bg-transparent দেওয়া হয়েছে
        <section className="py-16 md:py-24 px-5 md:px-24 bg-transparent w-full" id="workflow">
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
                    How I <span className="text-blue-400">Work</span>
                </h2>
                <p className="text-gray-400 text-center max-w-xl">
                    I follow a structured process to ensure quality and timely delivery for every project.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {steps.map((step, index) => (
                    <div key={step.id} className="relative group">
                        
                        {/* কানেক্টিং লাইন (শুধু বড় স্ক্রিনে) */}
                        {index !== steps.length - 1 && (
                            <div className="hidden lg:block absolute top-8 left-1/2 w-full h-1 bg-gradient-to-r from-cyan-500/20 to-transparent -z-10"></div>
                        )}

                        {/* কার্ড বডি */}
                        {/* পরিবর্তন: এখানে bg-neutral-900/50 এর সাথে backdrop-blur-sm যোগ করা হয়েছে গ্লাস ইফেক্টের জন্য */}
                        <div className="bg-neutral-900/40 backdrop-blur-sm border border-neutral-800 p-6 rounded-2xl h-full
                                        transform transition-all duration-300 ease-in-out
                                        hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20">
                            
                            {/* আইকন এবং নম্বর */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="h-14 w-14 rounded-full bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-2xl text-cyan-500 shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:bg-cyan-500/10 group-hover:border-cyan-500">
                                    <i className={step.icon}></i>
                                </div>
                                <span className="text-4xl font-bold text-neutral-800 group-hover:text-neutral-700 transition-colors select-none">
                                    {step.id}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Workflow;
