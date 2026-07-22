import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, ChevronRight, Filter, Search } from 'lucide-react';

import asset_9e742bd7_c239_40c0_b23a_4dc7325f456d_300x300_png_1 from '../assets/images/9e742bd7-c239-40c0-b23a-4dc7325f456d-300x300.png?url';
import asset_8f21b94e_0d1a_4770_bf8a_3399ef293774_md_300x300_jpg_4 from '../assets/images/8f21b94e-0d1a-4770-bf8a-3399ef293774-md-300x300.jpg?url';
import asset_printed_pp_woven_sack_upto_six_colors_297x300_png_6 from '../assets/images/printed-pp-woven-sack-upto-six-colors-297x300.png?url';
import asset_fd6ea04a_aca5_4e3d_b574_738ee945af82_md_300x300_jpg_8 from '../assets/images/fd6ea04a-aca5-4e3d-b574-738ee945af82-md-300x300.jpg?url';
import asset_C_Conductive_Bag from '../assets/images/C-Conductive-Bag-297x300.jpg?url';
import asset_Diaper_Bag_1 from '../assets/images/Diaper-Bag-1-297x300.jpg?url';
import asset_Un_Bags from '../assets/images/Un-Bags-297x300.jpg?url';
import asset_RASCHEL_BAGS from '../assets/images/RASCHEL-BAGS-FABRIC-300x300.png?url';
import asset_LENO_FLAT_FABRIC from '../assets/images/LENO-FLAT-FABRIC-—-ROLLS-300x300.png?url';
import asset_juteburlap_bags from '../assets/images/juteburlap_bags-300x300.png?url';
import asset_specialty_fabrics from '../assets/images/specialty_fabrics-300x300.png?url';
import asset_PP_shopping_bag from '../assets/images/PP-shopping-bag-297x300.jpg?url';
import asset_horticultural from '../assets/images/horticultural__landscaping-300x300.png?url';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'All',
    'FIBC (Jumbo Bags)',
    'Container Liners',
    'PP Woven Sacks',
    'Leno Bags & Fabric',
    'Jute / Burlap',
    'Specialty Fabrics',
    'Retail Shopping Bags',
    'Agro Textiles'
  ];

  const allProducts = [
    {
      title: 'PE Container Liners (Dry Bulk & Liquid)',
      category: 'Container Liners',
      desc: 'Polyethylene container liners extend protection into applications requiring moisture and liquid barriers for 20ft and 40ft containers.',
      image: asset_9e742bd7_c239_40c0_b23a_4dc7325f456d_300x300_png_1,
      link: '/product/pe-container-liners-dry-bulk-liquid'
    },
    {
      title: 'PP Container Liners (Dry Bulk)',
      category: 'Container Liners',
      desc: 'Woven polypropylene container liners engineered for dry bulk commodities, agricultural grain, and industrial powders.',
      image: asset_8f21b94e_0d1a_4770_bf8a_3399ef293774_md_300x300_jpg_4,
      link: '/product/pp-container-liners-dry-bulk'
    },
    {
      title: 'Print Options & Flexo Customization',
      category: 'PP Woven Sacks',
      desc: 'Direct high-definition flexo printing up to 6 colors on woven PP bags and retail shopping sacks.',
      image: asset_printed_pp_woven_sack_upto_six_colors_297x300_png_6,
      link: '/product/print-options'
    },
    {
      title: 'Moisture Barrier Liner Options',
      category: 'PP Woven Sacks',
      desc: 'Internal PE film liners providing 100% moisture barrier and chemical protection for sensitive bulk goods.',
      image: asset_fd6ea04a_aca5_4e3d_b574_738ee945af82_md_300x300_jpg_8,
      link: '/product/liner-options'
    },
    {
      title: 'UN Certified Conductive Bag',
      category: 'FIBC (Jumbo Bags)',
      desc: 'Tested for hazardous goods transport with Type C electrostatic grounding protection.',
      image: asset_C_Conductive_Bag,
      link: '/product/c-conductive-bag'
    },
    {
      title: 'Diaper Bag Bulk Containers',
      category: 'FIBC (Jumbo Bags)',
      desc: 'Absorbent media bulk bags designed for semi-liquid and moisture-heavy materials.',
      image: asset_Diaper_Bag_1,
      link: '/product/diaper-bag'
    },
    {
      title: 'Type C Conductive Jumbo Bag',
      category: 'FIBC (Jumbo Bags)',
      desc: 'Electrostatic discharge protection for explosive powder and flammable chemical environments.',
      image: asset_Un_Bags,
      link: '/product/un-bags'
    },
    {
      title: 'Raschel Mesh Bags & Fabric',
      category: 'Leno Bags & Fabric',
      desc: 'Knitted breathable mesh bags providing continuous ventilation for onions, potatoes, and produce.',
      image: asset_RASCHEL_BAGS,
      link: '/product/raschel-bags-fabric'
    },
    {
      title: 'Leno Flat Fabric Rolls',
      category: 'Leno Bags & Fabric',
      desc: 'High-strength woven Leno rolls for automated mesh packaging lines and custom bags.',
      image: asset_LENO_FLAT_FABRIC,
      link: '/product/leno-flat-fabric-rolls'
    },
    {
      title: '100% Eco Jute Burlap Sacks',
      category: 'Jute / Burlap',
      desc: 'Biodegradable natural fiber packaging for coffee, cocoa, nursery plants, and landscaping.',
      image: asset_juteburlap_bags,
      link: '/product/jute-burlap-bags'
    },
    {
      title: 'Monofilament Specialty Fabrics',
      category: 'Specialty Fabrics',
      desc: 'Heavy-duty industrial filtration and solar shading mono fabrics built for tough outdoors.',
      image: asset_specialty_fabrics,
      link: '/product/monofilament-fabrics'
    },
    {
      title: 'Non-Woven PP Retail Totes',
      category: 'Retail Shopping Bags',
      desc: 'Reusable grocery and shopping totes designed with heavy load handles and brand printing.',
      image: asset_PP_shopping_bag,
      link: '/product/pp-shopping-bag'
    },
    {
      title: 'Agro Crop Protection Nets',
      category: 'Agro Textiles',
      desc: 'UV stabilized shading and hail protection netting engineered for orchard and crop safety.',
      image: asset_horticultural,
      link: '/product/hail-nets'
    }
  ];

  const filteredProducts = allProducts.filter(p => {
    const matchesCat = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <Layout>
      {/* Banner */}
      <section style={{ 
        background: 'linear-gradient(135deg, #072834 0%, #0D3B43 100%)', 
        color: '#FFFFFF', 
        padding: 'clamp(56px, 7vw, 80px) 0',
        position: 'relative'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0, 194, 168, 0.15)',
            border: '1px solid rgba(0, 194, 168, 0.3)',
            color: '#00C2A8',
            padding: '6px 16px',
            borderRadius: '50px',
            fontSize: '12px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '16px'
          }}>
            ISO 9001:2015 & BRC Certified
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 4vw, 52px)', color: '#FFFFFF', fontWeight: '800', fontFamily: 'var(--font-heading)', lineHeight: '1.15', marginBottom: '16px' }}>
            All Products & Specifications
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '16px', maxWidth: '640px', lineHeight: '1.6' }}>
            Browse our complete portfolio of FIBC bulk bags, woven PP sacks, container liners, leno mesh, jute burlap, and agro textiles engineered for global freight.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section style={{ padding: 'clamp(48px, 6vw, 80px) 0', background: '#F8FAFC' }}>
        <div className="container">
          
          {/* Controls Bar */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '40px'
          }}>
            
            {/* Category Pills */}
            <div style={{
              display: 'flex',
              gap: '10px',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              paddingBottom: '8px',
              maxWidth: '100%'
            }}>
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    background: activeCategory === cat ? '#072834' : '#FFFFFF',
                    color: activeCategory === cat ? '#FFFFFF' : '#475569',
                    border: activeCategory === cat ? 'none' : '1px solid #E2E8F0',
                    padding: '10px 20px',
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '13px',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    boxShadow: activeCategory === cat ? '0 6px 20px rgba(7,40,52,0.2)' : 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div style={{ position: 'relative', width: '280px' }}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 42px',
                  borderRadius: '50px',
                  border: '1px solid #CBD5E1',
                  fontSize: '14px',
                  outline: 'none',
                  background: '#FFFFFF'
                }}
              />
              <Search size={18} color="#64748B" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
            </div>

          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '28px'
            }}>
              {filteredProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="product-card-premium"
                >
                  {/* Image */}
                  <div className="img-container" style={{ height: '220px', background: '#FFFFFF', position: 'relative', padding: '16px' }}>
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                    />
                    <span style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(7, 40, 52, 0.85)',
                      backdropFilter: 'blur(4px)',
                      color: '#FFFFFF',
                      fontSize: '11px',
                      fontWeight: '700',
                      padding: '4px 10px',
                      borderRadius: '50px'
                    }}>
                      {product.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#072834', marginBottom: '8px', lineHeight: '1.3' }}>
                        {product.title}
                      </h3>
                      <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6', marginBottom: '20px' }}>
                        {product.desc}
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '16px' }}>
                      <Link
                        to={product.link}
                        style={{
                          color: '#00C2A8',
                          fontWeight: '800',
                          fontSize: '14px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        View Details <ChevronRight size={16} />
                      </Link>

                      <Link
                        to={product.link}
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          background: '#E8F7F5',
                          color: '#072834',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.2s'
                        }}
                      >
                        <ArrowRight size={16} />
                      </Link>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#64748B' }}>
              <h3>No products found matching your search.</h3>
            </div>
          )}

        </div>
      </section>
    </Layout>
  );
}
