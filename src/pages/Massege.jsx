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

  // NOTE: handleKeyDown ফাংশনটি সরিয়ে দেওয়া হয়েছে যাতে Enter চাপলে নতুন লাইন তৈরি হয়।

  return (
    // পরিবর্তন: bg-[#0f172a] কে bg-transparent করা হয়েছে
    <div className="fixed top-[80px] left-0 w-full h-[calc(100dvh-80px)] flex flex-col font-sans bg-transparent z-0">
      
      {/* HEADER */}
      {/* পরিবর্তন: bg-slate-900/60 কে bg-transparent করা হয়েছে */}
      <div className="px-5 py-3 flex items-center gap-4 border-b border-white/5 bg-transparent backdrop-blur-xl flex-shrink-0 shadow-sm z-10">
        <div className="relative group cursor-pointer">
          <div className="p-[2px] rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500">
            <img 
              src={headerUserImage} 
              alt="Nahid" 
              className="w-11 h-11 rounded-full object-cover border-2 border-slate-900"
            />
          </div>
          <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
        </div>
        
        <div className="flex-1">
          <h2 className="text-white font-bold text-[17px] leading-tight tracking-wide">Nahid</h2>
          <p className="text-blue-200/70 text-[11px] font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Frontend Developer • Online
          </p>
        </div>
      </div>

      {/* CHAT BODY */}
      {/* পরিবর্তন: bg-gradient-to-b from-slate-900 to-[#0B1121] সরিয়ে দেওয়া হয়েছে */}
      <div className="flex-1 overflow-y-auto p-4 space-y-5 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent bg-transparent">
        
        <div className="flex justify-center mb-2">
            <span className="text-[10px] text-slate-500 bg-slate-800/50 px-3 py-1 rounded-full">Today</span>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
          >
            <div
              className={`relative max-w-[85%] md:max-w-[65%] px-5 py-3 rounded-2xl text-[15px] shadow-md border border-white/5 whitespace-pre-wrap leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-slate-800 text-slate-200 rounded-bl-none'
              }`}
            >
              <p>{msg.text}</p>
              <span className={`text-[9px] block text-right mt-1.5 opacity-70`}>
                {msg.time}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
             <div className="bg-slate-800 border border-white/5 px-4 py-3 rounded-2xl rounded-bl-none flex items-center gap-1.5 h-10">
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* INPUT AREA */}
      {/* পরিবর্তন: bg-[#0B1121]/95 কে bg-transparent করা হয়েছে */}
      <form 
        onSubmit={handleSend} 
        className="p-3 pb-4 bg-transparent backdrop-blur-md border-t border-white/5 flex items-end gap-3 flex-shrink-0 w-full"
      >
        {/* Text Area Wrapper */}
        <div className="flex-1 bg-slate-800/60 rounded-[24px] border border-slate-700/50 hover:border-slate-600 focus-within:border-blue-500/50 focus-within:bg-slate-800 transition-all duration-300">
            <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                // onKeyDown টি রিমুভ করা হয়েছে যাতে Enter এ নতুন লাইন হয়
                placeholder="Type a message..."
                rows={1}
                className="w-full bg-transparent text-white placeholder-slate-400 px-5 py-3.5 rounded-[24px] focus:outline-none text-[15px] resize-none max-h-[120px] overflow-y-auto scrollbar-hide"
                style={{ minHeight: '48px' }}
            />
        </div>
        
        {/* Send Button */}
        <button
          type="submit"
          disabled={!input.trim()}
          className={`p-3 rounded-full shadow-lg transition-all duration-300 transform flex items-center justify-center h-[48px] w-[48px] flex-shrink-0
            ${input.trim() 
                ? 'bg-blue-600 text-white hover:bg-blue-500 active:scale-95 cursor-pointer shadow-blue-900/30' 
                : 'bg-slate-800 text-slate-600 cursor-default'
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
