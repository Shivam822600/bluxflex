import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import asset_9e742bd7_c239_40c0_b23a_4dc7325f456d_1024x1024_png_1 from '../assets/images/9e742bd7-c239-40c0-b23a-4dc7325f456d-1024x1024.png?url';
import asset_8f21b94e_0d1a_4770_bf8a_3399ef293774_md_jpg_4 from '../assets/images/8f21b94e-0d1a-4770-bf8a-3399ef293774-md.jpg?url';

export default function ProductCategoryContainerLiners() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerProducts = [
    {
      title: 'PE Container Liners (Dry Bulk & Liquid)',
      link: '/product/pe-container-liners-dry-bulk-liquid',
      image: asset_9e742bd7_c239_40c0_b23a_4dc7325f456d_1024x1024_png_1,
      desc: 'Polyethylene container liners provide complete moisture and liquid containment for 20ft and 40ft shipping containers.'
    },
    {
      title: 'PP Container Liners (Dry Bulk)',
      link: '/product/pp-container-liners-dry-bulk',
      image: asset_8f21b94e_0d1a_4770_bf8a_3399ef293774_md_jpg_4,
      desc: 'Heavy-duty woven polypropylene container liners engineered for dry bulk chemical, resin, and grain export.'
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
        {/* Header */}
        <div className="page-header" style={{
          background: '#FFFFFF',
          padding: '32px',
          borderRadius: '20px',
          border: '1px solid #E2E8F0',
          marginBottom: '32px'
        }}>
          <h1 className="entry-title" style={{ fontSize: '32px', fontWeight: '800', color: '#072834', marginBottom: '12px' }}>
            Product Category: <span style={{ color: '#00C2A8' }}>Container Liners</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '12px' }}>
            A standard shipping container is a steel box built for intermodal transport. Container liners transform a standard 20ft or 40ft container into a clean, sealed, product-specific bulk packaging unit.
          </p>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7' }}>
            We supply PP and PE container liners for dry bulk, food grade, ventilated, and liquid applications with custom discharge spout configurations.
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

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '28px'
        }}>
          {containerProducts.map((product, idx) => (
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
              <div style={{ height: '240px', background: '#F8FAFC', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ maxHeight: '200px', maxWidth: '100%', objectFit: 'contain' }}
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