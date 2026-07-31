import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const ProductCard = ({ product, onClose, onAction }) => {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/product/${product.slug}`);
    if (onClose) onClose();
  };

  return (
    <div
      className="flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group flex-shrink-0"
      style={{
        width: '155px',          /* compact card width — shows ~2 cards + peek */
        scrollSnapAlign: 'start'
      }}
    >
      {/* Image */}
      <div className="h-32 bg-white relative overflow-hidden flex items-center justify-center p-2 border-b border-gray-50">
        {/* Category badge */}
        <div className="absolute top-1.5 left-1.5 z-10">
          <span className="bg-[#142E3D]/85 text-white text-[9px] font-medium px-1.5 py-0.5 rounded-full">
            Packaging
          </span>
        </div>
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.target.src = 'https://placehold.co/150x120?text=No+Image'; }}
        />
      </div>

      {/* Content */}
      <div className="p-2.5 flex flex-col flex-grow">
        <h4 className="font-semibold text-[#142E3D] text-[12px] line-clamp-2 mb-1 leading-tight">
          {product.title}
        </h4>

        {product.description && (
          <p className="text-gray-400 text-[10px] line-clamp-2 mb-2 leading-snug">
            {product.description}
          </p>
        )}

        {/* CTA */}
        <div className="mt-auto pt-1">
          <button
            onClick={handleViewProduct}
            className="flex items-center justify-center w-full bg-[#142E3D] hover:bg-[#0F2531] text-white text-[11px] font-medium py-2 rounded-xl transition-all min-h-[36px]"
            style={{ border: 'none' }}
          >
            View
            <ExternalLink size={11} className="ml-1 opacity-80" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
