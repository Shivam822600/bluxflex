import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import asset_roofing_underlayment_png_1 from '../assets/images/roofing_underlayment.png?url';
import asset_house_wrap_png_3 from '../assets/images/house_wrap.png?url';
import asset_hail_nets_png_5 from '../assets/images/hail_nets.png?url';
import asset_SILAGE_WRAP_BALE_WRAP_jpg_7 from '../assets/images/SILAGE-WRAP-BALE-WRAP.jpg?url';
import asset_woven_ground_cover_png_9 from '../assets/images/woven_ground_cover.png?url';
import asset_shade_nets_jpg_14 from '../assets/images/shade_nets.jpg?url';

export default function ProductCategoryAgroTextiles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const agroProducts = [
    {
      title: 'Woven Ground Cover',
      link: '/product/woven-ground-cover',
      image: asset_woven_ground_cover_png_9,
      desc: 'Heavy-duty UV-stabilized weed control barrier fabric for commercial nurseries and greenhouses.'
    },
    {
      title: 'Hail Nets & Protection',
      link: '/product/hail-nets',
      image: asset_hail_nets_png_5,
      desc: 'High-tenacity anti-hail protective netting engineered for orchards, vineyards, and agricultural crops.'
    },
    {
      title: 'Shade Netting',
      link: '/product/shades-net',
      image: asset_shade_nets_jpg_14,
      desc: 'Custom density shade cloth providing 30% to 90% solar protection for horticulture and livestock.'
    },
    {
      title: 'Silage Wrap & Bale Film',
      link: '/product/silage-wrap-bale-wrap',
      image: asset_SILAGE_WRAP_BALE_WRAP_jpg_7,
      desc: '5-layer co-extruded stretch film designed for airtight fodder preservation and bale wrapping.'
    },
    {
      title: 'Breathable House Wrap',
      link: '/product/house-wrap',
      image: asset_house_wrap_png_3,
      desc: 'Polypropylene weather-resistant barrier house wrap protecting building structures from moisture.'
    },
    {
      title: 'Roofing Synthetic Underlayment',
      link: '/product/roofing-underlayment',
      image: asset_roofing_underlayment_png_1,
      desc: 'High-traction slip-resistant synthetic roofing underlayment for steep-slope roofs.'
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
            Product Category: <span style={{ color: '#00C2A8' }}>Agro Textiles</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '12px' }}>
            Agro textiles stand between crops, structures, and the environment. Weeds, intense solar heat, hail storms, and wind-driven rain present major crop risks.
          </p>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7' }}>
            Every product in this category is UV-stabilised woven PP or PE engineered to protect harvests and building envelopes.
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
          {agroProducts.map((product, idx) => (
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