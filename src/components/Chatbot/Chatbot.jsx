import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import ChatWindow from './ChatWindow';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

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

      {/* FAB Container */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9998,
          display: isOpen ? 'none' : 'flex',
          alignItems: 'center',
          gap: '10px'
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Tooltip */}
        {!isOpen && (
          <div
            style={{
              background: '#142E3D',
              color: '#FFFFFF',
              fontSize: '12.5px',
              fontWeight: '700',
              padding: '6px 12px',
              borderRadius: '10px',
              boxShadow: '0 8px 24px rgba(20,46,61,0.25)',
              border: '1px solid rgba(141,198,63,0.35)',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              opacity: showTooltip ? 1 : 0,
              transform: showTooltip ? 'translateX(0)' : 'translateX(6px)',
              transition: 'opacity 0.2s, transform 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8DC63F' }} />
            Need packaging help?
          </div>
        )}

        {/* FAB Button */}
        <button
          onClick={toggleChat}
          style={{
            position: 'relative',
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: '#142E3D',
            border: '2px solid #8DC63F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 24px rgba(20,46,61,0.3)',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
            outline: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(20,46,61,0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(20,46,61,0.3)';
          }}
          aria-label="Toggle chat assistant"
        >
          <MessageCircle size={24} color="#8DC63F" />

          {/* Unread badge */}
          {hasUnread && (
            <span style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              background: '#8DC63F',
              border: '2px solid #FFFFFF',
              boxShadow: '0 0 6px rgba(141,198,63,0.6)'
            }} />
          )}
        </button>
      </div>
    </>
  );
};

export default Chatbot;
