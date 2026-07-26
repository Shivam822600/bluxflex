import { motion } from 'framer-motion';
import Reveal from './Reveal';

/**
 * ProcessTimeline — numbered vertical steps with a connecting line that
 * draws in on scroll, tags per step. Used for "5 Steps From Enquiry to
 * Cleared Container" style sections on a dark background.
 */
export default function ProcessTimeline({ steps, dark = true }) {
  const textColor = dark ? 'white' : 'var(--color-brand-dark)';
  const mutedColor = dark ? 'rgba(255,255,255,0.7)' : 'var(--color-text-muted)';
  const lineColor = dark ? 'rgba(141,198,63,0.35)' : 'var(--color-border)';

  return (
    <div className="relative">
      {steps.map((step, i) => (
        <Reveal key={i} delay={i * 0.06}>
          <div className="flex gap-6 pb-10 relative">
            {i < steps.length - 1 && (
              <span
                className="absolute left-[27px] top-14 bottom-0 w-px"
                style={{ background: lineColor }}
                aria-hidden="true"
              />
            )}
            <div
              className="shrink-0 w-14 h-14 rounded-xl border-2 flex items-center justify-center font-heading font-extrabold text-lg"
              style={{ borderColor: 'var(--color-brand-green)', color: 'var(--color-brand-green)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg" style={{ color: textColor }}>
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed max-w-xl" style={{ color: mutedColor }}>
                {step.description}
              </p>
              {step.tags && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {step.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded border"
                      style={{ borderColor: 'rgba(141,198,63,0.4)', color: 'var(--color-brand-green)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
