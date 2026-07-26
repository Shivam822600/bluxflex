import { motion } from 'framer-motion';

/**
 * Reveal — the single, consistent scroll-entrance animation used across
 * the site. Per the design strategy: one subtle fade+rise, never staggered
 * or bouncy, respects prefers-reduced-motion via Framer's built-in handling.
 */
export default function Reveal({ children, delay = 0, y = 16, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container — wraps a list of children, each should be a <Reveal> or motion element. */
export function RevealGroup({ children, className = '', stagger = 0.08 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const revealItemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};
