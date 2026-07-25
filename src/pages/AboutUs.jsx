import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Target, Eye, HeartHandshake, ArrowRight, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import asset_Company_Overview_png_1 from '../assets/images/Company-Overview.png?url';
import asset_Manufacturing_png_2 from '../assets/images/Manufacturing.png?url';

export default function AboutUs() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Banner */}
      <section style={{ background: 'linear-gradient(135deg, #142E3D 0%, #0F3A4A 100%)', color: '#FFFFFF', padding: 'clamp(44px, 6vw, 64px) 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span style={{ color: '#8DC63F', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
            About BulkFlex
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', color: '#FFFFFF', margin: '12px 0 16px 0', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>
            Empowering Global Packaging Sourcing
          </h1>
          <p style={{ fontSize: '15px', color: '#94A3B8', lineHeight: '1.7', margin: 0 }}>
            We exist so global buyers never have to wonder if they got it right. Your procurement execution partner standing between your specification and the factory floor.
          </p>
        </div>
      </section>

      {/* Section 1: Company Overview & 20+ Years Experience */}
      <section style={{ padding: 'clamp(36px, 6vw, 64px) 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(28px, 5vw, 48px)',
            alignItems: 'center'
          }}>
            
            <div style={{ position: 'relative', background: '#FBF1E6', borderRadius: '24px', padding: 'clamp(16px, 3vw, 24px)', border: '1px solid #EEF2F6', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
              <img src={asset_Company_Overview_png_1} alt="BulkFlex Company Overview" style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }} />
              
              <div style={{
                position: 'absolute',
                bottom: '-16px',
                right: '12px',
                background: '#142E3D',
                color: '#FFFFFF',
                padding: '12px 20px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(7,40,52,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: '800', color: '#8DC63F', lineHeight: 1 }}>20+</span>
                <span style={{ fontSize: '12px', color: '#E2E8F0', fontWeight: '600', lineHeight: 1.3 }}>Years of<br />Excellence</span>
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 30px)', color: '#142E3D', fontWeight: '800', marginBottom: '16px' }}>
                Company Overview
              </h2>
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.7', marginBottom: '16px' }}>
                BulkFlex is a manufacturer and exporter of industrial packaging solutions, specializing in Flexible Intermediate Bulk Containers (FIBC), agricultural films, and container liners.
              </p>
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.7', marginBottom: '24px' }}>
                With state-of-the-art manufacturing facilities and a commitment to quality, we serve clients across North America, Europe, and Asia-Pacific regions.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '16px'
              }}>
                <div style={{ background: '#FBF1E6', padding: '18px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '24px', fontWeight: '800', color: '#8DC63F' }}>20+</span>
                  <p style={{ fontSize: '13px', color: '#142E3D', fontWeight: '700', margin: '4px 0 0 0' }}>Years of Industrial Experience</p>
                </div>
                <div style={{ background: '#FBF1E6', padding: '18px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '24px', fontWeight: '800', color: '#8DC63F' }}>30+</span>
                  <p style={{ fontSize: '13px', color: '#142E3D', fontWeight: '700', margin: '4px 0 0 0' }}>Vetted Manufacturers Network</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Packaging Performance */}
      <section style={{ padding: 'clamp(36px, 6vw, 64px) 0', background: '#FBF1E6', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(28px, 5vw, 48px)',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#F0F7E4', color: '#8DC63F', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: '700', marginBottom: '16px' }}>
                <ShieldCheck size={14} /> Quality Assurance
              </div>
              <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 30px)', color: '#142E3D', fontWeight: '800', marginBottom: '16px' }}>
                Packaging Performance
              </h2>
              <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.7', marginBottom: '24px' }}>
                Our packaging solutions are designed to provide strength, reliability, and protection for a wide range of bulk materials across different industrial sectors.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Strong woven construction for heavy loads',
                  'Secure handling during global maritime transport',
                  'Moisture-resistant packaging and liner options',
                  'Reliable containment for powders & dry bulk materials',
                  'Engineered for high-throughput industrial supply chains'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#142E3D', fontWeight: '600' }}>
                    <CheckCircle2 size={18} color="#8DC63F" style={{ flexShrink: 0 }} /> <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: 'clamp(16px, 3vw, 24px)', border: '1px solid #EEF2F6', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
              <img src={asset_Manufacturing_png_2} alt="Packaging Manufacturing Performance" style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Mission & Vision */}
      <section style={{ padding: 'clamp(36px, 6vw, 64px) 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px'
          }}>
            
            {/* Mission */}
            <div className="card-clean" style={{ padding: 'clamp(24px, 4vw, 36px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '44px', height: '44px', background: '#F0F7E4', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#8DC63F' }}>
                  <Target size={22} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#142E3D', marginBottom: '12px' }}>OUR MISSION</h3>
                <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.7' }}>
                  To provide high-quality, sustainable packaging solutions with reliable service and competitive pricing — supporting global buyers with consistent, well-managed sourcing from India and Asia.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="card-clean" style={{ padding: 'clamp(24px, 4vw, 36px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '44px', height: '44px', background: '#F0F7E4', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#8DC63F' }}>
                  <Eye size={22} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#142E3D', marginBottom: '12px' }}>OUR VISION</h3>
                <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.7' }}>
                  To be a dependable packaging partner, delivering solutions that support global trade for buyers across North America, Europe, and Asia-Pacific.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: Our Values 5-Card Grid */}
      <section style={{ padding: 'clamp(36px, 6vw, 64px) 0', background: '#FBF1E6', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 40px auto' }}>
            <span style={{ color: '#8DC63F', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Core Principles
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 34px)', color: '#142E3D', fontWeight: '800', marginTop: '6px' }}>
              Our Operating Values
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px'
          }}>
            {[
              { title: 'Integrity', desc: 'Transparent dealings and honest communication with every buyer and supplier partner.' },
              { title: 'Innovation', desc: 'Ongoing exploration of sustainable materials and improved packaging methods.' },
              { title: 'Customer Focus', desc: 'Solutions shaped around each buyer\'s specific sourcing requirements.' },
              { title: 'Sustainability', desc: 'Support for eco-friendly materials, including rPET and natural fiber options.' },
              { title: 'Excellence', desc: 'A consistent standard applied across sourcing, production, and delivery.' }
            ].map((val, idx) => (
              <div key={idx} className="card-clean" style={{ padding: '24px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#142E3D', marginBottom: '10px' }}>{val.title}</h4>
                <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: '1.6', margin: 0 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Bottom CTA */}
      <section style={{ padding: 'clamp(36px, 6vw, 64px) 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #142E3D 0%, #0D3B43 100%)',
            color: '#FFFFFF',
            borderRadius: '24px',
            padding: 'clamp(28px, 5vw, 48px)',
            textAlign: 'center',
            boxShadow: '0 20px 40px rgba(7, 40, 52, 0.15)'
          }}>
            <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', color: '#FFFFFF', fontWeight: '800', marginBottom: '12px' }}>
              Experience Vetted Global Sourcing
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '15px', maxWidth: '580px', margin: '0 auto 28px auto', lineHeight: '1.6' }}>
              Connect with our relationship management team to audit your current bag specifications and get factory-direct pricing.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact-us-2" className="btn-dark" style={{ background: '#8DC63F', color: '#142E3D', minHeight: '44px', fontWeight: '800' }}>
                Contact Procurement Team
              </Link>
              <Link to="/buyer-tools" className="btn-outline-dark" style={{ borderColor: 'rgba(255, 255, 255, 0.3)', color: '#FFFFFF', minHeight: '44px' }}>
                Explore Buyer Corner
              </Link>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
}