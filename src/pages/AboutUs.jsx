import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Target, Eye, HeartHandshake, ArrowRight, Award } from 'lucide-react';

import asset_Company_Overview_png_1 from '../assets/images/Company-Overview.png?url';
import asset_Manufacturing_png_2 from '../assets/images/Manufacturing.png?url';

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Hero Banner */}
      <section style={{ background: 'linear-gradient(135deg, #072834 0%, #0F3A4A 100%)', color: '#FFFFFF', padding: '64px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span style={{ color: '#00C2A8', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
            About Bulk Flex
          </span>
          <h1 style={{ fontSize: '40px', fontWeight: '800', color: '#FFFFFF', margin: '12px 0 16px 0', fontFamily: 'var(--font-heading)' }}>
            Empowering Global Packaging Sourcing
          </h1>
          <p style={{ fontSize: '16px', color: '#94A3B8', lineHeight: '1.7', margin: 0 }}>
            We exist so global buyers never have to wonder if they got it right. Your procurement execution partner standing between your specification and the factory floor.
          </p>
        </div>
      </section>

      {/* Section 1: Company Overview & 20+ Years Experience */}
      <section style={{ padding: '64px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '48px', alignItems: 'center' }}>
            
            <div style={{ position: 'relative', background: '#F8FAFC', borderRadius: '24px', padding: '24px', border: '1px solid #EEF2F6', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
              <img src={asset_Company_Overview_png_1} alt="Bulk Flex Company Overview" style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }} />
              
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                right: '12px',
                background: '#072834',
                color: '#FFFFFF',
                padding: '16px 24px',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(7,40,52,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}>
                <span style={{ fontSize: '32px', fontWeight: '800', color: '#00C2A8', lineHeight: 1 }}>20+</span>
                <span style={{ fontSize: '13px', color: '#E2E8F0', fontWeight: '600', lineHeight: 1.3 }}>Years of<br />Excellence</span>
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: '30px', color: '#072834', fontWeight: '800', marginBottom: '16px' }}>
                Company Overview
              </h2>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', marginBottom: '16px' }}>
                Bulk Flex is a leading manufacturer and exporter of industrial packaging solutions, specializing in Flexible Intermediate Bulk Containers (FIBC), agricultural films, and container liners.
              </p>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', marginBottom: '28px' }}>
                With state-of-the-art manufacturing facilities and an uncompromised commitment to quality, we serve clients across North America, Europe, and Asia-Pacific regions.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ background: '#F8FAFC', padding: '18px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '26px', fontWeight: '800', color: '#00C2A8' }}>20+</span>
                  <p style={{ fontSize: '13px', color: '#072834', fontWeight: '700', margin: '4px 0 0 0' }}>Years of Industrial Experience</p>
                </div>
                <div style={{ background: '#F8FAFC', padding: '18px', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <span style={{ fontSize: '26px', fontWeight: '800', color: '#00C2A8' }}>30+</span>
                  <p style={{ fontSize: '13px', color: '#072834', fontWeight: '700', margin: '4px 0 0 0' }}>Vetted Manufacturers Network</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 2: Packaging Performance */}
      <section style={{ padding: '64px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#E8F7F5', color: '#00C2A8', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: '700', marginBottom: '16px' }}>
                <ShieldCheck size={14} /> Quality Assurance
              </div>
              <h2 style={{ fontSize: '30px', color: '#072834', fontWeight: '800', marginBottom: '16px' }}>
                Packaging Performance
              </h2>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', marginBottom: '24px' }}>
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
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#072834', fontWeight: '600' }}>
                    <CheckCircle2 size={18} color="#00C2A8" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '24px', border: '1px solid #EEF2F6', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
              <img src={asset_Manufacturing_png_2} alt="Packaging Manufacturing Performance" style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Mission & Vision */}
      <section style={{ padding: '64px 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            
            {/* Mission */}
            <div style={{ background: '#F8FAFC', borderRadius: '20px', border: '1px solid #E2E8F0', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '44px', height: '44px', background: '#E8F7F5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#00C2A8' }}>
                  <Target size={22} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#072834', marginBottom: '12px' }}>OUR MISSION</h3>
                <p style={{ fontSize: '15px', fontWeight: '800', color: '#00C2A8', marginBottom: '16px', lineHeight: '1.5' }}>
                  We exist so global buyers never have to wonder if they got it right.
                </p>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', marginBottom: '14px' }}>
                  Every importer carries the same risk. A wrong specification, a failed quality check, or a non compliant shipment does not land on the supplier’s desk — it lands on yours. Returns, claims, production stoppages, and damaged buyer relationships follow.
                </p>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7' }}>
                  We are the procurement execution partner that stands between your specification and the factory floor — matching every product to the right facility, controlling quality at every stage, and delivering every shipment with full compliance.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div style={{ background: '#F8FAFC', borderRadius: '20px', border: '1px solid #E2E8F0', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: '44px', height: '44px', background: '#E8F7F5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#00C2A8' }}>
                  <Eye size={22} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#072834', marginBottom: '12px' }}>OUR VISION</h3>
                <p style={{ fontSize: '15px', fontWeight: '800', color: '#00C2A8', marginBottom: '16px', lineHeight: '1.5' }}>
                  To be the partner global buyers call first — because they know the answer will be right.
                </p>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7', marginBottom: '14px' }}>
                  Not the biggest name in packaging. The most dependable one. We are building a business where procurement heads and importers across North America, Europe, and Australia trust Bulk Flex with their most critical supply lines.
                </p>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7' }}>
                  That trust is earned one correct shipment at a time. We are committed to earning it on every order we take.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: Our Values */}
      <section style={{ padding: '80px 0 96px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 52px auto' }}>
            <span style={{ color: '#00C2A8', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Core Philosophy
            </span>
            <h2 style={{ fontSize: '34px', color: '#072834', fontWeight: '800', margin: '8px 0 12px 0', fontFamily: 'var(--font-heading)' }}>
              OUR VALUES
            </h2>
            <p style={{ color: '#64748B', fontSize: '16px', margin: 0 }}>
              Five commitments. Every order. No exceptions.
            </p>
          </div>

          {/* Balanced 3-Column Top Row + Centered 2-Column Bottom Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            marginBottom: '52px'
          }}>
            {[
              {
                num: '01',
                title: 'Specification Integrity',
                desc: 'The right product for the right application, confirmed before production begins. We do not move forward until the specification is verified.'
              },
              {
                num: '02',
                title: 'Transparent Communication',
                desc: 'You hear what you need to hear — not what is easiest to say. If a factory cannot meet a requirement, you know before the order is placed.'
              },
              {
                num: '03',
                title: 'End-to-End Accountability',
                desc: 'Quality control, compliance documentation, container optimization, and shipment accuracy are our accountability until delivery.'
              },
              {
                num: '04',
                title: 'Mutual Growth',
                desc: 'We invest in understanding your products and markets. Long-term relationships built on shared commercial outcomes are the only ones we build.'
              },
              {
                num: '05',
                title: 'Verified Compliance',
                desc: 'Every factory in our network is audited. No child labor, no forced labor, and zero shortcuts on safety, quality, or manufacturing ethics.'
              }
            ].map((val, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1px solid #E2E8F0',
                  padding: '32px',
                  boxShadow: '0 10px 30px rgba(7, 40, 52, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: '#E8F7F5',
                    color: '#00C2A8',
                    fontWeight: '800',
                    fontSize: '15px',
                    marginBottom: '20px'
                  }}>
                    {val.num}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#072834', marginBottom: '12px', lineHeight: '1.3' }}>
                    {val.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.65', margin: 0 }}>
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link to="/contact-us-2" className="btn-dark" style={{ padding: '16px 40px', fontSize: '15px', fontWeight: '800', display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '50px' }}>
              Work With Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}