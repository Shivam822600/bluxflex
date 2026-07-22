import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import asset_juteburlap_bags_png_1 from '../assets/images/juteburlap_bags.png?url';
import asset_jutesacks__printedbags_png_3 from '../assets/images/jutesacks__printedbags.png?url';
import asset_horticultural__landscaping_png_5 from '../assets/images/horticultural__landscaping.png?url';
import asset_jutetwine__cord_png_7 from '../assets/images/jutetwine__cord.png?url';
import asset_burlap_fabric_png_10 from '../assets/images/burlap_fabric.png?url';
import asset_soil_saver_png_11 from '../assets/images/soil-saver.png?url';

export default function ProductCategoryJuteBurlap() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const juteProducts = [
    {
      title: 'Jute Burlap Bags',
      link: '/product/jute-burlap-bags',
      image: asset_juteburlap_bags_png_1,
      desc: '100% natural, biodegradable jute burlap sacks for coffee, cocoa beans, nuts, and agricultural commodities.'
    },
    {
      title: 'Printed Jute Sacks',
      link: '/product/jute-sacks-printed-bags',
      image: asset_jutesacks__printedbags_png_3,
      desc: 'Eco-friendly custom logo printed jute sacks for premium organic coffee and retail food branding.'
    },
    {
      title: 'Horticultural & Landscaping Fabrics',
      link: '/product/horticultural-landscaping-products',
      image: asset_horticultural__landscaping_png_5,
      desc: 'Natural burlap tree wraps, root ball squares, and erosion control netting for commercial nurseries.'
    },
    {
      title: 'Jute Twine & Cord',
      link: '/product/jute-twine-cord',
      image: asset_jutetwine__cord_png_7,
      desc: 'Heavy-duty 2-ply and 3-ply natural jute twines for agricultural tying, packaging, and garden binding.'
    },
    {
      title: 'Burlap Fabric Cloth',
      link: '/product/burlap-fabric-hessian-fabric',
      image: asset_burlap_fabric_png_10,
      desc: 'High-density woven burlap hessian fabric rolls available in natural tan, dyed, and custom weights.'
    },
    {
      title: 'Jute Soil Saver Netting',
      link: '/product/soil-saver',
      image: asset_soil_saver_png_11,
      desc: 'Open mesh jute geotextile matting engineered for slope soil stabilization and vegetation regrowth.'
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
            Product Category: <span style={{ color: '#00C2A8' }}>Jute / Burlap</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '12px' }}>
            Jute is one of the oldest cultivated natural fibers in the world. It is strong, breathable, 100% biodegradable, and grown without pesticides at scale across South Asia.
          </p>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7' }}>
            Today, jute is experiencing a global resurgence driven by sustainability commitments in retail, horticulture, landscaping, and food packaging. When its working life ends, it returns to the earth as organic matter.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '28px'
        }}>
          {juteProducts.map((product, idx) => (
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