import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import asset_C_Conductive_Bag_jpg_1 from '../assets/images/C-Conductive-Bag.jpg?url';

export default function ProductCategoryConductiveBag() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="productListWrapper">
        <div className="page-header" style={{
          background: '#FFFFFF',
          padding: '32px',
          borderRadius: '20px',
          border: '1px solid #E2E8F0',
          marginBottom: '32px'
        }}>
          <h1 className="entry-title" style={{ fontSize: '32px', fontWeight: '800', color: '#072834', marginBottom: '12px' }}>
            Product Category: <span style={{ color: '#00C2A8' }}>Conductive Bags</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7' }}>
            Type C groundable bulk containers engineered with conductive threads to safely dissipate electrostatic charges during filling and emptying.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
          <div className="product-card-premium" style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid #EEF2F6', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}>
            <div style={{ height: '240px', background: '#F8FAFC', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={asset_C_Conductive_Bag_jpg_1} alt="Conductive Bag" style={{ maxHeight: '200px', maxWidth: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#072834', marginBottom: '8px' }}>UN Conductive Bag</h3>
              <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6', marginBottom: '16px' }}>
                Specially designed with grounding tabs and conductive grid threads to prevent static discharge sparks in combustible environments.
              </p>
              <Link to="/product/c-conductive-bag" style={{ color: '#00C2A8', fontWeight: '800', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                Read More <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}