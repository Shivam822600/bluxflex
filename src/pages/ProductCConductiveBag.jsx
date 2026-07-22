import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronLeft, ShieldCheck, ArrowRight } from 'lucide-react';
import asset_C_Conductive_Bag_jpg_1 from '../assets/images/C-Conductive-Bag.jpg?url';

export default function ProductCConductiveBag() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <section style={{ background: '#072834', color: '#FFFFFF', padding: '40px 0' }}>
        <div className="container">
          <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#00C2A8', fontSize: '13px', fontWeight: '600', marginBottom: '12px' }}>
            <ChevronLeft size={16} /> Back to Products
          </Link>
          <h1 style={{ fontSize: '32px', color: '#FFFFFF', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
            UN Certified Conductive Bag
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '14px', marginTop: '4px' }}>
            Safe transportation of hazardous and sensitive industrial materials
          </p>
        </div>
      </section>

      <section style={{ padding: '56px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', alignItems: 'start' }}>
            <div className="card-clean" style={{ padding: '24px', textAlign: 'center', background: '#FFFFFF' }}>
              <img src={asset_C_Conductive_Bag_jpg_1} alt="UN Certified Bag" style={{ maxHeight: '340px', objectFit: 'contain', margin: '0 auto' }} />
            </div>

            <div className="card-clean" style={{ padding: '36px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#E8F7F5', color: '#00C2A8', padding: '6px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: '700', marginBottom: '16px' }}>
                <ShieldCheck size={14} /> UN Certified & Tested
              </div>
              <h2 style={{ fontSize: '26px', color: '#072834', marginBottom: '16px' }}>UN Hazardous Materials FIBC</h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '16px' }}>
                Our UN Certified Bags are designed for the safe and compliant transportation of hazardous and sensitive materials. Manufactured using high-quality woven polypropylene, these bags meet strict international UN standards, ensuring maximum strength, durability, and protection.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                They are rigorously tested for impact, load-bearing capacity, and leakage resistance. Ideal for chemical, pharmaceutical, and agro industries, our UN bags give you complete confidence in handling and shipping hazardous goods safely across global markets.
              </p>

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