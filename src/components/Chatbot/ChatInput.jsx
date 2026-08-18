import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { getSearchSuggestions } from '../../utils/productSearch';

const ChatInput = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!disabled && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [disabled]);

  useEffect(() => {
    if (message.length > 2 && !disabled) {
      setSuggestions(getSearchSuggestions(message.replace(/\n/g, ' ')));
    } else {
      setSuggestions([]);
    }
  }, [message, disabled]);

  const adjustHeight = () => {
    const el = inputRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = `${Math.min(el.scrollHeight, 100)}px`;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
    adjustHeight();
  };

  const handleSubmit = () => {
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage('');
      setSuggestions([]);
      if (inputRef.current) inputRef.current.style.height = 'auto';
    }
  };

  const handleSuggestionClick = (s) => {
    onSendMessage(s);
    setMessage('');
    setSuggestions([]);
    if (inputRef.current) inputRef.current.style.height = 'auto';
  };

  const hasText = message.trim().length > 0;

  return (
    <div style={{
      position: 'relative',
      background: '#FFFFFF',
      padding: '10px 14px 12px 14px',
      borderTop: '1px solid #E8EFF5',
      flexShrink: 0
    }}>

      {/* Search suggestions dropdown */}
      {suggestions.length > 0 && (
        <div style={{
          position: 'absolute',
          bottom: '100%',
          left: '12px',
          right: '12px',
          marginBottom: '8px',
          background: '#FFFFFF',
          borderRadius: '14px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
          border: '1px solid #E2E8F0',
          overflow: 'hidden',
          zIndex: 20
        }}>
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => handleSuggestionClick(s)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '10px 14px',
                fontSize: '12.5px',
                color: '#142E3D',
                background: 'transparent',
                border: 'none',
                borderBottom: i !== suggestions.length - 1 ? '1px solid #F1F5F9' : 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#F8FAFC'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
            >
              <span style={{ fontSize: '11px', color: '#94A3B8' }}>🔍</span>
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input Row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {/* Text Input Container */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          background: '#F1F5F9',
          border: '1.5px solid #E2E8F0',
          borderRadius: '24px',
          padding: '2px 14px',
          transition: 'all 0.2s'
        }}>
          <textarea
            ref={inputRef}
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask about products, MOQ, specs..."
            disabled={disabled}
            rows={1}
            style={{
              flexGrow: 1,
              background: 'transparent',
              padding: '8px 0',
              outline: 'none',
              border: 'none',
              boxShadow: 'none',
              fontSize: '13px',
              color: '#142E3D',
              resize: 'none',
              minHeight: '36px',
              maxHeight: '90px',
              lineHeight: '1.4',
              fontFamily: 'inherit'
            }}
          />
        </div>

        {/* Send button */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!hasText || disabled}
          aria-label="Send message"
          style={{
            flexShrink: 0,
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: hasText && !disabled ? '#142E3D' : '#E2E8F0',
            color: hasText && !disabled ? '#8DC63F' : '#94A3B8',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: hasText && !disabled ? 'pointer' : 'not-allowed',
            boxShadow: hasText && !disabled ? '0 4px 12px rgba(20, 46, 61, 0.25)' : 'none',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            if (hasText && !disabled) {
              e.currentTarget.style.background = '#091C26';
              e.currentTarget.style.transform = 'scale(1.05)';
            }
          }}
          onMouseLeave={(e) => {
            if (hasText && !disabled) {
              e.currentTarget.style.background = '#142E3D';
              e.currentTarget.style.transform = 'none';
            }
          }}
        >
          <Send size={16} />
        </button>
      </div>

      {/* Powered by footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '4px',
        opacity: 0.75
      }}>
        <span style={{ fontSize: '10px', color: '#94A3B8', fontWeight: '500' }}>Powered by</span>
        <span style={{ fontSize: '10px', color: '#142E3D', fontWeight: '800', letterSpacing: '0.4px', display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#8DC63F' }} />
          BULKFLEX AI
        </span>
      </div>
    </div>
  );
};

export default ChatInput;
