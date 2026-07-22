import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import asset_printed_pp_woven_sack_upto_six_colors_png_1 from '../assets/images/printed-pp-woven-sack-upto-six-colors.png?url';
import asset_fd6ea04a_aca5_4e3d_b574_738ee945af82_md_jpg_3 from '../assets/images/fd6ea04a-aca5-4e3d-b574-738ee945af82-md.jpg?url';
import asset_a4da6e12_8b22_4896_929b_815191c46974_1024x1024_png_5 from '../assets/images/a4da6e12-8b22-4896-929b-815191c46974-1024x1024.png?url';
import asset_2eb7cfac_a931_4772_9c11_d52f91da846e_1024x1024_png_8 from '../assets/images/2eb7cfac-a931-4772-9c11-d52f91da846e-1024x1024.png?url';
import asset_pp_woven_png_12 from '../assets/images/pp-woven.png?url';
import asset_unprinted_png_13 from '../assets/images/unprinted.png?url';

export default function ProductCategoryPpWovenSacks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ppProducts = [
    {
      title: 'Printed PP Woven Sacks',
      link: '/product/print-options',
      image: asset_printed_pp_woven_sack_upto_six_colors_png_1,
      desc: 'Flexographic printed woven PP bags up to 6 colors with high-resolution brand printing for flour, sugar, and grains.'
    },
    {
      title: 'PP Sacks with PE Liners',
      link: '/product/liner-options',
      image: asset_fd6ea04a_aca5_4e3d_b574_738ee945af82_md_jpg_3,
      desc: 'Woven PP bags integrated with PE inner film liners providing 100% moisture protection for hydroscopic chemicals.'
    },
    {
      title: 'BOPP Laminated Sacks',
      link: '/product/printed-pp-woven-sack',
      image: asset_a4da6e12_8b22_4896_929b_815191c46974_1024x1024_png_5,
      desc: 'Biaxially Oriented Polypropylene (BOPP) reverse printed laminated bags offering premium photographic shelf appeal.'
    },
    {
      title: 'Block Bottom Valve Sacks',
      link: '/product/bottom-construction',
      image: asset_2eb7cfac_a931_4772_9c11_d52f91da846e_1024x1024_png_8,
      desc: 'Brick-shaped self-standing block bottom bags engineered for automatic high-speed cement and resin filling.'
    },
    {
      title: 'Plain Unprinted Woven Bags',
      link: '/product/unprinted',
      image: asset_unprinted_png_13,
      desc: 'Heavy-duty virgin PP unprinted sacks for commodity grain, animal feed, and industrial minerals.'
    },
    {
      title: 'Custom Fabric Woven Sacks',
      link: '/product/fabric-options',
      image: asset_pp_woven_png_12,
      desc: 'Custom GSM, UV-stabilized, and gusseted woven PP bag specifications engineered for export logistics.'
    }
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
            Product Category: <span style={{ color: '#00C2A8' }}>PP Woven Sacks</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '12px' }}>
            Woven polypropylene bags are the backbone of global dry commodity logistics. Getting the specification right prevents seam tearing, moisture damage, and filling line downtime.
          </p>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7' }}>
            This page covers every woven PP bag type, fabric construction, top finish, bottom construction, liner, and print option we supply across audited global factories.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '28px'
        }}>
          {ppProducts.map((product, idx) => (
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
              <div style={{ height: '220px', background: '#F8FAFC', padding: '16px' }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
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