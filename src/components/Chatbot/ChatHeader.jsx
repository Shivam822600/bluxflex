import React from 'react';
import { X, Maximize2, Minimize2, Bot } from 'lucide-react';

const ChatHeader = ({ onClose, isMaximized, onToggleMaximize }) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #142E3D 0%, #091C26 100%)',
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      flexShrink: 0,
      zIndex: 10
    }}>
      {/* Agent Identity */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            background: '#04131A',
            border: '2px solid #8DC63F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 10px rgba(141, 198, 63, 0.25)'
          }}>
            <Bot size={20} color="#8DC63F" />
          </div>
          {/* Live pulsing online dot */}
          <span style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: '#8DC63F',
            border: '2px solid #142E3D'
          }} />
        </div>

        <div style={{ minWidth: 0 }}>
          <div style={{
            color: '#FFFFFF',
            fontSize: '14.5px',
            fontWeight: '800',
            lineHeight: 1.2,
            fontFamily: 'Manrope, sans-serif',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            Packaging Assistant
          </div>
          <div style={{
            color: '#94A3B8',
            fontSize: '11px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginTop: '2px'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#8DC63F',
              display: 'inline-block'
            }} />
            Active · Instant AI Sourcing Support
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0, marginLeft: '8px' }}>
        <button
          onClick={onToggleMaximize}
          aria-label={isMaximized ? 'Minimize chat' : 'Maximize chat'}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            color: '#E2E8F0',
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; }}
        >
          {isMaximized ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
        </button>
        <button
          onClick={onClose}
          aria-label="Close chat"
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            color: '#E2E8F0',
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.25)'; e.currentTarget.style.color = '#FCA5A5'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color = '#E2E8F0'; }}
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
