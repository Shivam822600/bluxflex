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
  Search,
  ClipboardCheck,
  Factory, 
  Building2,
  Wheat,
  Pill,
  Pickaxe,
  ShoppingBag,
  X
} from 'lucide-react';

// Product Category Images (existing assets)
import asset_C_Conductive_Bag from '../assets/images/C-Conductive-Bag-297x300.jpg?url';
import asset_leno_bag from '../assets/images/leno-bag.jpg?url';
import asset_printed_pp_woven from '../assets/images/printed-pp-woven-sack-upto-six-colors-297x300.png?url';
import asset_juteburlap_bags from '../assets/images/juteburlap_bags-300x300.png?url';
import asset_specialty_fabrics from '../assets/images/specialty_fabrics-300x300.png?url';
import asset_PP_shopping_bag from '../assets/images/PP-shopping-bag-297x300.jpg?url';
import asset_horticultural from '../assets/images/horticultural__landscaping-300x300.png?url';
import asset_liner_options from '../assets/images/fd6ea04a-aca5-4e3d-b574-738ee945af82-md-300x300.jpg?url';

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  const handleOpenQuote = (product = '') => {
    setSelectedProduct(product);
    setSubmitted(false);
    setModalOpen(true);
  };

  // ─── DATA ───────────────────────────────────────────────────────────

  const productCategories = [
    { title: 'FIBC Jumbo Bags', desc: 'Flexible Intermediate Bulk Containers for transporting dry bulk materials. Available in standard, conductive, UN-compliant, and baffle configurations.', image: asset_C_Conductive_Bag, path: '/product_category/fibc' },
    { title: 'Leno Bags & Fabrics', desc: 'Breathable mesh packaging for agricultural produce including potatoes, onions, and fresh vegetables. Available as bags, rolls, and flat fabric.', image: asset_leno_bag, path: '/product_category/leno-bags-febric' },
    { title: 'PP Woven Sacks', desc: 'Polypropylene woven sacks for grains, fertilizers, chemicals, and animal feed. Printed and unprinted options with various closure types.', image: asset_printed_pp_woven, path: '/product_category/pp-woven-sacks' },
    { title: 'Jute / Burlap', desc: 'Natural fiber packaging for agricultural commodities, coffee, cocoa, and eco-conscious brands. Sacks, bags, and fabric rolls available.', image: asset_juteburlap_bags, path: '/product_category/jute-burlap' },
    { title: 'Specialty Fabrics', desc: 'Technical woven and non-woven fabrics for construction, agriculture, and industrial applications. Includes house wrap, roofing underlayment, and rPET options.', image: asset_specialty_fabrics, path: '/product_category/specialty-febrics' },
    { title: 'Retail Shopping Bags', desc: 'Reusable and custom-printed PP woven and non-woven shopping bags for retail, grocery, and promotional use.', image: asset_PP_shopping_bag, path: '/product_category/retail-shoping-bags' },
    { title: 'Agro Textiles', desc: 'Shade nets, hail protection nets, crop covers, silage wrap, and ground cover fabrics for agricultural and horticultural applications.', image: asset_horticultural, path: '/product_category/agro-textiles' },
    { title: 'Container Liners', desc: 'Polypropylene and polyethylene container liners for shipping dry bulk and liquid cargo in standard 20ft and 40ft containers.', image: asset_liner_options, path: '/product_category/container-liners' },
  ];

  const whyCards = [
    { title: 'Single-Point Procurement', desc: 'We manage sourcing across multiple manufacturing partners so you deal with one contact, one invoice, one shipment.', icon: <ClipboardCheck size={24} color="#8DC63F" /> },
    { title: 'Quality Coordination', desc: 'Our team coordinates quality checks, production oversight, and pre-shipment inspections with each manufacturing facility.', icon: <ShieldCheck size={24} color="#8DC63F" /> },
    { title: 'Export Logistics', desc: 'Container loading optimization, export documentation, and shipping coordination to your destination port.', icon: <Truck size={24} color="#8DC63F" /> },
    { title: 'Custom Specifications', desc: 'Work with our team to define product specifications, printing, liners, closures, and construction types for your application.', icon: <Search size={24} color="#8DC63F" /> },
  ];

  const industries = [
    { title: 'Agriculture & Food', icon: <Wheat size={22} color="#8DC63F" /> },
    { title: 'Chemicals & Resins', icon: <Factory size={22} color="#8DC63F" /> },
    { title: 'Construction & Building', icon: <Building2 size={22} color="#8DC63F" /> },
    { title: 'Pharmaceuticals', icon: <Pill size={22} color="#8DC63F" /> },
    { title: 'Mining & Minerals', icon: <Pickaxe size={22} color="#8DC63F" /> },
    { title: 'Retail & Consumer', icon: <ShoppingBag size={22} color="#8DC63F" /> },
  ];

  const processSteps = [
    { num: '01', title: 'Requirement Analysis', desc: 'Share your product specifications, volumes, and delivery requirements with our team.' },
    { num: '02', title: 'Manufacturer Matching', desc: 'We identify and coordinate with the right manufacturing partners from our vetted network.' },
    { num: '03', title: 'Production Oversight', desc: 'Quality checks and production monitoring throughout the manufacturing process.' },
    { num: '04', title: 'Export & Delivery', desc: 'Container optimization, documentation, and logistics coordination to your destination.' },
  ];

  const faqs = [
    {
      q: 'What is an FIBC bag?',
      a: 'An FIBC (Flexible Intermediate Bulk Container) is a large industrial bag designed for storing and transporting dry bulk materials such as grains, chemicals, sand, and minerals. They typically hold between 500 kg and 2,000 kg and are also known as jumbo bags, big bags, or bulk bags.'
    },
    {
      q: 'Does BulkFlex manufacture the products?',
      a: 'No. BulkFlex is a sourcing and supply management company. We connect buyers with trusted manufacturing partners and manage the entire supply chain — from specification development and production coordination to quality checks and export logistics.'
    },
    {
      q: 'Which bag is right for my application?',
      a: 'The right packaging depends on your product type, weight, storage conditions, and handling requirements. Our team can help you select the appropriate bag type, construction, liner, and closure based on your specific application. Contact us with your requirements for a recommendation.'
    },
    {
      q: 'Do you provide custom specifications?',
      a: 'Yes. We coordinate custom bag dimensions, printing (up to 6 colors), liner options (PE, aluminum foil), various closure types (spout top, open top, duffle top), and construction options (standard, baffle, conductive, UN-compliant) based on your requirements.'
    },
    {
      q: 'Can you help with export and shipping requirements?',
      a: 'Yes. We handle container loading optimization, export documentation, and shipping coordination. We serve clients across North America, Europe, and Asia-Pacific regions.'
    },
    {
      q: 'What industries do you serve?',
      a: 'We supply industrial packaging for agriculture, food processing, chemicals, pharmaceuticals, construction, mining, and retail industries. Our product range covers FIBC bags, PP woven sacks, leno bags, jute/burlap products, container liners, specialty fabrics, agro textiles, and retail shopping bags.'
    },
    {
      q: 'What is the typical lead time?',
      a: 'Production lead time generally ranges from 2 to 4 weeks depending on order volume and customization requirements. Shipping duration varies by destination — for example, 18 to 25 days to US and European ports from India.'
    },
    {
      q: 'How can I request a quotation?',
      a: 'You can reach us through the Contact page on our website, or email us at info@bulkflex.com with your product requirements including specifications, quantity, and destination. Our team will respond with pricing and details.'
    },
  ];

  // ─── RENDER ─────────────────────────────────────────────────────────

  return (
    <Layout>

      {/* ════════════════════════════════════════════════════════════════
          1. HERO SECTION
          ════════════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, var(--brand-beige-light) 0%, #FFFFFF 40%, var(--brand-beige) 100%)',
        padding: 'clamp(80px, 10vw, 120px) 0 clamp(64px, 8vw, 100px)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Premium blurred orb accents */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(141,198,63,0.12) 0%, transparent 60%)',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', left: '-10%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20,46,61,0.04) 0%, transparent 60%)',
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="grid-auto-fit" style={{ gap: 'clamp(32px, 5vw, 64px)' }}>
            
            {/* Left: Content */}
            <div>
              <div className="badge badge-outline" style={{ marginBottom: '20px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#8DC63F' }} />
                Sourcing & Supply Partner
              </div>

              <h1 style={{ marginBottom: '24px', maxWidth: '600px', color: 'var(--brand-dark)' }}>
                Industrial Packaging, Sourced & Supplied Globally
              </h1>

              <p style={{ fontSize: 'clamp(1.125rem, 1.8vw, 1.25rem)', color: 'var(--text-body)', lineHeight: '1.8', marginBottom: '40px', maxWidth: '560px' }}>
                BulkFlex connects businesses with trusted manufacturing partners for FIBC bags, PP woven sacks, container liners, and industrial packaging solutions. We manage sourcing, quality coordination, and export logistics.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                <button onClick={() => handleOpenQuote()} className="btn btn-green btn-lg">
                  Request a Quote <ArrowRight size={18} />
                </button>
                <Link to="/products" className="btn btn-outline btn-lg">
                  Explore Products
                </Link>
              </div>

              {/* Trust Metrics */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '36px', paddingTop: '24px', borderTop: '1px solid var(--border-light)', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-heading)' }}>20+ Years</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Industrial Experience</div>
                </div>
                <div className="divider" />
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-heading)' }}>30+</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Vetted Manufacturers</div>
                </div>
                <div className="divider" />
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-heading)' }}>Global</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>Export Network</div>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '100%', maxWidth: '560px', aspectRatio: '4/3',
                background: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(20px)',
                borderRadius: 'var(--radius-2xl)',
                border: '1px solid rgba(255, 255, 255, 0.8)',
                boxShadow: 'var(--shadow-elevated)',
                padding: '32px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden'
              }}>
                {/* Supply Network Visualization */}
                <svg viewBox="0 0 800 500" style={{ width: '100%', height: '100%' }}>
                  {/* Routes */}
                  <path d="M 120 180 Q 250 140 460 270 T 700 200" fill="none" stroke="#8DC63F" strokeWidth="2" strokeDasharray="6 6" opacity="0.5" />
                  <path d="M 460 270 Q 300 350 200 320" fill="none" stroke="#8DC63F" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.35" />
                  <path d="M 460 270 Q 550 120 680 140" fill="none" stroke="#8DC63F" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.35" />
                  
                  {/* India Hub */}
                  <circle cx="460" cy="270" r="32" fill="rgba(141,198,63,0.1)">
                    <animate attributeName="r" values="24;36;24" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="460" cy="270" r="10" fill="#8DC63F" stroke="#FFFFFF" strokeWidth="3" />
                  <g transform="translate(460, 220)">
                    <rect x="-52" y="-16" width="104" height="30" rx="15" fill="#142E3D" />
                    <text x="0" y="3" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="700" fontFamily="Montserrat, sans-serif">INDIA HUB</text>
                  </g>

                  {/* Destination Nodes */}
                  {[
                    { x: 180, y: 170, label: 'EUROPE' },
                    { x: 680, y: 150, label: 'AMERICAS' },
                    { x: 660, y: 320, label: 'ASIA-PAC' },
                    { x: 220, y: 330, label: 'MIDDLE EAST' }
                  ].map((node, i) => (
                    <g key={i} transform={`translate(${node.x}, ${node.y})`}>
                      <circle r="6" fill="#8DC63F" />
                      <circle r="12" fill="rgba(141,198,63,0.15)" />
                      <text y="24" textAnchor="middle" fill="#6B7280" fontSize="10" fontWeight="700" fontFamily="Montserrat, sans-serif">
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


      {/* ════════════════════════════════════════════════════════════════
          2. COMPANY INTRODUCTION
          ════════════════════════════════════════════════════════════════ */}
      <section className="section-sm" style={{ background: 'var(--bg-primary)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '24px', color: 'var(--brand-dark)' }}>
            Your Sourcing & Supply Partner for Industrial Packaging
          </h2>
          <p style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', color: 'var(--text-body)', lineHeight: '1.8', maxWidth: '760px', margin: '0 auto' }}>
            BulkFlex Private Limited is a sourcing and supply management company specializing in flexible industrial packaging. We connect buyers with a network of vetted manufacturing partners and manage the complete supply chain — from specifications and production coordination to quality assurance and export logistics. We serve clients across North America, Europe, and Asia-Pacific.
          </p>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════
          3. WHY BULKFLEX (VALUE PROPOSITIONS)
          ════════════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why BulkFlex</span>
            <h2>How We Support Your Business</h2>
            <p>End-to-end sourcing and supply management designed to simplify your industrial packaging procurement.</p>
          </div>

          <div className="grid-4">
            {whyCards.map((card, i) => (
              <div key={i} className="card" style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column' }}>
                <div className="icon-box">
                  {card.icon}
                </div>
                <h4 style={{ marginBottom: '12px', color: 'var(--brand-dark)' }}>{card.title}</h4>
                <p className="text-sm" style={{ color: 'var(--text-body)', flex: 1 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════
          4. PRODUCT CATEGORIES
          ════════════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Product Range</span>
            <h2>What We Source & Supply</h2>
            <p>Industrial-grade flexible packaging solutions sourced through our network of trusted manufacturing partners.</p>
          </div>

          <div className="grid-auto-fill" style={{ gap: '32px' }}>
            {productCategories.map((cat, i) => (
              <Link key={i} to={cat.path} className="product-card" style={{ textDecoration: 'none' }}>
                <div className="product-card-img">
                  <img src={cat.image} alt={cat.title} loading={i < 4 ? 'eager' : 'lazy'} />
                </div>
                <div className="product-card-content">
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--brand-dark)' }}>{cat.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-body)', lineHeight: '1.7', flex: 1 }}>{cat.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                    <span className="link-arrow text-sm">
                      View Products <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════
          5. INDUSTRIES WE SERVE
          ════════════════════════════════════════════════════════════════ */}
      <section className="section-sm" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Industries</span>
            <h2>Industries We Serve</h2>
            <p>Flexible packaging solutions for diverse global sectors.</p>
          </div>

          <div className="grid-3" style={{ gap: '24px' }}>
            {industries.map((ind, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '20px',
                padding: '24px 32px', background: 'var(--bg-secondary)',
                borderRadius: 'var(--radius-xl)', border: '1px solid transparent',
                transition: 'all var(--transition-normal)'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.background = 'var(--bg-primary)';
                  e.currentTarget.style.borderColor = 'var(--brand-green)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.background = 'var(--bg-secondary)';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ padding: '12px', background: 'var(--brand-green-light)', borderRadius: '12px', color: 'var(--brand-green)' }}>
                  {ind.icon}
                </div>
                <span style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-heading)' }}>{ind.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════
          6. SUPPLY & SOURCING PROCESS
          ════════════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-dark)', color: 'var(--text-on-dark)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label" style={{ color: '#8DC63F' }}>Our Process</span>
            <h2 style={{ color: '#FFFFFF' }}>How We Work</h2>
            <p style={{ color: '#94A3B8' }}>From requirement to delivery — a streamlined sourcing and supply process.</p>
          </div>

          <div className="grid-4" style={{ gap: '32px' }}>
            {processSteps.map((step, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '32px 24px', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--radius-xl)', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--brand-green), var(--brand-green-hover))',
                  boxShadow: '0 8px 24px rgba(141, 198, 63, 0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px', fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-dark)'
                }}>
                  {step.num}
                </div>
                <h4 style={{ color: '#FFFFFF', marginBottom: '12px' }}>{step.title}</h4>
                <p className="text-sm" style={{ color: 'var(--text-on-dark-muted)', lineHeight: '1.7' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════
          7. GLOBAL SUPPLY REACH
          ════════════════════════════════════════════════════════════════ */}
      <section className="section-sm" style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="grid-auto-fit" style={{ gap: 'clamp(32px, 5vw, 64px)' }}>
            <div>
              <span className="section-label" style={{ display: 'block', marginBottom: '8px' }}>Global Reach</span>
              <h2 style={{ marginBottom: '16px' }}>Supply Network Across Key Markets</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px' }}>
                With a network of over 30 vetted manufacturers, BulkFlex coordinates sourcing, production, and export logistics across key global markets. Our team manages the complete supply chain so you can focus on your business.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Sourcing hub based in India', 'Clients across North America, Europe, and Asia-Pacific', 'Multi-supplier order consolidation', 'Container loading optimization'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9375rem', color: 'var(--text-body)' }}>
                    <CheckCircle2 size={18} color="#8DC63F" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="stat-card" style={{ flexDirection: 'column', textAlign: 'center', gap: '16px', padding: '40px', width: '100%', maxWidth: '360px' }}>
                <Globe size={40} color="#8DC63F" />
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-heading)' }}>3</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '4px' }}>Major Regions Served</div>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>North America · Europe · Asia-Pacific</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════
          8. FAQ SECTION
          ════════════════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container-narrow">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our products, sourcing process, and services.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} className="accordion-item">
                <button className="accordion-trigger" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <ChevronDown 
                    size={18} color="#8DC63F" 
                    style={{ transform: openFaq === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s', flexShrink: 0 }} 
                  />
                </button>
                {openFaq === idx && (
                  <div className="accordion-content">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════
          9. CONTACT CTA BANNER
          ════════════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, var(--brand-dark-deep) 0%, var(--brand-dark) 100%)',
        color: '#FFFFFF', padding: 'clamp(80px, 10vw, 120px) 0',
        textAlign: 'center', position: 'relative', overflow: 'hidden'
      }}>
        {/* Subtle accent */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px', height: '800px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(141,198,63,0.15) 0%, transparent 50%)',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ maxWidth: '720px', position: 'relative', zIndex: 2 }}>
          <h2 style={{ color: '#FFFFFF', marginBottom: '16px', fontSize: 'clamp(1.5rem, 4vw, 2.25rem)' }}>
            Ready to Discuss Your Packaging Requirements?
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '1.0625rem', lineHeight: '1.7', marginBottom: '32px' }}>
            Share your specifications and our team will coordinate with manufacturing partners to provide pricing and product details.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button onClick={() => handleOpenQuote()} className="btn btn-green btn-lg">
              Request a Quote
            </button>
            <Link to="/contact-us-2" className="btn btn-ghost">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>


      {/* ════════════════════════════════════════════════════════════════
          QUOTE REQUEST MODAL
          ════════════════════════════════════════════════════════════════ */}
      {modalOpen && (
        <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) setModalOpen(false); }}>
          <div className="modal-content">
            <button className="modal-close" onClick={() => setModalOpen(false)} aria-label="Close">
              <X size={18} />
            </button>

            {!submitted ? (
              <>
                <div style={{ marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '6px' }}>
                    Request a Quote
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {selectedProduct 
                      ? `Inquiry for: ${selectedProduct}` 
                      : 'Share your requirements and we will get back to you with details.'}
                  </p>
                </div>

                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input type="text" required placeholder="Your name" className="form-input" />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input type="email" required placeholder="email@company.com" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input type="tel" placeholder="+1 (555) 000-0000" className="form-input" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Requirements</label>
                    <textarea 
                      rows="3" 
                      placeholder="Product type, specifications, quantity, destination..."
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '4px' }}>
                    Submit Request
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div className="icon-box icon-box-circle" style={{ width: '64px', height: '64px', margin: '0 auto 20px' }}>
                  <CheckCircle2 size={32} color="#8DC63F" />
                </div>
                <h3 style={{ marginBottom: '8px' }}>Request Received</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>
                  Our team will review your requirements and respond with details. Thank you for your inquiry.
                </p>
                <button onClick={() => setModalOpen(false)} className="btn btn-green btn-sm">
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </Layout>
  );
}