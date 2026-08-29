import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowRight
} from 'lucide-react';

import asset_horticultural__landscaping_png_1 from '../assets/images/official/horticultural__landscaping.png?url';

export default function ProductHorticulturalLandscapingProducts() {
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
                  src={asset_horticultural__landscaping_png_1}
                  alt="Horticultural & Landscaping"
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

            {/* Right: Title & Top Intro Overview */}
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
                  Horticultural &amp; Landscaping
                </h1>

                <div style={{ color: '#475569', fontSize: '15.5px', lineHeight: '1.75', marginBottom: '24px' }}>
                  <p style={{ margin: 0 }}>
                    Topsoil is one of the most valuable and most vulnerable resources in any landscaping, horticulture, or civil engineering project. On slopes, embankments, newly planted areas, and disturbed ground, unprotected topsoil erodes in the first heavy rain event — sometimes before the first plant has established. What takes decades to form washes away in an afternoon.
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
            {/* 1. Jute Soil Saver */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Jute Soil Saver
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Topsoil is one of the most valuable and most vulnerable resources in any landscaping, horticulture, or civil engineering project. On slopes, embankments, newly planted areas, and disturbed ground, unprotected topsoil erodes in the first heavy rain event — sometimes before the first plant has established. What takes decades to form washes away in an afternoon.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                The jute soil saver is an open-mesh jute fabric mat or roll that is laid directly on the soil surface — over seeds, over new plantings, over exposed embankments — and pegged in place. The mesh holds the topsoil particles in position against the erosive force of rainfall and surface water flow. It allows rain to penetrate to the soil and seeds below. It allows emerging seedlings to grow through the mesh openings without obstruction. And then, as the plants establish and their root systems begin to stabilise the soil naturally, the jute mesh degrades — returning to the soil as organic matter at exactly the point when it is no longer needed.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                The soil saver does not need to be removed. It does not leave synthetic residue. It does not need to be disposed of. It simply disappears on schedule, having done its job.
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
                <div><strong>Mesh Construction:</strong> <span style={{ color: '#475569' }}>Open-weave jute — allows rain penetration and seedling emergence</span></div>
                <div><strong>Biodegradation:</strong> <span style={{ color: '#475569' }}>1–2 growing seasons</span></div>
                <div><strong>Installation:</strong> <span style={{ color: '#475569' }}>Laid on soil surface, pegged at edges and overlaps</span></div>
                <div><strong>Roll Dimensions:</strong> <span style={{ color: '#475569' }}>Custom width and length — standard 1 m × 25 m, 1 m × 50 m, 2 m × 25 m</span></div>
                <div><strong>Custom Sizes:</strong> <span style={{ color: '#475569' }}>Yes</span></div>
                <div><strong>Colours:</strong> <span style={{ color: '#475569' }}>Natural</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Slope stabilisation, embankment protection, erosion control on new plantings, seedbed protection, land rehabilitation, civil engineering ground cover, commercial landscaping</span>
                </div>
              </div>
            </div>

            {/* 2. Jute Trellis Netting */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Jute Trellis Netting
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Jute trellis netting is a large-aperture open-mesh jute net used as a climbing support structure for plants, vegetables, and vines — and as a biodegradable temporary barrier, privacy screen, or training support in garden and horticultural applications.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Unlike synthetic trellis netting that must be removed, cleaned, and disposed of at the end of each growing season, jute trellis netting can be composted or turned into the soil at the end of the season along with the plant material. This reduces the labour of post-season garden cleanup and eliminates the plastic waste that accumulates from repeated use of synthetic netting.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                Jute trellis netting is used by commercial growers, gardeners, and landscapers for supporting climbing beans, peas, cucumbers, tomatoes, and ornamental climbers. It is also used in event and retail environments as a decorative natural backdrop — the open-mesh structure and natural colour provide a versatile visual support for hanging displays, signage, and decorative foliage.
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
                <div><strong>Aperture Size:</strong> <span style={{ color: '#475569' }}>Large open mesh — sized for plant climbing and support</span></div>
                <div><strong>Biodegradation:</strong> <span style={{ color: '#475569' }}>Seasonal — compostable with plant waste</span></div>
                <div><strong>Roll Dimensions:</strong> <span style={{ color: '#475569' }}>Custom width and length</span></div>
                <div><strong>Custom Sizes:</strong> <span style={{ color: '#475569' }}>Yes</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Climbing vegetables and vines, garden trellising, ornamental climbers, commercial growing operations, post-season composting applications, decorative event and retail displays</span>
                </div>
              </div>
            </div>

            {/* 3. Jute Tree Wrap */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Jute Tree Wrap
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                A newly planted or transplanted tree is vulnerable to three specific threats in its first growing season: sunscald from direct winter sun on thin bark, frost cracking from rapid temperature changes between day and night, and mechanical damage from machinery, lawnmowers, animals, and rough handling during establishment.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Jute tree wrap addresses all three. A strip of burlap fabric wound spirally around the trunk from the base upward insulates the bark against temperature fluctuation, shades it from direct winter sunlight, and provides a physical buffer against minor mechanical contact.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Unlike synthetic tree wraps that must be removed in spring to prevent girdling and bark damage, jute tree wrap degrades naturally through the growing season — it can be left on the tree as it loosens and falls away without causing the constriction damage that synthetic wraps cause if forgotten.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                Jute tree wrap is standard practice in commercial tree planting, arboriculture, golf course and estate landscaping, and municipal planting programmes where post-installation maintenance access is limited.
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
                <div><strong>Application:</strong> <span style={{ color: '#475569' }}>Wound spirally around trunk base-upward</span></div>
                <div><strong>Protection:</strong> <span style={{ color: '#475569' }}>Sunscald · Frost cracking · Minor mechanical damage</span></div>
                <div><strong>Biodegradation:</strong> <span style={{ color: '#475569' }}>Seasonal — does not need removal in spring</span></div>
                <div><strong>Width:</strong> <span style={{ color: '#475569' }}>10 cm standard — custom widths available</span></div>
                <div><strong>Roll Length:</strong> <span style={{ color: '#475569' }}>25 m, 50 m — custom on request</span></div>
                <div><strong>Custom Sizes:</strong> <span style={{ color: '#475569' }}>Yes</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Commercial tree planting, arboriculture, estate and golf course landscaping, municipal planting programmes, transplant establishment, winter protection</span>
                </div>
              </div>
            </div>

            {/* 4. Jute Planter Bag */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Jute Planter Bag
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                The jute planter bag brings together the structural function of a growing container and the biodegradable property of jute in a single product. Plants grown in jute planter bags can be transplanted directly into the ground — bag and all — without removing the root ball. The jute degrades in the soil over the first growing season, allowing roots to penetrate naturally through and beyond the bag walls as the plant establishes.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                This eliminates the root disturbance, transplant shock, and handling damage that occurs when plants are removed from rigid containers before planting. For large-scale planting programmes — roadside tree planting, commercial nursery operations, reforestation, and estate landscaping — the ability to plant without de-potting significantly reduces installation time and improves establishment survival rates.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                Jute planter bags are available in a range of sizes from small propagation tubes to large tree-planting bags, in natural burlap fabric, with and without base reinforcement.
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
                <div><strong>Construction:</strong> <span style={{ color: '#475569' }}>Burlap fabric, sewn base, open top</span></div>
                <div><strong>Transplant Method:</strong> <span style={{ color: '#475569' }}>Plant directly in ground — bag degrades in soil</span></div>
                <div><strong>Biodegradation:</strong> <span style={{ color: '#475569' }}>1–2 growing seasons in soil</span></div>
                <div><strong>Sizes:</strong> <span style={{ color: '#475569' }}>From 10 cm diameter propagation bags to 50 cm diameter large planter bags</span></div>
                <div><strong>Custom Sizes:</strong> <span style={{ color: '#475569' }}>Yes</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Commercial nurseries, tree planting programmes, reforestation, estate landscaping, roadside planting, propagation and establishment applications</span>
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
            Ready to Source Horticultural Jute Products?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Direct container shipments for municipal tenders, forestry projects, and commercial nursery chains.
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