import { motion } from 'framer-motion';
import Reveal from './Reveal';

/** CostRow — icon + bold label + description, used in "What QA Failures Actually Cost". */
export function CostRow({ icon: Icon, label, description }) {
  return (
    <div className="flex items-start gap-3 rounded-lg px-4 py-3.5" style={{ background: 'rgba(255,255,255,0.06)' }}>
      <Icon size={18} className="mt-0.5 shrink-0" style={{ color: 'var(--color-brand-green)' }} />
      <p className="text-sm leading-relaxed text-white/85">
        <span className="font-bold text-white">{label}</span> — {description}
      </p>
    </div>
  );
}

/** FloatingStatCard — small dark card with a headline stat, meant to float over/beside a hero image. */
export function FloatingStatCard({ eyebrow, value, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`rounded-xl px-5 py-4 shadow-hover ${className}`}
      style={{ background: 'var(--color-brand-dark)', boxShadow: 'var(--shadow-hover)' }}
    >
      <div className="text-[11px] font-bold uppercase tracking-wide text-white/60">{eyebrow}</div>
      <div className="text-white font-heading font-extrabold text-lg mt-0.5">{value}</div>
    </motion.div>
  );
}

/** ProblemSolutionCard — "Quality That Varies Batch to Batch" style pairing. */
export function ProblemSolutionCard({ icon: Icon, title, problem, solution }) {
  return (
    <Reveal>
      <div className="bg-white rounded-2xl p-7" style={{ boxShadow: 'var(--shadow-card)' }}>
        <Icon size={22} style={{ color: 'var(--color-brand-green)' }} />
        <h3 className="font-heading font-extrabold text-lg mt-3" style={{ color: 'var(--color-brand-dark)' }}>{title}</h3>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>{problem}</p>
        <p className="mt-3 text-sm font-semibold flex items-start gap-1.5" style={{ color: 'var(--color-brand-green)' }}>
          <span>→</span><span>BulkFlex: {solution}</span>
        </p>
      </div>
    </Reveal>
  );
}
