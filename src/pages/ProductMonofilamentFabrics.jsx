import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

import asset_Monofilament_Fabrics_jpg_1 from '../assets/images/official/Monofilament-Fabrics.jpg?url';

export default function ProductMonofilamentFabrics() {
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
                  src={asset_Monofilament_Fabrics_jpg_1}
                  alt="Monofilament Fabrics"
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
                  Monofilament Fabrics
                </h1>
                <div style={{
                  color: '#8DC63F',
                  fontWeight: '700',
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '18px'
                }}>
                  Single Strand. Superior Strength.
                </div>

                <div style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '20px' }}>
                  <p style={{ marginBottom: '12px' }}>
                    Our Monofilament Fabrics are high-performance technical textiles woven from a single continuous synthetic filament — making them stronger, smoother, and more dimensionally stable than standard multi-strand fabrics. This unique single-filament construction gives the fabric outstanding tensile strength, uniform structure, and excellent resistance to abrasion, chemicals, and deformation under pressure.
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    Unlike conventional fabrics, monofilament fabrics do not fray, shift, or lose their shape over time, making them the preferred choice for precision applications in filtration, industrial screening, agriculture, construction, and the medical sector. The smooth surface also makes them extremely easy to clean and maintain, which is a key advantage in industrial environments.
                  </p>
                  <p style={{ margin: 0 }}>
                    Available in a range of materials including polyester, polyamide, polypropylene, and HDPE — with optional coatings and finishes for added UV resistance, fire resistance, or antistatic properties. Custom mesh sizes, weights, and widths are available for bulk export orders.
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
                  <strong>Ideal For:</strong> <span style={{ color: '#475569' }}>Industrial filtration systems, agricultural crop netting, geotextile applications, scaffold netting, medical meshes, automotive components, food industry screening, and architectural coverings.</span>
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
                'Single-filament construction for superior strength and dimensional stability',
                'Tear-resistant, shrink-resistant, and abrasion-resistant',
                'Smooth surface for easy cleaning and maintenance',
                'Excellent chemical and UV resistance',
                'Available in polyester, polyamide, HDPE, and polypropylene',
                'Customizable mesh size, weight, and coating options',
                'Suitable for heavy-duty industrial and precision applications'
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
            Need Custom Monofilament Fabric Rolls?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Direct container export with certified filtration apertures, yarn diameters, and customized roll widths.
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