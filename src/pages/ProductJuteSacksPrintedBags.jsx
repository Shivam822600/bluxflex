import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowRight
} from 'lucide-react';

import asset_jutesacks__printedbags_png_1 from '../assets/images/official/jutesacks__printedbags.png?url';

export default function ProductJuteSacksPrintedBags() {
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
                  src={asset_jutesacks__printedbags_png_1}
                  alt="Jute Sacks & Printed Bags"
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
                  Jute Sacks &amp; Printed Bags
                </h1>

                <div style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                  <p style={{ marginBottom: '12px' }}>
                    The jute sack is the original sustainable commodity packaging format — used for centuries to move coffee, cocoa, rice, groundnuts, spices, and agricultural produce across global trade routes. It is breathable, biodegradable, strong, and naturally resistant to the condensation build-up that causes spoilage in sealed synthetic bags.
                  </p>
                  <p style={{ margin: 0 }}>
                    For food commodities that need to breathe — particularly coffee and cocoa, which continue to off-gas CO₂ after processing and require airflow to prevent flavour degradation — jute sacks are not a nostalgic choice. They are the technically correct packaging specification. The open weave allows gas exchange while the robust jute construction carries 25 kg to 70 kg of product through the handling intensity of commodity supply chains.
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

      {/* ── 2. The 4 Products ── */}
      <section style={{ padding: '40px 0 56px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {/* 1. Standard Jute Sack */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Standard Jute Sack
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                Standard jute sacks are available in natural undyed burlap, in a range of sizes from 25 kg to 70 kg capacity, with sewn or hemmed tops and single or double stitched bases.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#142E3D', background: '#FFFFFF', padding: '12px 16px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                <div><strong>Capacity:</strong> 25 kg – 70 kg</div>
                <div><strong>Construction:</strong> Plain-woven burlap, sewn side seam and base</div>
                <div><strong>Top Options:</strong> Open top · Hemmed · Sewn closed</div>
                <div><strong>Base Construction:</strong> Single stitch · Double stitch</div>
                <div><strong>Custom Sizes:</strong> Yes — width, length, and construction to specification</div>
                <div><strong>Best For:</strong> Coffee, cocoa, rice, groundnuts, spices, dried agricultural commodities, food packaging requiring breathable natural fibre</div>
              </div>
            </div>

            {/* 2. Printed Jute Sack */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Printed Jute Sack
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '10px' }}>
                A printed jute sack carries the brand, the product, the origin story, and the sustainability credentials of the product inside all on the same surface — in a single material that communicates natural provenance before the buyer reads a word.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '10px' }}>
                Printing on jute fabric is performed using screen printing or flexographic printing with water based, food-safe inks. Up to four colours are available. Because jute is a natural, textured surface rather than a smooth synthetic film, print on jute has a characteristic hand-crafted appearance — slightly textured, slightly organic — that has become a premium retail aesthetic in coffee, specialty food, artisan produce, and craft product packaging.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '10px' }}>
                For coffee roasters, specialty food brands, artisan producers, and agricultural commodity exporters who want their packaging to tell the story of their product’s origin and sustainability credentials, printed jute sacks are the format that no synthetic bag can replicate.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                Printed jute sacks are available in custom sizes, in natural or dyed base fabric, with print on one or two sides.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#142E3D', background: '#FFFFFF', padding: '12px 16px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                <div><strong>Print Method:</strong> Screen print or flexographic — water-based, food-safe inks</div>
                <div><strong>Print Colours:</strong> Up to 4</div>
                <div><strong>Print Sides:</strong> 1 or 2</div>
                <div><strong>Base Fabric:</strong> Natural tan or dyed</div>
                <div><strong>Custom Sizes:</strong> Yes</div>
                <div><strong>Minimum Order:</strong> Confirmed at enquiry stage</div>
                <div><strong>Best For:</strong> Specialty coffee, cocoa, artisan food producers, agricultural commodity export, premium branded food packaging, gift and retail packaging</div>
              </div>
            </div>

            {/* 3. Jute Gift Bag and Retail Bag */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Jute Gift Bag and Retail Bag
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '10px' }}>
                Jute retail bags and gift bags are produced from burlap fabric in a range of sizes with handles — flat cotton tape handles, rope handles, or jute cord handles — and finished at the top with a hem, a fold-over closure, or a drawstring.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '10px' }}>
                The jute retail bag is the natural fibre equivalent of the reusable shopping bag — and in markets where single-use plastic bags are prohibited or taxed, jute bags are both a compliant alternative and a brand communication tool. A jute bag with a brand print is carried beyond the point of sale, visible in every environment it travels to.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                Available in natural and dyed burlap, with print in up to four colours. Custom sizes from small gift pouch formats to full grocery bag dimensions.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#142E3D', background: '#FFFFFF', padding: '12px 16px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                <div><strong>Handle Options:</strong> Flat cotton tape · Rope · Jute cord</div>
                <div><strong>Closure Options:</strong> Open top · Hemmed · Fold-over · Drawstring</div>
                <div><strong>Fabric:</strong> Natural or dyed burlap</div>
                <div><strong>Print:</strong> Up to 4 colours, 1 or 2 sides</div>
                <div><strong>Custom Sizes:</strong> Yes — from 15 cm × 20 cm gift pouch to full 40 cm × 45 cm grocery bag</div>
                <div><strong>Best For:</strong> Retail branded bags, promotional and event bags, gift packaging, food retail, plastic bag replacement, premium packaging for artisan and specialty products</div>
              </div>
            </div>

            {/* 4. Scallop Cotton Bag */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Scallop Cotton Bag
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '10px' }}>
                The scallop cotton bag is a woven cotton bag with a scalloped — decorative wavy — top edge, produced in natural cotton or dyed cotton fabric with a drawstring or open-top closure. The scallop edge is a finishing detail that gives the bag a craft, artisan aesthetic that positions the product inside as handmade, natural, and premium.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '10px' }}>
                Scallop cotton bags are used by specialty food producers, gift packagers, and artisan brands for retail packaging of dried herbs, teas, coffee, spices, confectionery, and small gifts where the packaging is expected to contribute as much to the product experience as the product itself.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                Available in natural cotton, bleached white, or dyed colours. Custom sizes. Print in up to four colours on one or two sides.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#142E3D', background: '#FFFFFF', padding: '12px 16px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                <div><strong>Top Finish:</strong> Scalloped edge — decorative wavy cut</div>
                <div><strong>Closure:</strong> Drawstring or open top</div>
                <div><strong>Fabric:</strong> Natural cotton · Bleached white · Dyed colours</div>
                <div><strong>Print:</strong> Up to 4 colours</div>
                <div><strong>Custom Sizes:</strong> Yes</div>
                <div><strong>Best For:</strong> Specialty food retail, dried herbs and teas, artisan gifts, coffee and spice packaging, premium produce retail, promotional gift bags</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Bottom RFQ Callout ── */}
      <section style={{ background: '#142E3D', color: '#FFFFFF', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: '800', marginBottom: '10px' }}>
            Ready to Order Jute Sacks or Custom Bags?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Factory-direct container shipping from certified Indian mills. Full custom printing and export packaging options.
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