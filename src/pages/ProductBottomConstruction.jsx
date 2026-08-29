import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

import asset_a4da6e12_8b22_4896_929b_815191c46974_1024x1024_png_1 from '../assets/images/official/a4da6e12-8b22-4896-929b-815191c46974.png?url';

export default function ProductBottomConstruction() {
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
                  src={asset_a4da6e12_8b22_4896_929b_815191c46974_1024x1024_png_1}
                  alt="Bottom Construction"
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
                  Bottom Construction
                </h1>

                <div style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                  <p style={{ margin: 0 }}>
                    The bottom seam is the most load-stressed point in a woven PP bag. It carries the full weight of the product during lifting and the full impact force when a filled bag lands on a conveyor, pallet, or warehouse floor. A bottom seam specified below the requirement for the product weight and handling environment will fail and a seam failure mid-supply chain means product loss, contamination, and a claim.
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

      {/* ── 2. The 5 Exact Specifications ── */}
      <section style={{ padding: '40px 0 56px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {/* 1. Bottom Single Fold Single Stitch */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Bottom Single Fold Single Stitch
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                The base is folded once and sewn with one line of stitching. The entry-level bottom construction lowest cost, adequate for lightweight products in gentle handling environments and short supply chains.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#142E3D', background: '#FFFFFF', padding: '12px 16px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                <div><strong>Construction:</strong> One fold, one stitch line</div>
                <div><strong>Strength:</strong> Entry level — suitable for low-density, low-weight products</div>
                <div><strong>Best For:</strong> Light retail packs, 5–15 kg bags, short supply chains, covered storage distribution</div>
              </div>
            </div>

            {/* 2. Bottom Single Fold Double Stitch */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Bottom Single Fold Double Stitch
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '10px' }}>
                The base is folded once and sewn with two parallel lines of stitching. The second stitch line significantly increases seam strength and resistance to seam opening under impact loading when filled bags are dropped from conveyors, stacked at height, or handled repeatedly through a long supply chain.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                Single fold double stitch is the standard bottom construction for the majority of commercial woven PP bags globally. It is the correct specification for rice, flour, sugar, animal feed, fertiliser, and standard industrial sacks — the point at which seam strength, production cost, and commercial requirement are properly balanced.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#142E3D', background: '#FFFFFF', padding: '12px 16px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                <div><strong>Construction:</strong> One fold, two parallel stitch lines</div>
                <div><strong>Strength:</strong> Commercial standard suitable for most food, feed, agricultural, and industrial applications</div>
                <div><strong>Best For:</strong> Rice, flour, sugar, animal feed, fertiliser, minerals — the default specification for 25 kg and 50 kg commercial sacks</div>
              </div>
            </div>

            {/* 3. Bottom Double Fold Single Stitch */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Bottom Double Fold Single Stitch
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                The base is folded twice — creating a double-thickness fold — then sewn with one stitch line through all layers. The double fold creates more structural density at the seam base, distributing the stitch load across more fabric layers than a single fold.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#142E3D', background: '#FFFFFF', padding: '12px 16px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                <div><strong>Construction:</strong> Two folds, one stitch line</div>
                <div><strong>Strength:</strong> Increased seam density — good resistance to seam separation</div>
                <div><strong>Best For:</strong> Medium to high density products, bags requiring a clean-folded base appearance with reinforced seam thickness</div>
              </div>
            </div>

            {/* 4. Bottom Double Fold Double Stitch */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Bottom Double Fold Double Stitch
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '10px' }}>
                The base is folded twice and sewn with two parallel stitch lines through all layers. The strongest standard bottom construction for woven PP bags. Double-thickness fold combined with double stitching provides maximum resistance to seam opening under sustained load, impact loading, and repeated handling cycles throughout a long, multi-stage supply chain.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                If your bag is carrying 50 kg of dense product, being dropped from a conveyor belt onto a concrete floor, palletised six layers high, containerised, ocean-freighted, deconsolidated, and warehoused before final delivery — this is the bottom specification.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#142E3D', background: '#FFFFFF', padding: '12px 16px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                <div><strong>Construction:</strong> Two folds, two parallel stitch lines</div>
                <div><strong>Strength:</strong> Maximum highest resistance to seam opening under impact and sustained load</div>
                <div><strong>Best For:</strong> Cement, heavy minerals, dense chemicals, sandbags, 50 kg industrial sacks, long multi-handling supply chains</div>
              </div>
            </div>

            {/* 5. Block Bottom (AD Star Style) */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Block Bottom (AD Star Style)
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                The base is folded and tucked into a flat, squared geometry without conventional stitching producing a self-standing, brick-shaped bag with a uniform flat base for valve-filling lines and stable palletisation. Standard for AD Star bags and valve-fill construction products.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#142E3D', background: '#FFFFFF', padding: '12px 16px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                <div><strong>Construction:</strong> Folded and tucked — flat self-standing geometry</div>
                <div><strong>Best For:</strong> AD Star valve bags, cement, dry mortar, construction chemicals on automated filling lines</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Bottom RFQ Callout ── */}
      <section style={{ background: '#142E3D', color: '#FFFFFF', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: '800', marginBottom: '10px' }}>
            Looking for Custom Bottom Seam Sacks?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            We manufacture woven PP sacks with exact fold depths, stitch pitches, and high-tenacity thread specs to prevent seam drop failure.
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