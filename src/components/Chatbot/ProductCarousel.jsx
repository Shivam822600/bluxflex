import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductCarousel = ({ products, onClose }) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const t = setTimeout(checkScroll, 100);
    window.addEventListener('resize', checkScroll);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', checkScroll);
    };
  }, [products]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -160 : 160,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      marginTop: '8px',
      marginBottom: '6px',
      paddingLeft: '36px'
    }}>

      {/* Left scroll arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          style={{
            position: 'absolute',
            left: '26px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: '#142E3D',
            color: '#FFFFFF',
            border: '2px solid #FFFFFF',
            boxShadow: '0 4px 12px rgba(20,46,61,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.15s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
        >
          <ChevronLeft size={16} />
        </button>
      )}

      {/* Scroll container */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '10px',
          paddingBottom: '6px',
          paddingRight: '6px',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onClose={onClose}
          />
        ))}
      </div>

      {/* Right scroll arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          style={{
            position: 'absolute',
            right: '-4px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: '#142E3D',
            color: '#FFFFFF',
            border: '2px solid #FFFFFF',
            boxShadow: '0 4px 12px rgba(20,46,61,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.15s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
        >
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
};

export default ProductCarousel;
