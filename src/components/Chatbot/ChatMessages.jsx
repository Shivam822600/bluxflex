import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import QuickReplies from './QuickReplies';

const ChatMessages = ({ messages, isTyping, onQuickReplySelect, onClose }) => {
  const containerRef = useRef(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
    const t = setTimeout(scrollToBottom, 150);
    return () => clearTimeout(t);
  }, [messages, isTyping]);

  return (
    <div
      ref={containerRef}
      className="hide-scrollbar"
      style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px 14px 10px 14px',
        background: '#F8FAFC',
        display: 'flex',
        flexDirection: 'column',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      {messages.map((msg) => (
        <React.Fragment key={msg.id}>
          <ChatMessage message={msg} onClose={onClose} onAction={onQuickReplySelect} />

          {/* Quick replies after last bot message only */}
          {msg.sender === 'bot' &&
            msg.quickReplies?.length > 0 &&
            msg.id === messages[messages.length - 1].id &&
            !isTyping && (
              <div style={{ marginLeft: '36px', marginBottom: '8px' }}>
                <QuickReplies replies={msg.quickReplies} onSelect={onQuickReplySelect} />
              </div>
            )}
        </React.Fragment>
      ))}

      {isTyping && (
        <div style={{ marginBottom: '8px' }}>
          <TypingIndicator />
        </div>
      )}

      {/* Bottom anchor */}
      <div style={{ height: '4px' }} />
    </div>
  );
};

export default ChatMessages;
