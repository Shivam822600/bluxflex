import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowRight
} from 'lucide-react';

import asset_roofing_underlayment_png_1 from '../assets/images/official/roofing_underlayment.png?url';

export default function ProductRoofingUnderlayment() {
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
                  src={asset_roofing_underlayment_png_1}
                  alt="Roofing Underlayment"
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
                  Roofing Underlayment
                </h1>
                <div style={{
                  color: '#8DC63F',
                  fontWeight: '700',
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '18px'
                }}>
                  The Layer Between Structure and Weather
                </div>

                <div style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '20px' }}>
                  <p style={{ marginBottom: '12px' }}>
                    A roof covering — tiles, slates, metal sheets, or shingles — is the primary weather barrier. The roofing underlayment is the secondary one. It sits between the structural deck and the covering, providing a back-up water barrier, a vapour management layer, and protection for the structural deck during installation and in the event that the primary covering is compromised.
                  </p>
                  <p style={{ margin: 0 }}>
                    The underlayment manages what the primary covering cannot: water and vapour that penetrates through laps, at ridges, at penetrations, and in sustained wind-driven rain events. In cold climates, it manages condensation forming at the underside of the roof covering. Specifying the correct underlayment determines the moisture performance of the building envelope for the life of the roof.
                  </p>
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

      {/* ── 2. Detailed Specifications (Exact Verbatim from BulkFlex) ── */}
      <section style={{ padding: '24px 0 56px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '28px'
          }}>
            {/* 1. Woven PP Breathable Roofing Underlayment */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Woven PP Breathable Roofing Underlayment
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Woven polypropylene roofing underlayments are multilayer constructions with a vapourpermeable film layer that allows moisture vapour to escape outward through the fabric while blocking liquid water ingress from above. Laid directly on rafters or structural deck, beneath tiles, slates, or metal roofing.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                The vapour permeability — expressed as Sd value — determines how freely moisture escapes outward from the building structure. Low Sd values are required in cold-climate construction where preventing condensation within the roof assembly is critical to longterm structural integrity.
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px 20px',
                fontSize: '14px',
                color: '#142E3D',
                background: '#FFFFFF',
                padding: '16px 20px',
                borderRadius: '10px',
                border: '1px solid #EDF2F7',
                lineHeight: 1.6
              }}>
                <div><strong>Construction:</strong> <span style={{ color: '#475569' }}>Woven PP multilayer with vapour-permeable membrane</span></div>
                <div><strong>Performance:</strong> <span style={{ color: '#475569' }}>Vapour-permeable · Liquid water-resistant</span></div>
                <div><strong>Temporary UV Exposure:</strong> <span style={{ color: '#475569' }}>3–6 months before covering</span></div>
                <div><strong>Roll Width:</strong> <span style={{ color: '#475569' }}>1.5 m · 2.4 m · 3.0 m standard — custom available</span></div>
                <div><strong>Roll Length:</strong> <span style={{ color: '#475569' }}>30 m · 50 m · 100 m — custom on request</span></div>
                <div><strong>Custom Sizes:</strong> <span style={{ color: '#475569' }}>Yes</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Residential and commercial roofing under tiles, slates, and metal in cold and temperate climates</span>
                </div>
              </div>
            </div>

            {/* 2. Heavy-Duty Roofing Underlayment */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Heavy-Duty Roofing Underlayment
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                Reinforced woven PP construction for commercial, industrial, and low-pitch roofing where longer temporary exposure and higher mechanical load during installation are expected.
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px 20px',
                fontSize: '14px',
                color: '#142E3D',
                background: '#FFFFFF',
                padding: '16px 20px',
                borderRadius: '10px',
                border: '1px solid #EDF2F7',
                lineHeight: 1.6
              }}>
                <div><strong>Temporary Exposure:</strong> <span style={{ color: '#475569' }}>Up to 12 months in some specifications</span></div>
                <div><strong>Custom Sizes:</strong> <span style={{ color: '#475569' }}>Yes</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Commercial and industrial roofing, low-pitch and flat roofing, extended construction programmes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Bottom RFQ Callout ── */}
      <section style={{ background: '#142E3D', color: '#FFFFFF', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: '800', marginBottom: '10px' }}>
            Ready to Order Synthetic Roofing Underlayment Rolls?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Direct container shipping with customized roll lengths, printed nail alignment grids, and private label branding.
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