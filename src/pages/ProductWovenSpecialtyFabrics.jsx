import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import {
  ArrowRight
} from 'lucide-react';

import asset_specialty_fabrics_png_1 from '../assets/images/official/specialty_fabrics.png?url';

export default function ProductWovenSpecialtyFabrics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* ── 1. Top Section (Image + Title + HDPE Overview) ── */}
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
                  src={asset_specialty_fabrics_png_1}
                  alt="Woven Specialty Fabrics"
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

            {/* Right: Overview & HDPE Woven Fabric */}
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
                <h1 style={{ fontSize: '34px', color: '#142E3D', fontWeight: '800', fontFamily: 'var(--font-heading)', margin: '0 0 8px 0', lineHeight: 1.2 }}>
                  Woven Specialty Fabrics
                </h1>
                <div style={{
                  color: '#8DC63F',
                  fontWeight: '700',
                  fontSize: '16px',
                  marginBottom: '16px'
                }}>
                  HDPE Woven Fabric
                </div>

                <div style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '20px' }}>
                  <p style={{ marginBottom: '12px' }}>
                    High-density polyethylene woven fabric is produced from HDPE flat tapes on weaving looms, delivering a fabric with higher UV resistance, greater dimensional stability at elevated temperatures, and better chemical resistance than standard polypropylene woven fabric of equivalent construction.
                  </p>
                  <p style={{ marginBottom: '12px' }}>
                    HDPE tape woven fabric retains its structural integrity under prolonged UV exposure without the brittleness and strength degradation that affects PP tape at the same UV load — which is why HDPE is the material of choice for outdoor applications with multi-year exposure requirements. It also resists a wider range of chemical environments than PP, making it the correct specification for fabrics used in contact with fertilisers, pesticides, soil amendments, and construction chemicals.
                  </p>
                  <p style={{ margin: 0 }}>
                    HDPE woven fabric is supplied in rolls in a range of weights, widths, and weave densities. It is the base material for shade nets, ground covers, and silt fence applications where extended outdoor performance is the primary specification requirement. It is also supplied as a base fabric for coating, lamination, and conversion into finished technical products.
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

      {/* ── 2. All 7 Detailed Sections (Exact Verbatim from BulkFlex) ── */}
      <section style={{ padding: '24px 0 56px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '28px'
          }}>
            {/* HDPE Spec Pill */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '24px 28px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h3 style={{ fontSize: '18px', color: '#142E3D', fontWeight: '800', marginBottom: '14px' }}>
                HDPE Woven Fabric Specifications
              </h3>
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
                <div><strong>Material:</strong> <span style={{ color: '#475569' }}>High-density polyethylene (HDPE) flat tape</span></div>
                <div><strong>Weight:</strong> <span style={{ color: '#475569' }}>50 GSM – 200 GSM</span></div>
                <div><strong>UV Resistance:</strong> <span style={{ color: '#475569' }}>Inherently superior to PP — UV additives for 5-year, 8-year, 10-year rated service life</span></div>
                <div><strong>Chemical Resistance:</strong> <span style={{ color: '#475569' }}>Resistant to fertilisers, pesticides, dilute acids and alkalis</span></div>
                <div><strong>Colours:</strong> <span style={{ color: '#475569' }}>Black · Green · White · Natural · Custom</span></div>
                <div><strong>Roll Width:</strong> <span style={{ color: '#475569' }}>Custom — up to 6 m</span></div>
                <div><strong>Roll Length:</strong> <span style={{ color: '#475569' }}>Custom</span></div>
                <div><strong>Custom Sizes:</strong> <span style={{ color: '#475569' }}>Yes</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Outdoor technical applications requiring extended UV performance, chemical contact environments, shade net base fabric, silt fence base fabric, ground cover applications with 7-year+ service life requirements, coated and laminated technical fabric substrates</span>
                </div>
              </div>
            </div>

            {/* 1. Lumber Cover (Timber Cover Fabric) */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Lumber Cover (Timber Cover Fabric)
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Lumber yards, timber merchants, sawmills, and construction sites share a common problem: wood that gets wet warps, stains, mould-damages, and loses commercial value. Outdoor timber storage without adequate cover is not a storage decision — it is a depreciation decision.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Lumber covers are heavy woven PP or HDPE fabric sheets specifically designed for covering stored timber, lumber, and wood products in outdoor yards. They protect against rain, UV degradation, airborne dirt, and surface staining while allowing sufficient air circulation through the woven fabric structure to prevent the moisture trapping and condensation build-up that causes the mould and blue-stain damage that solid plastic sheeting produces when draped directly over timber.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Unlike standard tarpaulins that seal moisture against the timber surface and actively promote the fungal growth they appear to prevent, woven lumber covers breathe. Moisture vapour escapes. The timber surface dries. The cover keeps direct rain off the top surfaces while the woven openness prevents the microclimate beneath the cover from becoming the warm, humid, poorly ventilated environment that mould requires.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                Lumber covers are produced in standard sheet sizes and custom dimensions to fit specific yard layouts, stack dimensions, and stacking equipment configurations. Eyelets, reinforced edges, and rope hems are available for secure tie-down in exposed yard locations.
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
                <div><strong>Material:</strong> <span style={{ color: '#475569' }}>Woven PP or HDPE — heavy construction</span></div>
                <div><strong>Weight:</strong> <span style={{ color: '#475569' }}>100 GSM – 200 GSM</span></div>
                <div><strong>UV Rating:</strong> <span style={{ color: '#475569' }}>3-year, 5-year — outdoor yard use specification</span></div>
                <div><strong>Breathability:</strong> <span style={{ color: '#475569' }}>Woven construction vapour-permeable, not sealed</span></div>
                <div><strong>Finish Options:</strong> <span style={{ color: '#475569' }}>Eyelets · Reinforced rope hem · Corner patches · Tie-down loops</span></div>
                <div><strong>Colours:</strong> <span style={{ color: '#475569' }}>Green · Blue · Black · Custom</span></div>
                <div><strong>Custom Sizes:</strong> <span style={{ color: '#475569' }}>Yes sheet dimensions to yard and stack specification</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Lumber yards, sawmills, timber merchants, construction site material storage, outdoor wood product covering</span>
                </div>
              </div>
            </div>

            {/* 2. Silt Fence Fabric */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Silt Fence Fabric
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Every construction site, land development, road project, and earthworks operation disturbs soil. Disturbed soil is unstable soil — and rain on an exposed, disturbed slope does not stay on the slope. It runs. It carries soil particles with it into drainage channels, waterways, and adjacent land. In most markets this is not merely an environmental concern it is a regulatory one. Sediment runoff from construction sites is regulated under stormwater management codes, and non-compliance results in stop-work orders, fines, and remediation costs that dwarf the cost of the silt control measures that would have prevented the problem.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Silt fence fabric is woven geotextile fabric installed on timber or steel posts along the downslope boundary of construction sites and disturbed areas. It acts as a permeable filter barrier water passes through the woven fabric while sediment particles are retained behind the fence, settling out of the runoff before it leaves the site boundary.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                The performance of a silt fence depends entirely on the fabric’s filtration efficiency the relationship between the pore size of the woven fabric and the particle size distribution of the site soil. A fabric that is too open allows fine particles to pass through with the water. A fabric that is too tight blocks water flow, causing ponding and fence collapse under hydrostatic pressure. Correct specification requires knowing the D50 soil particle size of the site soil — we advise the correct fabric construction for the application. Silt fence fabric is supplied in rolls in standard installation widths, with or without preattached timber stakes, in geotextile grades confirmed to US EPA, European, and Australian stormwater management specifications.
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
                <div><strong>Material:</strong> <span style={{ color: '#475569' }}>Woven PP or HDPE geotextile</span></div>
                <div><strong>Weight:</strong> <span style={{ color: '#475569' }}>100 GSM – 150 GSM</span></div>
                <div><strong>Pore Size:</strong> <span style={{ color: '#475569' }}>Specified to site soil particle size — D50 matching for correct filtration efficiency</span></div>
                <div><strong>UV Rating:</strong> <span style={{ color: '#475569' }}>6-month, 1-year, 2-year construction site use duration</span></div>
                <div><strong>Roll Width:</strong> <span style={{ color: '#475569' }}>600 mm · 900 mm · 1,200 mm standard — custom available</span></div>
                <div><strong>Roll Length:</strong> <span style={{ color: '#475569' }}>100 m standard — custom on request</span></div>
                <div><strong>Stake Options:</strong> <span style={{ color: '#475569' }}>Without stakes (fabric only) · Pre-assembled with timber stakes</span></div>
                <div><strong>Compliance:</strong> <span style={{ color: '#475569' }}>US EPA sediment control specification · European stormwater management · Australian construction site stormwater requirements</span></div>
                <div><strong>Custom Sizes:</strong> <span style={{ color: '#475569' }}>Yes</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Construction sites, land development, road and infrastructure projects, earthworks, any disturbed-soil environment under stormwater sediment control regulation</span>
                </div>
              </div>
            </div>

            {/* 3. rPET Woven Fabric */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> rPET Woven Fabric (Recycled PET Fabric)
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                The commercial packaging industry generates millions of tonnes of post-consumer PET plastic annually bottles, containers, and film that are collected, cleaned, and processed back into raw fibre. rPET woven fabric is produced from this recovered material, extruded into flat tapes and woven into fabric rolls that perform comparably to virgin PP or HDPE woven fabric for many applications while carrying a verified recycled content that supports buyers’ sustainability commitments, retailer requirements, and increasingly, regulatory obligations.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                For importers and brands operating in markets where EPR (Extended Producer Responsibility) legislation, retailer sustainability scorecards, or ESG reporting requirements create pressure to reduce virgin plastic use in packaging and industrial materials, rPET fabric is a direct, specification-compatible response. The fabric is rPET — the material is woven and dimensionally stable and the recycled content is documented with third-party certification.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                rPET woven fabric is available in rolls for conversion into bags, covers, geotextile applications, and industrial fabric products where the recycled content is a commercial or compliance requirement alongside the fabric’s functional performance.
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
                <div><strong>Material:</strong> <span style={{ color: '#475569' }}>Recycled post-consumer PET — woven flat tape construction</span></div>
                <div><strong>Recycled Content:</strong> <span style={{ color: '#475569' }}>Minimum 70% post-consumer rPET — confirmed per batch</span></div>
                <div><strong>Weight:</strong> <span style={{ color: '#475569' }}>80 GSM – 150 GSM</span></div>
                <div><strong>Certification:</strong> <span style={{ color: '#475569' }}>Third-party recycled content certification available (GRS — Global Recycled Standard)</span></div>
                <div><strong>Colours:</strong> <span style={{ color: '#475569' }}>Natural (grey-tone) · Black · Custom on qualifying volumes</span></div>
                <div><strong>Roll Width:</strong> <span style={{ color: '#475569' }}>Custom</span></div>
                <div><strong>Roll Length:</strong> <span style={{ color: '#475569' }}>Custom</span></div>
                <div><strong>Custom Sizes:</strong> <span style={{ color: '#475569' }}>Yes</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Buyers with EPR obligations, retailer sustainability requirements, or ESG recycled content targets — bags, covers, industrial fabric, geotextile products where recycled content is a commercial or regulatory requirement</span>
                </div>
              </div>
            </div>

            {/* 4. Monofilament Woven Fabric */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Monofilament Woven Fabric
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Standard woven polypropylene fabric is produced from flat extruded tapes — rectangular in cross-section, relatively wide, and producing a fabric with a flat, smooth surface and a tightly closed weave structure. Monofilament woven fabric replaces the flat tape with a round, extruded monofilament yarn — a circular cross-section that produces an entirely different fabric geometry, surface texture, and performance profile.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Because monofilament yarns are round rather than flat, they create a more open, regular mesh structure when woven — the circular yarn cross-sections leave defined, consistent apertures between the yarns that flat tapes pressed together eliminate. This openness gives monofilament woven fabric significantly higher permeability to water, air, and fine particles than flat tape fabric of equivalent weight a performance characteristic that is commercially valuable in drainage, filtration, and agricultural applications where the fabric must allow controlled passage of liquid or air through the structure.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                Monofilament woven fabric is also smoother on both surfaces than flat tape fabric, making it the preferred substrate for applications where direct contact with product or plant material is involved and surface abrasion is a concern.
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
                <div><strong>Material:</strong> <span style={{ color: '#475569' }}>Round monofilament PP or HDPE woven construction</span></div>
                <div><strong>Key Difference from Flat Tape Fabric:</strong> <span style={{ color: '#475569' }}>More open aperture structure · Higher permeability · Smoother surface · More consistent pore geometry</span></div>
                <div><strong>Weight:</strong> <span style={{ color: '#475569' }}>80 GSM – 180 GSM</span></div>
                <div><strong>Permeability:</strong> <span style={{ color: '#475569' }}>Higher than equivalent flat tape fabric specified per application</span></div>
                <div><strong>Colours:</strong> <span style={{ color: '#475569' }}>Black · White · Green · Custom</span></div>
                <div><strong>Roll Width:</strong> <span style={{ color: '#475569' }}>Custom</span></div>
                <div><strong>Roll Length:</strong> <span style={{ color: '#475569' }}>Custom</span></div>
                <div><strong>Custom Sizes:</strong> <span style={{ color: '#475569' }}>Yes</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Drainage fabric, filtration applications, ground cover applications requiring high water permeability, aquaculture fabric, nursery floor covering, applications requiring smooth fabric surface in direct product or plant contact</span>
                </div>
              </div>
            </div>

            {/* 5. PP Carpet Backing Fabric (Primary and Secondary Backing) */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> PP Carpet Backing Fabric (Primary and Secondary Backing)
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Polypropylene woven fabric is the global standard substrate for tufted carpet construction. Every tufted carpet residential, commercial, hospitality, or industrial is built on a woven PP primary backing fabric through which the carpet pile yarns are tufted by the carpet making machine. After tufting, a secondary PP woven backing fabric is laminated to the underside of the carpet with latex or hot-melt adhesive, locking the pile tufts in position and providing the dimensional stability and floor-grip that the finished carpet requires.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Primary backing fabric must be dimensionally stable under the tension and needle penetration forces of the tufting machine a fabric that stretches or distorts during tufting produces a carpet with uneven pile density and an unstable structure. Secondary backing fabric must be stiff enough to provide the carpet with lay-flat stability on the floor and strong enough to hold the pile tufts permanently anchored in the latex bond.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                Both are produced from woven PP flat tape in tightly specified weights, tape widths, and weave densities that are confirmed to the carpet manufacturer’s tufting machine and pile construction requirements. We supply carpet backing fabric to carpet manufacturers and carpet converters on a roll supply basis to specification.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
                <div style={{ background: '#FFFFFF', padding: '14px 18px', borderRadius: '8px', border: '1px solid #EDF2F7', fontSize: '14px', color: '#142E3D' }}>
                  <strong>Primary Backing Material:</strong> <span style={{ color: '#475569' }}>Woven PP flat tape high dimensional stability</span> | <strong>Weight:</strong> <span style={{ color: '#475569' }}>85 GSM – 120 GSM</span> | <strong>Construction:</strong> <span style={{ color: '#475569' }}>Specified to tufting gauge and needle penetration requirement</span> | <strong>Colours:</strong> <span style={{ color: '#475569' }}>Natural (standard) · Custom</span>
                </div>
                <div style={{ background: '#FFFFFF', padding: '14px 18px', borderRadius: '8px', border: '1px solid #EDF2F7', fontSize: '14px', color: '#142E3D' }}>
                  <strong>Secondary Backing Material:</strong> <span style={{ color: '#475569' }}>Woven PP flat tape — stiff, lay-flat construction</span> | <strong>Weight:</strong> <span style={{ color: '#475569' }}>100 GSM – 150 GSM</span> | <strong>Construction:</strong> <span style={{ color: '#475569' }}>Specified to latex or hot-melt lamination requirement</span> | <strong>Colours:</strong> <span style={{ color: '#475569' }}>Natural · Dyed to carpet manufacturer specification</span>
                </div>
              </div>

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
                <div><strong>Roll Width:</strong> <span style={{ color: '#475569' }}>To carpet tufting machine width custom</span></div>
                <div><strong>Roll Length:</strong> <span style={{ color: '#475569' }}>To carpet manufacturer specification custom</span></div>
                <div><strong>Custom Sizes:</strong> <span style={{ color: '#475569' }}>Yes all carpet backing is supplied to the carpet manufacturer’s specific tufting and finishing line parameters</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Tufted carpet manufacturers, carpet converters, residential, commercial and hospitality carpet production</span>
                </div>
              </div>
            </div>

            {/* 6. Heavy-Duty Ground Cover 220 GSM */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Heavy-Duty Ground Cover 220 GSM
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Standard commercial ground cover fabric runs from 50 to 130 GSM and is specified for orchards, nurseries, and landscaping installations where the fabric needs to survive seasonal foot traffic, occasional wheeled equipment, and multi-year UV exposure.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                Then there are the applications that standard commercial ground cover cannot handle high-traffic commercial nurseries where heavy machinery operates between rows, container-growing yards where loaded trolleys and forklifts cross the fabric daily, equestrian facilities where hooves concentrate point loads on the fabric surface, and permanent installations under sports turf and artificial grass systems where the fabric must maintain its integrity under sustained mechanical load for the life of the installation.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '12px' }}>
                For these applications, 220 GSM heavy-duty ground cover is the correct specification. The heavier tape weight, tighter weave density, and increased fabric mass per square metre produce a ground cover that resists puncture, abrasion, and tearing under mechanical load that would degrade standard-weight fabric within months.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                220 GSM heavy-duty ground cover is UV-stabilised to 10-year and 15-year service life ratings matched to the permanent installation programmes where this weight of fabric is specified.
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
                <div><strong>Construction:</strong> <span style={{ color: '#475569' }}>Woven PP heavy flat tape tight weave</span></div>
                <div><strong>Weight:</strong> <span style={{ color: '#475569' }}>220 GSM</span></div>
                <div><strong>UV Rating:</strong> <span style={{ color: '#475569' }}>10-year · 15-year</span></div>
                <div><strong>Colours:</strong> <span style={{ color: '#475569' }}>Black · Black/White reversible</span></div>
                <div><strong>Puncture Resistance:</strong> <span style={{ color: '#475569' }}>High specified for mechanical load applications</span></div>
                <div><strong>Width:</strong> <span style={{ color: '#475569' }}>1 m – 6 m custom</span></div>
                <div><strong>Length:</strong> <span style={{ color: '#475569' }}>Custom rolls</span></div>
                <div><strong>Custom Sizes:</strong> <span style={{ color: '#475569' }}>Yes</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Commercial container nurseries, high-traffic growing yards, equestrian facilities, permanent artificial grass and sports turf base layers, heavy vehicle crossing applications, permanent landscaping installations requiring 10-year+ fabric life under mechanical load</span>
                </div>
              </div>
            </div>

            {/* 7. Mulch Film */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '28px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 2px 10px rgba(20,46,61,0.03)'
            }}>
              <h2 style={{ fontSize: '22px', color: '#142E3D', fontWeight: '800', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#8DC63F' }}>➤</span> Mulch Film
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.75', marginBottom: '18px' }}>
                Mulch film is laid on the soil surface around and between crop rows to suppress weeds, conserve soil moisture, regulate soil temperature, and improve the growing environment for the crop above. It is one of the most widely used crop production inputs in commercial vegetable, fruit, and specialty crop production globally — and the specification choices within mulch film directly determine which performance benefits the grower captures.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
                <div style={{ background: '#FFFFFF', padding: '14px 18px', borderRadius: '8px', border: '1px solid #EDF2F7', fontSize: '14px', color: '#475569', lineHeight: 1.7 }}>
                  <strong style={{ color: '#142E3D' }}>Black Mulch Film:</strong> The standard specification. Black PP or PE film blocks all light to the soil surface, providing complete weed suppression. Absorbs solar radiation and warms the soil beneficial in cool climates and early-season production where faster soil warm-up accelerates germination and early growth. Retains soil moisture by eliminating evaporation from the soil surface between irrigations.
                </div>
                <div style={{ background: '#FFFFFF', padding: '14px 18px', borderRadius: '8px', border: '1px solid #EDF2F7', fontSize: '14px', color: '#475569', lineHeight: 1.7 }}>
                  <strong style={{ color: '#142E3D' }}>Silver / Reflective Mulch Film:</strong> Silver or reflective mulch film reflects solar radiation upward from the soil surface into the crop canopy below — increasing light interception by leaves on the underside of the canopy and improving photosynthesis efficiency through the plant. The reflective surface also confuses and deters aphids and whitefly, which navigate to plants using the contrast between blue sky above and dark ground below. Remove that contrast by replacing the dark ground with a reflective surface, and the pest’s host-finding behaviour is disrupted. Reflective mulch film is widely used in pepper, tomato, cucumber, and melon production.
                </div>
                <div style={{ background: '#FFFFFF', padding: '14px 18px', borderRadius: '8px', border: '1px solid #EDF2F7', fontSize: '14px', color: '#475569', lineHeight: 1.7 }}>
                  <strong style={{ color: '#142E3D' }}>White / Black Mulch Film (Dual-Purpose):</strong> White outer surface reflects heat and light used in high-temperature climates where black film’s heat absorption would overheat the root zone. Black underside maintains complete light exclusion for weed suppression. The combination delivers weed control without the soil heating that limits black film in hotclimate production.
                </div>
                <div style={{ background: '#FFFFFF', padding: '14px 18px', borderRadius: '8px', border: '1px solid #EDF2F7', fontSize: '14px', color: '#475569', lineHeight: 1.7 }}>
                  <strong style={{ color: '#142E3D' }}>Biodegradable Mulch Film:</strong> For operations where end-of-season plastic collection and disposal is a cost, a logistics challenge, or a regulatory issue — biodegradable mulch film is produced from starch-based biopolymers that degrade in the soil within the growing season or immediately after. The film is tilled into the soil at season end and degrades to CO₂, water, and biomass without requiring physical removal.
                </div>
              </div>

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
                <div><strong>Material:</strong> <span style={{ color: '#475569' }}>PP or PE film (standard) · Biopolymer (biodegradable grade)</span></div>
                <div><strong>Thickness:</strong> <span style={{ color: '#475569' }}>15 – 50 micron depending on application and season length</span></div>
                <div><strong>Colours/Types:</strong> <span style={{ color: '#475569' }}>Black · Silver/Reflective · White/Black · Clear · Biodegradable</span></div>
                <div><strong>Width:</strong> <span style={{ color: '#475569' }}>Custom to bed width and planting row spacing</span></div>
                <div><strong>Length:</strong> <span style={{ color: '#475569' }}>Custom rolls</span></div>
                <div><strong>Perforation:</strong> <span style={{ color: '#475569' }}>Pre-perforated planting hole patterns available</span></div>
                <div><strong>Custom Sizes:</strong> <span style={{ color: '#475569' }}>Yes</span></div>
                <div style={{ width: '100%' }}>
                  <strong>Best For:</strong> <span style={{ color: '#475569' }}>Black general vegetable and fruit production, cool-climate early-season · Silver — peppers, tomatoes, cucumbers, melons, aphid and whitefly management · White/Black high-temperature climates, heat-sensitive crops · Biodegradable organic production, markets with plastic collection regulations</span>
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
            Ready to Order Specialty Technical Fabrics?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '20px' }}>
            Direct container rolls supplied to exact tensile, UV, and pore size requirements from India.
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