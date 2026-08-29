import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

import asset_rPET_Fabrics_jpg_1 from '../assets/images/official/rPET-Fabrics.jpg?url';

export default function ProductRpetFabrics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* ── 1. Top Section (Image + Title + Overview) ── */}
      <section style={{ padding: '40px 0 32px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: '32px',
            alignItems: 'stretch'
          }}>
            {/* Left: Image Card */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 4px 20px rgba(20,46,61,0.06)',
              border: '1px solid #E4DCD0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{
                background: '#F8FAFC',
                borderRadius: '12px',
                padding: '20px',
                textAlign: 'center',
                border: '1px solid #EDF2F7'
              }}>
                <img
                  src={asset_rPET_Fabrics_jpg_1}
                  alt="rPET Fabrics"
                  style={{
                    maxHeight: '380px',
                    width: '100%',
                    objectFit: 'contain',
                    margin: '0 auto',
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>

            {/* Right: Overview */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '32px',
              boxShadow: '0 4px 20px rgba(20,46,61,0.06)',
              border: '1px solid #E4DCD0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h1 style={{ fontSize: '34px', color: '#142E3D', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0 0 4px 0', lineHeight: 1.2 }}>
                  rPET Fabrics
                </h1>
                <div style={{
                  color: '#8DC63F',
                  fontWeight: '700',
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '18px'
                }}>
                  Recycled from Plastic. Reimagined for Industry.
                </div>

                <div style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '20px' }}>
                  <p style={{ marginBottom: '12px' }}>
                    Our rPET Fabrics are high-quality textiles made from recycled polyethylene terephthalate primarily sourced from post-consumer plastic bottles and industrial plastic waste. By transforming discarded plastics into premium-grade fabric, rPET offers the same strength, durability, and performance as virgin polyester while dramatically reducing environmental impact.
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    The production of rPET fabric uses significantly less energy and water compared to conventional polyester, and helps divert millions of plastic bottles from landfills and oceans every year. It is the material of choice for brands, manufacturers, and governments committed to sustainability, circular economy, and plastic reduction goals.
                  </p>
                  <p style={{ margin: 0 }}>
                    Our rPET Fabrics are available in woven and knitted formats, can be laminated, coated, printed, or blended with other fibers, and meet leading international sustainability standards. From fashion and sportswear to industrial textiles and geotextiles, rPET delivers performance without compromise.
                  </p>
                </div>

                <div style={{
                  background: '#F0F7E4',
                  borderRadius: '10px',
                  padding: '14px 18px',
                  border: '1px solid rgba(141,198,63,0.3)',
                  fontSize: '14px',
                  color: '#142E3D',
                  lineHeight: 1.6,
                  marginBottom: '20px'
                }}>
                  <strong>Ideal For:</strong> <span style={{ color: '#475569' }}>Eco-friendly bags and packaging, sportswear and activewear, outdoor gear, home textiles, upholstery, automotive interiors, industrial non-wovens, and sustainable retail branding.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', paddingTop: '18px', borderTop: '1px solid #EDF2F7' }}>
                <Link
                  to="/contact-us-2"
                  className="btn-dark"
                  style={{
                    flex: 1,
                    minWidth: '200px',
                    justifyContent: 'center',
                    padding: '13px 20px',
                    fontSize: '14.5px',
                    fontWeight: '700'
                  }}
                >
                  Request RFQ Quote <ArrowRight size={16} />
                </Link>
                <Link
                  to="/buyer-tools"
                  className="btn-outline-dark"
                  style={{
                    flex: 1,
                    minWidth: '180px',
                    justifyContent: 'center',
                    padding: '13px 20px',
                    fontSize: '14.5px',
                    fontWeight: '700'
                  }}
                >
                  Load Calculator
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Key Features ── */}
      <section style={{ padding: '24px 0 56px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            background: '#F8FAFC',
            borderRadius: '16px',
            padding: '28px 32px',
            border: '1px solid #E2E8F0',
            boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
          }}>
            <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '18px' }}>
              Key Features:
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '14px' }}>
              {[
                'Made from 100% post-consumer recycled plastic bottles and waste',
                'Matches virgin polyester in strength, durability, and performance',
                'Uses up to 62% less energy and 99% less water in production',
                'Reduces CO2 emissions by up to 32% vs. conventional polyester',
                'Water-resistant, wrinkle-resistant, quick-drying, and colorfast',
                'Available in woven, knitted, laminated, and coated formats',
                'Certifiable under GRS (Global Recycled Standard) and OEKO-TEX',
                'Ideal for brands targeting sustainability and eco-compliance markets'
              ].map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14.5px', color: '#475569', background: '#FFFFFF', padding: '12px 16px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                  <CheckCircle2 size={17} color="#8DC63F" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Bottom RFQ Callout ── */}
      <section style={{ background: '#142E3D', color: '#FFFFFF', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: '800', marginBottom: '10px' }}>
            Ready to Source GRS-Certified rPET Fabric Rolls?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Factory-direct pricing with complete recycled verification certificates for global apparel, bags, and industrial brands.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link to="/contact-us-2" className="btn-dark" style={{ background: '#8DC63F', color: '#142E3D', fontWeight: '800' }}>
              Request RFQ Quote <ArrowRight size={16} />
            </Link>
            <Link to="/buyer-tools" className="btn-outline-dark" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#FFFFFF' }}>
              Load Calculator
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}