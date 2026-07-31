import React from 'react';
import ProductCarousel from './ProductCarousel';
import { Bot, User } from 'lucide-react';

const ChatMessage = ({ message, onClose, onAction }) => {
  const isUser = message.sender === 'user';
  const hasProducts = message.products && message.products.length > 0;

  return (
    // Outer wrapper is full-width — carousel can use it directly
    <div className={`flex flex-col w-full mb-2 ${isUser ? 'items-end' : 'items-start'}`}>

      {/* Bubble row — constrained to 82% max */}
      <div className={`flex max-w-[82%] ${isUser ? 'flex-row-reverse' : 'flex-row'} items-end gap-2`}>

        {/* Avatar */}
        <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center mb-0.5">
          {isUser ? (
            <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
              <User size={14} className="text-gray-500" />
            </div>
          ) : (
            <div className="w-full h-full bg-[#142E3D] rounded-full flex items-center justify-center shadow-sm">
              <Bot size={14} className="text-[#8DC63F]" />
            </div>
          )}
        </div>

        {/* Text bubble only */}
        <div
          className={`px-3.5 py-2.5 text-[14px] leading-relaxed break-words whitespace-pre-wrap shadow-sm ${
            isUser
              ? 'bg-[#142E3D] text-white rounded-2xl rounded-br-[5px]'
              : 'bg-[#F4F5F7] text-gray-800 rounded-2xl rounded-bl-[5px]'
          }`}
        >
          {message.text && message.text.split('\n').map((line, i, arr) => (
            <React.Fragment key={i}>
              {line}
              {i !== arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Product carousel — full width, outside the 82% constraint */}
      {hasProducts && (
        <div className="w-full mt-1">
          <ProductCarousel
            products={message.products}
            onClose={onClose}
            onAction={onAction}
          />
        </div>
      )}

      {/* Timestamp — aligned to correct side */}
      <span className={`text-[10px] text-gray-400 mt-1 ${isUser ? 'mr-1' : 'ml-9'}`}>
        {message.timestamp
          ? new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          : ''}
      </span>
    </div>
  );
};

export default ChatMessage;
