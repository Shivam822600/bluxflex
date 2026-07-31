import React from 'react';
import { Bot } from 'lucide-react';

const TypingIndicator = () => {
  return (
    <div className="flex items-end gap-2 mb-2">
      {/* Avatar — matches ChatMessage bot avatar */}
      <div className="w-7 h-7 flex-shrink-0 rounded-full bg-[#142E3D] flex items-center justify-center shadow-sm">
        <Bot size={14} className="text-[#8DC63F]" />
      </div>

      {/* Bubble — matches new bot bubble style */}
      <div className="flex items-center gap-1.5 bg-[#F4F5F7] px-4 py-3 rounded-2xl rounded-bl-[5px] shadow-sm">
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
      </div>
    </div>
  );
};

export default TypingIndicator;
