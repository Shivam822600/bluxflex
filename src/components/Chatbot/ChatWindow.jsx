import React, { useState, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { processMessage } from '../../utils/chatbotRules';

const ChatWindow = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  // Initialize welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: Date.now().toString(),
          sender: 'bot',
          text: "👋 Welcome to BulkFlex Packaging Assistant\n\nI'm here to help you with:\n\n• Finding products\n• Packaging recommendations\n• Shipping information\n• MOQ\n• Bulk Orders",
          timestamp: new Date().toISOString(),
          quickReplies: [
            "📦 Browse Products",
            "🏷 Categories",
            "🚚 Shipping",
            "🏭 Industries",
            "💰 MOQ",
            "📞 Contact Sales",
            "⭐ Best Sellers"
          ]
        }
      ]);
    }
  }, []);

  const handleSendMessage = (text) => {
    const userMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const response = processMessage(text);
      const botMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: response.text,
        products: response.products || [],
        quickReplies: response.quickReplies || [],
        timestamp: new Date().toISOString()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickReply = (replyText) => handleSendMessage(replyText);
  const toggleMaximize = () => setIsMaximized(!isMaximized);

  return (
    <div
      className={`
        fixed z-[9999] flex flex-col bg-white shadow-2xl overflow-hidden
        transition-all duration-300 ease-out transform origin-bottom-right

        /* Mobile: true full-screen, no gap, no border-radius */
        inset-0 rounded-none

        /* sm+ (640px+): floating panel */
        sm:inset-auto sm:bottom-6 sm:right-6
        sm:h-[680px] sm:max-h-[calc(100vh-48px)]
        sm:rounded-2xl sm:border sm:border-gray-200
        ${isMaximized ? 'sm:w-[560px]' : 'sm:w-[400px]'}
        sm:max-w-[calc(100vw-3rem)]

        /* Open/close animation */
        ${isOpen
          ? 'scale-100 opacity-100 pointer-events-auto'
          : 'scale-95 opacity-0 pointer-events-none translate-y-2'
        }
      `}
    >
      <ChatHeader
        onClose={onClose}
        isMaximized={isMaximized}
        onToggleMaximize={toggleMaximize}
      />

      <ChatMessages
        messages={messages}
        isTyping={isTyping}
        onQuickReplySelect={handleQuickReply}
        onClose={onClose}
      />

      <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
    </div>
  );
};

export default ChatWindow;
