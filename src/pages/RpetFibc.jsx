import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import asset_baffle_bag_png_1 from '../assets/images/baffle-bag.png?url';
import asset_single_loop_png_2 from '../assets/images/single-loop.png?url';

export default function RpetFibc() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="productListWrapper">
        {/* Section 1: Hero Header & Policy Mandates */}
        <div className="card-clean" style={{
          padding: 'clamp(20px, 4vw, 36px)',
          marginBottom: '28px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(24px, 4vw, 40px)',
            alignItems: 'center'
          }}>
            <div style={{ background: '#F8FAFC', borderRadius: '20px', padding: 'clamp(16px, 3vw, 24px)', border: '1px solid #EEF2F6', textAlign: 'center' }}>
              <img src={asset_baffle_bag_png_1} alt="rPET FIBC Baffle Bag" style={{ maxHeight: '300px', width: '100%', objectFit: 'contain', margin: '0 auto' }} />
            </div>

            <div>
              <span style={{ color: '#00C2A8', fontWeight: '800', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Circular Performance & Commercial Advantage
              </span>
              <h1 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', color: '#072834', fontWeight: '800', marginTop: '6px', marginBottom: '10px', lineHeight: '1.2' }}>
                rPET FIBC Bulk Bags
              </h1>
              <p style={{ fontSize: '15px', color: '#00C2A8', fontWeight: '700', marginBottom: '14px' }}>
                The “Status Quo” is now your most expensive strategy.
              </p>
              <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.6', marginBottom: '14px' }}>
                Across major economies, packaging policy is shifting toward circular material integration and regulatory mandates:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, color: '#475569', fontSize: '13.5px', lineHeight: '1.7', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={16} color="#00C2A8" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span><strong>United States:</strong> California AB 793 content mandate; State-level EPR legislation.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={16} color="#00C2A8" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span><strong>European Union:</strong> €800/Tonne Plastic Packaging Tax; Circular Economy Action Plan.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={16} color="#00C2A8" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span><strong>Canada:</strong> Action Plan on Zero Plastic Waste; Proposed 50% recycled targets by 2030. Federal Plastics Registry reporting requirements.</span>
                </li>
                <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={16} color="#00C2A8" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span><strong>Australia/NZ:</strong> 2025 National Packaging Targets; 50% average recycled content objective.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Bottle to Bag & Integrated Container Programs */}
        <div className="card-clean" style={{
          padding: 'clamp(20px, 4vw, 36px)',
          marginBottom: '28px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(24px, 4vw, 40px)',
            alignItems: 'center'
          }}>
            <div style={{ background: '#F8FAFC', borderRadius: '20px', padding: 'clamp(16px, 3vw, 24px)', border: '1px solid #EEF2F6', textAlign: 'center' }}>
              <img src={asset_single_loop_png_2} alt="Single Loop rPET FIBC" style={{ maxHeight: '300px', width: '100%', objectFit: 'contain', margin: '0 auto' }} />
            </div>

            <div>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', color: '#072834', fontWeight: '800', marginBottom: '16px' }}>
                Bottle to Bag
              </h2>
              
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#00C2A8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                  Industrial Stability. Circular Material.
                </h4>
                <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: '1.6', marginBottom: '12px' }}>
                  Transparency in supply. Clarity in performance. Through Intrinsic Viscosity (IV) stabilization and precision extrusion, our material achieves mechanical performance comparable to conventional PP woven fabric.
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '18px', color: '#475569', fontSize: '13px', lineHeight: '1.6' }}>
                  <li>Advanced optical sorting &amp; Multi-stage decontamination.</li>
                  <li>SSP for molecular stabilization.</li>
                  <li>Stable stacking performance &amp; Controlled elongation.</li>
                  <li>Food grade certification under process.</li>
                </ul>
              </div>

              <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#072834', marginBottom: '6px' }}>
                  INTEGRATED CONTAINER PROGRAMS
                </h4>
                <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6', margin: '0 0 10px 0' }}>
                  Innovation without the “All-In” Gamble. BulkFlex enables mixed container loads. Trial rPET innovation within the same load as your existing PP specifications.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: '#072834', fontWeight: '600', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li>✓ No portfolio replacement.</li>
                  <li>✓ No isolated stock.</li>
                  <li>✓ No operational disruption. Your PP foundation remains intact while your portfolio gains circular capability.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Market & Engineering Impact */}
        <div className="card-clean" style={{
          padding: 'clamp(20px, 4vw, 32px)',
          marginBottom: '28px'
        }}>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', color: '#072834', fontWeight: '800', marginBottom: '12px' }}>
            The Market is Moving — Quietly
          </h2>
          <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
            Importers across North America and Europe are evaluating rPET FIBC alongside established Polypropylene programs. This is a structured and commercially benchmarked expansion. The advantage belongs to those who prepare before the demand.
          </p>

          <div style={{ background: '#072834', color: '#FFFFFF', padding: 'clamp(20px, 3.5vw, 28px)', borderRadius: '16px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#00C2A8', marginBottom: '16px' }}>
              ENGINEERING IMPACT
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
              <div>
                <span style={{ fontSize: '12px', color: '#94A3B8' }}>Bag:</span>
                <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', fontWeight: '800', color: '#FFFFFF', margin: '2px 0 0 0' }}>~ 200 Recycled Bottles</p>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: '#94A3B8' }}>1 Full Container (20T):</span>
                <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', fontWeight: '800', color: '#FFFFFF', margin: '2px 0 0 0' }}>Bottles Diverted At Scale</p>
              </div>
              <div>
                <span style={{ fontSize: '12px', color: '#94A3B8' }}>Performance Standard:</span>
                <p style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', fontWeight: '800', color: '#00C2A8', margin: '2px 0 0 0' }}>Industrial &amp; Circular</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Why rPET Commercial Advantage & Comprehensive Portfolio */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '28px'
        }}>
          <div className="card-clean" style={{ padding: 'clamp(20px, 3.5vw, 28px)' }}>
            <h3 style={{ fontSize: '20px', color: '#072834', fontWeight: '800', marginBottom: '14px' }}>
              Why rPET is a Commercial Advantage
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px', color: '#475569' }}>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ color: '#00C2A8', fontWeight: '700' }}>➢</span>
                <span>Aligns with customer ESG commitments.</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ color: '#00C2A8', fontWeight: '700' }}>➢</span>
                <span>Enables participation in circular procurement tenders.</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ color: '#00C2A8', fontWeight: '700' }}>➢</span>
                <span>Mitigates exposure to recycled content taxation models.</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ color: '#00C2A8', fontWeight: '700' }}>➢</span>
                <span>Positions your business as a forward-thinking packaging provider.</span>
              </li>
            </ul>
          </div>

          <div className="card-clean" style={{ padding: 'clamp(20px, 3.5vw, 28px)' }}>
            <h3 style={{ fontSize: '20px', color: '#072834', fontWeight: '800', marginBottom: '14px' }}>
              Comprehensive rPET FIBC Portfolio
            </h3>
            <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: '1.6', marginBottom: '14px' }}>
              Designed for heavy bulk commodities across various industrial packaging applications:
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '18px', margin: 0, fontSize: '13.5px', color: '#475569', lineHeight: '1.7' }}>
              <li>1 Loop / 2 Loop Bags &amp; 4 Loop FIBCs</li>
              <li>U-Panel &amp; Circular Designs</li>
              <li>Baffle Bags (Form-Stable)</li>
              <li>Custom Coated &amp; Uncoated Fabrics</li>
            </ul>
          </div>
        </div>

        {/* Section 5: CTA Card */}
        <div style={{
          background: 'linear-gradient(135deg, #072834 0%, #0D3B43 100%)',
          color: '#FFFFFF',
          borderRadius: '24px',
          padding: 'clamp(28px, 5vw, 44px)',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(7, 40, 52, 0.15)'
        }}>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', color: '#FFFFFF', fontWeight: '800', marginBottom: '12px' }}>
            Ready to Integrate rPET into Your Supply Chain?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '15px', maxWidth: '600px', margin: '0 auto 28px auto', lineHeight: '1.6' }}>
            Contact our technical team to discuss specification trials, mixed container loading, and recycled content compliance.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact-us-2" className="btn-dark" style={{ background: '#00C2A8', color: '#072834', minHeight: '44px', fontWeight: '800' }}>
              Request rPET Trial Load
            </Link>
            <Link to="/buyer-tools" className="btn-outline-dark" style={{ borderColor: 'rgba(255, 255, 255, 0.3)', color: '#FFFFFF', minHeight: '44px' }}>
              Explore Buyer Corner
            </Link>
          </div>
        </div>

      </div>
    </Layout>
  );
}