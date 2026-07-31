import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import QuickReplies from './QuickReplies';

const ChatMessages = ({ messages, isTyping, onQuickReplySelect, onClose }) => {
  const containerRef = useRef(null);

  // Instantly snap to bottom — no smooth scroll animation
  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  // Run immediately + again after a tick to catch quick replies rendering
  useEffect(() => {
    scrollToBottom();
    const t = setTimeout(scrollToBottom, 150);
    return () => clearTimeout(t);
  }, [messages, isTyping]);

  return (
    <div ref={containerRef} className="flex-1 overflow-y-auto px-4 py-4 bg-white hide-scrollbar">
      {messages.map((msg) => (
        <React.Fragment key={msg.id}>
          <ChatMessage message={msg} onClose={onClose} onAction={onQuickReplySelect} />

          {/* Quick replies after last bot message only */}
          {msg.sender === 'bot' &&
            msg.quickReplies?.length > 0 &&
            msg.id === messages[messages.length - 1].id &&
            !isTyping && (
              <div className="ml-9 mb-1">
                <QuickReplies replies={msg.quickReplies} onSelect={onQuickReplySelect} />
              </div>
            )}
        </React.Fragment>
      ))}

      {isTyping && (
        <div className="mb-2">
          <TypingIndicator />
        </div>
      )}

      {/* Bottom anchor */}
      <div className="h-2" />
    </div>
  );
};

export default ChatMessages;
