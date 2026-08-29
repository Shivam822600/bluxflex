import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowRight
} from 'lucide-react';

import asset_with_liners_png_1 from '../assets/images/official/with-liners.png?url';

export default function ProductLinerOptions() {
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
                  src={asset_with_liners_png_1}
                  alt="Liner Options"
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
                  Liner Options
                </h1>

                <div style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                  <p style={{ marginBottom: '12px' }}>
                    A liner turns a woven PP bag into a moisture barrier, a gas barrier, and a contamination barrier. Standard woven PP fabric is porous — fine powders sift through the weave, moisture vapour migrates in, and ambient humidity can cause caking or spoilage in hygroscopic products. A polyethylene (PE) liner inserted inside the woven bag solves all three.
                  </p>
                  <p style={{ margin: 0 }}>
                    The liner specification must match both the product and the filling and discharge process. An incorrectly specified liner can tear during filling, billow during discharge, or fail to provide the required barrier performance.
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

      {/* ── 2. The 4 Liner Options ── */}
      <section style={{ padding: '40px 0 56px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {/* 1. No Liner */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> No Liner
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                The baseline specification. Plain woven PP fabric allows airflow and gas exchange — suitable for coarse, non-hygroscopic products that do not require moisture protection and benefit from breathability.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#142E3D', background: '#FFFFFF', padding: '12px 16px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                <div><strong>Best For:</strong> Coarse grains, potatoes, onions, animal feed pellets, minerals, sand, aggregates — any product where moisture sensitivity is low and breathability is advantageous</div>
              </div>
            </div>

            {/* 2. Loosely Inserted PE Liner */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Loosely Inserted PE Liner
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                A polyethylene bag is placed inside the woven PP outer bag without being stitched or bonded to it. The liner is closed independently at the filling station — typically heat-sealed or tied — before the outer bag is sewn closed. Provides a complete moisture and sift barrier at the lowest additional cost.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#142E3D', background: '#FFFFFF', padding: '12px 16px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                <div><strong>Construction:</strong> Independent PE bag inside woven PP outer</div>
                <div><strong>Closure:</strong> Heat seal or tie liner, sew outer bag</div>
                <div><strong>Thickness:</strong> 20–80 micron standard — specified to product and barrier requirement</div>
                <div><strong>Best For:</strong> Sugar, salt, flour, chemical powders, milk powder, hygroscopic food and feed ingredients</div>
              </div>
            </div>

            {/* 3. Liner Stitched at Top */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Liner Stitched at Top
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                The PE liner is caught in the top hem stitching of the woven bag during manufacturing, holding the liner in position at the bag mouth. The liner cannot slip downward inside the bag during handling, and the open mouth presents a clean, aligned opening at automated filling stations.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#142E3D', background: '#FFFFFF', padding: '12px 16px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                <div><strong>Construction:</strong> PE liner sewn into top hem of outer bag</div>
                <div><strong>Advantage:</strong> Liner stays in position at mouth, easy automated filling</div>
                <div><strong>Best For:</strong> Automated open-mouth bag filling lines, fertiliser, chemical granules, animal feed with fine ingredient components</div>
              </div>
            </div>

            {/* 4. Liner Stitched at Top & Bottom */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Liner Stitched at Top &amp; Bottom
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '10px' }}>
                The liner is anchored to the outer woven bag at both the top hem and the bottom seam. This completely immobilises the liner inside the bag — it cannot shift, bunch, or separate from the outer fabric during filling, transit, or emptying.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                On automated filling lines running at speed, a loose liner can billow, catch on filling nozzles, or collapse downward into the bag under the initial product drop. A liner stitched top and bottom eliminates all liner movement at the filling station.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#142E3D', background: '#FFFFFF', padding: '12px 16px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                <div><strong>Construction:</strong> PE liner anchored in top hem and bottom seam</div>
                <div><strong>Advantage:</strong> Complete liner immobilisation, zero displacement under high-speed filling or rapid discharge</div>
                <div><strong>Best For:</strong> High-speed automated bagging lines, fine and hazardous chemical powders, products requiring complete containment through high-velocity filling</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Bottom RFQ Callout ── */}
      <section style={{ background: '#142E3D', color: '#FFFFFF', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: '800', marginBottom: '10px' }}>
            Ready to Configure Liner Protection for Your Sacks?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Direct container export with exact liner thickness, food-grade certifications, and anti-static additives.
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