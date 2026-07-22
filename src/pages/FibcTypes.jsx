import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

import asset_oneloop_jpg_1 from '../assets/images/oneloop.jpg?url';
import asset_twoloops_jpg_2 from '../assets/images/twoloops.jpg?url';
import asset_tubue_2_jpg_3 from '../assets/images/tubue-2.jpg?url';
import asset_utype_jpg_4 from '../assets/images/utype.jpg?url';
import asset_liner_1_jpg_5 from '../assets/images/liner-1.jpg?url';
import asset_conductivebags_jpg_6 from '../assets/images/conductivebags.jpg?url';
import asset_conical_jpg_7 from '../assets/images/conical.jpg?url';
import asset_unbags_jpg_8 from '../assets/images/unbags.jpg?url';
import asset_baffbag_jpg_9 from '../assets/images/baffbag.jpg?url';
import asset_doublewall_jpg_10 from '../assets/images/doublewall.jpg?url';

export default function FibcTypes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const typeItems = [
    { title: 'Single Loop', image: asset_oneloop_jpg_1 },
    { title: 'Two Loops', image: asset_twoloops_jpg_2 },
    { title: 'Circular / Tubular', image: asset_tubue_2_jpg_3 },
    { title: 'U-Panel Bag', image: asset_utype_jpg_4 },
    { title: '4-Panel Jumbo Bag', image: asset_liner_1_jpg_5 },
    { title: 'Conductive Type C', image: asset_conductivebags_jpg_6 },
    { title: 'Conical Bag', image: asset_conical_jpg_7 },
    { title: 'UN Hazardous Goods Bag', image: asset_unbags_jpg_8 },
    { title: 'Baffle Bag (Formstable)', image: asset_baffbag_jpg_9 },
    { title: 'Double Wall Container', image: asset_doublewall_jpg_10 }
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
              FIBC : Types & Constructions
            </h1>
            <p style={{ color: '#64748B', fontSize: '14px', margin: '4px 0 0 0' }}>
              Comprehensive range of woven polypropylene bulk bag construction formats.
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
          {typeItems.map((item, idx) => (
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