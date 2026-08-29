import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowRight
} from 'lucide-react';

import asset_2eb7cfac_a931_4772_9c11_d52f91da846e_1024x1024_png_1 from '../assets/images/official/2eb7cfac-a931-4772-9c11-d52f91da846e.png?url';

export default function ProductTopFinishes() {
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
                  src={asset_2eb7cfac_a931_4772_9c11_d52f91da846e_1024x1024_png_1}
                  alt="Top Finishes"
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
                  Top Finishes
                </h1>

                <div style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                  <p style={{ margin: 0 }}>
                    The top finish determines how the bag behaves at the filling station, how it closes after filling, and how it presents at point of sale or delivery. A mismatched top finish creates problems at every stage downstream — loose threads in food products, inconsistent bag mouth width at automated filling stations, or a raw edge that frays before the bag reaches the customer.
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

      {/* ── 2. The 4 Exact Specifications ── */}
      <section style={{ padding: '40px 0 56px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}>
            {/* 1. Top Hemmed */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Top Hemmed
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                The top edge of the bag is folded over and sewn with a hem stitch, creating a clean, reinforced edge with no raw fabric exposed. Hemming prevents fraying during handling and filling, maintains a consistent bag mouth width at the filling station, and produces a neat finished appearance suitable for food-grade and retail applications. The standard top finish for open-mouth woven PP bags across food, feed, and agricultural applications.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#142E3D', background: '#FFFFFF', padding: '12px 16px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                <div><strong>Construction:</strong> Top edge folded and sewn</div>
                <div><strong>Benefit:</strong> Fray-resistant, consistent bag mouth width, clean appearance</div>
                <div><strong>Best For:</strong> Food, feed, agricultural sacks — the default open-mouth specification</div>
              </div>
            </div>

            {/* 2. Top Heat Cut */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Top Heat Cut
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                A heated blade seals the polypropylene tapes as it cuts the top edge, fusing the tape ends together and preventing fraying without any folded hem or stitching. Faster to produce than hemming. Functional rather than refined — a sealed edge that works without visual polish.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#142E3D', background: '#FFFFFF', padding: '12px 16px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                <div><strong>Construction:</strong> Heated blade seals and cuts simultaneously</div>
                <div><strong>Benefit:</strong> Fast, sealed edge, no stitching</div>
                <div><strong>Best For:</strong> Industrial and construction bags, cost-sensitive applications where edge appearance is not a commercial factor</div>
              </div>
            </div>

            {/* 3. Top Zigzag Cut (Serrated Cut) */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Top Zigzag Cut (Serrated Cut)
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                A serrated blade produces a decorative, uniform sawtooth edge at the bag opening — a finishing detail used on retail and display bags where the top edge appearance is part of the bag’s overall visual design. No additional stitching required.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#142E3D', background: '#FFFFFF', padding: '12px 16px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                <div><strong>Construction:</strong> Serrated blade cut</div>
                <div><strong>Benefit:</strong> Decorative edge, no additional finish required</div>
                <div><strong>Best For:</strong> Retail display bags, garden and horticultural products, consumer-facing bags where top edge appearance contributes to shelf appeal</div>
              </div>
            </div>

            {/* 4. Ultrasonic Hemming */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid #E2E8F0'
            }}>
              <h2 style={{ fontSize: '20px', color: '#142E3D', fontWeight: '800', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Ultrasonic Hemming
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '10px' }}>
                High-frequency ultrasonic vibration welds the folded top edge of the bag without thread or adhesive. The vibration generates localised heat at the fold, fusing the polypropylene layers into a permanent bond — as strong as a stitched hem with a completely thread-free finish.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '14px' }}>
                In food and pharmaceutical applications, loose threads are a contamination risk and a compliance issue. Ultrasonic hemming eliminates that risk entirely. In premium retail applications, the thread free finish reads as a quality marker that differentiates the bag from stitched competitors at the same price point.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#142E3D', background: '#FFFFFF', padding: '12px 16px', borderRadius: '8px', border: '1px solid #EDF2F7' }}>
                <div><strong>Construction:</strong> Ultrasonic weld of folded top edge — no thread</div>
                <div><strong>Benefit:</strong> Thread-free, contamination-free, clean premium finish</div>
                <div><strong>Best For:</strong> Food-grade sacks, pharmaceutical powder bags, premium retail bags where thread-free closure is a quality or compliance requirement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Bottom RFQ Callout ── */}
      <section style={{ background: '#142E3D', color: '#FFFFFF', padding: '40px 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 style={{ fontSize: '24px', color: '#FFFFFF', fontWeight: '800', marginBottom: '10px' }}>
            Ready to Configure Your PP Woven Sacks?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Contact BulkFlex for factory-direct quotes with custom top finishes and bag dimensions tailored to your bagging machinery.
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