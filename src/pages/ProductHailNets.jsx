import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowRight
} from 'lucide-react';

import asset_hail_nets_png_1 from '../assets/images/official/hail_nets.png?url';

export default function ProductHailNets() {
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
                  src={asset_hail_nets_png_1}
                  alt="Hail Nets"
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
                  Hail Nets
                </h1>
                <div style={{
                  color: '#8DC63F',
                  fontWeight: '700',
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '18px'
                }}>
                  The One Threat That Gives No Warning
                </div>

                <div style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '20px' }}>
                  <p style={{ marginBottom: '12px' }}>
                    Drought develops over weeks. Frost comes with a forecast. Insects build over a season. Hail arrives in fifteen minutes and leaves a commercial harvest unmarketable in the same time.
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    A single moderate hail event on an apple, pear, cherry, or grape crop at or near harvest can downgrade 100% of the fresh market crop to processing grade — a price reduction of 60 to 80 percent on the entire season’s investment. For premium fruit production targeting fresh market and export channels, there is no recovery within the same season.
                  </p>
                  <p style={{ margin: 0 }}>
                    Hail nets are the only commercially practical intervention that prevents this outcome at the crop level.
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
            {/* 1. Knitted HDPE Hail Net */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Knitted HDPE Hail Net
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Hail nets are knitted from high-tenacity HDPE yarns engineered to absorb and distribute hailstone impact energy across the net structure rather than transmitting it to the fruit below. The net deflects slightly under impact — absorbing kinetic energy in the knitted yarn — then returns to its geometry. The fruit receives a fraction of the impact that direct exposure delivers.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                Hail nets are installed on permanent overhead cable systems above the crop canopy. The installation is a capital investment evaluated against the historical hail risk at the site, the crop value, and the insurance cost alternative. In high-risk hail zones producing premium fresh-market fruit, payback is typically measured in one to three seasons.
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
                <div><strong>Construction:</strong> <span style={{ color: '#475569' }}>Knitted high-tenacity HDPE</span></div>
                <div><strong>Shade Impact:</strong> <span style={{ color: '#475569' }}>8% – 15% light reduction — engineered for minimum shading</span></div>
                <div><strong>Colours:</strong> <span style={{ color: '#475569' }}>White · Transparent (minimum shading) · Black</span></div>
                <div><strong>UV Rating:</strong> <span style={{ color: '#475569' }}>8-year · 10-year · 12-year</span></div>
                <div><strong>Width:</strong> <span style={{ color: '#475569' }}>Custom — to row spacing and structure specification</span></div>
                <div><strong>Length:</strong> <span style={{ color: '#475569' }}>Custom roll or cut panel</span></div>
                <div><strong>Custom Sizes:</strong> <span style={{ color: '#475569' }}>Yes</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Apples, pears, cherries, grapes, stone fruit — premium fresh-market fruit crops in high hail-risk regions</span>
                </div>
              </div>
            </div>

            {/* 2. Hail + Shade Combination Net */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Hail + Shade Combination Net
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                Combination nets provide hail protection and a defined shade percentage simultaneously — specified where both hail risk and solar radiation intensity require management in the same installation.
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
                <div><strong>Shade Percentage:</strong> <span style={{ color: '#475569' }}>10% – 40% combined with hail protection</span></div>
                <div><strong>Best For:</strong> <span style={{ color: '#475569' }}>Premium fruit in high-radiation, high hail-risk growing regions</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Bottom RFQ Callout ── */}
      <section style={{ background: '#142E3D', color: '#FFFFFF', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: '800', marginBottom: '10px' }}>
            Ready to Protect Your Orchard Investment?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Direct container rolls supplied to exact orchard row widths, cable attachment eyelets, and UV requirements.
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