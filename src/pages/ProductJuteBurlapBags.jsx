import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowRight
} from 'lucide-react';

import asset_juteburlap_bags_png_1 from '../assets/images/official/juteburlap_bags.png?url';

export default function ProductJuteBurlapBags() {
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
                  src={asset_juteburlap_bags_png_1}
                  alt="Jute & Burlap Bags"
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

            {/* Right: Title & Intro Overview */}
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
                  Jute &amp; Burlap Bags
                </h1>

                <div style={{ color: '#475569', fontSize: '15.5px', lineHeight: '1.75', marginBottom: '24px' }}>
                  <p style={{ margin: 0 }}>
                    No synthetic material replicates what natural burlap does in the hand. Its texture, weight, and warmth communicate sustainability through physical sensation — before the customer reads a word of what is printed on it. Jute bags are kept, reused, and displayed. They travel beyond the point of sale and carry the brand into every environment they reach. They are among the most commercially successful and most genuinely loved retail bag formats in the global market.
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

      {/* ── 2. Detailed Specifications (Exact Content from BulkFlex) ── */}
      <section style={{ padding: '24px 0 56px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '28px'
          }}>
            {/* Item 1: Jute Shopping Bag */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Jute Shopping Bag :-
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Woven hessian burlap in natural tan or dyed colours, with natural jute cord handles or padded cotton handles for improved carrying comfort. Available flat or with a gusseted base. Print in up to four colours using water-based inks on the burlap surface.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                The natural jute cord and natural fabric combination delivers a consistent material story from base to handle — everything about the bag says the same thing. For brands whose positioning centres on natural, sustainable, or artisan values, there is no more credible physical expression of that positioning than a well-made natural jute bag.
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
                <div><strong>Fabric:</strong> <span style={{ color: '#475569' }}>Natural hessian burlap</span></div>
                <div><strong>Handles:</strong> <span style={{ color: '#475569' }}>Natural jute cord · Padded cotton tape</span></div>
                <div><strong>Base:</strong> <span style={{ color: '#475569' }}>Flat or gusseted</span></div>
                <div><strong>Print:</strong> <span style={{ color: '#475569' }}>Up to 4 colours · 1 or 2 sides</span></div>
                <div><strong>Colour Options:</strong> <span style={{ color: '#475569' }}>Natural tan and dyed colours available — full colour range</span></div>
                <div><strong>Custom Sizes:</strong> <span style={{ color: '#475569' }}>Yes</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Artisan food, organic and natural brands, specialty coffee and tea, gift retail, farmers markets, corporate gifting, festival merchandise</span>
                </div>
              </div>
            </div>

            {/* Item 2: Laminated Jute Bag — Wipe-Clean Interior */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Laminated Jute Bag — Wipe-Clean Interior :-
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                The same natural burlap exterior — same texture, same feel, same brand communication — with a smooth PP laminate bonded to the interior surface. The outside is completely unchanged. The inside wipes clean and resists moisture, food residue, and staining from repeated use.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                For food retail, grocery, wine, and any application where the bag will carry products that generate moisture or leave residue — this is the jute bag specification that performs for the long term. A bag that cleans easily is a bag that is used again and again, which is the performance outcome that makes a reusable bag commercially and environmentally worthwhile.
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
                <div><strong>Exterior:</strong> <span style={{ color: '#475569' }}>Natural or dyed burlap — unchanged</span></div>
                <div><strong>Interior:</strong> <span style={{ color: '#475569' }}>PP laminate — smooth, wipeable, food-safe</span></div>
                <div><strong>Handles:</strong> <span style={{ color: '#475569' }}>Natural jute cord · Padded cotton tape</span></div>
                <div><strong>Print:</strong> <span style={{ color: '#475569' }}>Up to 4 colours on exterior</span></div>
                <div><strong>Colour Options:</strong> <span style={{ color: '#475569' }}>Natural and dyed colour range available</span></div>
                <div><strong>Custom Sizes:</strong> <span style={{ color: '#475569' }}>Yes</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Grocery, food retail, bakeries, wine retail, hospitality gifting, any application where hygiene and reusability must coexist</span>
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
            Ready to Order Custom Jute &amp; Burlap Bags?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Direct container export from Indian jute mills with custom brand printing, dyed fabric options, and bespoke handle styles.
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