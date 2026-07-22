import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import asset_paper_bags_png_1 from '../assets/images/paper_bags.png?url';
import asset_cotton_bags_jpg_2 from '../assets/images/cotton_bags.jpg?url';
import asset_ppwovwnnonvowen_bags_png_4 from '../assets/images/ppwovwnnonvowen_bags.png?url';
import asset_winebeverage_bags_jpg_5 from '../assets/images/winebeverage_bags.jpg?url';
import asset_cooler_bags_jpg_7 from '../assets/images/cooler_bags.jpg?url';
import asset_PP_shopping_bag_jpg_9 from '../assets/images/PP-shopping-bag.jpg?url';

export default function ProductCategoryRetailShopingBags() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const retailProducts = [
    {
      title: 'Kraft Paper Bags',
      link: '/product/paper-bags',
      image: asset_paper_bags_png_1,
      desc: 'Eco-friendly natural brown and bleached white kraft paper carrier bags with twisted handles.'
    },
    {
      title: 'Cotton Tote Bags',
      link: '/product/cotton-bags',
      image: asset_cotton_bags_jpg_2,
      desc: '100% natural organic cotton and canvas reusable shopping bags with screen-printed brand logos.'
    },
    {
      title: 'PP Woven & Non-Woven Bags',
      link: '/product/pp-woven-non-woven-bags',
      image: asset_ppwovwnnonvowen_bags_png_4,
      desc: 'Durable laminated PP woven and non-woven reusable shopping bags for supermarket chains.'
    },
    {
      title: 'Wine & Beverage Bags',
      link: '/product/wine-beverage-bags',
      image: asset_winebeverage_bags_jpg_5,
      desc: 'Single and multi-bottle jute/canvas wine carrier bags with padded dividers.'
    },
    {
      title: 'Insulated Thermal Cooler Bags',
      link: '/product/cooler-bags',
      image: asset_cooler_bags_jpg_7,
      desc: 'Aluminum foil insulated thermal cooler bags engineered for cold chain food and beverage retail.'
    },
    {
      title: 'Custom PP Retail Shopping Bag',
      link: '/product/retail-shopping-bag-a',
      image: asset_PP_shopping_bag_jpg_9,
      desc: 'High-gloss BOPP reverse printed reusable shopping bags with soft webbing handles.'
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
            Product Category: <span style={{ color: '#00C2A8' }}>Retail Shopping Bags</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '12px' }}>
            The bag your customer carries out is a mobile billboard for your brand. High quality reusable packaging turns a packaging expense into a marketing asset.
          </p>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7' }}>
            We supply paper, jute, cotton, PP woven, and insulated thermal cooler bags fully customized in size, handle type, color, and high-definition printing.
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
          {retailProducts.map((product, idx) => (
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