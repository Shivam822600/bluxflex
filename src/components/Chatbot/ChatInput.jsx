import React, { useState, useRef, useEffect } from 'react';
import { Send, Plus, Smile } from 'lucide-react';
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
      el.style.height = `${Math.min(el.scrollHeight, 110)}px`;
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
    <div className="relative bg-white px-3 pt-2.5 pb-4 flex-shrink-0">

      {/* Search suggestions dropdown */}
      {suggestions.length > 0 && (
        <div className="absolute bottom-full left-0 w-full px-3 mb-1.5">
          <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.10)] border border-gray-100 overflow-hidden">
            {suggestions.map((s, i) => (
              <button
                key={i}
                onClick={() => handleSuggestionClick(s)}
                className="w-full text-left px-4 py-2.5 text-[13px] text-gray-700 hover:bg-gray-50 hover:text-[#142E3D] transition-colors flex items-center gap-2 min-h-[44px]"
              >
                <span className="text-gray-400 text-xs">🔍</span>
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input row */}
      <div className="flex items-end gap-1.5">

        {/* + button (left) */}
        {/* <button
          type="button"
          className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-[#142E3D] hover:bg-gray-100 transition-all mb-0.5"
          aria-label="Add attachment"
          style={{ border: 'none' }}
        >
          <Plus size={20} />
        </button> */}

        {/* Text input container */}
        <div className="flex-1 flex items-end bg-gray-50 border border-gray-200 rounded-[22px] focus-within:border-gray-400 focus-within:bg-white transition-all duration-150">
          <textarea
            ref={inputRef}
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Write a message..."
            disabled={disabled}
            rows={1}
            style={{ minHeight: '44px', maxHeight: '110px' }}
            className="flex-grow bg-transparent px-4 py-[11px] outline-none border-none focus:border-none focus:outline-none focus:ring-0 text-[14px] text-gray-800 placeholder-gray-400 resize-none hide-scrollbar self-end leading-relaxed"
          />

          {/* Emoji button (inside input, right) */}
          {/* <button
            type="button"
            className="flex-shrink-0 w-9 h-9 mb-[3px] mr-0.5 flex items-center justify-center rounded-full text-gray-400 hover:text-[#142E3D] hover:bg-gray-100 transition-all"
            aria-label="Emoji"
            style={{ border: 'none' }}
          >
            <Smile size={18} />
          </button> */}
        </div>

        {/* Send button (right, always visible) */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!hasText || disabled}
          className={`flex-shrink-0 w-11 h-11 mb-0.5 flex items-center justify-center rounded-full transition-all duration-200 shadow-sm ${hasText && !disabled
              ? 'bg-[#142E3D] text-white hover:bg-[#0F2531] hover:shadow-md hover:-translate-y-0.5 scale-100'
              : 'bg-gray-100 text-gray-300 cursor-not-allowed scale-95'
            }`}
          style={{ border: 'none' }}
          aria-label="Send message"
        >
          <Send size={17} className={hasText && !disabled ? 'translate-x-0.5 -translate-y-0.5' : ''} />
        </button>
      </div>

      {/* Powered by footer */}
      <div className="text-center mt-2.5 flex items-center justify-center gap-1 opacity-60">
        <span className="text-[10px] text-gray-400 font-medium">Powered by</span>
        <span className="text-[10px] text-[#8DC63F] font-bold tracking-wide">BULKFLEX AI</span>
      </div>
    </div>
  );
};

export default ChatInput;
