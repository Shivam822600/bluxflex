import { ShieldCheck } from 'lucide-react';

/**
 * CertificationStrip — horizontal row of certification badges under a hero
 * or CTA. Pass an array of strings. Renders neutrally (text, not logos)
 * since we don't have official certification mark artwork.
 */
export default function CertificationStrip({ items, className = '' }) {
  return (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${className}`}>
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: 'var(--color-text-muted)' }}>
          <ShieldCheck size={14} style={{ color: 'var(--color-brand-green)' }} />
          {item}
        </span>
      ))}
    </div>
  );
}
