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
    <div className="fixed top-[80px] left-0 right-0 bottom-0 flex flex-col font-sans bg-transparent z-0 overflow-hidden">
      
      {/* --- Floating Background Effects --- */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000"></div>

      {/* ============ HEADER ============ */}
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

      {/* ============ CHAT BODY ============ */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent z-10 overscroll-contain">
        
        <div className="flex justify-center mb-6">
            <span className="text-[10px] font-semibold text-gray-400 bg-neutral-900/40 backdrop-blur-sm border border-white/5 px-3 py-1 rounded-full shadow-sm">
              Today
            </span>
        </div>

        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}
          >
            {/* 
               === পরিবর্তন ===
               ১. 'min-w-[120px]' যোগ করা হয়েছে। 
                  এর ফলে মেসেজ ছোট হলেও বাবলটি অন্তত 120px জায়গা নিবে।
               ২. বাকি ডিজাইন আগের মতোই স্লিম এবং শার্প আছে।
            */}
            <div
              className={`relative max-w-[75%] min-w-[120px] px-4 py-2.5 text-[15px] shadow-sm whitespace-pre-wrap leading-relaxed border backdrop-blur-md flex flex-col
              ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-[20px] rounded-br-[2px] border-transparent shadow-cyan-500/20'
                  : 'bg-neutral-800 text-gray-200 rounded-[20px] rounded-bl-[2px] border-neutral-700 shadow-black/20'
              }`}
            >
              {/* মেসেজ টেক্সট */}
              <p>{msg.text}</p>
              
              {/* টাইমস্ট্যাম্প - এটি এখন নিচে ডানদিকে ফিক্সড থাকবে */}
              <div className={`text-[10px] flex items-center justify-end gap-1 mt-auto pt-1 opacity-70 w-full`}>
                {msg.time}
                {msg.sender === 'user' && (
                  <i className="fa-solid fa-check-double text-[10px]"></i>
                )}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start animate-fade-in">
             <div className="bg-neutral-800 border border-neutral-700 px-4 py-3 rounded-[20px] rounded-bl-[2px] flex items-center gap-1.5 h-auto shadow-sm">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} className="pb-2" />
      </div>

      {/* ============ INPUT AREA ============ */}
      <form 
        onSubmit={handleSend} 
        className="flex-none p-3 bg-neutral-900/70 backdrop-blur-md border-t border-white/10 flex items-end gap-2 w-full z-20"
      >
        <div className="flex-1 bg-neutral-800/50 rounded-full border border-neutral-700 transition-all duration-300 focus-within:border-cyan-500/50 focus-within:bg-neutral-900/80 focus-within:shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                rows={1}
                className="w-full bg-transparent text-white placeholder-gray-400 px-5 py-3 rounded-full focus:outline-none text-[15px] resize-none max-h-[100px] overflow-y-auto scrollbar-hide flex items-center"
                style={{ minHeight: '46px', paddingTop: '10px' }}
            />
        </div>
        
        <button
          type="submit"
          disabled={!input.trim()}
          className={`p-2 rounded-full shadow-lg transition-all duration-300 transform flex items-center justify-center h-[46px] w-[46px] flex-shrink-0
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
