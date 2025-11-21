import React, { useState, useRef, useEffect } from 'react';

function Message() {
  const headerUserImage = "/person.webp";

  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi there! 👋 I'm Nahid, a Frontend Developer. How can I help you today?", 
      sender: 'nahid',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [input]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: input,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput('');
    setIsTyping(true);
    
    setTimeout(() => {
      const replyMessage = {
        id: Date.now() + 1,
        text: "Thanks for reaching out! I am currently offline but I will get back to you as soon as possible.",
        sender: 'nahid',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, replyMessage]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    // ============ MAIN CONTAINER ============
    // পরিবর্তন: 'bg-neutral-900/95' সরিয়ে 'bg-transparent' দেওয়া হয়েছে।
    // এখন আপনার App.jsx এর ব্যাকগ্রাউন্ড দেখা যাবে।
    <div className="fixed top-[80px] left-0 right-0 bottom-0 flex flex-col font-sans bg-transparent z-50 overflow-hidden">
      
      {/* --- Floating Background Effects (Optional) --- */}
      {/* আপনি চাইলে এই ভাসমান বাবল গুলো রাখতে পারেন, এগুলো ব্যাকগ্রাউন্ডের ওপর সুন্দর এফেক্ট ফেলে। 
          যদি একদম ক্লিয়ার চান তবে এই দুটি div সরিয়ে দিতে পারেন। */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000"></div>

      {/* ============ HEADER (FIXED) ============ */}
      {/* হেডারটি একটু ব্লার রাখা হয়েছে যাতে মেসেজ স্ক্রল করার সময় লেখার ওপর দিয়ে গেলে বাজে না দেখায় */}
      <div className="flex-none h-[70px] px-5 flex items-center gap-4 border-b border-white/10 bg-neutral-900/70 backdrop-blur-md shadow-sm z-20 w-full">
        
        <div className="relative group cursor-pointer">
          <div className="p-[2px] rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600">
            <img 
              src={headerUserImage} 
              alt="Nahid" 
              className="w-10 h-10 rounded-full object-cover border-2 border-neutral-900"
            />
          </div>
          <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-emerald-500 border-2 border-neutral-900 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"></span>
        </div>
        
        <div className="flex-1">
          <h2 className="text-white font-bold text-lg leading-tight tracking-wide">Nahid</h2>
          <p className="text-cyan-200/80 text-xs font-medium flex items-center gap-1.5">
             Frontend Developer
          </p>
        </div>
      </div>

      {/* ============ CHAT BODY (SCROLLABLE) ============ */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-6 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent z-10 overscroll-contain">
        
        <div className="flex justify-center mb-4">
            <span className="text-[10px] font-semibold text-gray-300 bg-neutral-900/40 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full shadow-sm">
              Today
            </span>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
          >
            {/* মেসেজ বাবলের ব্যাকগ্রাউন্ড একটু গাড় করা হয়েছে যাতে transparent ব্যাকগ্রাউন্ডের ওপর লেখা পড়া যায় */}
            <div
              className={`relative max-w-[85%] md:max-w-[65%] px-5 py-3.5 rounded-2xl text-[15px] shadow-lg whitespace-pre-wrap leading-relaxed border backdrop-blur-md
              ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-br-none border-transparent shadow-cyan-500/10'
                  : 'bg-neutral-900/80 text-gray-200 rounded-bl-none border-neutral-700 shadow-black/20'
              }`}
            >
              <p>{msg.text}</p>
              <span className={`text-[10px] block text-right mt-2 ${msg.sender === 'user' ? 'text-blue-100' : 'text-gray-400'}`}>
                {msg.time}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start animate-fade-in">
             <div className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-700 px-4 py-4 rounded-2xl rounded-bl-none flex items-center gap-1.5 h-12 shadow-md">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></span>
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} className="pb-2" />
      </div>

      {/* ============ INPUT AREA (FIXED BOTTOM) ============ */}
      <form 
        onSubmit={handleSend} 
        className="flex-none p-4 bg-neutral-900/70 backdrop-blur-md border-t border-white/10 flex items-end gap-3 w-full z-20"
      >
        <div className="flex-1 bg-neutral-800/50 rounded-[24px] border border-neutral-700 transition-all duration-300 focus-within:border-cyan-500/50 focus-within:bg-neutral-900/80 focus-within:shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                rows={1}
                className="w-full bg-transparent text-white placeholder-gray-400 px-5 py-3.5 rounded-[24px] focus:outline-none text-[15px] resize-none max-h-[120px] overflow-y-auto scrollbar-hide"
                style={{ minHeight: '50px' }}
            />
        </div>
        
        <button
          type="submit"
          disabled={!input.trim()}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 transform flex items-center justify-center h-[50px] w-[50px] flex-shrink-0
            ${input.trim() 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:scale-105 active:scale-95 shadow-cyan-500/30' 
                : 'bg-neutral-800/80 text-gray-500 cursor-not-allowed'
            }`}
        >
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5">
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
        </button>
      </form>

    </div>
  )
}

export default Message;
