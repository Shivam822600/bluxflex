import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { UserPlus, ClipboardCheck, FileText, FileSpreadsheet, Truck, CheckCircle2, ArrowRight, ChevronDown, X, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function BuyerTools() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    {
      q: 'I already have direct factory relationships. Why would I need BulkFlex?',
      a: "BulkFlex doesn't ask you to abandon relationships that are working. We provide infrastructure around your existing procurement — adding on-ground QC, backup supply options, compliance documentation, and a single coordination layer. Most of our buyers continue working with factories they know; they simply stop carrying the risks and administrative overhead alone. The question isn't whether your relationships are good. It's whether the systems around them are good enough."
    },
    {
      q: 'Does working through BulkFlex add cost to my orders?',
      a: "BulkFlex's multi-supplier network often delivers competitive or improved pricing compared to single-factory direct relationships — because you now have a market benchmark and negotiating leverage you didn't have before. Factor in the costs you currently absorb independently — QC coordination, documentation management, compliance failures, rework — and the commercial case for BulkFlex typically improves further."
    },
    {
      q: 'What product categories does BulkFlex cover?',
      a: "BulkFlex works across a broad range of bulk and manufactured product categories sourced from India and Asia — including FIBC jumbo bags, multiwall paper sacks, BOPP bags, PP woven sacks, agro textiles, container liners, and custom industrial packaging. Contact us with your product specifics for immediate feasibility verification."
    },
    {
      q: 'Can BulkFlex work with my existing freight forwarder and logistics setup?',
      a: "Yes. BulkFlex manages the origin-side of your supply chain — factory coordination, QC, compliance, and documentation. Your freight and import arrangements remain exactly as they are. We work with your logistics setup, not around it."
    },
    {
      q: 'How do I know the factories you shortlist are genuinely audited?',
      a: "We provide full audit documentation for every factory we shortlist for your order — covering the audit scope, findings, certifications held, and production capability assessment. We also encourage buyers to visit shortlisted factories in person, and we actively coordinate those visits. Our audit credentials are not claims — they are documented and verifiable."
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Banner Header */}
      <section style={{ background: 'linear-gradient(135deg, #142E3D 0%, #0F3A4A 100%)', color: '#FFFFFF', padding: 'clamp(44px, 6vw, 64px) 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <span style={{ color: '#8DC63F', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
            PROCUREMENT INFRASTRUCTURE
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', color: '#FFFFFF', margin: '12px 0 16px 0', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>
            Buyer Corner
          </h1>
          <p style={{ fontSize: '16px', color: '#94A3B8', lineHeight: '1.6', margin: 0 }}>
            Your extended arm in Asia. One contact. Zero compromise. We are not a middleman — we are your procurement team on the ground.
          </p>
        </div>
      </section>

      {/* SECTION 1: YOUR BUYER JOURNEY */}
      <section style={{ padding: 'clamp(36px, 6vw, 72px) 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 44px auto' }}>
            <span style={{ display: 'inline-block', background: '#F0F7E4', color: '#8DC63F', padding: '6px 20px', borderRadius: '50px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px', border: '1px solid rgba(0, 194, 168, 0.3)' }}>
              YOUR BUYER JOURNEY
            </span>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 34px)', color: '#142E3D', fontWeight: '800', margin: '8px 0 14px 0', fontFamily: 'var(--font-heading)' }}>
              A Transparent, Step-by-Step Process from First Contact to Final Delivery
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {/* Journey Card 01 */}
            <div className="card-clean" style={{ padding: 'clamp(20px, 3.5vw, 32px)', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '16px', right: '20px', fontSize: '32px', fontWeight: '900', color: 'rgba(7, 40, 52, 0.08)' }}>01</span>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F0F7E4', color: '#8DC63F', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <UserPlus size={22} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#142E3D', marginBottom: '10px' }}>Buyer Specs &amp; Use-Case Review</h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.65', marginBottom: '16px' }}>
                We start by understanding your application, not just your dimensions. SWL requirements, GSM, UV stabilisation hours, loop type, liner spec, certification needs all captured into a structured brief. We ask the right questions so factories receive the right spec.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Technical brief', 'Compliance mapping', 'Application review'].map((tag, tIdx) => (
                  <span key={tIdx} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#142E3D', padding: '4px 10px', borderRadius: '50px', fontSize: '11.5px', fontWeight: '700' }}>✓ {tag}</span>
                ))}
              </div>
            </div>

            {/* Journey Card 02 */}
            <div className="card-clean" style={{ padding: 'clamp(20px, 3.5vw, 32px)', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '16px', right: '20px', fontSize: '32px', fontWeight: '900', color: 'rgba(7, 40, 52, 0.08)' }}>02</span>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F0F7E4', color: '#8DC63F', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <ClipboardCheck size={22} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#142E3D', marginBottom: '10px' }}>Sampling &amp; Pre-Shipment QC</h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.65', marginBottom: '16px' }}>
                Samples are produced, reviewed against your spec, and dispatched for your approval. Pre-shipment inspection is conducted during live production not after with photographic evidence at each stage of our 11-stage QC protocol. Lab testing available on request.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Physical sampling', '11-stage QC', 'Lab testing on request', 'Photographic evidence'].map((tag, tIdx) => (
                  <span key={tIdx} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#142E3D', padding: '4px 10px', borderRadius: '50px', fontSize: '11.5px', fontWeight: '700' }}>✓ {tag}</span>
                ))}
              </div>
            </div>

            {/* Journey Card 03 */}
            <div className="card-clean" style={{ padding: 'clamp(20px, 3.5vw, 32px)', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '16px', right: '20px', fontSize: '32px', fontWeight: '900', color: 'rgba(7, 40, 52, 0.08)' }}>03</span>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F0F7E4', color: '#8DC63F', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <FileText size={22} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#142E3D', marginBottom: '10px' }}>Contract, Compliance &amp; Traceability</h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.65', marginBottom: '16px' }}>
                Buyer-specific SOPs, batch traceability records, and compliance documentation including certifications relevant to your end application (food-grade, hazmat, pharma, social audit) are prepared and provided alongside your order.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Buyer SOPs', 'Batch traceability', 'Certification alignment'].map((tag, tIdx) => (
                  <span key={tIdx} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#142E3D', padding: '4px 10px', borderRadius: '50px', fontSize: '11.5px', fontWeight: '700' }}>✓ {tag}</span>
                ))}
              </div>
            </div>

            {/* Journey Card 04 */}
            <div className="card-clean" style={{ padding: 'clamp(20px, 3.5vw, 32px)', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '16px', right: '20px', fontSize: '32px', fontWeight: '900', color: 'rgba(7, 40, 52, 0.08)' }}>04</span>
              <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#F0F7E4', color: '#8DC63F', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <FileSpreadsheet size={22} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#142E3D', marginBottom: '10px' }}>Container Dispatch &amp; Documentation</h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.65', marginBottom: '16px' }}>
                We independently optimise container loading including multi-SKU containers combining different product lines to reduce your freight cost per unit. Full export documentation, port handling from all major Indian and Vietnam gateways, and invoicing in your preferred currency: USD, CAD, EUR, AUD, or NZD.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Multi-SKU optimisation', 'All major ports', 'USD · CAD · EUR · AUD · NZD'].map((tag, tIdx) => (
                  <span key={tIdx} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#142E3D', padding: '4px 10px', borderRadius: '50px', fontSize: '11.5px', fontWeight: '700' }}>✓ {tag}</span>
                ))}
              </div>
            </div>

            {/* Journey Banner Card 05 */}
            <div style={{ background: '#142E3D', color: '#FFFFFF', borderRadius: '24px', padding: 'clamp(20px, 4vw, 32px)', gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <div style={{ fontSize: '32px', fontWeight: '900', color: '#8DC63F', flexShrink: 0 }}>05</div>
              <p style={{ fontSize: '15px', lineHeight: '1.6', margin: 0, color: '#E2E8F0', flex: 1 }}>
                <strong style={{ color: '#FFFFFF' }}>Your extended arm in Asia. One contact. Zero compromise.</strong> We are not a middleman — we are your procurement team on the ground. 30+ audited factories across India and Vietnam, managed through a single relationship, governed by your standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FOR EXPERIENCED IMPORTERS */}
      <section style={{ padding: 'clamp(36px, 6vw, 64px) 0', background: '#FBF1E6', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
            <span style={{ color: '#8DC63F', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
              FOR EXPERIENCED IMPORTERS
            </span>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 32px)', color: '#142E3D', fontWeight: '800', margin: '8px 0 14px 0', fontFamily: 'var(--font-heading)' }}>
              You Know How to Buy. BulkFlex Fixes What Still Goes Wrong.
            </h2>
            <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.7', margin: 0 }}>
              If you’ve been importing directly from Asia for years, you already understand the landscape. But even seasoned buyers deal with the same recurring problems — problems that cost real money.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px' }}>
            {/* Problem 1 */}
            <div className="card-clean" style={{ padding: 'clamp(20px, 3.5vw, 32px)' }}>
              <div style={{ width: '38px', height: '38px', background: '#F0F7E4', color: '#8DC63F', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', marginBottom: '14px' }}>
                01
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#142E3D', marginBottom: '10px' }}>
                Quality That Varies Batch to Batch
              </h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.65', marginBottom: '16px' }}>
                Your first order was flawless. Your third wasn’t. Without on-ground QC at the factory before dispatch, you’re relying on hope — and finding out the problem after it arrives at your port.
              </p>
              <div style={{ background: '#FBF1E6', padding: '12px 16px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '13px', fontWeight: '700', color: '#142E3D' }}>
                <span style={{ color: '#8DC63F' }}>BulkFlex:</span> Pre-shipment inspection on every order, every time.
              </div>
            </div>

            {/* Problem 2 */}
            <div className="card-clean" style={{ padding: 'clamp(20px, 3.5vw, 32px)' }}>
              <div style={{ width: '38px', height: '38px', background: '#F0F7E4', color: '#8DC63F', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', marginBottom: '14px' }}>
                02
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#142E3D', marginBottom: '10px' }}>
                Supplier Dependency Risk
              </h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.65', marginBottom: '16px' }}>
                When your primary factory goes dark — capacity issues, factory holidays, export restrictions — your entire supply chain stops. Single-supplier dependency is the most expensive vulnerability in direct procurement.
              </p>
              <div style={{ background: '#FBF1E6', padding: '12px 16px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '13px', fontWeight: '700', color: '#142E3D' }}>
                <span style={{ color: '#8DC63F' }}>BulkFlex:</span> Multiple audited alternatives, instantly accessible.
              </div>
            </div>
          </div>

          <div style={{ background: '#F0F7E4', border: '1px solid rgba(0, 194, 168, 0.3)', padding: '20px 28px', borderRadius: '20px', textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
            <p style={{ fontSize: '14px', color: '#142E3D', margin: 0, lineHeight: '1.75', fontWeight: '600' }}>
              These aren’t beginner mistakes. They’re structural gaps and BulkFlex is built to close them. You don’t need to start over. You need to add infrastructure around what you’re already doing. That’s exactly what BulkFlex provides without replacing your procurement knowledge or your existing supplier relationships.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE BULKFLEX ADVANTAGE */}
      <section style={{ padding: 'clamp(44px, 6vw, 80px) 0', background: '#142E3D', color: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 44px auto' }}>
            <span style={{ display: 'inline-block', background: 'rgba(0, 194, 168, 0.15)', color: '#8DC63F', padding: '6px 18px', borderRadius: '50px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px', border: '1px solid rgba(0, 194, 168, 0.3)' }}>
              THE BULKFLEX ADVANTAGE
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: '#FFFFFF', fontWeight: '800', margin: '8px 0 14px 0', fontFamily: 'var(--font-heading)' }}>
              Multi-Supplier Strength. Single-Contact Simplicity.
            </h2>
            <p style={{ fontSize: '15px', color: '#94A3B8', margin: 0, lineHeight: '1.6' }}>
              Global procurement from Asia doesn’t have to be complex. BulkFlex gives you the network, the systems, and the people so you get the results without the overhead.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              {
                title: '01. One Contact. Many Audited Suppliers.',
                desc: 'You deal with one BulkFlex relationship manager who coordinates across our entire pre-audited supplier network. You get multi-supplier optionality, competitive pricing, and backup capacity all through a single professional contact. No more supplier juggling.'
              },
              {
                title: '02. Your Extended Arm in Asia',
                desc: 'BulkFlex operates on the ground in Asia — not from a desk overseas. That means real factory visits, in-person pre-shipment inspections, and face-to-face supplier accountability. We represent your interests exactly as an internal procurement team would — but without the cost of maintaining one.'
              },
              {
                title: '03. Audited Factories — No Unknowns',
                desc: 'Every manufacturing facility in our network has passed a structured factory audit covering production capacity, quality management systems, compliance certifications, workforce standards, and export capability. You never deal with an unknown vendor. Every factory shortlisted for your order has already been vetted.'
              },
              {
                title: '04. Compliance Built In — Not Bolted On',
                desc: 'Documentation, batch traceability, certificate of origin, pre-shipment inspection reports, and lab testing are not add-ons — they are embedded into every BulkFlex engagement. Your shipments arrive with a complete compliance package, aligned to your import market requirements before dispatch. No documentation gaps. No port delays.'
              },
              {
                title: '05. Buyer-Specific SOPs at Factory Level',
                desc: 'Your specifications, your packaging standards, your labelling requirements implemented at the factory as standard operating procedures. This ensures consistency across every order, not just the first one. Repeat orders run to the same quality, the same documentation, the same result because it’s written into the production process.'
              },
              {
                title: '06. End-to-End Procurement Management',
                desc: 'From your first specification review through factory shortlisting, sampling, QC, compliance, and final container dispatch — BulkFlex manages every stage and keeps you informed at every milestone. You make the decisions. We handle the execution. Nothing moves without your approval, and nothing gets lost in the process.'
              }
            ].map((adv, idx) => (
              <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '20px', padding: 'clamp(20px, 3.5vw, 28px)' }}>
                <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#8DC63F', marginBottom: '10px' }}>
                  {adv.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: '#94A3B8', lineHeight: '1.65', margin: 0 }}>
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section style={{ padding: 'clamp(44px, 6vw, 80px) 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 44px auto' }}>
            <span style={{ display: 'inline-block', background: '#F0F7E4', color: '#8DC63F', padding: '6px 20px', borderRadius: '50px', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px', border: '1px solid rgba(0, 194, 168, 0.3)' }}>
              HOW IT WORKS
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: '#142E3D', fontWeight: '800', margin: '8px 0 14px 0', fontFamily: 'var(--font-heading)' }}>
              5 Steps From Enquiry to Cleared Container
            </h2>
            <p style={{ fontSize: '15px', color: '#64748B', margin: 0, lineHeight: '1.6' }}>
              A structured procurement process designed for experienced buyers — transparent at every stage, with your approval required before anything moves forward.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {[
              {
                step: '01',
                title: 'Buyer Specs & Use-Case Review',
                desc: 'Every engagement begins with a structured specification review — not a generic inquiry form. We go deep on your product requirements, end-use application, target markets, compliance obligations, required certifications, volume parameters, and delivery timelines. This onboarding conversation is the foundation everything else is built on. The more precisely we understand your requirements at this stage, the fewer surprises at every stage that follows.',
                pills: ['SPECIFICATION MAPPING', 'COMPLIANCE ASSESSMENT', 'VOLUME PLANNING', 'MARKET ALIGNMENT']
              },
              {
                step: '02',
                title: 'Factory Shortlisting — Audited Only',
                desc: 'We filter our pre-audited supplier network against your specifications and shortlist the best-matched factories — presenting you with a transparent comparison that includes production capacity, certifications held, lead times, and pricing. You have full visibility into who will manufacture your product before any commitment is made. No black-box supplier decisions. No factories you haven’t approved.',
                pills: ['PRE-AUDITED NETWORK', 'TRANSPARENT SHORTLIST', 'BUYER APPROVAL REQUIRED']
              },
              {
                step: '03',
                title: 'Sampling & Pre-Shipment Quality Control',
                desc: 'Samples are produced and reviewed against your approved specifications before bulk production begins. Once your order is complete, our on-ground team conducts a physical Pre-Shipment Inspection at the factory — verifying product quality, quantities, packaging, and labelling. You receive a full inspection report with photographic evidence. Nothing is dispatched without your approval and our QC sign-off. This is the stage where most importers working directly lose the most money — and where BulkFlex protects it.',
                pills: ['SAMPLE REVIEW', 'PHYSICAL PSI', 'PHOTO DOCUMENTATION', 'DUAL SIGN-OFF']
              },
              {
                step: '04',
                title: 'Contract, Compliance & Batch Traceability',
                desc: 'All commercial documentation is structured to protect your position as the buyer. We ensure full batch traceability from raw material through to finished goods, verify export and import compliance requirements for your destination market, and arrange third-party lab testing where required. Buyer-specific SOPs are implemented at factory level — making your production standards repeatable, verifiable, and consistent across every future order.',
                pills: ['BATCH TRACEABILITY', 'LAB TESTING ON REQUEST', 'BUYER SOPs', 'EXPORT COMPLIANCE']
              },
              {
                step: '05',
                title: 'Container Dispatch & Full Documentation',
                desc: 'Your shipment is loaded, sealed, and dispatched with a complete, buyer-aligned documentation package — Bill of Lading, Certificate of Origin, Pre-Shipment Inspection report, packing list, test certificates, and all buyer-mandated compliance documents. We coordinate with freight partners and track your shipment through to port clearance. Your cargo arrives with zero documentation gaps, zero compliance surprises, and zero excuses.',
                pills: ['BILL OF LADING', 'CERTIFICATE OF ORIGIN', 'PSI REPORT', 'END-TO-END TRACKING']
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="card-clean"
                style={{
                  padding: 'clamp(20px, 4vw, 32px)',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  gap: 'clamp(16px, 3vw, 24px)',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{
                  fontSize: '24px',
                  fontWeight: '900',
                  color: '#142E3D',
                  background: '#F0F7E4',
                  borderRadius: '16px',
                  height: '64px',
                  width: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1,
                  border: '1px solid rgba(0, 194, 168, 0.3)',
                  flexShrink: 0
                }}>
                  {item.step}
                </div>

                <div style={{ flex: '1 1 260px' }}>
                  <h3 style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: '800', color: '#142E3D', marginBottom: '10px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.65', marginBottom: '16px' }}>
                    {item.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {item.pills.map((pill, pIdx) => (
                      <span key={pIdx} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#142E3D', padding: '4px 12px', borderRadius: '50px', fontSize: '11.5px', fontWeight: '800', letterSpacing: '0.5px' }}>
                        ✓ {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ═══════════════════════════════════════════════════════════════════
              BUYER'S CORNER FAQ ACCORDION
          ═══════════════════════════════════════════════════════════════════ */}
          <div style={{ marginTop: 'clamp(48px, 6vw, 72px)', maxWidth: '880px', margin: 'clamp(48px, 6vw, 72px) auto 0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span style={{ color: '#8DC63F', fontWeight: '800', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Buyer FAQs
              </span>
              <h2 style={{
                fontSize: 'clamp(24px, 3.2vw, 36px)',
                fontWeight: '800',
                color: '#142E3D',
                marginTop: '8px',
                marginBottom: '12px'
              }}>
                Questions Experienced Importers Ask Us
              </h2>
              <p style={{ color: '#64748B', fontSize: '15px', lineHeight: 1.6 }}>
                Clear, transparent answers to help you evaluate how BulkFlex integrates with your current procurement.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    border: openFaq === idx ? '1.5px solid #8DC63F' : '1.5px solid #E2E8F0',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    boxShadow: openFaq === idx ? '0 8px 24px rgba(20,46,61,0.06)' : '0 2px 8px rgba(0,0,0,0.02)',
                    transition: 'border-color 0.2s, box-shadow 0.2s'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '18px 22px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '16px'
                    }}
                  >
                    <span style={{
                      flex: 1,
                      fontSize: '15.5px',
                      fontWeight: '800',
                      color: '#142E3D',
                      lineHeight: 1.4,
                      wordBreak: 'break-word'
                    }}>
                      {faq.q}
                    </span>
                    {openFaq === idx
                      ? <X size={18} color="#8DC63F" style={{ flexShrink: 0 }} />
                      : <ChevronDown size={18} color="#94A3B8" style={{ flexShrink: 0 }} />
                    }
                  </button>
                  {openFaq === idx && (
                    <div style={{ padding: '0 22px 20px 22px', color: '#475569', fontSize: '14px', lineHeight: 1.7, borderTop: '1px solid #F1F5F9', paddingTop: '14px' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/contact-us-2" className="btn-dark" style={{ padding: '16px 36px', fontSize: '15px', fontWeight: '800', display: 'inline-flex', alignItems: 'center', gap: '10px', borderRadius: '50px', minHeight: '44px' }}>
              Start Sourcing Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}