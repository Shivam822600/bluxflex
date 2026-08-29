import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowRight
} from 'lucide-react';

import asset_bulk11_png_1 from '../assets/images/official/bulk11.png?url';

export default function ProductRetailShoppingBagB() {
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
                  src={asset_bulk11_png_1}
                  alt="White Bleached Flat Handle"
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
                  White Bleached Flat Handle
                </h1>
                <div style={{
                  color: '#8DC63F',
                  fontWeight: '700',
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '18px'
                }}>
                  Clean, Confident, and Unmistakably Premium
                </div>

                <div style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '20px' }}>
                  <p style={{ marginBottom: '12px' }}>
                    First impressions in retail happen the moment a customer takes a bag from across the counter. The White Bleached Flat Handle Bag understands that moment completely.
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    Bleached to a clean, bright white, this bag offers a completely different canvas compared to natural kraft. The whiteness makes colours pop, fine print sharp, and branded artwork come alive in a way that brown paper simply cannot match. It is the first choice of fashion retailers, cosmetic brands, jewellery stores, and anyone whose packaging needs to feel as premium as the product inside.
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    The flat handle is a design detail that matters more than it gets credit for. It sits neatly at the top of the bag without bulk, makes carrying comfortable, and keeps the overall look sleek and uncluttered. No twisting, no rope just a clean line that suits the minimalist aesthetic so many modern brands are chasing.
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    These bags are made from high-grade bleached kraft paper, giving them excellent strength for their weight. They stand flat on the bottom, load easily, and stack neatly which makes them a practical choice for busy retail environments as much as an aesthetic one. Fully recyclable and biodegradable, they also give brands an easy, honest answer when customers ask about sustainability.
                  </p>
                  <p style={{ margin: 0 }}>
                    Available in multiple sizes with options for gloss or matte lamination, hot foil stamping, and full-colour custom printing. A quiet, confident bag for brands that let their quality speak.
                  </p>
                </div>

                <div style={{
                  background: '#F0F7E4',
                  borderRadius: '10px',
                  padding: '14px 18px',
                  border: '1px solid rgba(141,198,63,0.3)',
                  fontSize: '14px',
                  color: '#142E3D',
                  lineHeight: 1.6,
                  marginBottom: '20px'
                }}>
                  <strong>Ideal For:</strong> <span style={{ color: '#475569' }}>Fashion boutiques, cosmetics and skincare brands, jewellery stores, gift packaging, luxury retail, department stores, and lifestyle brands.</span>
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

      {/* ── 2. Bottom RFQ Callout ── */}
      <section style={{ background: '#142E3D', color: '#FFFFFF', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: '800', marginBottom: '10px' }}>
            Ready to Order White Bleached Luxury Bags?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Elevate your retail customer unboxing experience with factory-direct luxury packaging from India.
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