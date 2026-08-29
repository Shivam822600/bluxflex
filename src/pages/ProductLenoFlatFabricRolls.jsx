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
  Factory
} from 'lucide-react';

import asset_LENO_FLAT_FABRIC__e2_80_94_ROLLS_png_1 from '../assets/images/official/LENO-FLAT-FABRIC-_-ROLLS.png?url';

export default function ProductLenoFlatFabricRolls() {
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
                  src={asset_LENO_FLAT_FABRIC__e2_80_94_ROLLS_png_1}
                  alt="Leno Flat Fabric – Rolls"
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
                  Roll Stock Capabilities
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  {[
                    'Sulzer Shuttle Weaving',
                    'Water Jet High Speed',
                    '500m & 1000m Lengths',
                    'PE, PP & Mono+PP',
                    '5×5 & 6×4 Mesh Counts',
                    'Pre-Inserted Labels'
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
                  Leno Flat Fabric – Rolls
                </h1>
                <div style={{
                  color: '#8DC63F',
                  fontWeight: '700',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '18px'
                }}>
                  Continuous Mesh Roll Stock for In-House Bag Making
                </div>

                <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', lineHeight: 1.25 }}>
                  Leno Flat Fabric in Rolls
                </h2>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                  Leno flat fabric is the base mesh material produced on leno looms and supplied in roll form — the primary input for bag-making operations that cut, stitch, and finish bags in-house. Rolls are also used directly by produce packers running on-site bag-making equipment, cutting and sealing bags to exact dimensions from roll stock at the packing line.
                </p>
                <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                  Supplying from roll stock gives packers direct control over bag dimensions, batch labelling, and material inventory — allowing them to produce the exact bag size for each product and pack weight without holding large inventories of pre-made bags in multiple sizes.
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

      {/* ── 2. Loom Weaving Technologies (Sulzer vs Water Jet) ── */}
      <section style={{ padding: '56px 0', background: '#F8FAFC', borderTop: '1px solid #EDF2F7', borderBottom: '1px solid #EDF2F7' }}>
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
              Weaving Methods
            </div>
            <h2 style={{ fontSize: '28px', color: '#142E3D', fontWeight: '800', marginBottom: '10px' }}>
              Loom Technologies &amp; Weave Specifications
            </h2>
            <p style={{ color: '#64748B', fontSize: '15px', lineHeight: 1.6 }}>
              Choose between precision Sulzer shuttle weaving for premium retail clarity or high-output Water Jet weaving for volume agricultural packaging.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '28px',
            alignItems: 'stretch'
          }}>
            {/* Sulzer Loom Fabric Card */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '28px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 16px rgba(20,46,61,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
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
                  marginBottom: '12px'
                }}>
                  <Factory size={14} /> High-Precision Weaving
                </div>
                <h3 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '12px' }}>
                  Sulzer Loom Fabric
                </h3>
                <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '1.7', marginBottom: '18px' }}>
                  Sulzer loom technology uses a shuttle mechanism to insert weft tapes through the warp shed, producing leno flat fabric with a tight, uniform weave and highly consistent aperture geometry across the full fabric width. Sulzer-woven fabric is the quality standard for retail produce packing, food-contact applications, and printed leno fabric — where consistent mesh geometry, clean aperture definition, and dimensional stability across the roll are required.
                </p>
              </div>

              <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '16px', border: '1px solid #EDF2F7' }}>
                <div style={{ fontSize: '13px', color: '#142E3D', lineHeight: '1.6', marginBottom: '8px' }}>
                  <strong>Characteristics:</strong> Tight, uniform weave · Consistent aperture geometry · High dimensional stability · Clean surface appearance
                </div>
                <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>
                  <strong>Best For:</strong> Retail produce packing, food-contact applications, printed leno fabric, quality-critical bag-making programmes
                </div>
              </div>
            </div>

            {/* Water Jet Loom Fabric Card */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '28px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 16px rgba(20,46,61,0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(20,46,61,0.08)',
                  color: '#142E3D',
                  padding: '4px 12px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: '700',
                  marginBottom: '12px'
                }}>
                  <Layers size={14} /> High-Speed Volume Output
                </div>
                <h3 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '12px' }}>
                  Water Jet Loom Fabric
                </h3>
                <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: '1.7', marginBottom: '18px' }}>
                  Water jet loom technology uses high-pressure water jets to insert the weft tapes through the warp shed, producing fabric at significantly higher speeds than sulzer loom weaving. The structural properties of water jet leno fabric are consistent and reliable. The production economics are lower than sulzer-woven fabric, making water jet the specification for high-volume, cost-sensitive applications where output rate and cost per metre are the primary drivers.
                </p>
              </div>

              <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '16px', border: '1px solid #EDF2F7' }}>
                <div style={{ fontSize: '13px', color: '#142E3D', lineHeight: '1.6', marginBottom: '8px' }}>
                  <strong>Characteristics:</strong> High production speed · Cost-effective · Consistent structural properties
                </div>
                <div style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6' }}>
                  <strong>Best For:</strong> Firewood netting, high-volume agricultural bulk packing, non-food applications, cost-sensitive programmes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Roll Specifications Matrix (Full Width Table) ── */}
      <section style={{ padding: '56px 0', background: '#FFFFFF' }}>
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
              <Settings size={14} /> Technical Standards
            </div>
            <h2 style={{ fontSize: 'clamp(24px, 3.5vw, 32px)', color: '#142E3D', fontWeight: '800', margin: '0 0 10px 0' }}>
              Roll Specifications
            </h2>
            <p style={{ color: '#64748B', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
              Full manufacturing standard specifications and customizable parameters for master rolls.
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
                      Custom Options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { param: 'Roll Width', standard: 'Standard loom widths', custom: 'To specified bag dimension' },
                    { param: 'Roll Length', standard: '500 m or 1,000 m', custom: 'On request' },
                    { param: 'Tape Material', standard: 'PE · PP · Mono+PP', custom: '–' },
                    { param: 'Mesh Specification', standard: '5×5 · 6×4', custom: 'Other pick counts available' },
                    { param: 'Colours', standard: 'Full standard range', custom: 'Custom colour matching on volume' },
                    { param: 'Loom Type', standard: 'Sulzer or water jet', custom: 'Specified at order stage' },
                    { param: 'Labels on Roll', standard: 'Available', custom: 'Pre-inserted at cut length' }
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

      {/* ── 4. Rolls with Labels ── */}
      <section style={{ padding: '56px 0', background: '#F8FAFC', borderTop: '1px solid #EDF2F7' }}>
        <div className="container">
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: 'clamp(28px, 4vw, 40px)',
            border: '1px solid #E2E8F0',
            boxShadow: '0 4px 20px rgba(20,46,61,0.04)'
          }}>
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
              marginBottom: '12px'
            }}>
              <Tag size={14} /> Integrated Branding
            </div>
            <h2 style={{ fontSize: '28px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', lineHeight: 1.25 }}>
              Rolls with Labels
            </h2>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
              Leno flat fabric rolls are available with printed labels inserted into the roll at defined intervals, aligned to the bag cut length. When the roll is fed through a bag-making machine, each finished bag carries a label automatically applied during the cut-and-seal cycle — eliminating a separate labelling step and ensuring every bag in the batch is labelled correctly from the moment it is made.
            </p>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
              Labels are printed in up to four colours carrying brand name, product name, barcode, weight, country of origin, and all required retail or trade information. Label material, dimensions, print specification, and insertion interval are confirmed at order stage.
            </p>

            {/* Spec Highlights Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '14px',
              marginBottom: '20px'
            }}>
              <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '14px 16px', border: '1px solid #EDF2F7' }}>
                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '700', textTransform: 'uppercase', marginBottom: '2px' }}>
                  Label Material
                </div>
                <div style={{ fontSize: '13.5px', color: '#142E3D', fontWeight: '700' }}>
                  Paper · PP film · Laminated stock
                </div>
              </div>

              <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '14px 16px', border: '1px solid #EDF2F7' }}>
                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '700', textTransform: 'uppercase', marginBottom: '2px' }}>
                  Print Capability
                </div>
                <div style={{ fontSize: '13.5px', color: '#142E3D', fontWeight: '700' }}>
                  Up to 4 colours flexo
                </div>
              </div>

              <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '14px 16px', border: '1px solid #EDF2F7' }}>
                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '700', textTransform: 'uppercase', marginBottom: '2px' }}>
                  Insertion Interval
                </div>
                <div style={{ fontSize: '13.5px', color: '#142E3D', fontWeight: '700' }}>
                  To bag cut-length spec
                </div>
              </div>

              <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '14px 16px', border: '1px solid #EDF2F7' }}>
                <div style={{ fontSize: '11px', color: '#64748B', fontWeight: '700', textTransform: 'uppercase', marginBottom: '2px' }}>
                  Key Benefit
                </div>
                <div style={{ fontSize: '13.5px', color: '#8DC63F', fontWeight: '800' }}>
                  Single-pass bag &amp; label
                </div>
              </div>
            </div>

            <div style={{
              background: '#F0F7E4',
              borderRadius: '10px',
              padding: '14px 18px',
              border: '1px solid rgba(141,198,63,0.3)',
              fontSize: '13.5px',
              color: '#142E3D',
              lineHeight: 1.5
            }}>
              <strong>Best For:</strong> High-volume bag-making operations producing labelled retail produce bags from roll stock.
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Bottom RFQ Callout ── */}
      <section style={{ background: '#142E3D', color: '#FFFFFF', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: '800', marginBottom: '10px' }}>
            Ready to Source Leno Flat Fabric Rolls?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Factory-direct container supply from audited Indian mills. Custom widths, yarn blends, and pre-inserted label configurations.
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