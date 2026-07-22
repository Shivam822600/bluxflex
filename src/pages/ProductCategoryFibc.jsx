import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import asset_C_Conductive_Bag_jpg_1 from '../assets/images/C-Conductive-Bag.jpg?url';
import asset_Diaper_Bag_1_jpg_3 from '../assets/images/Diaper-Bag-1.jpg?url';
import asset_Un_Bags_jpg_5 from '../assets/images/Un-Bags-297x300.jpg?url';
import asset_Diaper_Bag_jpg_6 from '../assets/images/Diaper-Bag.jpg?url';

export default function ProductCategoryFibc() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fibcProducts = [
    {
      title: 'UN Bag',
      link: '/product/c-conductive-bag',
      image: asset_C_Conductive_Bag_jpg_1,
      desc: 'Our UN Certified Bags are designed for the safe and compliant transportation of hazardous and sensitive materials. Manufactured using high-quality woven polypropylene, these bags meet strict international UN standards.'
    },
    {
      title: 'Diaper Bag',
      link: '/product/diaper-bag',
      image: asset_Diaper_Bag_1_jpg_3,
      desc: 'We provide high-performance Diaper Bags that are specially designed to handle moisture-rich or semi-liquid materials. These bags come with absorbent layers that effectively control leakage.'
    },
    {
      title: 'Conductive Bag',
      link: '/product/un-bags',
      image: asset_Un_Bags_jpg_5,
      desc: 'Our Conductive Bags are designed to eliminate the risks associated with static electricity during storage and transportation. Made from specialized conductive materials for Type C grounding.'
    },
    {
      title: 'Baffle Bags',
      link: '/product/baffle-bags',
      image: asset_Diaper_Bag_jpg_6,
      desc: 'We offer premium-quality Baffle Bags that are specially engineered to maintain a square shape even after filling, optimizing container storage space and stacking efficiency.'
    }
  ];

  const subNavItems = [
    { title: 'Types', path: '/fibc/types' },
    { title: 'Discharge', path: '/fibc/discharge' },
    { title: 'Filling', path: '/fibc/filling' },
    { title: 'Lift Loops', path: '/fibc/lift-loops' },
    { title: 'Liners', path: '/fibc/liners' },
    { title: 'Stitch Types', path: '/fibc/stitch-types' }
  ];

  return (
    <Layout>
      <div className="productListWrapper">
        {/* Page Header */}
        <div className="page-header" style={{
          background: '#FFFFFF',
          padding: '32px',
          borderRadius: '20px',
          border: '1px solid #E2E8F0',
          marginBottom: '32px'
        }}>
          <h1 className="entry-title" style={{ fontSize: '32px', fontWeight: '800', color: '#072834', marginBottom: '12px' }}>
            Product Category: <span style={{ color: '#00C2A8' }}>FIBC Jumbo Bags</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '12px' }}>
            Flexible Intermediate Bulk Containers — FIBCs, bulk bags, jumbo bags, or super sacks are the most efficient way to move dry flowable products at scale. One bulk bag replaces 20 to 25 small bags, cuts labour time at every handling point, and reduces packaging cost per tonne by up to 60 percent compared to smaller formats.
          </p>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7' }}>
            This page covers every FIBC type, design, and configuration we supply. Use it to identify your specification. We will confirm the factory, certifications, and pricing.
          </p>
        </div>

        {/* Clean Modern Light Filter Pills Bar */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid #E2E8F0',
          padding: '16px 24px',
          borderRadius: '18px',
          boxShadow: '0 4px 20px rgba(7, 40, 52, 0.04)',
          marginBottom: '36px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          <span style={{ color: '#072834', fontSize: '13px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px', marginRight: '6px' }}>
            Specifications:
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {subNavItems.map((nav, idx) => (
              <Link
                key={idx}
                to={nav.path}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#F1F5F9',
                  color: '#072834',
                  border: '1px solid #CBD5E1',
                  padding: '8px 20px',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '13px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                {nav.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '28px'
        }}>
          {fibcProducts.map((product, idx) => (
            <div
              key={idx}
              className="product-card-premium"
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #EEF2F6',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ height: '220px', background: '#F8FAFC', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ maxHeight: '180px', maxWidth: '100%', objectFit: 'contain' }}
                />
              </div>

              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#072834', marginBottom: '8px' }}>
                    {product.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6', marginBottom: '16px' }}>
                    {product.desc}
                  </p>
                </div>

                <Link
                  to={product.link}
                  style={{
                    color: '#00C2A8',
                    fontWeight: '800',
                    fontSize: '14px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    textDecoration: 'none'
                  }}
                >
                  Read More <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}