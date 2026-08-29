import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronLeft, ShieldCheck, ArrowRight } from 'lucide-react';
import asset_Diaper_Bag_1_jpg_1 from '../assets/images/official/Diaper-Bag-1.jpg?url';

export default function ProductDiaperBag() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section style={{ background: '#142E3D', color: '#FFFFFF', padding: '40px 0' }}>
        <div className="container">
          <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#8DC63F', fontSize: '13px', fontWeight: '600', marginBottom: '12px' }}>
            <ChevronLeft size={16} /> Back to Products
          </Link>
          <h1 style={{ fontSize: '32px', color: '#FFFFFF', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
            Diaper Bag
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '14px', marginTop: '4px' }}>
            High-performance absorbent FIBC bulk container for moisture-rich materials
          </p>
        </div>
      </section>

      <section style={{ padding: '56px 0', background: '#FBF1E6' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
            <div className="card-clean" style={{ padding: '24px', textAlign: 'center', background: '#FFFFFF' }}>
              <img src={asset_Diaper_Bag_1_jpg_1} alt="Diaper Bag" style={{ maxHeight: '340px', objectFit: 'contain', margin: '0 auto' }} />
            </div>

            <div className="card-clean" style={{ padding: '36px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#F0F7E4', color: '#8DC63F', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: '700', marginBottom: '16px' }}>
                <ShieldCheck size={14} /> Leakage & Moisture Protection
              </div>
              <h2 style={{ fontSize: '26px', color: '#142E3D', marginBottom: '16px' }}>Diaper Bag</h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '16px' }}>
                We provide high-performance Diaper Bags that are specially designed to handle moisture-rich or semi-liquid materials. These bags come with absorbent layers that effectively control leakage and maintain cleanliness during transport and storage.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                Ideal for industries like food processing, agriculture, and waste management, our diaper bags ensure safe, hygienic, and efficient handling of challenging materials.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
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