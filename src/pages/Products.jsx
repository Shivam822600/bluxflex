import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { ArrowRight, Package, ShieldCheck, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import asset_9e742bd7_c239_40c0_b23a_4dc7325f456d_300x300_png_1 from '../assets/images/9e742bd7-c239-40c0-b23a-4dc7325f456d-300x300.png?url';
import asset_9e742bd7_c239_40c0_b23a_4dc7325f456d_1024x1024_png_2 from '../assets/images/9e742bd7-c239-40c0-b23a-4dc7325f456d-1024x1024.png?url';
import asset_9e742bd7_c239_40c0_b23a_4dc7325f456d_150x150_png_3 from '../assets/images/9e742bd7-c239-40c0-b23a-4dc7325f456d.png?url';
import asset_8f21b94e_0d1a_4770_bf8a_3399ef293774_md_300x300_jpg_4 from '../assets/images/8f21b94e-0d1a-4770-bf8a-3399ef293774-md-300x300.jpg?url';
import asset_8f21b94e_0d1a_4770_bf8a_3399ef293774_md_300x300_jpeg_5 from '../assets/images/8f21b94e-0d1a-4770-bf8a-3399ef293774-md.jpeg?url';
import asset_printed_pp_woven_sack_upto_six_colors_297x300_png_6 from '../assets/images/printed-pp-woven-sack-upto-six-colors-297x300.png?url';
import asset_printed_pp_woven_sack_upto_six_colors_768x776_png_7 from '../assets/images/printed-pp-woven-sack-upto-six-colors.png?url';
import asset_fd6ea04a_aca5_4e3d_b574_738ee945af82_md_300x300_jpg_8 from '../assets/images/fd6ea04a-aca5-4e3d-b574-738ee945af82-md-300x300.jpg?url';
import asset_fd6ea04a_aca5_4e3d_b574_738ee945af82_md_300x300_jpeg_9 from '../assets/images/fd6ea04a-aca5-4e3d-b574-738ee945af82-md.jpeg?url';

export default function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTitle = "Products";
  const assets = [asset_9e742bd7_c239_40c0_b23a_4dc7325f456d_300x300_png_1, asset_9e742bd7_c239_40c0_b23a_4dc7325f456d_1024x1024_png_2, asset_9e742bd7_c239_40c0_b23a_4dc7325f456d_150x150_png_3, asset_8f21b94e_0d1a_4770_bf8a_3399ef293774_md_300x300_jpg_4, asset_8f21b94e_0d1a_4770_bf8a_3399ef293774_md_300x300_jpeg_5, asset_printed_pp_woven_sack_upto_six_colors_297x300_png_6, asset_printed_pp_woven_sack_upto_six_colors_768x776_png_7, asset_fd6ea04a_aca5_4e3d_b574_738ee945af82_md_300x300_jpg_8, asset_fd6ea04a_aca5_4e3d_b574_738ee945af82_md_300x300_jpeg_9].filter(Boolean);

  return (
    <Layout>
      {/* Banner */}
      <section style={{ background: '#072834', color: '#FFFFFF', padding: '48px 0' }}>
        <div className="container">
          <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#00C2A8', fontSize: '13px', fontWeight: '600', marginBottom: '12px' }}>
            <ChevronLeft size={16} /> Back to Products
          </Link>
          <h1 style={{ fontSize: '36px', color: '#FFFFFF', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
            {pageTitle}
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '14px', marginTop: '6px' }}>
            ISO 9001:2015 & BRC Certified Industrial Packaging Specifications
          </p>
        </div>
      </section>

      {/* Main Details */}
      <section style={{ padding: '64px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: assets.length > 0 ? '1fr 1.2fr' : '1fr', gap: '40px', alignItems: 'start' }}>
            
            {/* Left Image Showcase */}
            {assets.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="card-clean" style={{ padding: '24px', textAlign: 'center', background: '#FFFFFF' }}>
                  <img src={assets[0]} alt={pageTitle} style={{ maxHeight: '280px', objectFit: 'contain', margin: '0 auto' }} />
                </div>
                {assets.length > 1 && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '12px' }}>
                    {assets.slice(1, 5).map((img, idx) => (
                      <div key={idx} className="card-clean" style={{ padding: '12px', textAlign: 'center' }}>
                        <img src={img} alt="" style={{ maxHeight: '80px', objectFit: 'contain' }} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Right Product Details & Quote Request */}
            <div className="card-clean" style={{ padding: '36px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#E8F7F5', color: '#00C2A8', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: '700', marginBottom: '16px' }}>
                <ShieldCheck size={14} /> Quality Tested & Certified
              </div>

              <h2 style={{ fontSize: '26px', color: '#072834', marginBottom: '12px' }}>{pageTitle}</h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.65', marginBottom: '24px' }}>
                Engineered for maximum load stability, moisture protection, and heavy-duty industrial handling. Custom dimensions, GSM fabrics, UV stabilization, and liner configurations are available upon request.
              </p>

              <div style={{ background: '#F8FAFC', padding: '20px', borderRadius: '12px', marginBottom: '28px', border: '1px solid #E2E8F0' }}>
                <h4 style={{ fontSize: '15px', color: '#072834', marginBottom: '10px' }}>Technical Highlights:</h4>
                <ul style={{ paddingLeft: '20px', color: '#475569', fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li>Custom Safe Working Load (SWL): 500 kg – 2,500 kg</li>
                  <li>Safety Factor (SF): 5:1 Single-Trip / 6:1 Multi-Trip (UN Goods Approved)</li>
                  <li>Material Construction: Virgin High-Tenacity Polypropylene / PE / Jute</li>
                  <li>Custom Print: Flexographic printing up to 6 colors</li>
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <Link to="/contact-us-2" className="btn-dark" style={{ flex: 1, justifyContent: 'center' }}>
                  Request RFQ Quote <ArrowRight size={16} />
                </Link>
                <Link to="/buyer-tools" className="btn-outline-dark" style={{ flex: 1, justifyContent: 'center' }}>
                  Load Calculator
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
