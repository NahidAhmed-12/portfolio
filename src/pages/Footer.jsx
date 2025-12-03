import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram, FaHeart } from 'react-icons/fa';

// Reusable List Component
const LinkList = ({ title, list }) => (
    <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold text-white relative inline-block">
            {title}
            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-orange-500 rounded-full"></span>
        </h3>
        <ul className="space-y-3 pt-2">
            {list.map((item, i) => (
                <li key={i}>
                    <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors duration-300 text-sm flex items-center gap-2 group">
                        <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-orange-500 transition-colors"></span>
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
        <footer className="relative bg-[#020617] pt-24 pb-10 border-t border-white/5 overflow-hidden font-sans">
            
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
            
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-3">
                             {/* Logo PlaceHolder */}
                             <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/20">
                                N
                             </div>
                            <h2 className="text-2xl font-bold text-white tracking-wide">Nahid<span className="text-orange-500">.Dev</span></h2>
                        </div>
                        <p className="text-slate-400 text-base leading-relaxed max-w-sm font-light">
                            Crafting digital experiences with passion and precision. Transforming ideas into functional and beautiful web solutions.
                        </p>
                        
                        {/* Newsletter Input */}
                        <div className="flex items-center gap-2 bg-slate-900/50 border border-white/10 rounded-full p-1.5 pl-5 max-w-sm focus-within:border-orange-500/50 transition-colors shadow-inner">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="bg-transparent border-none outline-none text-white text-sm w-full placeholder-slate-500"
                            />
                            <button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-orange-500/25 transition-all transform hover:-translate-y-0.5">
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:pl-10">
                        <LinkList title="Company" list={listA} />
                        <LinkList title="Services" list={listB} />
                        <LinkList title="Legal" list={listC} />
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm flex items-center gap-1">
                        &copy; {new Date().getFullYear()} Nahid. Made with <FaHeart className="text-red-500 animate-pulse" /> using React.
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
                                className="w-10 h-10 rounded-full bg-slate-800 border border-white/5 flex items-center justify-center text-slate-400 
                                           hover:bg-gradient-to-br hover:from-orange-500 hover:to-amber-500 hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
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