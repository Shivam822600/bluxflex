import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import asset_specialty_fabrics_png_1 from '../assets/images/specialty_fabrics.png?url';
import asset_Monofilament_Fabrics_jpg_3 from '../assets/images/Monofilament-Fabrics.jpg?url';
import asset_rPET_Fabrics_jpg_5 from '../assets/images/rPET-Fabrics.jpg?url';
import asset_Lumber_Cover_Fabrics_jpg_7 from '../assets/images/Lumber-Cover-Fabrics.jpg?url';
import asset_Silt_Fence_jpg_9 from '../assets/images/Silt-Fence.jpg?url';

export default function ProductCategorySpecialtyFebrics() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const specialtyProducts = [
    {
      title: 'Woven Specialty Fabrics',
      link: '/product/woven-specialty-fabrics',
      image: asset_specialty_fabrics_png_1,
      desc: 'High-density polyethylene (HDPE) flat tape woven fabrics delivering superior UV resistance and dimensional stability.'
    },
    {
      title: 'Monofilament Fabrics',
      link: '/product/monofilament-fabrics',
      image: asset_Monofilament_Fabrics_jpg_3,
      desc: 'High-tensile monofilament yarn woven mesh fabrics for agricultural filtration, shading, and heavy loads.'
    },
    {
      title: 'rPET Recycled Fabrics',
      link: '/product/rpet-fabrics',
      image: asset_rPET_Fabrics_jpg_5,
      desc: '100% recycled polyester (rPET) post-consumer woven fabrics supporting eco-friendly circular supply chains.'
    },
    {
      title: 'Lumber Cover Fabrics',
      link: '/product/lumber-cover-fabrics',
      image: asset_Lumber_Cover_Fabrics_jpg_7,
      desc: 'Heavy-duty coated woven polyethylene lumber wrap protecting timber shipments from moisture and road grime.'
    },
    {
      title: 'Silt Fence Sediment Control',
      link: '/product/silt-fence',
      image: asset_Silt_Fence_jpg_9,
      desc: 'Woven geotextile sediment barrier fabric for civil construction site erosion control and water runoff.'
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
            Product Category: <span style={{ color: '#00C2A8' }}>Specialty Fabrics</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '12px' }}>
            Some applications require custom technical textiles. We engineer woven specialty fabrics for specific load capacities, thermal resistance, and environmental conditions.
          </p>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7' }}>
            We supply HDPE flat tape woven fabric, lumber covers, silt fence, rPET recycled fabric, monofilament mesh, and geotextiles.
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '28px'
        }}>
          {specialtyProducts.map((product, idx) => (
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