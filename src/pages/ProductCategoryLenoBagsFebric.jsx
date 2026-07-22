import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import asset_RASCHEL_BAGS_FABRIC_png_1 from '../assets/images/RASCHEL-BAGS-FABRIC.png?url';
import asset_LENO_FLAT_FABRIC___ROLLS_png_4 from '../assets/images/LENO-FLAT-FABRIC-—-ROLLS.png?url';
import asset_leno_bag_jpg_6 from '../assets/images/leno-bag.jpg?url';
import asset_wileted_leno_bag_jpg_8 from '../assets/images/wileted-leno-bag.jpg?url';
import asset_leno_fabric_jpg_10 from '../assets/images/leno-fabric.jpg?url';
import asset_Leno_flat_fabric_jpg_12 from '../assets/images/Leno-flat-fabric.jpg?url';

export default function ProductCategoryLenoBagsFebric() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const lenoProducts = [
    {
      title: 'Raschel Bags & Fabric',
      link: '/product/raschel-bags-fabric',
      image: asset_RASCHEL_BAGS_FABRIC_png_1,
      desc: 'High-ventilation knitted Raschel mesh bags engineered for fresh produce, onions, potatoes, and agricultural harvest packaging.'
    },
    {
      title: 'Leno Flat Fabric — Rolls',
      link: '/product/leno-flat-fabric-rolls',
      image: asset_LENO_FLAT_FABRIC___ROLLS_png_4,
      desc: 'Woven leno mesh fabric rolls for automated bag-making machines and custom ventilation packaging.'
    },
    {
      title: 'Leno Bag',
      link: '/product/leno-bag',
      image: asset_leno_bag_jpg_6,
      desc: 'Durable open-net woven polypropylene leno mesh bags with drawcords for easy tying and produce breathing.'
    },
    {
      title: 'Wicketed Leno Bag',
      link: '/product/wileted-leno-bag',
      image: asset_wileted_leno_bag_jpg_8,
      desc: 'Wicketed mesh bags designed for high-speed automated packing lines in agricultural packing houses.'
    },
    {
      title: 'Leno Fabric',
      link: '/product/leno-fabric',
      image: asset_leno_fabric_jpg_10,
      desc: 'Breathable woven mesh fabric available in custom width rolls and vibrant colors.'
    },
    {
      title: 'Leno Flat Fabric',
      link: '/product/leno-flat-fabric',
      image: asset_Leno_flat_fabric_jpg_12,
      desc: 'High-tenacity flat leno mesh fabric engineered for agricultural and industrial shade covers.'
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
            Product Category: <span style={{ color: '#00C2A8' }}>Leno Bags & Fabrics</span>
          </h1>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '12px' }}>
            Some products cannot go into a sealed bag. Onions, potatoes, garlic, shellfish, and firewood require continuous airflow to stay fresh. Trap heat and moisture inside a closed container and rot begins within days.
          </p>
          <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7' }}>
            Leno mesh bags and Raschel bags feature open-net construction from high-density PE and PP tapes, providing structural strength up to 50 kg with unrestricted ventilation.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '28px'
        }}>
          {lenoProducts.map((product, idx) => (
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