import React, { useState } from 'react';
import { 
  CheckCircle2, Globe, ShieldCheck, Truck, Factory, Package, 
  ChevronDown, MapPin, Anchor, FileCheck, Search, ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Reusable Components ---
const SectionHeader = ({ title, subtitle, pretitle }) => (
  <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 56px auto' }}>
    {pretitle && (
      <span style={{ color: '#8DC63F', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.2px', display: 'block', marginBottom: '12px' }}>
        {pretitle}
      </span>
    )}
    <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', color: '#142E3D', marginBottom: '16px', lineHeight: '1.2' }}>
      {title}
    </h2>
    {subtitle && (
      <p style={{ color: '#64748B', fontSize: '16px', lineHeight: '1.6' }}>
        {subtitle}
      </p>
    )}
  </div>
);

// --- Section 2: Why BulkFlex ---
export const WhyBulkFlexSection = () => {
  const advantages = [
    { num: '01', title: 'One Contact. Many Audited Suppliers.', desc: 'You deal with one BulkFlex relationship manager who coordinates across our entire pre-audited supplier network. You get multi-supplier optionality, competitive pricing, and backup capacity — all through a single professional contact. No more supplier juggling.' },
    { num: '02', title: 'Your Extended Arm in Asia', desc: 'BulkFlex operates on the ground in India and Asia — not from a desk overseas. That means real factory visits, in-person pre-shipment inspections, and face-to-face supplier accountability. We represent your interests exactly as an internal procurement team would.' },
    { num: '03', title: 'Audited Factories — No Unknowns', desc: 'Every manufacturing facility in our network has passed a structured factory audit — covering production capacity, quality management systems, compliance certifications, workforce standards, and export capability. You never deal with an unknown vendor.' },
    { num: '04', title: 'Compliance Built In — Not Bolted On', desc: 'Documentation, batch traceability, certificate of origin, pre-shipment inspection reports, and lab testing are not add-ons — they are embedded into every BulkFlex engagement. Your shipments arrive with a complete compliance package.' },
    { num: '05', title: 'Buyer-Specific SOPs at Factory Level', desc: 'Your specifications, your packaging standards, your labelling requirements — implemented at the factory as standard operating procedures. This ensures consistency across every order, not just the first one.' },
    { num: '06', title: 'End-to-End Procurement Management', desc: 'From your first specification review through factory shortlisting, sampling, QC, compliance, and final container dispatch — BulkFlex manages every stage and keeps you informed at every milestone.' }
  ];

  return (
    <section style={{ padding: 'clamp(80px, 8vw, 120px) 0', background: '#FBF1E6' }}>
      <div className="container">
        <SectionHeader 
          pretitle="THE BULKFLEX ADVANTAGE"
          title="Multi-Supplier Strength. Single-Contact Simplicity."
          subtitle="Global procurement from Asia doesn't have to be complex. BulkFlex gives you the network, the systems, and the people — so you get the results without the overhead."
        />
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {advantages.map((adv, idx) => (
            <div key={idx} style={{ background: '#FFFFFF', padding: '40px', borderRadius: '16px', border: '1px solid #E2E8F0', boxShadow: '0 4px 20px rgba(20,46,61,0.03)', position: 'relative' }}>
              <span style={{ fontSize: '48px', fontWeight: '800', color: '#F0F7E4', position: 'absolute', top: '24px', left: '32px', zIndex: 0 }}>
                {adv.num}
              </span>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#142E3D', marginBottom: '16px', marginTop: '20px' }}>{adv.title}</h3>
                <p style={{ color: '#64748B', fontSize: '14.5px', lineHeight: '1.7' }}>{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 4: Product Sourcing Process ---
export const ProductSourcingProcessSection = () => {
  const steps = [
    { num: '01', title: 'Buyer Specs & Use-Case Review', desc: 'Every engagement begins with a structured specification review. We go deep on your product requirements, end-use application, compliance obligations, and delivery timelines.', icon: <FileCheck size={24} color="#8DC63F" /> },
    { num: '02', title: 'Factory Shortlisting', desc: 'We filter our pre-audited supplier network against your specifications and shortlist the best-matched factories — presenting you with a transparent comparison.', icon: <Search size={24} color="#8DC63F" /> },
    { num: '03', title: 'Sampling & Pre-Shipment Quality Control', desc: 'Samples are produced and reviewed against your approved specifications. Once bulk production is complete, our on-ground team conducts a physical Pre-Shipment Inspection at the factory.', icon: <ShieldCheck size={24} color="#8DC63F" /> },
    { num: '04', title: 'Contract, Compliance & Batch Traceability', desc: 'We ensure full batch traceability, verify export/import compliance for your destination market, and arrange third-party lab testing where required.', icon: <CheckCircle2 size={24} color="#8DC63F" /> },
    { num: '05', title: 'Container Dispatch & Documentation', desc: 'Your shipment is loaded, sealed, and dispatched with a complete documentation package. We track your shipment through to port clearance.', icon: <Anchor size={24} color="#8DC63F" /> }
  ];

  return (
    <section style={{ padding: 'clamp(80px, 8vw, 120px) 0', background: '#142E3D', color: '#FFFFFF' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 64px auto' }}>
          <span style={{ color: '#8DC63F', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.2px', display: 'block', marginBottom: '12px' }}>
            HOW IT WORKS
          </span>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', color: '#FFFFFF', marginBottom: '16px', lineHeight: '1.2' }}>
            5 Steps From Enquiry to Cleared Container.
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: '1.6' }}>
            A structured procurement process designed for experienced buyers — transparent at every stage, with your approval required before anything moves forward.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
          {steps.map((step, idx) => (
            <div key={idx} style={{ display: 'flex', gap: '24px', background: '#0F2531', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(141, 198, 63, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {step.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#FFFFFF', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#8DC63F', fontSize: '16px' }}>{step.num}</span> {step.title}
                </h3>
                <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: '1.6' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Section 6: Why Source From India ---
export const WhySourceFromIndiaSection = () => {
  return (
    <section style={{ padding: 'clamp(80px, 8vw, 120px) 0', background: '#FFFFFF' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#8DC63F', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.2px', display: 'block', marginBottom: '12px' }}>
              MANUFACTURING HUB
            </span>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: '800', color: '#142E3D', marginBottom: '20px', lineHeight: '1.2' }}>
              Why Source Industrial Packaging From India?
            </h2>
            <p style={{ color: '#64748B', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
              India has emerged as the world's leading hub for industrial packaging, FIBCs, and technical textiles. By sourcing from India through BulkFlex, you tap into a massive, highly-regulated manufacturing ecosystem that offers superior scalability, strict quality controls, and highly competitive pricing.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyle: 'none', padding: 0 }}>
              {['Vast capacity for woven polypropylene & technical textiles', 'Globally recognized ISO, BRC, and UN certified facilities', 'Strong infrastructure for international container export', 'Skilled workforce focused on quality and compliance'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#1E293B', fontWeight: '500', fontSize: '15px' }}>
                  <CheckCircle2 size={20} color="#8DC63F" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background: '#FBF1E6', padding: '48px', borderRadius: '24px', textAlign: 'center', border: '1px solid #E4DCD0' }}>
            <MapPin size={48} color="#8DC63F" style={{ margin: '0 auto 24px auto' }} />
            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#142E3D', marginBottom: '16px' }}>On-Ground Presence</h3>
            <p style={{ color: '#64748B', fontSize: '15px', lineHeight: '1.6' }}>
              BulkFlex operates directly from India. We are not an overseas desk—we are in the factories, at the ports, and managing your supply chain right at the source.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section 7: Global Export Capability ---
export const GlobalExportCapabilitySection = () => {
  return (
    <section style={{ padding: 'clamp(80px, 8vw, 120px) 0', background: '#FBF1E6', borderTop: '1px solid #E4DCD0' }}>
      <div className="container">
        <SectionHeader 
          title="Export your product worldwide"
          subtitle="We provide comprehensive packaging and logistics solutions for global trade. From factory floor to your destination port, BulkFlex manages the complexities of international export so you can focus on your business."
        />
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
          <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', textAlign: 'center', width: '280px', border: '1px solid #E2E8F0', boxShadow: '0 4px 14px rgba(0,0,0,0.03)' }}>
            <Globe size={40} color="#142E3D" style={{ margin: '0 auto 16px auto' }} />
            <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#142E3D', marginBottom: '8px' }}>Global Reach</h4>
            <p style={{ color: '#64748B', fontSize: '14px' }}>Shipping to North America, Europe, APAC, and MENA regions reliably.</p>
          </div>
          <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '16px', textAlign: 'center', width: '280px', border: '1px solid #E2E8F0', boxShadow: '0 4px 14px rgba(0,0,0,0.03)' }}>
            <Truck size={40} color="#142E3D" style={{ margin: '0 auto 16px auto' }} />
            <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#142E3D', marginBottom: '8px' }}>Freight Coordination</h4>
            <p style={{ color: '#64748B', fontSize: '14px' }}>Optimized container loading and seamless forwarder integration.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Section 8: FAQs ---
export const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  const faqs = [
    {
      q: 'I already have direct factory relationships. Why would I need BulkFlex?',
      a: 'BulkFlex doesn\'t ask you to abandon relationships that are working. We provide infrastructure around your existing procurement — adding on-ground QC, backup supply options, compliance documentation, and a single coordination layer. Most of our buyers continue working with factories they know; they simply stop carrying the risks and administrative overhead alone.'
    },
    {
      q: 'Does working through BulkFlex add cost to my orders?',
      a: 'BulkFlex\'s multi-supplier network often delivers competitive or improved pricing compared to single-factory direct relationships — because you now have a market benchmark and negotiating leverage you didn\'t have before. Factor in the costs you currently absorb independently — QC coordination, documentation management, compliance failures, rework — and the commercial case typically improves further.'
    },
    {
      q: 'How do I know the factories you shortlist are genuinely audited?',
      a: 'We provide full audit documentation for every factory we shortlist for your order — covering the audit scope, findings, certifications held, and production capability assessment. We also encourage buyers to visit shortlisted factories in person, and we actively coordinate those visits.'
    },
    {
      q: 'Can BulkFlex work with my existing freight forwarder and logistics setup?',
      a: 'Yes. BulkFlex manages the origin-side of your supply chain — factory coordination, QC, compliance, and documentation. Your freight and import arrangements remain exactly as they are. We work with your logistics setup, not around it.'
    }
  ];

  return (
    <section style={{ padding: 'clamp(80px, 8vw, 120px) 0', background: '#FFFFFF' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        <SectionHeader 
          title="Questions Experienced Importers Ask Us"
          subtitle="These are the questions we hear most from buyers who have been sourcing directly and are evaluating whether BulkFlex can add genuine value."
        />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
              <button
                onClick={() => toggleFaq(idx)}
                style={{ width: '100%', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer' }}
              >
                <span style={{ fontSize: '16px', fontWeight: '800', color: '#142E3D', paddingRight: '24px' }}>{faq.q}</span>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: openFaq === idx ? '#142E3D' : '#F0F7E4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.2s' }}>
                  <ChevronDown size={18} color={openFaq === idx ? '#FFFFFF' : '#8DC63F'} style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </div>
              </button>
              {openFaq === idx && (
                <div style={{ padding: '0 32px 32px 32px', color: '#475569', fontSize: '15px', lineHeight: '1.7', borderTop: '1px solid #F1F5F9', paddingTop: '24px' }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
