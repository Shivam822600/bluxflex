import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductCarousel = ({ products, onClose, onAction }) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 2);
    }
  };

  useEffect(() => {
    // Small delay to allow layout to settle before checking scroll state
    const t = setTimeout(checkScroll, 100);
    window.addEventListener('resize', checkScroll);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', checkScroll);
    };
  }, [products]);

  // Card width = 160px, gap = 10px → scroll by one card at a time
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -170 : 170,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 350);
    }
  };

  return (
    <div className="relative w-full mt-2 mb-1 pl-9">
      {/* pl-9 aligns carousel left edge with the text bubble (past avatar width) */}

      {/* Left arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-7 top-1/2 -translate-y-1/2 z-10 w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-100 text-[#142E3D] hover:text-[#8DC63F] hover:shadow-lg transition-all"
          aria-label="Scroll left"
        >
          <ChevronLeft size={16} />
        </button>
      )}

      {/* Scroll container — uses full available width, shows ~1.3 cards so user knows to scroll */}
      <div
        ref={scrollContainerRef}
        onScroll={checkScroll}
        className="flex overflow-x-auto gap-2.5 pb-2 hide-scrollbar scroll-smooth"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onClose={onClose}
            onAction={onAction}
          />
        ))}
      </div>

      {/* Right arrow */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 flex items-center justify-center bg-white rounded-full shadow-md border border-gray-100 text-[#142E3D] hover:text-[#8DC63F] hover:shadow-lg transition-all"
          aria-label="Scroll right"
        >
          <ChevronRight size={16} />
        </button>
      )}

      {/* Right fade hint — shows when more cards exist */}
      {canScrollRight && (
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white/80 to-transparent pointer-events-none" />
      )}
    </div>
  );
};

export default ProductCarousel;
