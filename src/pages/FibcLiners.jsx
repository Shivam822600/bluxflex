import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

import asset_gusseted_jpg_1 from '../assets/images/gusseted.jpg?url';
import asset_open_top_jpg_2 from '../assets/images/open-top.jpg?url';
import asset_top_spout_jpg_3 from '../assets/images/top-spout.jpg?url';
import asset_top_and_bottom_jpg_4 from '../assets/images/top_and_bottom.jpg?url';
import asset_cubic_jpg_5 from '../assets/images/cubic.jpg?url';

export default function FibcLiners() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const linerItems = [
    { title: 'Gusseted Liners', image: asset_gusseted_jpg_1 },
    { title: 'Open Top Liners', image: asset_open_top_jpg_2 },
    { title: 'Top-Spouted Liner', image: asset_top_spout_jpg_3 },
    { title: 'Top and Bottom Spouted Liner', image: asset_top_and_bottom_jpg_4 },
    { title: 'Baffle / Cubic Liner', image: asset_cubic_jpg_5 }
  ];

  return (
    <Layout>
      <div className="productDetailsWrapper">
        <div className="page-header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px',
          background: '#FFFFFF',
          padding: '20px 28px',
          borderRadius: '16px',
          border: '1px solid #E2E8F0'
        }}>
          <div>
            <h1 style={{ fontSize: '26px', fontWeight: '800', color: '#072834', margin: 0 }}>
              FIBC : Liners
            </h1>
            <p style={{ color: '#64748B', fontSize: '14px', margin: '4px 0 0 0' }}>
              Internal polyethylene film liners providing 100% moisture barrier and dust-proof protection.
            </p>
          </div>
          <Link
            to="/product_category/fibc"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#072834',
              color: '#FFFFFF',
              padding: '8px 20px',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: '13px',
              textDecoration: 'none'
            }}
          >
            <ChevronLeft size={16} /> Back
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '24px'
        }}>
          {linerItems.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #EEF2F6',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              <div style={{
                width: '100%',
                height: '160px',
                background: '#F4F6F9',
                borderRadius: '16px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ maxHeight: '120px', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>
              <h6 style={{ fontSize: '16px', fontWeight: '800', color: '#072834', marginTop: '14px', margin: 0 }}>
                {item.title}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}