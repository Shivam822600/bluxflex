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
  Zap,
  Check
} from 'lucide-react';

import asset_wileted_leno_bag_jpg_1 from '../assets/images/official/wileted-leno-bag.jpeg?url';

export default function ProductWiletedLenoBag() {
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
                  src={asset_wileted_leno_bag_jpg_1}
                  alt="Wicketed Leno Bag"
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
                  Key Capabilities
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {[
                    'Automated Wicket Mount',
                    'High-Speed Packing',
                    'Virgin Polypropylene',
                    'Mould-Resistant Mesh',
                    'Kwik Lok & Drawstring',
                    'Custom Printed Bands'
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
                  Wicketed Leno Bag
                </h1>
                <div style={{
                  color: '#8DC63F',
                  fontWeight: '700',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '18px'
                }}>
                  Speed Meets Freshness on Every Packing Line
                </div>

                <div style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
                  <p style={{ marginBottom: '14px' }}>
                    When a packing operation is running at full speed, every second counts. The Wicketed Leno Bag was designed with exactly that pressure in mind. Pre-cut and mounted on metal wicket wires, these bags slot directly into automated and semi-automatic bagging machines allowing operators to fill, seal, and move on at a pace that traditional bags simply cannot keep up with.
                  </p>
                  <p style={{ marginBottom: '14px' }}>
                    But speed is only half the story. What makes the wicketed leno bag genuinely valuable is what happens after the bag is packed. The open mesh structure allows the produce inside to breathe naturally releasing heat, releasing moisture, and staying fresh across the entire journey from packing house to supermarket shelf. For perishable goods, that breathability is not a nice feature, it is the difference between a product that arrives in perfect condition and one that does not.
                  </p>
                  <p style={{ marginBottom: '14px' }}>
                    These bags are the go-to packaging solution for onions, potatoes, garlic, ginger, citrus fruits, cabbage, carrots, and a wide range of other agricultural produce. They are equally well-suited for seafood like crawfish and shellfish, and for firewood and nuts where airflow and visibility matter. The open weave means buyers can inspect the product without ever opening the bag a feature that builds trust on the retail floor.
                  </p>
                  <p style={{ margin: 0 }}>
                    Made from virgin polypropylene, they are strong, lightweight, mould-resistant, and available in a full range of sizes, colours, and custom print options. Closure options include drawstrings and Kwik Lok closures depending on the operation. Whether you run a high-volume packing facility or a medium-scale agricultural export business, the wicketed leno bag delivers consistency, speed, and freshness in one clean package.
                  </p>
                </div>

                <div style={{
                  background: '#F0F7E4',
                  borderRadius: '10px',
                  padding: '14px 18px',
                  border: '1px solid rgba(141,198,63,0.3)',
                  fontSize: '13.5px',
                  color: '#142E3D',
                  lineHeight: 1.5,
                  marginBottom: '20px'
                }}>
                  <strong>Ideal For:</strong> Fresh produce exporters, agricultural packing facilities, supermarket supply chains, seafood and fisheries packaging, firewood distributors, and nut processors.
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
              <Settings size={14} /> Production Specs
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 32px)', color: '#142E3D', fontWeight: '800', margin: '0 0 10px 0' }}>
              Technical Specifications
            </h2>
            <p style={{ color: '#64748B', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
              Engineered for seamless feeding on automated and semi-automatic wicket bagging systems.
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
                    { param: 'Mounting Mechanism', standard: 'Heavy-Duty Metal Wicket Wires', custom: 'Custom wicket spacing & hole diameter' },
                    { param: 'Raw Material', standard: '100% Virgin Polypropylene (PP)', custom: 'UV Stabilized resin formulations' },
                    { param: 'Mesh Architecture', standard: 'High-Tensile Leno Weave', custom: 'Custom aperture sizes for varied crops' },
                    { param: 'Closure System', standard: 'Kwik Lok / Drawstring Compatible', custom: 'Heat seal or tape tie options' },
                    { param: 'Branding / Print', standard: 'Central Laminated Belly Band', custom: 'Up to 4-colour rotogravure printing' },
                    { param: 'Color Palette', standard: 'Red, Orange, Yellow, Green, White', custom: 'Custom brand colour matching' },
                    { param: 'Machine Compatibility', standard: 'Automated / Semi-Automated Lines', custom: 'Tested for high-cycle bagging arms' }
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
            Ready to Order Wicketed Leno Bags?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Factory-direct container supply engineered for high-speed automated packing facilities worldwide.
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