import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { 
  ArrowRight, 
  ChevronDown, 
  Globe, 
  Award, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Package, 
  RefreshCw, 
  Target, 
  Sprout, 
  Factory, 
  Building2 
} from 'lucide-react';

// Product Image Assets
import asset_C_Conductive_Bag from '../assets/images/C-Conductive-Bag-297x300.jpg?url';
import asset_Diaper_Bag_1 from '../assets/images/Diaper-Bag-1-297x300.jpg?url';
import asset_Un_Bags from '../assets/images/Un-Bags-297x300.jpg?url';
import asset_Diaper_Bag from '../assets/images/Diaper-Bag-297x300.jpg?url';
import asset_RASCHEL_BAGS from '../assets/images/RASCHEL-BAGS-FABRIC-300x300.png?url';
import asset_LENO_FLAT_FABRIC from '../assets/images/LENO-FLAT-FABRIC-—-ROLLS-300x300.png?url';
import asset_leno_bag from '../assets/images/leno-bag.jpg?url';
import asset_wileted_leno_bag from '../assets/images/wileted-leno-bag.jpg?url';
import asset_printed_pp_woven from '../assets/images/printed-pp-woven-sack-upto-six-colors-297x300.png?url';
import asset_liner_options from '../assets/images/fd6ea04a-aca5-4e3d-b574-738ee945af82-md-300x300.jpg?url';
import asset_bottom_construction from '../assets/images/a4da6e12-8b22-4896-929b-815191c46974-300x300.png?url';
import asset_juteburlap_bags from '../assets/images/juteburlap_bags-300x300.png?url';
import asset_jutesacks_printed from '../assets/images/jutesacks__printedbags-300x300.png?url';
import asset_horticultural from '../assets/images/horticultural__landscaping-300x300.png?url';
import asset_specialty_fabrics from '../assets/images/specialty_fabrics-300x300.png?url';
import asset_Monofilament_Fabrics from '../assets/images/Monofilament-Fabrics-297x300.jpg?url';
import asset_rPET_Fabrics from '../assets/images/rPET-Fabrics-297x300.jpg?url';
import asset_Lumber_Cover_Fabrics from '../assets/images/Lumber-Cover-Fabrics-297x300.jpg?url';
import asset_PP_shopping_bag from '../assets/images/PP-shopping-bag-297x300.jpg?url';
import asset_roofing_underlayment from '../assets/images/roofing_underlayment-300x300.png?url';
import asset_Company_Overview from '../assets/images/Company-Overview.png?url';
import asset_Manufacturing from '../assets/images/Manufacturing.png?url';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [heroLangOpen, setHeroLangOpen] = useState(false);
  const [selectedHeroLang, setSelectedHeroLang] = useState('EN - English');

  // Product categories & data
  const categories = [
    'FIBC (Jumbo Bags)',
    'Leno Bags & Fabric',
    'PP Woven Sacks',
    'Jute / Burlap',
    'Specialty Fabrics',
    'Retail Shopping Bags',
    'Agro Textiles'
  ];

  const productsData = [
    // FIBC (Jumbo Bags)
    [
      { title: 'UN Bag', desc: 'UN Certified Bags designed for safe transport of hazardous materials.', image: asset_C_Conductive_Bag, link: '/product/c-conductive-bag' },
      { title: 'Diaper Bag', desc: 'High-performance Diaper Bags for bulk absorbent media storage.', image: asset_Diaper_Bag_1, link: '/product/diaper-bag' },
      { title: 'Conductive Bag', desc: 'Electrostatic discharge protection for flammable environments.', image: asset_Un_Bags, link: '/product/un-bags' },
      { title: 'Baffle Bags', desc: 'Form-stable bulk containers engineered to save storage & freight.', image: asset_Diaper_Bag, link: '/product/baffle-bags' },
    ],
    // Leno Bags & Fabric
    [
      { title: 'Raschel Bags & Fabric', desc: 'Knitted breathable mesh bags ideal for fresh agricultural produce.', image: asset_RASCHEL_BAGS, link: '/product/raschel-bags-fabric' },
      { title: 'Leno Flat Fabric – Rolls', desc: 'High-strength Leno woven rolls for custom ventilation packaging.', image: asset_LENO_FLAT_FABRIC, link: '/product/leno-flat-fabric-rolls' },
      { title: 'Leno Bag', desc: 'Durable mesh packaging for onions, potatoes, and fresh crops.', image: asset_leno_bag, link: '/product/leno-bag' },
      { title: 'Wicketed Leno Bag', desc: 'Automated packing line mesh bags engineered for high-speed filling.', image: asset_wileted_leno_bag, link: '/product/wileted-leno-bag' },
    ],
    // PP Woven Sacks
    [
      { title: 'Printed PP Woven Sacks', desc: 'High-definition flexo printing up to 6 colors for retail branding.', image: asset_printed_pp_woven, link: '/product/print-options' },
      { title: 'Moisture Barrier Liners', desc: 'Internal PE liners providing 100% moisture protection.', image: asset_liner_options, link: '/product/liner-options' },
      { title: 'Reinforced Bottom Seams', desc: 'Double folded heavy-duty stitching for maximum load strength.', image: asset_bottom_construction, link: '/product/bottom-construction' },
      { title: 'Burlap Look PP Sacks', desc: 'Natural aesthetics combined with synthetic tensile durability.', image: asset_juteburlap_bags, link: '/product/top-finishes' },
    ],
    // Jute / Burlap
    [
      { title: 'Jute Burlap Sacks', desc: '100% eco-friendly biodegradable natural fiber packaging.', image: asset_juteburlap_bags, link: '/product/jute-burlap-bags' },
      { title: 'Custom Printed Jute', desc: 'Organic brand presentation with non-toxic water-based inks.', image: asset_jutesacks_printed, link: '/product/jute-sacks-printed' },
      { title: 'Soil & Nursery Bags', desc: 'Breathable burlap containers for landscaping and root protection.', image: asset_horticultural, link: '/product/horticultural-landscaping' },
      { title: 'Jute Twine & Cordage', desc: 'Heavy-duty industrial natural binding and packaging cords.', image: asset_specialty_fabrics, link: '/product/jute-twine-cord' },
    ],
    // Specialty Fabrics
    [
      { title: 'Monofilament Fabrics', desc: 'High tensile mesh fabrics for industrial filtration & shading.', image: asset_Monofilament_Fabrics, link: '/product/monofilament-fabrics' },
      { title: 'rPET Eco Fabrics', desc: '100% post-consumer recycled polyester woven packaging.', image: asset_rPET_Fabrics, link: '/product/rpet-fabrics' },
      { title: 'Lumber Cover Fabrics', desc: 'Weatherproof UV-stabilized heavy wraps for timber protection.', image: asset_Lumber_Cover_Fabrics, link: '/product/lumber-cover-fabrics' },
      { title: 'Roofing Underlayment', desc: 'Water-resistant synthetic membranes for modern roofing.', image: asset_roofing_underlayment, link: '/product/roofing-underlayment' },
    ],
    // Retail Shopping Bags
    [
      { title: 'PP Non-Woven Tote', desc: 'Reusable eco shopping totes designed for high-capacity retail.', image: asset_PP_shopping_bag, link: '/product/pp-shopping-bag' },
      { title: 'Laminated Grocery Bags', desc: 'Waterproof full-color photo printed retail shopping bags.', image: asset_printed_pp_woven, link: '/product/pp-shopping-bag' },
      { title: 'Foldable Eco Totes', desc: 'Compact durable promotional bags with reinforced handles.', image: asset_juteburlap_bags, link: '/product/pp-shopping-bag' },
      { title: 'Heavy Duty Carrier Sacks', desc: 'Multi-use retail packaging for hardware & bulk grocery.', image: asset_Diaper_Bag, link: '/product/pp-shopping-bag' },
    ],
    // Agro Textiles
    [
      { title: 'Agro Shade Nets', desc: 'UV treated crop shading nets for optimal solar protection.', image: asset_horticultural, link: '/product/hail-nets' },
      { title: 'Hail & Bird Protection', desc: 'High-density poly netting for agricultural orchard safety.', image: asset_Monofilament_Fabrics, link: '/product/hail-nets' },
      { title: 'Silage Bale Wrap', desc: 'Airtight stretch film for fodder preservation and storage.', image: asset_Lumber_Cover_Fabrics, link: '/product/silage-wrap' },
      { title: 'Weed Mat Barrier', desc: 'Heavy-duty ground cover preventing weed growth while draining.', image: asset_roofing_underlayment, link: '/product/house-wrap' },
    ]
  ];

  return (
    <Layout>
      {/* 1. HERO SECTION */}
      <section style={{ 
        background: 'linear-gradient(135deg, #E8F7F5 0%, #F4FBF9 50%, #FFFFFF 100%)',
        padding: 'clamp(48px, 6vw, 80px) 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}>
            
            {/* Hero Left Content */}
            <div style={{ zIndex: 2 }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(0, 194, 168, 0.12)',
                color: '#072834',
                padding: '6px 14px',
                borderRadius: '50px',
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '20px'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#00C2A8' }}></span>
                B2B Sourcing Platform
              </div>

              <h1 style={{
                fontSize: 'clamp(32px, 4.5vw, 54px)',
                fontWeight: '800',
                color: '#072834',
                lineHeight: '1.12',
                letterSpacing: '-1px',
                marginBottom: '20px',
                fontFamily: 'var(--font-heading)'
              }}>
                Global Procurement <br />
                <span style={{ color: '#00C2A8' }}>Simplified.</span>
              </h1>

              <p style={{
                fontSize: 'clamp(15px, 1.8vw, 17px)',
                color: '#475569',
                lineHeight: '1.6',
                marginBottom: '28px',
                maxWidth: '540px'
              }}>
                Bulk Flex enables global buyers to source from India and Asia with confidence, continuity, and full supply chain visibility.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
                <Link to="/about-us" className="btn-primary" style={{
                  background: '#072834',
                  color: '#FFFFFF',
                  padding: '14px 28px',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '15px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 10px 24px rgba(7, 40, 52, 0.2)',
                  transition: 'transform 0.2s, background 0.2s'
                }}>
                  Know More <ArrowRight size={18} color="#00C2A8" />
                </Link>

                <Link to="/products" className="btn-outline" style={{
                  background: 'transparent',
                  color: '#072834',
                  border: '2px solid #072834',
                  padding: '13px 26px',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '15px',
                  transition: 'all 0.2s'
                }}>
                  View Products
                </Link>
              </div>
            </div>

            {/* Hero Right Graphic: Hub Map & Floating Language Dropdown */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              
              {/* Floating Language Dropdown Pill above Map */}
              <div style={{
                position: 'absolute',
                top: '-16px',
                right: '24px',
                zIndex: 10
              }}>
                <button 
                  onClick={() => setHeroLangOpen(!heroLangOpen)}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(0,0,0,0.08)',
                    boxShadow: '0 8px 24px rgba(7,40,52,0.12)',
                    borderRadius: '50px',
                    padding: '8px 18px',
                    fontSize: '13px',
                    fontWeight: '700',
                    color: '#072834',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer'
                  }}
                >
                  <Globe size={16} color="#00C2A8" />
                  <span>{selectedHeroLang}</span>
                  <ChevronDown size={14} />
                </button>

                {heroLangOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '110%',
                    right: 0,
                    background: '#FFFFFF',
                    borderRadius: '12px',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
                    padding: '8px',
                    minWidth: '150px',
                    zIndex: 20
                  }}>
                    {['EN - English', 'ES - Español', 'FR - Français', 'DE - Deutsch'].map((lang, i) => (
                      <div 
                        key={i}
                        onClick={() => {
                          setSelectedHeroLang(lang);
                          setHeroLangOpen(false);
                        }}
                        style={{
                          padding: '8px 12px',
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#072834',
                          borderRadius: '6px',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#E8F7F5'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      >
                        {lang}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Hub Map Container */}
              <div style={{
                width: '100%',
                maxWidth: '560px',
                aspectRatio: '16/11',
                background: '#FFFFFF',
                borderRadius: '24px',
                border: '1px solid rgba(0,194,168,0.2)',
                boxShadow: '0 20px 50px rgba(7,40,52,0.08)',
                padding: '24px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg viewBox="0 0 800 500" style={{ width: '100%', height: '100%' }}>
                  <defs>
                    <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#E8F7F5" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
                    </linearGradient>
                  </defs>

                  {/* World Map Silhouette / Route Connections */}
                  <path d="M 120 180 Q 250 140 460 270 T 700 200" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 460 270 Q 300 350 200 320" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M 460 270 Q 550 120 680 140" fill="none" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" />

                  {/* India Central Hub Marker */}
                  <circle cx="460" cy="270" r="32" fill="rgba(0, 194, 168, 0.15)">
                    <animate attributeName="r" values="24;40;24" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="460" cy="270" r="10" fill="#00C2A8" stroke="#FFFFFF" strokeWidth="3" />
                  
                  {/* Hub Label Callout */}
                  <g transform="translate(460, 215)">
                    <rect x="-60" y="-18" width="120" height="32" rx="16" fill="#072834" />
                    <text x="0" y="3" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                      INDIA HUB
                    </text>
                  </g>

                  {/* Global Hub Nodes */}
                  {[
                    { x: 180, y: 170, label: 'EUROPE' },
                    { x: 680, y: 150, label: 'AMERICAS' },
                    { x: 660, y: 320, label: 'APAC' },
                    { x: 220, y: 330, label: 'MIDDLE EAST' }
                  ].map((node, i) => (
                    <g key={i} transform={`translate(${node.x}, ${node.y})`}>
                      <circle r="6" fill="#FA5221" />
                      <circle r="12" fill="rgba(250, 82, 33, 0.2)" />
                      <text y="22" textAnchor="middle" fill="#64748B" fontSize="10" fontWeight="700">
                        {node.label}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS ROW */}
      <section style={{ background: '#FFFFFF', padding: '40px 0', borderBottom: '1px solid #F1F5F9' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '32px'
          }}>
            {[
              { number: '20+', label: 'Years Industrial Experience', icon: <Award color="#00C2A8" size={26} /> },
              { number: '30+', label: 'Vetted Manufacturers Network', icon: <ShieldCheck color="#00C2A8" size={26} /> },
              { number: 'Multi-SKU', label: 'Container Optimization', icon: <Truck color="#00C2A8" size={26} /> },
            ].map((stat, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '16px 24px',
                background: '#F8FAFC',
                borderRadius: '16px',
                border: '1px solid #E2E8F0'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: '#E8F7F5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontSize: '26px', fontWeight: '800', color: '#072834', lineHeight: '1.2' }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '600' }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS SECTION */}
      <section style={{ padding: 'clamp(56px, 7vw, 88px) 0', background: '#F8FAFC' }}>
        <div className="container">
          
          {/* Centered Heading */}
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: '800', color: '#072834', marginBottom: '12px' }}>
              Our Products
            </h2>
            <p style={{ color: '#64748B', fontSize: '16px' }}>
              Reliable bulk packaging solutions tailored to global standards.
            </p>
          </div>

          {/* Horizontal Scrollable Filter Pills */}
          <div style={{
            display: 'flex',
            gap: '12px',
            overflowX: 'auto',
            paddingBottom: '16px',
            marginBottom: '40px',
            scrollbarWidth: 'none'
          }}>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                style={{
                  background: activeTab === idx ? '#072834' : '#FFFFFF',
                  color: activeTab === idx ? '#FFFFFF' : '#475569',
                  border: activeTab === idx ? 'none' : '1px solid #E2E8F0',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  fontWeight: '700',
                  fontSize: '14px',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  boxShadow: activeTab === idx ? '0 6px 20px rgba(7,40,52,0.2)' : 'none',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 4-Column Responsive Product Card Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {productsData[activeTab]?.map((prod, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(7,40,52,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.04)';
                }}
              >
                {/* Product Image */}
                <div style={{ height: '220px', background: '#F1F5F9', overflow: 'hidden' }}>
                  <img 
                    src={prod.image} 
                    alt={prod.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#072834', marginBottom: '8px' }}>
                      {prod.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.5', marginBottom: '20px' }}>
                      {prod.desc}
                    </p>
                  </div>

                  {/* Bottom Circular Arrow Button */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Link 
                      to={prod.link}
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        background: '#E8F7F5',
                        color: '#072834',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background 0.2s, color 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#00C2A8';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#E8F7F5';
                        e.currentTarget.style.color = '#072834';
                      }}
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. STORYTELLING SECTION (Full-Width Organic Wave Background) */}
      <section style={{ position: 'relative', background: '#072834', color: '#FFFFFF', padding: '80px 0' }}>
        
        {/* Top Organic SVG Wave Divider */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0, transform: 'rotate(180deg)' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: '100%', height: '40px', fill: '#F8FAFC' }}>
            <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          
          {/* Row 1: Image Left, Text Right */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '56px',
            alignItems: 'center',
            marginBottom: '72px'
          }}>
            <div>
              <img 
                src={asset_Company_Overview} 
                alt="BulkFlex Manufacturing Facility" 
                style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}
              />
            </div>
            <div>
              <span style={{ color: '#00C2A8', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                End-to-End Execution
              </span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: '800', marginTop: '12px', marginBottom: '20px', lineHeight: '1.2' }}>
                Single-Point Control for Multi-Supplier Chains
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                Managing multiple Asian suppliers can be fragmented and unpredictable. Bulk Flex coordinates vetted manufacturing partners to deliver consistent quality, optimized container loading, and total transparency under one unified management system.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Rigorous factory audits & quality checks', 'Multi-SKU container loading optimization', 'Real-time production and shipment tracking'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#E2E8F0' }}>
                    <CheckCircle2 size={18} color="#00C2A8" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '56px',
            alignItems: 'center'
          }}>
            <div style={{ order: 2 }}>
              <img 
                src={asset_Manufacturing} 
                alt="Quality Assurance and Testing" 
                style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}
              />
            </div>
            <div style={{ order: 1 }}>
              <span style={{ color: '#00C2A8', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Compliance & Quality
              </span>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: '800', marginTop: '12px', marginBottom: '20px', lineHeight: '1.2' }}>
                Built to International Safety Standards
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
                From UN-certified dangerous goods containers to food-grade cleanroom FIBCs, every product undergoes strict physical testing, tensile strength evaluation, and UV resistance inspection prior to dispatch.
              </p>
              <Link to="/about-us" style={{
                color: '#00C2A8',
                fontWeight: '700',
                fontSize: '15px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                Learn About Our Standards →
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Organic SVG Wave Divider */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0 }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: '100%', height: '40px', fill: '#FFFFFF' }}>
            <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

      </section>

      {/* 5. VISION & VALUES */}
      <section style={{ padding: 'clamp(56px, 7vw, 88px) 0', background: '#FFFFFF' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: '800', color: '#072834', marginBottom: '12px' }}>
              Vision & Core Values
            </h2>
            <p style={{ color: '#64748B', fontSize: '16px' }}>
              Guiding principles that drive our global packaging supply network.
            </p>
          </div>

          {/* 4-Column Card Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px'
          }}>
            {[
              { title: 'Quality Assurance', desc: '100% inspection and compliance with international dangerous goods & food-grade packaging standards.', icon: <ShieldCheck size={24} color="#00C2A8" /> },
              { title: 'Supply Chain Continuity', desc: 'Redundant multi-plant sourcing to guarantee uninterrupted delivery timelines.', icon: <RefreshCw size={24} color="#00C2A8" /> },
              { title: 'Cost Optimization', desc: 'Direct mill pricing with container space maximization to reduce landed costs.', icon: <Target size={24} color="#00C2A8" /> },
              { title: 'Sustainable Innovation', desc: 'Pioneering eco-friendly rPET fabrics and 100% recyclable mono-material bulk bags.', icon: <Sprout size={24} color="#00C2A8" /> }
            ].map((val, i) => (
              <div key={i} style={{
                background: '#F8FAFC',
                borderRadius: '16px',
                padding: '32px 24px',
                border: '1px solid #E2E8F0',
                transition: 'transform 0.2s'
              }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: '#E8F7F5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {val.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#072834', marginBottom: '10px' }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.6' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section style={{ padding: 'clamp(48px, 6vw, 72px) 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px auto' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: '800', color: '#072834', marginBottom: '10px' }}>
              Industries We Serve
            </h2>
            <p style={{ color: '#64748B', fontSize: '15px' }}>
              Customized flexible packaging solutions for diverse global sectors.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px'
          }}>
            {[
              { title: 'Chemicals & Resins', icon: <Factory size={22} color="#00C2A8" /> },
              { title: 'Agriculture & Grain', icon: <Sprout size={22} color="#00C2A8" /> },
              { title: 'Construction Materials', icon: <Building2 size={22} color="#00C2A8" /> },
              { title: 'Food & Pharma', icon: <Package size={22} color="#00C2A8" /> },
            ].map((ind, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '20px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: '#E8F7F5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {ind.icon}
                </div>
                <span style={{ fontSize: '15px', fontWeight: '700', color: '#072834' }}>
                  {ind.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
}