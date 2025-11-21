import React, { useState, useRef, useEffect } from 'react';

function Massege() {
  // প্রোফাইল ইমেজের লিংক
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

  // টেক্সট এরিয়া অটো হাইট লজিক
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [input]);

  const handleSend = (e) => {
    e.preventDefault(); // ফর্ম সাবমিট এবং রিলোড বন্ধ করা
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
    
    // হাইট রিসেট করা
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

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
    <div className="fixed top-[80px] left-0 w-full h-[calc(100dvh-80px)] flex flex-col font-sans bg-transparent z-0">
      
      {/* HEADER */}
      <div className="px-5 py-3 flex items-center gap-4 border-b border-cyan-500/10 bg-transparent backdrop-blur-xl flex-shrink-0 shadow-sm z-10">
        <div className="relative group cursor-pointer">
          {/* Avatar Ring - Cyan/Blue Gradient */}
          <div className="p-[2px] rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-cyan-400 animate-spin-slow">
            <img 
              src={headerUserImage} 
              alt="Nahid" 
              className="w-11 h-11 rounded-full object-cover border-2 border-slate-900"
            />
          </div>
          <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-cyan-400 border-2 border-slate-900 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
        </div>
        
        <div className="flex-1">
          {/* Name - Cyan Gradient Text with Glow */}
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 font-extrabold text-[18px] leading-tight tracking-wide drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
            Nahid
          </h2>
          
          {/* Role - Cyan Tint */}
          <p className="text-cyan-200/80 text-[11px] font-medium flex items-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)] animate-pulse"></span>
            Frontend Developer • Online
          </p>
        </div>
      </div>

      {/* CHAT BODY */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent bg-transparent">
        
        <div className="flex justify-center mb-2">
            <span className="text-[10px] text-slate-400 bg-slate-800/50 border border-cyan-500/10 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)]">Today</span>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
          >
            <div
              className={`relative max-w-[85%] md:max-w-[65%] px-5 py-3 rounded-2xl text-[15px] shadow-md border whitespace-pre-wrap leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 border-cyan-400/20 text-white rounded-br-none shadow-[0_4px_15px_rgba(6,182,212,0.2)]'
                  : 'bg-slate-800 border-white/5 text-slate-200 rounded-bl-none'
              }`}
            >
              <p>{msg.text}</p>
              <span className={`text-[9px] block text-right mt-1.5 ${msg.sender === 'user' ? 'text-cyan-100/70' : 'text-slate-400'}`}>
                {msg.time}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
             <div className="bg-slate-800 border border-white/5 px-4 py-3 rounded-2xl rounded-bl-none flex items-center gap-1.5 h-10">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-75"></span>
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-150"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* INPUT AREA */}
      <form 
        onSubmit={handleSend} 
        className="p-3 pb-4 bg-transparent backdrop-blur-md border-t border-cyan-500/10 flex items-end gap-3 flex-shrink-0 w-full"
      >
        {/* Text Area Wrapper - Glow effect on focus */}
        <div className="flex-1 bg-slate-900/80 rounded-[24px] border border-slate-700/50 transition-all duration-300 focus-within:border-cyan-400/60 focus-within:bg-slate-900 focus-within:shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)]">
            <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                rows={1}
                className="w-full bg-transparent text-cyan-50 placeholder-slate-500 px-5 py-3.5 rounded-[24px] focus:outline-none text-[15px] resize-none max-h-[120px] overflow-y-auto scrollbar-hide selection:bg-cyan-500/30"
                style={{ minHeight: '48px' }}
            />
        </div>
        
        {/* Send Button - Cyan/Blue Gradient & Glow */}
        <button
          type="submit"
          disabled={!input.trim()}
          className={`p-3 rounded-full transition-all duration-300 transform flex items-center justify-center h-[48px] w-[48px] flex-shrink-0
            ${input.trim() 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(6,182,212,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)]' 
                : 'bg-slate-800 text-slate-600 cursor-default border border-slate-700/50'
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

export default Massege;