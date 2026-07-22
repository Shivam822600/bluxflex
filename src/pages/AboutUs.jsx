import React from 'react';
import Layout from '../components/Layout';
import { CheckCircle2, ShieldCheck, Award, Globe } from 'lucide-react';
import asset_Company_Overview_png_1 from '../assets/images/Company-Overview.png?url';
import asset_Manufacturing_png_2 from '../assets/images/Manufacturing.png?url';

export default function AboutUs() {
  return (
    <Layout>
      {/* Header Banner */}
      <section style={{
        background: '#072834',
        color: '#FFFFFF',
        padding: '56px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '38px', color: '#FFFFFF', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>About Us</h1>
          <p style={{ color: '#94A3B8', fontSize: '15px', marginTop: '8px' }}>
            Empower global trade through innovative and dependable packaging solutions.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section style={{ padding: '72px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#00C2A8', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Company Overview
              </span>
              <h2 style={{ fontSize: '32px', color: '#072834', margin: '12px 0 20px 0' }}>
                20+ Years of Industrial Excellence
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.65', marginBottom: '16px' }}>
                Bulk Flex is a leading manufacturer and exporter of industrial packaging solutions, specializing in Flexible Intermediate Bulk Containers (FIBC), agricultural films, and container liners.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.65' }}>
                With state-of-the-art manufacturing facilities and a commitment to quality, we serve clients across North America, Europe, and Asia-Pacific regions.
              </p>
            </div>

            <div>
              <img 
                src={asset_Company_Overview_png_1} 
                alt="Bulk Flex Company Overview" 
                style={{ width: '100%', borderRadius: '16px', boxShadow: 'var(--shadow-card)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section style={{ padding: '72px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <img 
                src={asset_Manufacturing_png_2} 
                alt="Manufacturing Excellence" 
                style={{ width: '100%', borderRadius: '16px', boxShadow: 'var(--shadow-card)' }}
              />
            </div>

            <div>
              <h2 style={{ fontSize: '32px', color: '#072834', marginBottom: '16px' }}>
                Packaging Performance
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.65', marginBottom: '24px' }}>
                Our packaging solutions are designed to provide strength, reliability, and protection for a wide range of bulk materials across different industries.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Strong woven construction for heavy loads',
                  'Secure handling during transport',
                  'Moisture-resistant packaging options',
                  'Reliable containment for bulk materials',
                  'Designed for industrial supply chains'
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: '#072834', fontWeight: '600' }}>
                    <CheckCircle2 size={18} color="#00C2A8" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section style={{ padding: '72px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            
            <div className="card-clean" style={{ padding: '32px' }}>
              <div style={{ background: '#E8F7F5', color: '#00C2A8', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <ShieldCheck size={24} />
              </div>
              <h3 style={{ fontSize: '20px', color: '#072834', marginBottom: '12px' }}>Our Mission</h3>
              <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.6' }}>
                We exist so global buyers never have to wonder if they got it right. Delivering every shipment with full compliance.
              </p>
            </div>

            <div className="card-clean" style={{ padding: '32px' }}>
              <div style={{ background: '#E8F7F5', color: '#00C2A8', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Globe size={24} />
              </div>
              <h3 style={{ fontSize: '20px', color: '#072834', marginBottom: '12px' }}>Our Vision</h3>
              <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.6' }}>
                To be the partner global buyers call first — because they know the answer will be right.
              </p>
            </div>

            <div className="card-clean" style={{ padding: '32px' }}>
              <div style={{ background: '#E8F7F5', color: '#00C2A8', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Award size={24} />
              </div>
              <h3 style={{ fontSize: '20px', color: '#072834', marginBottom: '12px' }}>Our Values</h3>
              <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.6' }}>
                Specification Integrity, Transparent Communication, End-to-End Accountability, Mutual Growth, and Verified Compliance.
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}