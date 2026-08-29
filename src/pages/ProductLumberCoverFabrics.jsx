import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

import asset_Lumber_Cover_Fabrics_jpg_1 from '../assets/images/official/Lumber-Cover-Fabrics.jpg?url';

export default function ProductLumberCoverFabrics() {
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
                  src={asset_Lumber_Cover_Fabrics_jpg_1}
                  alt="Lumber Cover Fabrics"
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
                  Lumber Cover Fabrics
                </h1>
                <div style={{
                  color: '#8DC63F',
                  fontWeight: '700',
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '18px'
                }}>
                  Protect Your Timber. Preserve Your Value.
                </div>

                <div style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '20px' }}>
                  <p style={{ marginBottom: '12px' }}>
                    Our Lumber Cover Fabrics are heavy-duty, weather-resistant fabrics specifically engineered to protect timber, wood products, and building materials during storage, handling, and long-distance transportation. Made from high-strength woven polypropylene with UV-stabilized coatings, these covers act as a powerful shield against moisture, sunlight, dust, and physical damage preserving the quality and value of the lumber from sawmill to delivery.
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    Whether timber is stored in an open yard, transported across continents, or stacked in a large warehouse, Lumber Cover Fabrics provide a reliable, multi-layered barrier that prevents warping, cracking, mold, and contamination. The three-layer coated construction ensures outstanding tear resistance and puncture resistance, even under rough handling and adverse weather conditions.
                  </p>
                  <p style={{ margin: 0 }}>
                    Available in custom sizes with options for C-fold design, flexographic printing for branding, and transparent end panels for barcode scanning and product identification. Ideal for sawmills, timber exporters, construction supply companies, and wood product distributors worldwide.
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
                  <strong>Ideal For:</strong> <span style={{ color: '#475569' }}>Sawmills, timber depots, wood product distributors, construction supply chains, outdoor lumber yards, warehouse storage, and international timber export packaging.</span>
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
                '3-layer UV-stabilized woven polypropylene construction',
                'Moisture-resistant prevents rot, mold, and wood swelling',
                'UV protection up to 1600+ hours prevents sun damage and discoloration',
                'High tear strength and puncture resistance for rough handling',
                'Breathable structure prevents internal condensation and moisture buildup',
                'Transparent end panels available for barcode scanning and product ID',
                'Custom sizes, C-fold options, and flexographic printing available',
                'Wind-resistant and suitable for truck, yard, and container transport'
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
            Ready to Order Lumber Cover Fabrics?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Direct container shipping with your custom mill logos, UV specifications, and pre-folded rolls.
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