import React from 'react';
import ProductCarousel from './ProductCarousel';
import { Bot, User } from 'lucide-react';

const ChatMessage = ({ message, onClose, onAction }) => {
  const isUser = message.sender === 'user';
  const hasProducts = message.products && message.products.length > 0;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginBottom: '14px',
      alignItems: isUser ? 'flex-end' : 'flex-start'
    }}>
      {/* Bubble Row */}
      <div style={{
        display: 'flex',
        flexDirection: isUser ? 'row-reverse' : 'row',
        alignItems: 'flex-start',
        gap: '8px',
        maxWidth: '88%'
      }}>
        {/* Avatar */}
        <div style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          flexShrink: 0,
          background: isUser ? 'rgba(20, 46, 61, 0.08)' : '#142E3D',
          border: isUser ? '1px solid rgba(20, 46, 61, 0.15)' : '1.5px solid #8DC63F',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '2px'
        }}>
          {isUser ? (
            <User size={14} color="#142E3D" />
          ) : (
            <Bot size={14} color="#8DC63F" />
          )}
        </div>

        {/* Text Bubble */}
        <div style={{
          background: isUser ? '#142E3D' : '#FFFFFF',
          color: isUser ? '#FFFFFF' : '#1E293B',
          border: isUser ? 'none' : '1px solid #E2E8F0',
          borderRadius: isUser ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
          padding: '12px 16px',
          fontSize: '13.5px',
          lineHeight: '1.6',
          boxShadow: isUser ? '0 4px 12px rgba(20, 46, 61, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.04)',
          wordBreak: 'break-word',
          whiteSpace: 'pre-wrap',
          fontFamily: 'inherit'
        }}>
          {message.text && message.text.split('\n').map((line, i, arr) => (
            <React.Fragment key={i}>
              {line}
              {i !== arr.length - 1 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Product carousel */}
      {hasProducts && (
        <div style={{ width: '100%', marginTop: '8px' }}>
          <ProductCarousel
            products={message.products}
            onClose={onClose}
            onAction={onAction}
          />
        </div>
      )}

      {/* Timestamp */}
      <span style={{
        fontSize: '10px',
        color: '#94A3B8',
        fontWeight: '500',
        marginTop: '4px',
        marginLeft: isUser ? '0' : '36px',
        marginRight: isUser ? '36px' : '0'
      }}>
        {message.timestamp
          ? new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          : ''}
      </span>
    </div>
  );
};

export default ChatMessage;
