import { motion } from 'framer-motion';

/**
 * AdvantageCard — numbered feature card (e.g. "01. One Contact. Many Audited
 * Suppliers."). Ghost-numeral in the corner, green tag pill, subtle lift on hover.
 */
export default function AdvantageCard({ number, title, description, tag }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="relative border border-border bg-white rounded-2xl p-8 overflow-hidden"
    >
      <span
        className="absolute -top-2 left-6 text-6xl font-heading font-extrabold select-none"
        style={{ color: 'var(--color-brand-green-light)' }}
        aria-hidden="true"
      >
        {number}
      </span>
      <div className="relative pt-8">
        <h3 className="font-heading font-extrabold text-lg" style={{ color: 'var(--color-brand-dark)' }}>
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
          {description}
        </p>
        {tag && (
          <span
            className="inline-block mt-4 text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full"
            style={{ background: 'var(--color-brand-green-light)', color: 'var(--color-brand-dark)' }}
          >
            {tag}
          </span>
        )}
      </div>
    </motion.div>
  );
}
