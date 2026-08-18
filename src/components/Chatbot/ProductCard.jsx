import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const ProductCard = ({ product, onClose }) => {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/product/${product.slug}`);
    if (onClose) onClose();
  };

  return (
    <div
      style={{
        width: '148px',
        flexShrink: 0,
        background: '#FFFFFF',
        border: '1.5px solid #E2E8F0',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(20, 46, 61, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        scrollSnapAlign: 'start',
        transition: 'transform 0.2s, box-shadow 0.2s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(20, 46, 61, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(20, 46, 61, 0.05)';
      }}
    >
      {/* Image container */}
      <div style={{
        height: '110px',
        background: '#F8FAFC',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6px',
        borderBottom: '1px solid #F1F5F9'
      }}>
        {/* Category Pill Badge */}
        <span style={{
          position: 'absolute',
          top: '6px',
          left: '6px',
          background: 'rgba(20, 46, 61, 0.88)',
          color: '#8DC63F',
          fontSize: '9px',
          fontWeight: '800',
          padding: '2px 7px',
          borderRadius: '20px',
          letterSpacing: '0.3px',
          zIndex: 2
        }}>
          BulkFlex
        </span>

        <img
          src={product.image}
          alt={product.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block'
          }}
          onError={(e) => { e.target.src = 'https://placehold.co/150x120?text=No+Image'; }}
        />
      </div>

      {/* Content */}
      <div style={{
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
      }}>
        <h4 style={{
          fontSize: '12px',
          fontWeight: '800',
          color: '#142E3D',
          margin: '0 0 4px 0',
          lineHeight: '1.3',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {product.title}
        </h4>

        {product.description && (
          <p style={{
            fontSize: '10px',
            color: '#64748B',
            margin: '0 0 8px 0',
            lineHeight: '1.3',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {product.description}
          </p>
        )}

        {/* CTA */}
        <div style={{ marginTop: 'auto', paddingTop: '4px' }}>
          <button
            onClick={handleViewProduct}
            style={{
              width: '100%',
              background: '#142E3D',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              padding: '6px 10px',
              fontSize: '11px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#091C26'; e.currentTarget.style.color = '#8DC63F'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#142E3D'; e.currentTarget.style.color = '#FFFFFF'; }}
          >
            View Details
            <ExternalLink size={11} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
