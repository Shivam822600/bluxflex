import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { UserPlus, ClipboardCheck, FileText, FileSpreadsheet, Truck, CheckCircle2, ArrowRight } from 'lucide-react';

export default function BuyerTools() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Banner Header */}
      <section style={{ background: 'linear-gradient(135deg, #072834 0%, #0F3A4A 100%)', color: '#FFFFFF', padding: '64px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <span style={{ color: '#00C2A8', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
            PROCUREMENT INFRASTRUCTURE
          </span>
          <h1 style={{ fontSize: '40px', fontWeight: '800', color: '#FFFFFF', margin: '12px 0 16px 0', fontFamily: 'var(--font-heading)' }}>
            Buyer Tools
          </h1>
          <p style={{ fontSize: '17px', color: '#94A3B8', lineHeight: '1.6', margin: 0 }}>
            Your extended arm in Asia. One contact. Zero compromise. We are not a middleman — we are your procurement team on the ground.
          </p>
        </div>
      </section>

      {/* SECTION 1: YOUR BUYER JOURNEY */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 56px auto' }}>
            <span style={{ display: 'inline-block', background: '#E8F7F5', color: '#00C2A8', padding: '6px 20px', borderRadius: '50px', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '14px', border: '1px solid rgba(0, 194, 168, 0.3)' }}>
              YOUR BUYER JOURNEY
            </span>
            <h2 style={{ fontSize: '36px', color: '#072834', fontWeight: '800', margin: '8px 0 16px 0', fontFamily: 'var(--font-heading)' }}>
              A Transparent, Step-by-Step Process from First Contact to Final Delivery
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {/* Journey Card 01 */}
            <div style={{ background: '#F8FAFC', borderRadius: '24px', border: '1px solid #E2E8F0', padding: '32px', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '20px', right: '24px', fontSize: '36px', fontWeight: '900', color: 'rgba(7, 40, 52, 0.08)' }}>01</span>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#E8F7F5', color: '#00C2A8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <UserPlus size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#072834', marginBottom: '12px' }}>Buyer Specs & Use-Case Review</h3>
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.65', marginBottom: '20px' }}>
                We start by understanding your application, not just your dimensions. SWL requirements, GSM, UV stabilisation hours, loop type, liner spec, certification needs all captured into a structured brief. We ask the right questions so factories receive the right spec.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Technical brief', 'Compliance mapping', 'Application review'].map((tag, tIdx) => (
                  <span key={tIdx} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#072834', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '700' }}>✓ {tag}</span>
                ))}
              </div>
            </div>

            {/* Journey Card 02 */}
            <div style={{ background: '#F8FAFC', borderRadius: '24px', border: '1px solid #E2E8F0', padding: '32px', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '20px', right: '24px', fontSize: '36px', fontWeight: '900', color: 'rgba(7, 40, 52, 0.08)' }}>02</span>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#E8F7F5', color: '#00C2A8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <ClipboardCheck size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#072834', marginBottom: '12px' }}>Sampling & Pre-Shipment QC</h3>
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.65', marginBottom: '20px' }}>
                Samples are produced, reviewed against your spec, and dispatched for your approval. Pre-shipment inspection is conducted during live production not after with photographic evidence at each stage of our 11-stage QC protocol. Lab testing available on request.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Physical sampling', '11-stage QC', 'Lab testing on request', 'Photographic evidence'].map((tag, tIdx) => (
                  <span key={tIdx} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#072834', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '700' }}>✓ {tag}</span>
                ))}
              </div>
            </div>

            {/* Journey Card 03 */}
            <div style={{ background: '#F8FAFC', borderRadius: '24px', border: '1px solid #E2E8F0', padding: '32px', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '20px', right: '24px', fontSize: '36px', fontWeight: '900', color: 'rgba(7, 40, 52, 0.08)' }}>03</span>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#E8F7F5', color: '#00C2A8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <FileText size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#072834', marginBottom: '12px' }}>Contract, Compliance & Traceability</h3>
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.65', marginBottom: '20px' }}>
                Buyer-specific SOPs, batch traceability records, and compliance documentation including certifications relevant to your end application (food-grade, hazmat, pharma, social audit) are prepared and provided alongside your order.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Buyer SOPs', 'Batch traceability', 'Certification alignment'].map((tag, tIdx) => (
                  <span key={tIdx} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#072834', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '700' }}>✓ {tag}</span>
                ))}
              </div>
            </div>

            {/* Journey Card 04 */}
            <div style={{ background: '#F8FAFC', borderRadius: '24px', border: '1px solid #E2E8F0', padding: '32px', position: 'relative' }}>
              <span style={{ position: 'absolute', top: '20px', right: '24px', fontSize: '36px', fontWeight: '900', color: 'rgba(7, 40, 52, 0.08)' }}>04</span>
              <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: '#E8F7F5', color: '#00C2A8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <FileSpreadsheet size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#072834', marginBottom: '12px' }}>Container Dispatch & Documentation</h3>
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.65', marginBottom: '20px' }}>
                We independently optimise container loading including multi-SKU containers combining different product lines to reduce your freight cost per unit. Full export documentation, port handling from all major Indian and Vietnam gateways, and invoicing in your preferred currency: USD, CAD, EUR, AUD, or NZD.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Multi-SKU optimisation', 'All major ports', 'USD · CAD · EUR · AUD · NZD'].map((tag, tIdx) => (
                  <span key={tIdx} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#072834', padding: '4px 12px', borderRadius: '50px', fontSize: '12px', fontWeight: '700' }}>✓ {tag}</span>
                ))}
              </div>
            </div>

            {/* Journey Banner Card 05 */}
            <div style={{ background: '#072834', color: '#FFFFFF', borderRadius: '24px', padding: '32px', gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ fontSize: '36px', fontWeight: '900', color: '#00C2A8' }}>05</div>
              <p style={{ fontSize: '16px', lineHeight: '1.6', margin: 0, color: '#E2E8F0' }}>
                <strong style={{ color: '#FFFFFF' }}>Your extended arm in Asia. One contact. Zero compromise.</strong> We are not a middleman — we are your procurement team on the ground. 30+ audited factories across India and Vietnam, managed through a single relationship, governed by your standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FOR EXPERIENCED IMPORTERS */}
      <section style={{ padding: '72px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 48px auto' }}>
            <span style={{ color: '#00C2A8', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
              FOR EXPERIENCED IMPORTERS
            </span>
            <h2 style={{ fontSize: '32px', color: '#072834', fontWeight: '800', margin: '8px 0 16px 0', fontFamily: 'var(--font-heading)' }}>
              You Know How to Buy. BulkFlex Fixes What Still Goes Wrong.
            </h2>
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', margin: 0 }}>
              If you’ve been importing directly from Asia for years, you already understand the landscape. But even seasoned buyers deal with the same recurring problems — problems that cost real money.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginBottom: '40px' }}>
            {/* Problem 1 */}
            <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid #E2E8F0', padding: '32px' }}>
              <div style={{ width: '40px', height: '40px', background: '#E8F7F5', color: '#00C2A8', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', marginBottom: '16px' }}>
                01
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#072834', marginBottom: '12px' }}>
                Quality That Varies Batch to Batch
              </h3>
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.65', marginBottom: '16px' }}>
                Your first order was flawless. Your third wasn’t. Without on-ground QC at the factory before dispatch, you’re relying on hope — and finding out the problem after it arrives at your port.
              </p>
              <div style={{ background: '#F8FAFC', padding: '12px 16px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '13.5px', fontWeight: '700', color: '#072834' }}>
                <span style={{ color: '#00C2A8' }}>BulkFlex:</span> Pre-shipment inspection on every order, every time.
              </div>
            </div>

            {/* Problem 2 */}
            <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid #E2E8F0', padding: '32px' }}>
              <div style={{ width: '40px', height: '40px', background: '#E8F7F5', color: '#00C2A8', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', marginBottom: '16px' }}>
                02
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#072834', marginBottom: '12px' }}>
                Supplier Dependency Risk
              </h3>
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.65', marginBottom: '16px' }}>
                When your primary factory goes dark — capacity issues, factory holidays, export restrictions — your entire supply chain stops. Single-supplier dependency is the most expensive vulnerability in direct procurement.
              </p>
              <div style={{ background: '#F8FAFC', padding: '12px 16px', borderRadius: '12px', border: '1px solid #CBD5E1', fontSize: '13.5px', fontWeight: '700', color: '#072834' }}>
                <span style={{ color: '#00C2A8' }}>BulkFlex:</span> Multiple audited alternatives, instantly accessible.
              </div>
            </div>
          </div>

          <div style={{ background: '#E8F7F5', border: '1px solid rgba(0, 194, 168, 0.3)', padding: '24px 32px', borderRadius: '20px', textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
            <p style={{ fontSize: '15px', color: '#072834', margin: 0, lineHeight: '1.75', fontWeight: '600' }}>
              These aren’t beginner mistakes. They’re structural gaps and BulkFlex is built to close them. You don’t need to start over. You need to add infrastructure around what you’re already doing. That’s exactly what BulkFlex provides without replacing your procurement knowledge or your existing supplier relationships.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE BULKFLEX ADVANTAGE */}
      <section style={{ padding: '80px 0', background: '#072834', color: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 52px auto' }}>
            <span style={{ display: 'inline-block', background: 'rgba(0, 194, 168, 0.15)', color: '#00C2A8', padding: '6px 18px', borderRadius: '50px', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px', border: '1px solid rgba(0, 194, 168, 0.3)' }}>
              THE BULKFLEX ADVANTAGE
            </span>
            <h2 style={{ fontSize: '36px', color: '#FFFFFF', fontWeight: '800', margin: '8px 0 16px 0', fontFamily: 'var(--font-heading)' }}>
              Multi-Supplier Strength. Single-Contact Simplicity.
            </h2>
            <p style={{ fontSize: '16px', color: '#94A3B8', margin: 0, lineHeight: '1.6' }}>
              Global procurement from Asia doesn’t have to be complex. BulkFlex gives you the network, the systems, and the people so you get the results without the overhead.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
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
              <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '20px', padding: '32px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#00C2A8', marginBottom: '12px' }}>
                  {adv.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: '#94A3B8', lineHeight: '1.65', margin: 0 }}>
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW IT WORKS */}
      <section style={{ padding: '96px 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px auto' }}>
            <span style={{ display: 'inline-block', background: '#E8F7F5', color: '#00C2A8', padding: '6px 20px', borderRadius: '50px', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '14px', border: '1px solid rgba(0, 194, 168, 0.3)' }}>
              HOW IT WORKS
            </span>
            <h2 style={{ fontSize: '38px', color: '#072834', fontWeight: '800', margin: '8px 0 16px 0', fontFamily: 'var(--font-heading)' }}>
              5 Steps From Enquiry to Cleared Container
            </h2>
            <p style={{ fontSize: '16.5px', color: '#64748B', margin: 0, lineHeight: '1.6' }}>
              A structured procurement process designed for experienced buyers — transparent at every stage, with your approval required before anything moves forward.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
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
                style={{
                  background: '#F8FAFC',
                  borderRadius: '24px',
                  border: '1px solid #E2E8F0',
                  padding: '36px',
                  display: 'grid',
                  gridTemplateColumns: '88px 1fr',
                  gap: '28px',
                  boxShadow: '0 8px 30px rgba(7, 40, 52, 0.04)'
                }}
              >
                <div style={{
                  fontSize: '32px',
                  fontWeight: '900',
                  color: '#072834',
                  background: '#E8F7F5',
                  borderRadius: '20px',
                  height: '88px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1,
                  border: '1px solid rgba(0, 194, 168, 0.3)'
                }}>
                  {item.step}
                </div>

                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#072834', marginBottom: '14px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>
                    {item.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {item.pills.map((pill, pIdx) => (
                      <span key={pIdx} style={{ background: '#FFFFFF', border: '1px solid #CBD5E1', color: '#072834', padding: '6px 16px', borderRadius: '50px', fontSize: '12px', fontWeight: '800', letterSpacing: '0.5px' }}>
                        ✓ {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '64px' }}>
            <Link to="/contact-us-2" className="btn-dark" style={{ padding: '18px 44px', fontSize: '16px', fontWeight: '800', display: 'inline-flex', alignItems: 'center', gap: '10px', borderRadius: '50px' }}>
              Start Sourcing Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}