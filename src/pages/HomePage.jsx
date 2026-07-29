import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import Reveal from '../components/ui/Reveal';
import Counter from '../components/ui/Counter';
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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
  Building2,
  MapPin,
  Sparkles
} from 'lucide-react';

// Product Image Assets
import asset_C_Conductive_Bag from '../assets/images/official/C-Conductive-Bag.jpg?url';
import asset_Diaper_Bag_1 from '../assets/images/official/Diaper-Bag-1.jpg?url';
import asset_Un_Bags from '../assets/images/official/Un-Bags.jpg?url';
import asset_Diaper_Bag from '../assets/images/official/Diaper-Bag.jpg?url';
import asset_RASCHEL_BAGS from '../assets/images/official/RASCHEL-BAGS-FABRIC.png?url';
import asset_LENO_FLAT_FABRIC from '../assets/images/official/LENO-FLAT-FABRIC-_-ROLLS.png?url';
import asset_leno_bag from '../assets/images/official/leno-bag.jpeg?url';
import asset_wileted_leno_bag from '../assets/images/official/wileted-leno-bag.jpeg?url';
import asset_printed_pp_woven from '../assets/images/official/printed-pp-woven-sack-upto-six-colors.png?url';
import asset_liner_options from '../assets/images/official/fd6ea04a-aca5-4e3d-b574-738ee945af82.jpeg?url';
import asset_bottom_construction from '../assets/images/official/a4da6e12-8b22-4896-929b-815191c46974.png?url';
import asset_juteburlap_bags from '../assets/images/official/juteburlap_bags.png?url';
import asset_jutesacks_printed from '../assets/images/official/jutesacks__printedbags.png?url';
import asset_horticultural from '../assets/images/official/horticultural__landscaping.png?url';
import asset_specialty_fabrics from '../assets/images/official/specialty_fabrics.png?url';
import asset_Monofilament_Fabrics from '../assets/images/official/Monofilament-Fabrics.jpg?url';
import asset_rPET_Fabrics from '../assets/images/official/rPET-Fabrics.jpg?url';
import asset_Lumber_Cover_Fabrics from '../assets/images/official/Lumber-Cover-Fabrics.jpg?url';
import asset_PP_shopping_bag from '../assets/images/official/PP-shopping-bag.jpg?url';
import asset_roofing_underlayment from '../assets/images/official/roofing_underlayment.png?url';
import asset_Company_Overview from '../assets/images/official/Company-Overview.png?url';
import asset_Manufacturing from '../assets/images/official/Manufacturing.png?url';

export default function HomePage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [heroLangOpen, setHeroLangOpen] = useState(false);
  const [selectedHeroLang, setSelectedHeroLang] = useState('EN - English');
  const [openFaq, setOpenFaq] = useState(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState('');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 280;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevCategory = () => {
    const nextTab = activeTab > 0 ? activeTab - 1 : categories.length - 1;
    setActiveTab(nextTab);
  };

  const handleNextCategory = () => {
    const nextTab = activeTab < categories.length - 1 ? activeTab + 1 : 0;
    setActiveTab(nextTab);
  };


  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleOpenQuote = (productName = '') => {
    setSelectedProductForQuote(productName);
    setQuoteSubmitted(false);
    setInquiryModalOpen(true);
  };

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

  const faqs = [
    {
      q: 'What is an FIBC?',
      a: 'FIBC stands for Flexible Intermediate Bulk Container. They are more commonly known as Bulk Bags, BIG BAGS, FIBC, or JUMBO BAGS. The packages are classified as intermediate containers because of their size, typically having filled weights between about 500 kgs to 2000 kgs. Use of FIBCs today permeates nearly all industries where dry bulk solids are handled, including food, chemicals, and pharmaceuticals.'
    },
    {
      q: 'What is a bulk bag made from?',
      a: 'The most common material used in FIBC construction is 100% virgin polypropylene as per international standards.'
    },
    {
      q: 'What is woven polypropylene made from?',
      a: 'Woven polypropylene is made from extruded resin turned into tapes, which are then woven to make the fabric.'
    },
    {
      q: 'What sizes do bulk bags come in?',
      a: 'Bulk bags come in many different sizes and styles and can be customized as per your needs. For suggestions, contact Bulk Flex at info@bulkflex.com.'
    },
    {
      q: 'What does SWL mean?',
      a: 'SWL is an abbreviation for safe working load. A bulk bag’s safe working load is the amount of weight that the bag is rated and tested to hold and function safely.'
    },
    {
      q: 'What does 5:1 SF mean?',
      a: 'A standard bulk bag is rated at a 5:1 Safety Factor Ratio, which means that the bag is specified to hold 5 times the amount of the bag\'s safe working load or withstand 5 times the force during transportation. A 5:1 Safety Ratio is for single use. Bags designed for multi-use or multi-trip applications are made with an increased SF ratio (typically 6:1).'
    },
    {
      q: 'Can bulk bags be stored outside?',
      a: 'Yes, however, bulk bags will degrade as a result of UV exposure. A standard bulk bag has a UV inhibitor/mix added into the fabric during manufacturing. It is always advisable to specify the outdoor exposure requirements when placing your order.'
    },
    {
      q: 'What types of FIBCs are available and what applications are FIBCs (bulk bags) typically used for?',
      a: 'There are many common types of FIBCs available in the market. The most commonly used bulk bags are constructed in the U-Panel or Circular configurations and might incorporate a simple PE liner or no liner at all.'
    }
  ];

  return (
    <Layout>
      {/* 1. HERO SECTION */}
      <section style={{ background: 'linear-gradient(180deg, #FBF1E6 0%, #FFFFFF 100%)', paddingTop: 'clamp(56px, 7vw, 88px)', paddingBottom: 'clamp(56px, 7vw, 88px)' }}>
        <div className="container">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] items-center">

            {/* Hero Left Content */}
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider" style={{ color: 'var(--color-brand-green)' }}>
                  <span className="w-6 h-px" style={{ background: 'var(--color-brand-green)' }} />
                  {t('heroTag')}
                </span>
              </Reveal>

              <Reveal delay={0.08}>
                <h1
                  className="font-heading font-extrabold mt-5"
                  style={{ fontSize: 'clamp(34px, 4.6vw, 52px)', lineHeight: 1.12, color: 'var(--color-brand-dark)' }}
                >
                  {t('heroTitle')}
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-6 max-w-lg text-[17px] font-semibold leading-relaxed" style={{ color: 'var(--color-brand-dark)' }}>
                  {t('heroDesc')}
                </p>
                {t('heroDescSub1') && (
                  <p className="mt-4 max-w-lg text-[14px] leading-relaxed" style={{ color: '#64748B' }}>
                    {t('heroDescSub1')}
                  </p>
                )}
                {t('heroDescSub2') && (
                  <p className="mt-2 max-w-lg text-[14px] leading-relaxed" style={{ color: '#64748B' }}>
                    {t('heroDescSub2')}
                  </p>
                )}
              </Reveal>

              <Reveal delay={0.22}>
                <p className="mt-4 font-heading font-medium text-[14px]" style={{ color: '#64748B' }}>
                  {t('heroTagline')}
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    to="/about-us"
                    className="inline-flex items-center gap-2 rounded-lg font-bold text-[15px] px-7 py-3.5 transition-transform hover:-translate-y-0.5"
                    style={{ background: 'var(--color-brand-dark)', color: '#FFFFFF' }}
                  >
                    {t('heroCtaPrimary')}
                  </Link>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 rounded-lg font-bold text-[15px] px-7 py-3.5 border transition-colors hover:bg-white"
                    style={{ borderColor: 'var(--color-brand-dark)', color: 'var(--color-brand-dark)' }}
                  >
                    {t('heroCtaSecondary')}
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Hero Right — Global Network Graphic (no single country emphasized) */}
            <Reveal delay={0.2}>
              <div
                className="relative rounded-2xl p-6"
                style={{ background: '#FFFFFF', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-card)' }}
              >
                <svg viewBox="0 0 800 520" className="w-full h-auto">
                  {/* World dot texture — neutral, no country emphasized */}
                  <circle cx="400" cy="260" r="200" fill="none" stroke="rgba(20,46,61,0.06)" strokeWidth="1.5" strokeDasharray="1 7" />

                  {/* Connection routes between equal-weight regional nodes */}
                  <path d="M 160 190 Q 280 140 400 260 T 630 210" fill="none" stroke="var(--color-brand-green)" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.5" />
                  <path d="M 400 260 Q 300 360 220 340" fill="none" stroke="var(--color-brand-green)" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.4" />
                  <path d="M 400 260 Q 520 130 610 160" fill="none" stroke="var(--color-brand-green)" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.4" />
                  <path d="M 400 260 Q 450 350 540 380" fill="none" stroke="var(--color-brand-green)" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.4" />

                  {/* Regional nodes — equal size, equal visual weight */}
                  {[
                    { x: 400, y: 260, label: 'SOURCING NETWORK' },
                    { x: 160, y: 190, label: 'EUROPE' },
                    { x: 630, y: 210, label: 'AMERICAS' },
                    { x: 220, y: 340, label: 'MIDDLE EAST' },
                    { x: 540, y: 380, label: 'APAC' },
                  ].map((node, i) => (
                    <g key={i} transform={`translate(${node.x}, ${node.y})`}>
                      <circle r={i === 0 ? 9 : 7} fill={i === 0 ? 'var(--color-brand-dark)' : 'var(--color-brand-green)'} stroke="#FFFFFF" strokeWidth="2.5" />
                      <text y={i === 0 ? -18 : 22} textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="700" fontFamily="Manrope, sans-serif">{node.label}</text>
                    </g>
                  ))}
                </svg>


              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 2. STATS ROW */}
      <section style={{ background: '#FFFFFF', padding: '48px 0', borderBottom: '1px solid #F1F5F9' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '32px'
          }}>
            {[
              { number: '20+', label: 'Years Industrial Experience', icon: <Award color="#8DC63F" size={26} /> },
              { number: '30+', label: 'Vetted Manufacturers Network', icon: <ShieldCheck color="#8DC63F" size={26} /> },
              { number: 'Multi-SKU', label: 'Container Optimization', icon: <Truck color="#8DC63F" size={26} /> },
            ].map((stat, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '20px 28px',
                background: '#FBF1E6',
                borderRadius: '20px',
                border: '1px solid #E2E8F0',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(7,40,52,0.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '16px',
                  background: '#F0F7E4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: '800', color: '#142E3D', lineHeight: '1.15' }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '13px', color: '#64748B', fontWeight: '600', marginTop: '2px' }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS SECTION */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 0', background: '#FBF1E6' }}>
        <div className="container">

          {/* Centered Heading */}
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 44px auto' }}>
            <span style={{ color: '#8DC63F', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Industrial Grade Range
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 42px)', fontWeight: '800', color: '#142E3D', marginTop: '6px', marginBottom: '12px' }}>
              Our Product Portfolio
            </h2>
            <p style={{ color: '#64748B', fontSize: '16px' }}>
              Engineered flexible packaging solutions adhering to global ISO & UN safety specifications.
            </p>
          </div>

          {/* Horizontal Scrollable Filter Pills with Carousel Navigation Controls */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '44px' }}>

            {/* Left Carousel Arrow */}
            <button
              onClick={() => {
                handleScroll('left');
                handlePrevCategory();
              }}
              aria-label="Previous Category"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                color: '#142E3D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#142E3D';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = '#142E3D';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.color = '#142E3D';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Scrollable Container for Pills */}
            <div
              ref={scrollContainerRef}
              className="categories-scroll-wrapper"
              style={{
                display: 'flex',
                gap: '12px',
                overflowX: 'auto',
                padding: '6px 4px 12px 4px',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                flexGrow: 1
              }}
            >
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    background: activeTab === idx ? '#142E3D' : '#FFFFFF',
                    color: activeTab === idx ? '#FFFFFF' : '#475569',
                    border: activeTab === idx ? 'none' : '1px solid #E2E8F0',
                    padding: '13px 26px',
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '14px',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    boxShadow: activeTab === idx ? '0 8px 24px rgba(7,40,52,0.25)' : '0 2px 8px rgba(0,0,0,0.02)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Right Carousel Arrow */}
            <button
              onClick={() => {
                handleScroll('right');
                handleNextCategory();
              }}
              aria-label="Next Category"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                color: '#142E3D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#142E3D';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = '#142E3D';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.color = '#142E3D';
                e.currentTarget.style.borderColor = '#E2E8F0';
              }}
            >
              <ChevronRight size={20} />
            </button>

          </div>


          {/* 4-Column Responsive Product Card Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '28px'
          }}>
            {productsData[activeTab]?.map((prod, idx) => (
              <div
                key={idx}
                className="product-card-premium"
              >
                {/* Product Image Container */}
                <div className="img-container" style={{ height: '230px', background: '#F1F5F9', position: 'relative' }}>
                  <img
                    src={prod.image}
                    alt={prod.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {/* Subtle Badge Overlay */}
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
                    Export Grade
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', height: 'calc(100% - 230px)', justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#142E3D', marginBottom: '8px' }}>
                      {prod.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.55', marginBottom: '20px' }}>
                      {prod.desc}
                    </p>
                  </div>

                  {/* Actions Row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '16px' }}>
                    <button
                      onClick={() => handleOpenQuote(prod.title)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#8DC63F',
                        fontWeight: '800',
                        fontSize: '13px',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      Get Spec & Quote →
                    </button>
                    <Link
                      to={prod.link}
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '50%',
                        background: '#F0F7E4',
                        color: '#142E3D',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#8DC63F';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#F0F7E4';
                        e.currentTarget.style.color = '#142E3D';
                      }}
                    >
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. STORYTELLING SECTION (Hidden legacy) */}
      <section style={{ display: 'none', position: 'relative', background: '#142E3D', color: '#FFFFFF', padding: '96px 0' }}>

        {/* Top Organic SVG Wave Divider */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0, transform: 'rotate(180deg)' }}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: '100%', height: '40px', fill: '#FBF1E6' }}>
            <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>

          {/* Row 1: Image Left, Text Right */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center',
            marginBottom: '80px'
          }}>
            <div style={{ position: 'relative' }}>
              <img
                src={asset_Company_Overview}
                alt="BulkFlex Manufacturing Facility"
                style={{ width: '100%', borderRadius: '24px', boxShadow: '0 25px 50px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.12)' }}
              />
              <div
                className="glass-card-dark"
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  padding: '16px 24px',
                  borderRadius: '16px',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.3)'
                }}
              >
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#8DC63F' }}>Multi-Plant Sourcing</div>
                <div style={{ fontSize: '12px', color: '#CBD5E1' }}>Integrated Quality Assurance</div>
              </div>
            </div>

            <div>
              <span style={{ color: '#8DC63F', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.2px' }}>
                End-to-End Execution
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 42px)', fontWeight: '800', marginTop: '12px', marginBottom: '22px', lineHeight: '1.2' }}>
                Single-Point Control for Multi-Supplier Chains
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: '1.7', marginBottom: '28px' }}>
                Managing multiple Asian suppliers can be fragmented and unpredictable. BulkFlex coordinates vetted manufacturing partners to deliver consistent quality, optimized container loading, and total transparency under one unified management system.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {['Rigorous factory audits & quality checks', 'Multi-SKU container loading optimization', 'Real-time production and shipment tracking'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: '#E2E8F0' }}>
                    <CheckCircle2 size={20} color="#8DC63F" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: Text Left, Image Right */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(32px, 5vw, 64px)',
            alignItems: 'center'
          }}>
            <div style={{ order: 2 }}>
              <img
                src={asset_Manufacturing}
                alt="Quality Assurance and Testing"
                style={{ width: '100%', borderRadius: '24px', boxShadow: '0 25px 50px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.12)' }}
              />
            </div>
            <div style={{ order: 1 }}>
              <span style={{ color: '#8DC63F', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.2px' }}>
                Compliance & Quality
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 42px)', fontWeight: '800', marginTop: '12px', marginBottom: '22px', lineHeight: '1.2' }}>
                Built to International Safety Standards
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: '1.7', marginBottom: '28px' }}>
                From UN-certified dangerous goods containers to food-grade cleanroom FIBCs, every product undergoes strict physical testing, tensile strength evaluation, and UV resistance inspection prior to dispatch.
              </p>
              <Link to="/about-us" style={{
                color: '#8DC63F',
                fontWeight: '800',
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

      {/* 5. SOURCING MANAGED END TO END */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 0', background: '#FFFFFF' }}>
        <div className="container">

          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 52px auto' }}>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 42px)', fontWeight: '800', color: '#142E3D', marginBottom: '12px' }}>
              Sourcing Managed End to End
            </h2>
            <p style={{ color: '#64748B', fontSize: '16px' }}>
              BulkFlex manages sourcing and supply — matching buyers to vetted manufacturing partners and coordinating quality checks.
            </p>
          </div>

          {/* 4-Column Card Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '28px'
          }}>
            {[
              { title: 'Quality Assurance', desc: 'Inspection and compliance checks aligned with international dangerous goods & food-grade packaging standards.', icon: <ShieldCheck size={26} color="#8DC63F" /> },
              { title: 'Supply Chain Continuity', desc: 'Multi-plant sourcing designed to support consistent delivery timelines.', icon: <RefreshCw size={26} color="#8DC63F" /> },
              { title: 'Cost Optimization', desc: 'Direct mill pricing with container space optimization to help reduce landed costs.', icon: <Target size={26} color="#8DC63F" /> }
            ].map((val, i) => (
              <div key={i} style={{
                background: '#FBF1E6',
                borderRadius: '20px',
                padding: '36px 28px',
                border: '1px solid #E2E8F0',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(7,40,52,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: '#F0F7E4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '22px'
                }}>
                  {val.icon}
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: '800', color: '#142E3D', marginBottom: '10px' }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.65' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section style={{ padding: 'clamp(56px, 7vw, 80px) 0', background: '#FBF1E6', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">

          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 44px auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: '800', color: '#142E3D', marginBottom: '10px' }}>
              Industries We Serve
            </h2>
            <p style={{ color: '#64748B', fontSize: '15px' }}>
              Customized flexible packaging solutions for diverse global sectors.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px'
          }}>
            {[
              { title: 'Chemicals & Resins', icon: <Factory size={24} color="#8DC63F" /> },
              { title: 'Agriculture & Grain', icon: <Sprout size={24} color="#8DC63F" /> },
              { title: 'Construction Materials', icon: <Building2 size={24} color="#8DC63F" /> },
              { title: 'Food & Pharma', icon: <Package size={24} color="#8DC63F" /> },
            ].map((ind, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                boxShadow: '0 6px 16px rgba(0,0,0,0.03)',
                transition: 'transform 0.2s'
              }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: '#F0F7E4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {ind.icon}
                </div>
                <span style={{ fontSize: '16px', fontWeight: '800', color: '#142E3D' }}>
                  {ind.title}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. INTERACTIVE FAQ ACCORDION */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 0', background: '#FBF1E6', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 42px)', fontWeight: '800', color: '#142E3D', marginBottom: '12px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#64748B', fontSize: '16px' }}>
              Everything you need to know about our sourcing, quality, and shipping workflow.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E2E8F0',
                  overflow: 'hidden',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.02)'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '22px 28px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '17px',
                    fontWeight: '800',
                    color: '#142E3D'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    color="#8DC63F"
                    style={{
                      transform: openFaq === idx ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                      marginLeft: '16px'
                    }}
                  />
                </button>

                {openFaq === idx && (
                  <div style={{ padding: '0 28px 24px 28px', color: '#475569', fontSize: '15px', lineHeight: '1.65', borderTop: '1px solid #F1F5F9', paddingTop: '18px' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. RFQ CTA BANNER */}
      <section style={{
        background: 'linear-gradient(135deg, #142E3D 0%, #0D3B43 100%)',
        color: '#FFFFFF',
        padding: '80px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ maxWidth: '760px', position: 'relative', zIndex: 2 }}>
          <h2 style={{ fontSize: 'clamp(30px, 4.5vw, 46px)', color: '#fff', fontWeight: '800', marginBottom: '18px', fontFamily: 'var(--font-heading)' }}>
            Ready to Optimize Your Industrial Packaging Supply?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '17px', lineHeight: '1.65', marginBottom: '36px' }}>
            Get factory-direct quotes, custom engineering specs, and full container shipping schedules within 24 hours.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '18px', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleOpenQuote()}
              style={{
                background: '#8DC63F',
                color: '#142E3D',
                padding: '16px 36px',
                borderRadius: '50px',
                fontWeight: '800',
                fontSize: '15px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0, 194, 168, 0.35)',
                transition: 'transform 0.2s'
              }}
            >
              Request Quick Inquiry
            </button>
            <Link
              to="/buyer-tools"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                padding: '16px 36px',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '15px',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.2s'
              }}
            >
              Explore Buyer Tools
            </Link>
          </div>
        </div>
      </section>


      {/* 10. FAST INQUIRY / QUOTE MODAL */}
      {inquiryModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(7, 40, 52, 0.75)',
          backdropFilter: 'blur(4px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            maxWidth: '520px',
            width: '100%',
            padding: '32px',
            position: 'relative',
            boxShadow: '0 24px 60px rgba(0,0,0,0.3)'
          }}>
            <button
              onClick={() => setInquiryModalOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#F1F5F9',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontWeight: '700',
                color: '#64748B'
              }}
            >
              ✕
            </button>

            {!quoteSubmitted ? (
              <>
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#142E3D', marginBottom: '8px' }}>
                    Request B2B Quote
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748B' }}>
                    {selectedProductForQuote
                      ? `Inquiring for: ${selectedProductForQuote}`
                      : 'Fill in your requirements for rapid pricing & specifications.'}
                  </p>
                </div>

                <form onSubmit={(e) => {
                  e.preventDefault();
                  setQuoteSubmitted(true);
                }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#142E3D', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#142E3D', marginBottom: '6px' }}>
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#142E3D', marginBottom: '6px' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid #CBD5E1',
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#142E3D', marginBottom: '6px' }}>
                      Packaging Requirements / Estimated Quantity
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Describe bag specifications, dimensions, quantity, or target port..."
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'none'
                      }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: '#142E3D',
                      color: '#FFFFFF',
                      padding: '14px',
                      borderRadius: '50px',
                      fontWeight: '700',
                      fontSize: '15px',
                      border: 'none',
                      cursor: 'pointer',
                      marginTop: '8px',
                      boxShadow: '0 8px 20px rgba(7,40,52,0.2)'
                    }}
                  >
                    Submit RFQ
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#F0F7E4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}>
                  <CheckCircle2 size={36} color="#8DC63F" />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#142E3D', marginBottom: '8px' }}>
                  Quote Request Received!
                </h3>
                <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '24px' }}>
                  Our global packaging engineers will review your request and send pricing within 24 business hours.
                </p>
                <button
                  onClick={() => setInquiryModalOpen(false)}
                  style={{
                    background: '#8DC63F',
                    color: '#142E3D',
                    padding: '12px 28px',
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '14px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Close Window
                </button>
              </div>
            )}

          </div>
        </div>
      )}
    </Layout>
  );
}