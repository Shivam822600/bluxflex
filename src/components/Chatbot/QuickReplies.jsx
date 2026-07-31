import React from 'react';

const QuickReplies = ({ replies, onSelect }) => {
  if (!replies || replies.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-2 mb-3">
      {replies.map((reply, i) => (
        <button
          key={i}
          onClick={() => onSelect(reply)}
          className="px-3.5 py-2 bg-white border border-gray-200 text-gray-700 text-[12.5px] font-medium rounded-full hover:bg-[#142E3D] hover:text-white hover:border-[#142E3D] hover:shadow-md transition-all duration-150 whitespace-nowrap min-h-[34px]"
        >
          {reply}
        </button>
      ))}
    </div>
  );
};

export default QuickReplies;
