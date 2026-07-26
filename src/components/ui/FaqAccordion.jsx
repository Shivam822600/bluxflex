import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

/**
 * FaqAccordion — interactive expand/collapse FAQ list with a green accent
 * bar on the active item, matching the enterprise reference layout.
 */
export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="bg-white rounded-xl overflow-hidden transition-colors"
            style={{
              borderLeft: `3px solid ${isOpen ? 'var(--color-brand-green)' : 'transparent'}`,
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-bold text-[15px]" style={{ color: 'var(--color-brand-dark)' }}>
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="shrink-0"
                style={{ color: 'var(--color-brand-green)' }}
              >
                <Plus size={18} strokeWidth={2.5} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
