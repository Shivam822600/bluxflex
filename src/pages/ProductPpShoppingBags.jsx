import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowRight
} from 'lucide-react';

import asset_PP_shopping_bag_jpg_1 from '../assets/images/official/PP-shopping-bag.jpg?url';

export default function ProductPpShoppingBags() {
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
                  src={asset_PP_shopping_bag_jpg_1}
                  alt="PP Shopping Bags"
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
                  PP Shopping Bags
                </h1>
                <div style={{
                  color: '#8DC63F',
                  fontWeight: '700',
                  fontSize: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '18px'
                }}>
                  The Bag That Works As Hard As Your Business
                </div>

                <div style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '20px' }}>
                  <p style={{ marginBottom: '12px' }}>
                    Ask any retailer what they want from a shopping bag and the answer is always the same something strong, something affordable, and something that keeps coming back. That is exactly what our PP Shopping Bags deliver, every single time.
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    Made from woven polypropylene, these bags are built to handle the weight of real shopping not just a couple of light items, but full grocery runs, heavy purchases, and daily use without giving way. They do not absorb water, they do not tear easily, and they hold their shape no matter how roughly they are handled. For a retailer, that kind of reliability is priceless.
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    What makes PP Shopping Bags truly stand out in the retail space is how well they work as a branding tool. The smooth woven surface takes high-quality, full-colour printing beautifully your logo, your colours, your message, printed sharp and vivid, staying that way through hundreds of uses. Every time a customer reuses the bag, they are carrying your brand around with them. That is marketing you do not have to pay for twice.
                  </p>
                  <p style={{ margin: 0 }}>
                    They are lightweight to carry, easy to store flat in bulk, and fully recyclable which increasingly matters to customers and governments alike as plastic bans expand across global markets. Available in a wide range of sizes, finishes including laminated or non-laminated, and fully customisable for bulk export orders.
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
                  <strong>Ideal For:</strong> <span style={{ color: '#475569' }}>Supermarkets, grocery stores, fashion retail, pharmacies, promotional giveaways, trade events, and branded retail chains.</span>
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
            Ready to Order Custom PP Shopping Bags?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Direct container shipping with full photographic cylinder proofing and custom handle matching.
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
