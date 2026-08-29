import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  ChevronLeft,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Package,
  Layers,
  Sparkles,
  Info,
  Scale,
  Settings
} from 'lucide-react';

import asset_RASCHEL_BAGS_FABRIC_png_1 from '../assets/images/official/RASCHEL-BAGS-FABRIC.png?url';
import asset_LENO_FLAT_FABRIC_png_2 from '../assets/images/official/LENO-FLAT-FABRIC-_-ROLLS.png?url';

export default function ProductRaschelBagsFabric() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* ── Main Product Summary (2 Columns) ── */}
      <section style={{ padding: '40px 0 48px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: '32px',
            alignItems: 'stretch'
          }}>
            {/* Left Column: Featured Image & Quick Highlights */}
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
                  src={asset_RASCHEL_BAGS_FABRIC_png_1}
                  alt="Raschel Bags & Fabric"
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
                    'Knitted Loop Structure',
                    'Multi-Directional Stretch',
                    'Soft Non-Abrasive Yarn',
                    'Virgin PE / PP Material',
                    'Custom Drawstring / Clip',
                    '500g to 10kg Formats'
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

            {/* Right Column: Concept & What is a Raschel Bag? */}
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
                  Raschel Bags &amp; Fabric
                </h1>
                <div style={{
                  color: '#8DC63F',
                  fontWeight: '700',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '18px'
                }}>
                  Knitted Mesh Packaging &amp; Continuous Roll Stock
                </div>
                <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', lineHeight: 1.25 }}>
                  What is a Raschel Bag?
                </h2>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                  <strong>Raschel bags are knitted — not woven.</strong> While leno mesh bags are produced on weaving looms using interlocked warp and weft tapes, raschel bags are produced on raschel knitting machines using a looping, interlocking knit construction that creates a highly elastic, soft, and conforming mesh structure.
                </p>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                  The difference is fundamental and determines which format is correct for the product. A woven leno bag holds a fixed, rigid mesh geometry under load — the aperture size and shape are dimensionally stable. A raschel bag stretches and conforms to the shape of the product inside it, holding irregular, round, or non-uniform items more gently and more securely than a rigid mesh.
                </p>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                  For products that are roughly round, irregular in shape, or soft-surfaced — citrus fruit, bulb onions, root vegetables, shellfish — raschel bags grip and conform to the product in a way that woven leno bags do not. A raschel bag holds a round orange more securely than a rigid mesh bag of the same nominal size. It also presents more neatly at retail, because the elastic mesh conforms tightly to the product contour and eliminates the looseness that can make a woven bag look underfilled.
                </p>
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

      {/* ── 3. Construction & Properties (Full Width Section) ── */}
      <section style={{ padding: '56px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ maxWidth: '760px', marginBottom: '32px' }}>
            <div style={{
              color: '#8DC63F',
              fontWeight: '800',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '6px'
            }}>
              Material Science &amp; Protection
            </div>
            <h2 style={{ fontSize: '28px', color: '#142E3D', fontWeight: '800', marginBottom: '10px' }}>
              Raschel Bag — Construction and Properties
            </h2>
            <p style={{ color: '#64748B', fontSize: '15px', lineHeight: 1.6 }}>
              Engineered to minimise produce skin abrasion, reduce transport claims, and maintain optimal ventilation during long-distance transit.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '32px',
            alignItems: 'start'
          }}>
            {/* Left: Explanatory Breakdown */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#142E3D', marginBottom: '8px' }}>
                  Multi-Directional Knitted Apertures
                </h3>
                <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '1.7', margin: 0 }}>
                  Raschel bags are produced from PE or PP yarn on raschel knitting machines, typically in tubular form. The knitted structure creates a mesh with hexagonal or diamond-shaped apertures that stretch in multiple directions under load — allowing the bag to expand to fit larger products and contract to hold smaller ones, within the elastic range of the yarn.
                </p>
              </div>

              <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#142E3D', marginBottom: '8px' }}>
                  Zero Surface Abrasion for Soft Produce
                </h3>
                <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '1.7', margin: 0 }}>
                  The soft, knitted surface of a raschel bag does not abrade produce in the way that the stiffer tape edges of a woven leno bag can. For soft-skinned citrus, stone fruit, and fresh vegetables where surface abrasion causes cosmetic damage and shortens shelf life, raschel bags reduce product damage in transit — which directly reduces importer claims and waste.
                </p>
              </div>

              <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#142E3D', marginBottom: '8px' }}>
                  European &amp; North American Supermarket Standard
                </h3>
                <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '1.7', margin: 0 }}>
                  Raschel bags are widely used for retail citrus, onion, garlic, stone fruit, and root vegetables across European and North American produce markets, and are increasingly specified for premium fresh produce export programmes where minimising visual damage to the product surface is a commercial priority.
                </p>
              </div>
            </div>

            {/* Right: Technical Parameter Matrix */}
            <div style={{
              background: '#F0F7E4',
              borderRadius: '16px',
              padding: '28px',
              border: '1px solid rgba(141,198,63,0.3)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
                <Settings size={20} color="#142E3D" />
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#142E3D', margin: 0 }}>
                  Technical Parameters
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { title: 'Construction', val: 'Knitted mesh — hexagonal or diamond aperture' },
                  { title: 'Elasticity', val: 'Multi-directional stretch — conforms to product shape' },
                  { title: 'Surface', val: 'Soft knitted yarn — minimal abrasion on produce surface' },
                  { title: 'Yarn Material', val: 'PE or PP' },
                  { title: 'Colours', val: 'Full range (Red, Orange, Yellow, Green, Purple, White)' },
                  { title: 'Closure', val: 'Draw cord · Metal clip · Heat seal' },
                  { title: 'Sizes', val: 'Custom — from 500 g retail packs to 10 kg bulk packs' },
                  { title: 'Best For', val: 'Citrus fruit, onions, garlic, stone fruit, root vegetables, soft-skinned produce requiring minimal surface abrasion — retail fresh produce packing for European and North American supermarket supply' }
                ].map((item, i) => (
                  <div key={i} style={{
                    background: '#FFFFFF',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    border: '1px solid rgba(141,198,63,0.2)'
                  }}>
                    <div style={{ fontSize: '11.5px', color: '#142E3D', fontWeight: '800', textTransform: 'uppercase', marginBottom: '2px' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '13.5px', color: '#475569', lineHeight: 1.45 }}>
                      {item.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Comparison Table: Raschel Bag vs Leno Mesh Bag ── */}
      <section style={{ padding: '56px 0', background: '#F8FAFC', borderTop: '1px solid #EDF2F7', borderBottom: '1px solid #EDF2F7' }}>
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
              <Scale size={14} /> Selection Matrix
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 32px)', color: '#142E3D', fontWeight: '800', margin: '0 0 10px 0' }}>
              Raschel Bag vs Leno Mesh Bag – Which to Choose
            </h2>
            <p style={{ color: '#64748B', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
              Comparison of mechanical properties, mesh behavior, and crop suitability between knitted and woven mesh formats.
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            border: '1px solid #E4DCD0',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(20,46,61,0.06)'
          }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#142E3D', color: '#FFFFFF' }}>
                    <th style={{ padding: '16px 20px', fontWeight: '800', width: '28%' }}>Parameter</th>
                    <th style={{ padding: '16px 20px', fontWeight: '800', width: '36%', background: '#0F2531', color: '#8DC63F' }}>
                      Raschel Bag (Knitted)
                    </th>
                    <th style={{ padding: '16px 20px', fontWeight: '800', width: '36%' }}>
                      Leno Mesh Bag (Woven)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { title: 'Construction', raschel: 'Knitted', leno: 'Woven' },
                    { title: 'Mesh Geometry', raschel: 'Elastic – stretches to product shape', leno: 'Fixed – dimensionally stable' },
                    { title: 'Surface Feel', raschel: 'Soft – minimal abrasion', leno: 'Firmer tape edges' },
                    { title: 'Product Conformity', raschel: 'High – wraps product contour', leno: 'Lower – fixed bag geometry' },
                    { title: 'Structural Rigidity', raschel: 'Lower', leno: 'Higher' },
                    { title: 'Suitable Pack Weight', raschel: 'Up to 10 kg typical', leno: 'Up to 50 kg' },
                    { title: 'Best For', raschel: 'Citrus, stone fruit, soft produce', leno: 'Onion, potato, firewood, heavy produce' },
                    { title: 'Printing', raschel: 'Limited – yarn surface', leno: 'Yes – up to 4 colours on tape' },
                    { title: 'Belly Band Label', raschel: 'Yes', leno: 'Yes' }
                  ].map((row, index) => (
                    <tr
                      key={index}
                      style={{
                        background: index % 2 === 0 ? '#FFFFFF' : '#F8FAFC',
                        borderBottom: '1px solid #EDF2F7'
                      }}
                    >
                      <td style={{ padding: '14px 20px', fontWeight: '700', color: '#142E3D' }}>
                        {row.title}
                      </td>
                      <td style={{
                        padding: '14px 20px',
                        color: '#142E3D',
                        fontWeight: '600',
                        background: index % 2 === 0 ? 'rgba(141,198,63,0.05)' : 'rgba(141,198,63,0.09)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <CheckCircle2 size={15} color="#8DC63F" style={{ flexShrink: 0 }} />
                          <span>{row.raschel}</span>
                        </div>
                      </td>
                      <td style={{ padding: '14px 20px', color: '#5B6B76' }}>
                        {row.leno}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Raschel Flat Fabric — Rolls (2 Columns) ── */}
      <section style={{ padding: '56px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}>
            {/* Left: Info & Specs */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#F0F7E4',
                color: '#8DC63F',
                padding: '4px 12px',
                borderRadius: '50px',
                fontSize: '12px',
                fontWeight: '700',
                marginBottom: '10px'
              }}>
                <Layers size={14} /> Master Roll Stock
              </div>
              <h2 style={{ fontSize: '28px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', lineHeight: 1.25 }}>
                Raschel Flat Fabric — Rolls
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                Raschel flat fabric is supplied in roll form for packers and bag-making operations that cut and finish bags in-house. Rolls are available in standard and custom widths to match bag making equipment dimensions, in PE or PP yarn, in the full colour range, with custom mesh aperture specifications.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
                Rolls with printed labels inserted at defined intervals are available the same format as leno flat fabric rolls with labels allowing automatic labelling during in-house bag making without a separate labelling step.
              </p>

              {/* Roll Stock Specifications */}
              <div style={{
                background: '#F8FAFC',
                borderRadius: '12px',
                padding: '18px 20px',
                border: '1px solid #E2E8F0',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '700', textTransform: 'uppercase' }}>Roll Width</div>
                  <div style={{ fontSize: '13.5px', color: '#142E3D', fontWeight: '700', marginTop: '2px' }}>Custom to Machine Spec</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '700', textTransform: 'uppercase' }}>Roll Length</div>
                  <div style={{ fontSize: '13.5px', color: '#142E3D', fontWeight: '700', marginTop: '2px' }}>500 m or 1,000 m Standard</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '700', textTransform: 'uppercase' }}>Yarn Material</div>
                  <div style={{ fontSize: '13.5px', color: '#142E3D', fontWeight: '700', marginTop: '2px' }}>PE or PP (Full Color Range)</div>
                </div>
                <div>
                  <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '700', textTransform: 'uppercase' }}>Labels on Roll</div>
                  <div style={{ fontSize: '13.5px', color: '#142E3D', fontWeight: '700', marginTop: '2px' }}>Inserted at Defined Interval</div>
                </div>
              </div>

              <p style={{ color: '#64748B', fontSize: '13px', lineHeight: 1.5, margin: 0 }}>
                <strong>Best For:</strong> In-house bag-making operations, packing facilities producing bags from roll stock at the packing line.
              </p>
            </div>

            {/* Right: Roll Visual Card */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid #E2E8F0',
              textAlign: 'center'
            }}>
              <img
                src={asset_LENO_FLAT_FABRIC_png_2}
                alt="Raschel and Leno Flat Fabric Rolls"
                style={{
                  maxHeight: '260px',
                  width: '100%',
                  objectFit: 'contain',
                  margin: '0 auto 16px auto'
                }}
              />
              <div style={{ fontSize: '13px', fontWeight: '700', color: '#142E3D', marginBottom: '14px' }}>
                Continuous Fabric Master Rolls for Automated Packing Lines
              </div>
              <Link
                to="/contact-us-2"
                className="btn-dark"
                style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  padding: '10px 24px',
                  fontSize: '13.5px'
                }}
              >
                Inquire for Roll Stock <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Bottom RFQ Callout ── */}
      <section style={{ background: '#142E3D', color: '#FFFFFF', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: '800', marginBottom: '10px' }}>
            Ready to Order Raschel Bags or Fabric Rolls?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Get factory-direct pricing, custom color matching, and container load optimization with BulkFlex.
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