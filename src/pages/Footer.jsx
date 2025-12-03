import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// Reusable List Component
const LinkList = ({ title, list }) => (
    <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold text-white relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-cyan-500"></span>
        </h3>
        <ul className="space-y-3">
            {list.map((item, i) => (
                <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-cyan-400 transition-colors"></span>
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

function Footer() {
    const listA = ["About Us", "Contact", "Portfolio", "Services"];
    const listB = ["Web Design", "Development", "App Design", "SEO"];
    const listC = ["Terms", "Privacy Policy", "Cookies", "Support"];
    
    const socialLinks = [
        { icon: <FaFacebookF />, href: "#" },
        { icon: <FaTwitter />, href: "#" },
        { icon: <FaInstagram />, href: "#" },
        { icon: <FaYoutube />, href: "#" },
        { icon: <FaLinkedinIn />, href: "#" },
    ];

    return (
        <footer className="relative bg-[#050505] pt-20 pb-10 border-t border-white/5 overflow-hidden">
            
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
            
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-2">
                             {/* Logo PlaceHolder */}
                             <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                                N
                             </div>
                            <h2 className="text-2xl font-bold text-white tracking-wide">Creative<span className="text-cyan-400">Hub</span></h2>
                        </div>
                        <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                            Building digital experiences with passion and precision. Let's create something amazing together.
                        </p>
                        
                        {/* Newsletter Input */}
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-1 pl-4 max-w-sm focus-within:border-cyan-500/50 transition-colors">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="bg-transparent border-none outline-none text-white text-sm w-full placeholder-gray-500"
                            />
                            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-shadow">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <LinkList title="Company" list={listA} />
                        <LinkList title="Services" list={listB} />
                        <LinkList title="Legal" list={listC} />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Nahid. All Rights Reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        {socialLinks.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3, scale: 1.1 }}
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 
                                           hover:bg-cyan-500 hover:text-white hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300"
                            >
                                {item.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;