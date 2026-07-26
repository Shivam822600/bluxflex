import { Check, X, Minus } from 'lucide-react';
import Reveal from './Reveal';

/**
 * ComparisonTable — "Direct Sourcing vs BulkFlex" style enterprise
 * comparison. status: 'yes' | 'no' | 'partial' for the right-hand icon.
 */
export default function ComparisonTable({ title, subtitle, rows }) {
  const icon = (status) => {
    if (status === 'yes') return <Check size={16} strokeWidth={3} style={{ color: 'var(--color-brand-green)' }} />;
    if (status === 'no') return <X size={16} strokeWidth={3} style={{ color: '#C0392B' }} />;
    return <Minus size={16} strokeWidth={3} style={{ color: 'var(--color-text-muted)' }} />;
  };

  return (
    <div>
      {title && (
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-heading font-extrabold text-3xl" style={{ color: 'var(--color-brand-dark)' }}>{title}</h2>
          {subtitle && <p className="mt-3 text-sm" style={{ color: 'var(--color-text-muted)' }}>{subtitle}</p>}
        </div>
      )}
      <Reveal>
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr style={{ background: 'var(--color-brand-dark)' }}>
                <th className="text-left font-bold text-white/90 uppercase text-xs tracking-wide px-5 py-4">What We're Comparing</th>
                <th className="text-left font-bold text-white/90 uppercase text-xs tracking-wide px-5 py-4">Direct From Factory</th>
                <th className="text-left font-bold text-brand-dark uppercase text-xs tracking-wide px-5 py-4" style={{ background: 'var(--color-brand-green)' }}>With BulkFlex</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-t border-border" style={{ background: i % 2 ? 'var(--color-bg-beige)' : 'white' }}>
                  <td className="px-5 py-4 font-semibold" style={{ color: 'var(--color-brand-dark)' }}>{row.label}</td>
                  <td className="px-5 py-4" style={{ color: 'var(--color-text-muted)' }}>
                    <span className="inline-flex items-center gap-1.5">{icon(row.directStatus)}{row.direct}</span>
                  </td>
                  <td className="px-5 py-4 font-medium" style={{ color: 'var(--color-brand-dark)' }}>
                    <span className="inline-flex items-center gap-1.5">{icon('yes')}{row.bulkflex}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </div>
  );
}
