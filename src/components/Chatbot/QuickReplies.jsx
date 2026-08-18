import React from 'react';

const QuickReplies = ({ replies, onSelect }) => {
  if (!replies || replies.length === 0) return null;

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginTop: '8px',
      marginBottom: '10px'
    }}>
      {replies.map((reply, i) => (
        <button
          key={i}
          onClick={() => onSelect(reply)}
          style={{
            background: '#FFFFFF',
            border: '1.5px solid #E2E8F0',
            color: '#142E3D',
            fontSize: '12px',
            fontWeight: '700',
            padding: '7px 14px',
            borderRadius: '50px',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.04)',
            transition: 'all 0.2s',
            whiteSpace: 'nowrap',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#142E3D';
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.borderColor = '#142E3D';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(20, 46, 61, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#FFFFFF';
            e.currentTarget.style.color = '#142E3D';
            e.currentTarget.style.borderColor = '#E2E8F0';
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.04)';
          }}
        >
          {reply}
        </button>
      ))}
    </div>
  );
};

export default QuickReplies;
