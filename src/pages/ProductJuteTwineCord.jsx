import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowRight
} from 'lucide-react';

import asset_jutetwine__cord_png_1 from '../assets/images/official/jutetwine__cord.png?url';

export default function ProductJuteTwineCord() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* ── 1. Top Section (Image + Title + Intro) ── */}
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
                  src={asset_jutetwine__cord_png_1}
                  alt="Jute Twin & Cord"
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
                <h1 style={{ fontSize: '34px', color: '#142E3D', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
                  Jute Twin &amp; Cord
                </h1>

                <div style={{ color: '#475569', fontSize: '15.5px', lineHeight: '1.75', marginBottom: '24px' }}>
                  <div style={{ fontWeight: '800', color: '#142E3D', marginBottom: '8px', fontSize: '17px' }}>
                    Why Jute Twine?
                  </div>
                  <p style={{ marginBottom: '12px' }}>
                    Garden twine sounds simple. It is not — when the wrong specification causes it to cut into plant stems, degrade in the first week of outdoor use, leave synthetic residue in compost, or fail to hold the load it is being used for.
                  </p>
                  <p style={{ margin: 0 }}>
                    Jute twine is the natural fibre standard for garden, horticulture, packaging, and craft applications because it solves all of these problems simultaneously. It is soft enough not to abrade or cut plant tissue when used to tie and train growing plants. It is strong enough to support climbing plants, bundle cut flowers, and secure packaging through a distribution supply chain. It biodegrades at the end of its use — in compost, in the soil, or simply outdoors — without leaving residue. And it has the natural, handcrafted aesthetic that the garden, artisan food, and natural product retail sectors want to communicate.
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

      {/* ── 2. Specifications ── */}
      <section style={{ padding: '24px 0 56px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '28px'
          }}>
            {/* 1. Single-Ply Jute Twine */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Single-Ply Jute Twine
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                Single-ply jute twine is a single twisted strand of jute fibre — the lightest and finest jute twine specification. Soft, flexible, and easy to tie and knot, single-ply twine is used for light tying, bundling, labelling, and decorative applications where strength is secondary to ease of handling and natural appearance.
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
                <div><strong>Ply:</strong> <span style={{ color: '#475569' }}>Single</span></div>
                <div><strong>Diameter:</strong> <span style={{ color: '#475569' }}>Fine</span></div>
                <div><strong>Strength:</strong> <span style={{ color: '#475569' }}>Light-duty</span></div>
                <div><strong>Biodegradation:</strong> <span style={{ color: '#475569' }}>Yes — seasonal outdoor use</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Plant training and tying, flower bundling, gift and packaging ribbon, craft and decorative applications, labelling</span>
                </div>
              </div>
            </div>

            {/* 2. Two-Ply Jute Twine */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Two-Ply Jute Twine
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                Two-ply jute twine twists two jute strands together, producing a stronger, more durable cord than single-ply with a slightly thicker profile that is easier to grip and handle. The most widely used jute twine specification in general horticulture, gardening, and agricultural tying applications.
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
                <div><strong>Ply:</strong> <span style={{ color: '#475569' }}>Two</span></div>
                <div><strong>Strength:</strong> <span style={{ color: '#475569' }}>Medium-duty — the standard general-purpose specification</span></div>
                <div><strong>Biodegradation:</strong> <span style={{ color: '#475569' }}>Yes</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>General plant tying and training, vegetable garden support, packaging and bundling, agricultural tying</span>
                </div>
              </div>
            </div>

            {/* 3. Three-Ply Jute Twine */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Three-Ply Jute Twine
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                Three-ply jute twine combines three strands for significantly higher tensile strength and abrasion resistance than two-ply. Used in heavier agricultural, packaging, and industrial tying applications where the twine must hold larger loads or withstand repeated handling.
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
                <div><strong>Ply:</strong> <span style={{ color: '#475569' }}>Three</span></div>
                <div><strong>Strength:</strong> <span style={{ color: '#475569' }}>Heavy-duty</span></div>
                <div><strong>Biodegradation:</strong> <span style={{ color: '#475569' }}>Yes</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Heavy-duty agricultural bundling, packaging cord, sack closure, industrial tying, trellising support for heavy cropping plants</span>
                </div>
              </div>
            </div>

            {/* 4. Coloured Jute Twine */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Coloured Jute Twine
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                Jute twine is available in dyed colours across all ply specifications — matching brand palettes, differentiating product lines, or simply adding a colour accent to natural packaging. Dyed with fibre-reactive dyes for consistent colour through the strand cross section.
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
                <div><strong>Colours:</strong> <span style={{ color: '#475569' }}>Natural · Black · Red · Green · Blue · Yellow · Custom</span></div>
                <div><strong>Ply:</strong> <span style={{ color: '#475569' }}>Available in all ply specifications</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Branded packaging cord, gift and retail finishing, event decoration, colour-coded product identification</span>
                </div>
              </div>
            </div>

            {/* 5. Jute Twine Packaging Formats */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Jute Twine Packaging Formats
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                Jute twine is supplied in balls, spools, reels, and bulk coils depending on the end use — handheld garden use, machine-fed agricultural tying, retail display, or bulk packaging supply.
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
                <div><strong>Formats:</strong> <span style={{ color: '#475569' }}>Balls (50 g, 100 g, 200 g) · Spools · Reels · Bulk coils</span></div>
                <div><strong>Custom Lengths and Weights:</strong> <span style={{ color: '#475569' }}>Yes — confirmed at order stage</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Bottom RFQ Callout ── */}
      <section style={{ background: '#142E3D', color: '#FFFFFF', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: '800', marginBottom: '10px' }}>
            Ready to Order Jute Twine &amp; Cordage in Bulk?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Available in retail-ready balls, spools, and master coils for agricultural distributors and packaging merchants worldwide.
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