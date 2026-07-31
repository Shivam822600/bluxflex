import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import ChatWindow from './ChatWindow';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  // Prevent body scroll when chat is open on mobile
  useEffect(() => {
    if (isOpen && window.innerWidth < 640) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setHasUnread(false);
  };

  return (
    <>
      {/* Chat Window */}
      <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* FAB Container — `group` class enables tooltip hover */}
      <div className={`group fixed z-[9998] bottom-5 right-5 sm:bottom-6 sm:right-6 ${isOpen ? 'hidden sm:flex' : 'flex'} flex-col items-end`}>

        {/* Tooltip — only on desktop, only when closed */}
        {!isOpen && (
          <div className="absolute right-[68px] top-1/2 -translate-y-1/2 bg-[#142E3D] text-white text-sm font-medium py-2 px-3.5 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap hidden sm:block">
            Need packaging help?
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-[#142E3D] rotate-45" />
          </div>
        )}

        <button
          onClick={toggleChat}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl transition-all duration-300 z-50 ${
            isOpen
              ? 'bg-[#0F2531] hover:bg-[#142E3D] scale-90'
              : 'bg-[#142E3D] hover:scale-105 hover:-translate-y-1 hover:shadow-2xl'
          }`}
          style={{ border: 'none' }}
          aria-label="Toggle chat assistant"
        >
          <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
            {isOpen ? (
              <X size={22} className="text-white" />
            ) : (
              <MessageCircle size={26} className="text-[#8DC63F]" />
            )}
          </div>

          {/* Unread badge */}
          {!isOpen && hasUnread && (
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#8DC63F] border-2 border-white rounded-full" />
          )}
        </button>
      </div>
    </>
  );
};

export default Chatbot;
