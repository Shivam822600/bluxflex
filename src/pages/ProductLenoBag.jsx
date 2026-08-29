import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Package,
  Layers,
  Settings,
  Tag,
  Wind
} from 'lucide-react';

import asset_leno_bag_jpg_1 from '../assets/images/official/leno-bag.jpeg?url';

export default function ProductLenoBag() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* ── 1. Top Main Product Summary (2 Columns) ── */}
      <section style={{ padding: '40px 0 48px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: '32px',
            alignItems: 'stretch'
          }}>
            {/* Left Column: Image Card & Key Highlights */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '28px',
              boxShadow: '0 4px 20px rgba(20,46,61,0.06)',
              border: '1px solid #E4DCD0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div style={{
                background: '#F8FAFC',
                borderRadius: '12px',
                padding: '20px',
                textAlign: 'center',
                marginBottom: '20px',
                border: '1px solid #EDF2F7'
              }}>
                <img
                  src={asset_leno_bag_jpg_1}
                  alt="Leno Bag"
                  style={{
                    maxHeight: '320px',
                    width: '100%',
                    objectFit: 'contain',
                    margin: '0 auto'
                  }}
                />
              </div>

              <div>
                <div style={{ fontSize: '12px', fontWeight: '800', color: '#142E3D', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
                  Key Material Characteristics
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {[
                    'Woven Mesh Structure',
                    'High Ventilation Grid',
                    'Virgin PP & PE Yarn',
                    'Custom Drawstring / Stitch',
                    'Printed Belly Band',
                    '5kg to 50kg Capacities'
                  ].map((chip, idx) => (
                    <div key={idx} style={{
                      background: '#F0F7E4',
                      color: '#142E3D',
                      fontSize: '12px',
                      fontWeight: '700',
                      padding: '6px 10px',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <CheckCircle2 size={13} color="#8DC63F" style={{ flexShrink: 0 }} />
                      <span>{chip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Concept & Description */}
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
                <h1 style={{ fontSize: '32px', color: '#142E3D', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0 0 4px 0', lineHeight: 1.2 }}>
                  Leno Bag
                </h1>
                <div style={{
                  color: '#8DC63F',
                  fontWeight: '700',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '18px'
                }}>
                  Breathable Woven Mesh Packaging for Produce &amp; Marine Harvest
                </div>

                <div style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '24px' }}>
                  <p style={{ marginBottom: '14px' }}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &lsquo;Content here, content here&rsquo;, making it look like readable English.
                  </p>
                  <p style={{ margin: 0 }}>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for &lsquo;lorem ipsum&rsquo; will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </p>
                </div>

                <div style={{
                  background: '#F8FAFC',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  border: '1px solid #EDF2F7',
                  marginBottom: '20px'
                }}>
                  <div style={{ fontSize: '12px', fontWeight: '800', color: '#142E3D', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Common Uses &amp; Produce Applications
                  </div>
                  <div style={{ fontSize: '13.5px', color: '#64748B', lineHeight: '1.6' }}>
                    Onions, potatoes, cabbage, carrots, citrus fruit, firewood, and marine harvest including mussels, clams, and oysters requiring continuous drainage and aeration.
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid #EDF2F7' }}>
                <Link
                  to="/contact-us-2"
                  className="btn-dark"
                  style={{
                    flex: 1,
                    minWidth: '200px',
                    justifyContent: 'center',
                    padding: '12px 20px',
                    fontSize: '14px',
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
                    padding: '12px 20px',
                    fontSize: '14px',
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

      {/* ── 2. Specifications Matrix ── */}
      <section style={{ padding: '56px 0', background: '#F8FAFC', borderTop: '1px solid #EDF2F7' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 32px auto' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#8DC63F',
              fontWeight: '800',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '8px'
            }}>
              <Settings size={14} /> Manufacturing Details
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 32px)', color: '#142E3D', fontWeight: '800', margin: '0 0 10px 0' }}>
              Technical Specifications
            </h2>
            <p style={{ color: '#64748B', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
              Standard manufacturing parameters and custom options for Leno bags.
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(20,46,61,0.04)'
          }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#142E3D', color: '#FFFFFF' }}>
                    <th style={{ padding: '16px 20px', fontWeight: '800', width: '28%' }}>Parameter</th>
                    <th style={{ padding: '16px 20px', fontWeight: '800', width: '36%', background: '#0F2531', color: '#8DC63F' }}>
                      Standard Specification
                    </th>
                    <th style={{ padding: '16px 20px', fontWeight: '800', width: '36%' }}>
                      Custom Capabilities
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { param: 'Mesh Type', standard: 'Woven Leno Grid', custom: 'Sulzer or Circular Loom' },
                    { param: 'Material', standard: '100% Virgin Polypropylene (PP) / PE', custom: 'UV Stabilized on request' },
                    { param: 'Load Capacities', standard: '5 kg, 10 kg, 25 kg, 50 kg', custom: 'Custom dimensions & GSM' },
                    { param: 'Top Closure', standard: 'Woven Drawstring', custom: 'Hemmed Top, Ultrasonic Seal' },
                    { param: 'Labeling', standard: 'Pre-printed Belly Band Strip', custom: 'Up to 4-colour custom rotogravure' },
                    { param: 'Standard Colors', standard: 'Red, Yellow, Orange, Green, Violet, White', custom: 'Custom shade matching' },
                    { param: 'Aeration', standard: 'Open aperture structure', custom: 'Specific air permeability specifications' }
                  ].map((row, index) => (
                    <tr
                      key={index}
                      style={{
                        background: index % 2 === 0 ? '#FFFFFF' : '#F8FAFC',
                        borderBottom: '1px solid #EDF2F7'
                      }}
                    >
                      <td style={{ padding: '14px 20px', fontWeight: '700', color: '#142E3D' }}>
                        {row.param}
                      </td>
                      <td style={{
                        padding: '14px 20px',
                        color: '#142E3D',
                        fontWeight: '600',
                        background: index % 2 === 0 ? 'rgba(141,198,63,0.05)' : 'rgba(141,198,63,0.09)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <CheckCircle2 size={15} color="#8DC63F" style={{ flexShrink: 0 }} />
                          <span>{row.standard}</span>
                        </div>
                      </td>
                      <td style={{ padding: '14px 20px', color: '#5B6B76' }}>
                        {row.custom}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Bottom RFQ Callout ── */}
      <section style={{ background: '#142E3D', color: '#FFFFFF', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: '800', marginBottom: '10px' }}>
            Ready to Order Leno Bags?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Get factory-direct pricing, custom print labels, and container load optimization with BulkFlex.
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