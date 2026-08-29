import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowRight
} from 'lucide-react';

import asset_printed_pp_woven_sack_upto_six_colors_png_1 from '../assets/images/official/printed-pp-woven-sack-upto-six-colors.png?url';

export default function ProductPrintOptions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* ── 1. Top Section ── */}
      <section style={{ padding: '40px 0 32px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: '32px',
            alignItems: 'stretch'
          }}>
            {/* Left: Image */}
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
                  src={asset_printed_pp_woven_sack_upto_six_colors_png_1}
                  alt="Print Options"
                  style={{
                    maxHeight: '360px',
                    width: '100%',
                    objectFit: 'contain',
                    margin: '0 auto'
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
                <h1 style={{ fontSize: '32px', color: '#142E3D', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0 0 16px 0', lineHeight: 1.2 }}>
                  Print Options
                </h1>

                <div style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
                  <p style={{ marginBottom: '12px' }}>
                    All woven PP bags are available with direct print on the woven fabric in up to four colours. UV-stable, abrasion-resistant inks are applied to the outer face of the bag. Available on one or two sides.
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    Standard print content includes brand name and logo, product name and grade, net weight, country of origin, handling and storage instructions, certification marks, batch or lot codes, and regulatory information.
                  </p>
                  <p style={{ margin: 0 }}>
                    Artwork files are accepted in AI, EPS, or high-resolution PDF format. Print screens are set up at the factory at order placement and retained permanently for all repeat orders — no re-setup charge, no lead time delay on reorders.
                  </p>
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

      {/* ── 2. BOPP Print Finish ── */}
      <section style={{ padding: '40px 0 56px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            background: '#F8FAFC',
            borderRadius: '16px',
            padding: '28px 32px',
            border: '1px solid #E2E8F0'
          }}>
            <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#8DC63F' }}>➤</span> BOPP Print Finish – Photographic Quality
            </h2>
            <div style={{ color: '#8DC63F', fontWeight: '700', fontSize: '15px', marginBottom: '14px' }}>
              Direct print on woven PP is functional. BOPP print is commercial.
            </div>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '12px' }}>
              BOPP laminated bags carry reverse-printed BOPP film bonded to the outer woven surface. The print sits protected between the film and the fabric, fully shielded from handling damage. The result is photographic-quality imagery: smooth colour gradients, sharp fine text, vivid brand colours, and a high-gloss or matte surface finish that no direct-print woven PP bag can replicate.
            </p>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '16px' }}>
              The commercial impact is measurable. In retail environments where a consumer is choosing between products in similar bags at similar prices, print quality signals product quality. A BOPP bag communicates premium. A faded, rough-surface direct-print bag communicates commodity. The difference in bag cost per unit is small. The difference in shelf conversion rate is not.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#142E3D', background: '#FFFFFF', padding: '14px 18px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
              <div><strong>Print Method:</strong> Reverse print on BOPP film, laminated to woven PP</div>
              <div><strong>Quality:</strong> Photographic full colour, fine detail, smooth gradients</div>
              <div><strong>Finish:</strong> High gloss standard; matte available</div>
              <div><strong>Protection:</strong> Fully protected between laminate and fabric</div>
              <div><strong>Best For:</strong> Retail rice, flour, sugar, pet food, animal feed, seed, and any product where brand presentation at retail directly drives sales volume</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Bottom RFQ Callout ── */}
      <section style={{ background: '#142E3D', color: '#FFFFFF', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: '800', marginBottom: '10px' }}>
            Ready to Order Custom Printed PP Sacks?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Send us your brand artwork files (AI/EPS/PDF) for digital proofing and rapid factory-direct pricing.
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