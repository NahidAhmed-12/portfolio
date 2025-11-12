import React from 'react'

function Offer() {
    const services = [
        {
            Imge: "/Icons/Group 1.svg", // আপনার আগের আইকন পাথ
            Heading: "Responsive Web Design",
            Des: "Crafting websites that provide an optimal viewing and interaction experience across a wide range of devices, from desktops to mobile phones."
        },
        {
            Imge: "/Icons/Group 23.svg", // আপনার আগের আইকন পাথ
            Heading: "Interactive UI Development",
            Des: "Building dynamic, engaging, and user-friendly interfaces using modern JavaScript frameworks like React to bring designs to life."
        },
        {
            Imge: "/Icons/analytics.png", // আপনার আগের আইকন পাথ
            Heading: "Performance Optimization",
            Des: "Optimizing web applications for maximum speed and efficiency to ensure a smooth, fast, and seamless user experience."
        }
    ];

  return (
    <>
        <section className='md:px-24 px-5 py-14'>
        <h1 className='text-3xl lg:text-4xl text-center py-12'>What I Offer</h1>
            <div className='flex gap-10 flex-col md:flex-row'>
               {services.map((service, i) => ( 
                <div key={i} className='flex gap-5 items-start'>
                    <div className='bg-[#3D3F54] hover:bg-gray-800 p-3 h-[52px] w-[52px] flex items-center justify-center rounded-full flex-shrink-0'>
                       <img className='w-10' src={service.Imge} alt={`${service.Heading} icon`} />
                    </div>
                    <div>
                        <h2 className='text-xl font-bold'>{service.Heading}</h2>
                        <p className='text-sm max-w-sm mt-3 text-gray-300'>{service.Des}</p>
                    </div>
                </div>
               ))}
            </div>
        </section>
    </>
  )
}

export default Offer;
