import React, { useState } from 'react';
import { X, Maximize2, Minimize2, MoreHorizontal, ThumbsUp, ThumbsDown, Bot } from 'lucide-react';

const ChatHeader = ({ onClose, isMaximized, onToggleMaximize }) => {
  const [feedback, setFeedback] = useState(null); // 'up' | 'down' | null

  return (
    <div className="bg-white border-b border-gray-100 flex flex-col shadow-sm relative z-10 flex-shrink-0">

      {/* Top bar: controls */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <div className="flex items-center gap-2">
          {/* Resize icon */}


        </div>

        {/* Close button */}

      </div>

      {/* Agent identity row */}
      <div className="flex items-center gap-3 px-4 pb-3">
        {/* Avatar with ring */}
        <div className="relative flex-shrink-0">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#142E3D] to-[#1a3f52] flex items-center justify-center shadow-md ring-2 ring-[#8DC63F]/30">
            <Bot size={22} className="text-[#8DC63F]" />
          </div>
          {/* Online dot */}
          <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#8DC63F] rounded-full border-2 border-white" />
        </div>

        {/* Name + subtitle */}
        <div className="flex-1 min-w-0">
          <h3 className="text-[#142E3D] font-bold text-[15px] leading-tight tracking-tight">
            Packaging Assistant
          </h3>
          <p className="text-gray-400 text-xs mt-0.5 font-medium">AI assistant · Typically replies instantly</p>
        </div>

        {/* Feedback thumbs */}
        <div className="flex items-center gap-1 ml-auto">
          <button
            onClick={onToggleMaximize}
            className="hidden sm:flex text-gray-400 hover:text-[#142E3D] w-8 h-8 items-center justify-center rounded-lg transition-colors hover:bg-gray-100"
            aria-label={isMaximized ? 'Minimize chat' : 'Maximize chat'}
          >
            {isMaximized ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-[#142E3D] w-9 h-9 flex items-center justify-center rounded-xl transition-all hover:bg-gray-100"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
          {/* <button
            onClick={() => setFeedback('up')}
            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all ${feedback === 'up'
                ? 'bg-[#8DC63F]/15 text-[#8DC63F]'
                : 'text-gray-300 hover:text-[#8DC63F] hover:bg-[#8DC63F]/10'
              }`}
            aria-label="Helpful"
          >
            <ThumbsUp size={15} />
          </button>
          <button
            onClick={() => setFeedback('down')}
            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all ${feedback === 'down'
                ? 'bg-red-50 text-red-400'
                : 'text-gray-300 hover:text-red-400 hover:bg-red-50'
              }`}
            aria-label="Not helpful"
          >
            <ThumbsDown size={15} />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
