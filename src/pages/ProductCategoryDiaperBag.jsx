import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import asset_Diaper_Bag_1_jpg_3 from '../assets/images/Diaper-Bag-1.jpg?url';

export default function ProductCategoryDiaperBag() {
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
            Product Category: <span style={{ color: '#00C2A8' }}>Diaper Bags</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7' }}>
            Specialized absorbent FIBC containers designed to hold moisture-heavy or semi-liquid bulk cargo safely without leakage.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
          <div className="product-card-premium" style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid #EEF2F6', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}>
            <div style={{ height: '240px', background: '#F8FAFC', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={asset_Diaper_Bag_1_jpg_3} alt="Diaper Bag" style={{ maxHeight: '200px', maxWidth: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ padding: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#072834', marginBottom: '8px' }}>Diaper Bag</h3>
              <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6', marginBottom: '16px' }}>
                Integrated absorbent interior layers to contain liquids, slurries, and moisture-prone agricultural and industrial waste.
              </p>
              <Link to="/product/diaper-bag" style={{ color: '#00C2A8', fontWeight: '800', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                Read More <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}