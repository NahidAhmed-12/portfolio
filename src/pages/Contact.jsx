import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaUser, FaRegEnvelope, FaRegCommentDots } from 'react-icons/fa';

function Contact() {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", color: "hover:text-blue-500", border: "hover:border-blue-500", shadow: "hover:shadow-blue-500/50" },
    { icon: <FaTwitter />, href: "#", color: "hover:text-sky-400", border: "hover:border-sky-400", shadow: "hover:shadow-sky-400/50" },
    { icon: <FaLinkedinIn />, href: "#", color: "hover:text-blue-700", border: "hover:border-blue-700", shadow: "hover:shadow-blue-700/50" },
    { icon: <FaGithub />, href: "#", color: "hover:text-purple-500", border: "hover:border-purple-500", shadow: "hover:shadow-purple-500/50" }
  ];

  return (
    <section id="contact" className="relative py-20 bg-[#050505] overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Have a project in mind or just want to say hello? Let's collaborate and build something amazing together!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white">Let's talk about everything!</h3>
            <p className="text-gray-400 text-lg">
                I'm currently available for freelance projects or full-time opportunities.
            </p>

            {/* Info Cards */}
            <div className="space-y-6">
                {[
                    { icon: <FaEnvelope />, title: "Email Me", value: "nahid@example.com", link: "mailto:nahid@example.com", color: "text-cyan-400" },
                    { icon: <FaPhoneAlt />, title: "Call Me", value: "+880 1234 567890", link: "tel:+8801234567890", color: "text-blue-400" },
                    { icon: <FaMapMarkerAlt />, title: "Location", value: "Dhaka, Bangladesh", link: "#", color: "text-purple-400" },
                ].map((item, index) => (
                    <a key={index} href={item.link} className="group flex items-center gap-5 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:bg-white/10">
                        <div className={`w-14 h-14 rounded-full bg-black/50 flex items-center justify-center text-2xl ${item.color} group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                            {item.icon}
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm font-medium mb-1">{item.title}</p>
                            <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{item.value}</h4>
                        </div>
                    </a>
                ))}
            </div>

            {/* Social Icons */}
            <div className="pt-6">
                <p className="text-white font-semibold mb-4">Follow Me</p>
                <div className="flex gap-4">
                    {socialLinks.map((social, idx) => (
                        <a 
                          key={idx} 
                          href={social.href}
                          className={`w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 
                                     transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:-translate-y-1 ${social.color} ${social.border} hover:shadow-lg ${social.shadow}`}
                        >
                            <span className="text-xl">{social.icon}</span>
                        </a>
                    ))}
                </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0a0a0a] p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group"
          >
            {/* Form Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px] -z-10 group-hover:bg-cyan-500/10 transition-all duration-500"></div>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Your Name</label>
                        <div className="relative">
                            <FaUser className="absolute top-4 left-4 text-gray-500" />
                            <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300 placeholder-gray-600" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Phone Number</label>
                        <div className="relative">
                            <FaPhoneAlt className="absolute top-4 left-4 text-gray-500" />
                            <input type="text" placeholder="+880 1XXX..." className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300 placeholder-gray-600" />
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Email Address</label>
                    <div className="relative">
                        <FaRegEnvelope className="absolute top-4 left-4 text-gray-500" />
                        <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300 placeholder-gray-600" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Your Message</label>
                    <div className="relative">
                        <FaRegCommentDots className="absolute top-4 left-4 text-gray-500" />
                        <textarea rows="4" placeholder="How can I help you?" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/10 transition-all duration-300 placeholder-gray-600 resize-none"></textarea>
                    </div>
                </div>

                <button className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px] shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300">
                    <div className="relative h-full w-full bg-[#0a0a0a] group-hover:bg-transparent transition-colors duration-300 rounded-xl py-4 flex items-center justify-center gap-2">
                        <span className="text-white font-bold text-lg tracking-wide">Send Message</span>
                        <FaPaperPlane className="text-cyan-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;