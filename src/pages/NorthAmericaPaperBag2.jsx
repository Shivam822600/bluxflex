import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronLeft, ShieldCheck, ArrowRight, Download, CheckCircle2 } from 'lucide-react';

import asset_image_flour_png_1 from '../assets/images/image_flour.png?url';
import asset_image0_1_1024x683_png_2 from '../assets/images/image0-1-1024x683.png?url';
import asset_65d7bcaa_8606_45f6_b3e9_dfe376cc5326_1024x683_png_3 from '../assets/images/65d7bcaa-8606-45f6-b3e9-dfe376cc5326-1024x683.png?url';

export default function NorthAmericaPaperBag2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Banner */}
      <section style={{ background: 'linear-gradient(135deg, #072834 0%, #0F3A4A 100%)', color: '#FFFFFF', padding: '64px 0' }}>
        <div className="container">
          <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#00C2A8', fontSize: '13px', fontWeight: '600', marginBottom: '16px' }}>
            <ChevronLeft size={16} /> Back to Products
          </Link>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0, 194, 168, 0.15)', color: '#00C2A8', padding: '6px 16px', borderRadius: '50px', fontSize: '13px', fontWeight: '700', marginBottom: '20px', border: '1px solid rgba(0, 194, 168, 0.3)' }}>
            🇨🇦 Canadian Manufactured Food-Grade Packaging
          </div>
          <h1 style={{ fontSize: '38px', color: '#FFFFFF', fontWeight: '800', fontFamily: 'var(--font-heading)', marginBottom: '16px', lineHeight: '1.2' }}>
            North America Multiwall & Paper Packaging Solutions
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '17px', maxWidth: '840px', lineHeight: '1.6', marginBottom: '28px' }}>
            Bulk Flex supplies Canadian-manufactured multiwall paper bags and printed roll stock for the North American food and agricultural market. Our solutions support grocery chains, flour mills, sugar packers, ingredient manufacturers, and automated packaging operations across Canada and the United States.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact-us-2" className="btn-teal" style={{ padding: '14px 32px', fontSize: '15px', fontWeight: '800' }}>
              Request Custom Quote <ArrowRight size={18} />
            </Link>
            <a
              href="/src/assets/wp-content/uploads/2026/02/Bulk-Flex-Pvt-Ltd-brochure-.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-dark"
              style={{ padding: '14px 28px', fontSize: '15px', fontWeight: '700', borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}
            >
              <Download size={18} /> Download Brochure PDF
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: Sift-Proof Paper Bags for Flour & Sugar */}
      <section style={{ padding: '64px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#E8F7F5', color: '#00C2A8', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: '700', marginBottom: '16px' }}>
                <ShieldCheck size={14} /> Sift-Proof Technology
              </div>
              <h2 style={{ fontSize: '28px', color: '#072834', fontWeight: '800', marginBottom: '16px' }}>
                Sift-Proof Paper Bags for Flour & Sugar
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
                Bulk Flex supplies <strong>sift-proof paper bags</strong> designed for clean containment of fine powders such as flour and sugar. These food-grade bags help reduce leakage, dusting, and product loss during filling, transport, and retail display.
              </p>

              <div style={{ background: '#F8FAFC', borderRadius: '18px', padding: '24px', border: '1px solid #E2E8F0', marginBottom: '24px' }}>
                <div style={{ marginBottom: '14px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#00C2A8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Available Sizes:</span>
                  <p style={{ fontSize: '16px', fontWeight: '800', color: '#072834', margin: '4px 0 0 0' }}>1.5 kg • 2 kg • 4 lb • 10 lb</p>
                </div>
                <div style={{ marginBottom: '14px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#00C2A8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Construction Options:</span>
                  <p style={{ fontSize: '14px', color: '#475569', margin: '4px 0 0 0', fontWeight: '600' }}>• 1 Ply and 2 Ply paper bags<br/>• White Bleached Kraft or Natural Kraft<br/>• SOS style packaging</p>
                </div>
                <div>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#00C2A8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Designed For:</span>
                  <p style={{ fontSize: '14px', color: '#475569', margin: '4px 0 0 0', fontWeight: '600' }}>Flour mills • Sugar refineries • Baking ingredient manufacturers • Private label food brands</p>
                </div>
              </div>
            </div>

            <div style={{ background: '#F8FAFC', borderRadius: '24px', padding: '32px', textAlign: 'center', border: '1px solid #EEF2F6', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
              <img src={asset_image_flour_png_1} alt="Sift-Proof Paper Bags for Flour and Sugar" style={{ maxHeight: '360px', width: 'auto', margin: '0 auto', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Printed Paper Roll Stock */}
      <section style={{ padding: '64px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'center' }}>
            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '32px', textAlign: 'center', border: '1px solid #EEF2F6', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
              <img src={asset_image0_1_1024x683_png_2} alt="Printed Paper Roll Stock for Form & Fill Systems" style={{ maxHeight: '340px', width: 'auto', margin: '0 auto', objectFit: 'contain' }} />
            </div>

            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#E8F7F5', color: '#00C2A8', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: '700', marginBottom: '16px' }}>
                <CheckCircle2 size={14} /> High-Speed Form & Fill Lines
              </div>
              <h2 style={{ fontSize: '28px', color: '#072834', fontWeight: '800', marginBottom: '16px' }}>
                Printed Paper Roll Stock for Form & Fill Systems
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
                Bulk Flex supplies <strong>Canadian-manufactured printed paper roll stock</strong> designed for high-speed form and fill packaging lines. Our materials ensure consistent print quality, reliable performance, and efficient automated production.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'High-speed compatibility up to 2,000 ft/min',
                  '100% print verification and inspection',
                  'Food-grade compliant materials',
                  'Precision color consistency',
                  'Stable roll tension for smooth operations'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#072834', fontWeight: '600' }}>
                    <CheckCircle2 size={16} color="#00C2A8" /> {item}
                  </li>
                ))}
              </ul>

              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', background: '#FFFFFF', padding: '16px 20px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                Ideal for <strong>automated flour packaging, sugar form & fill systems, and high-volume ingredient production</strong>, delivering dependable performance for continuous manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Canadian Food Grade Paper Bags & Potato Bags */}
      <section style={{ padding: '64px 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '28px', color: '#072834', fontWeight: '800', marginBottom: '16px' }}>
                Canadian Manufactured Food Grade Paper Bags
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
                Bulk Flex supplies Canadian-manufactured multiwall paper bags and printed roll stock for the North American food and agricultural market. Our solutions support grocery chains, flour mills, sugar packers, ingredient manufacturers, and automated packaging operations across Canada and the United States.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
                {[
                  'Generic stock paper bags with quick availability',
                  'Private label printed bags with custom branding',
                  'High-quality food-grade packaging materials',
                  'Retail-ready designs for food & agriculture',
                  'Reliable supply for North American distribution'
                ].map((feat, idx) => (
                  <div key={idx} style={{ background: '#F8FAFC', padding: '12px 16px', borderRadius: '12px', border: '1px solid #E2E8F0', fontSize: '13px', fontWeight: '700', color: '#072834' }}>
                    ✓ {feat}
                  </div>
                ))}
              </div>

              <div style={{ background: '#E8F7F5', border: '1px solid rgba(0, 194, 168, 0.3)', padding: '18px 22px', borderRadius: '16px' }}>
                <p style={{ fontSize: '14px', color: '#072834', margin: 0, lineHeight: '1.6' }}>
                  We also provide <strong>Canadian-made potato paper bags in standard sizes: 3 lb, 5 lb, 10 lb, and 50 lb</strong>, designed for strong performance, produce freshness, and efficient high-speed filling.
                </p>
              </div>
            </div>

            <div style={{ background: '#F8FAFC', borderRadius: '24px', padding: '32px', textAlign: 'center', border: '1px solid #EEF2F6', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
              <img src={asset_65d7bcaa_8606_45f6_b3e9_dfe376cc5326_1024x683_png_3} alt="Canadian Manufactured Food Grade Paper Packaging" style={{ maxHeight: '340px', width: 'auto', margin: '0 auto', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Food-Grade Paper Packaging (Matching Screenshot Layout) */}
      <section style={{ padding: '64px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '32px', color: '#072834', fontWeight: '800', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
                Food–Grade Paper Packaging
              </h2>
              <p style={{ color: '#64748B', fontSize: '15px', lineHeight: '1.7', marginBottom: '28px' }}>
                Bulk Flex provides <strong>food–grade paper packaging manufactured in Canada</strong>, designed to meet <strong>North American regulatory standards</strong> and support <strong>retail packaging and automated filling lines</strong>.
              </p>

              <h3 style={{ fontSize: '20px', color: '#072834', fontWeight: '800', marginBottom: '16px' }}>
                Key Features
              </h3>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'CFIA–compliant packaging',
                  'FDA food–grade compatibility (where applicable)',
                  'Retail & industrial food safety standards',
                  'Designed for high–speed automated filling',
                  'Canadian manufacturing & stable supply'
                ].map((feature, idx) => (
                  <li key={idx} style={{ fontSize: '15px', color: '#475569', lineHeight: '1.5' }}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 12px 36px rgba(0, 0, 0, 0.08)', background: '#FFFFFF' }}>
              <img
                src={asset_65d7bcaa_8606_45f6_b3e9_dfe376cc5326_1024x683_png_3}
                alt="Food-Grade Paper Packaging"
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}