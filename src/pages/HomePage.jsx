import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useLanguage } from '../context/LanguageContext';
import Reveal from '../components/ui/Reveal';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Globe,
  Award,
  ShieldCheck,
  Truck,
  CheckCircle2,
  Package,
  Target,
  Sprout,
  Factory,
  Building2,
  MapPin,
  X
} from 'lucide-react';

// ─── Hero Graphic (Pure Cutout Packaging: FIBC Jumbo Bag, Boxes, Kraft Sacks) ─
import heroPackagingCutout from '../assets/images/home-main-image.png?url';

// ─── Product Image Assets (official folder) ───────────────────────────────────
// FIBC / Jumbo Bags
import asset_un_bag_actual from '../assets/images/official/C-Conductive-Bag.jpg?url';
import asset_diaper_bag_actual from '../assets/images/official/Diaper-Bag-1.jpg?url';
import asset_conductive_bag_actual from '../assets/images/official/Un-Bags.jpg?url';
import asset_baffle_bag_actual from '../assets/images/official/Diaper-Bag.jpg?url';

// Leno
import asset_RASCHEL_BAGS from '../assets/images/official/RASCHEL-BAGS-FABRIC.png?url';
import asset_LENO_FLAT_FABRIC from '../assets/images/official/LENO-FLAT-FABRIC-_-ROLLS.png?url';
import asset_leno_bag from '../assets/images/official/leno-bag.jpeg?url';
import asset_wileted_leno_bag from '../assets/images/official/wileted-leno-bag.jpeg?url';

// PP Woven
import asset_printed_pp_woven from '../assets/images/official/printed-pp-woven-sack-upto-six-colors.png?url';
import asset_liner_options from '../assets/images/official/fd6ea04a-aca5-4e3d-b574-738ee945af82.jpeg?url';
import asset_bottom_construction from '../assets/images/official/a4da6e12-8b22-4896-929b-815191c46974.png?url';
import asset_top_finish from '../assets/images/top_finish.png?url';

// Jute / Burlap
import asset_juteburlap_bags from '../assets/images/official/juteburlap_bags.png?url';
import asset_jutesacks_printed from '../assets/images/official/jutesacks__printedbags.png?url';
import asset_horticultural from '../assets/images/official/horticultural__landscaping.png?url';
import asset_jutetwine from '../assets/images/official/jutetwine__cord.png?url';

// Specialty Fabrics
import asset_Monofilament_Fabrics from '../assets/images/official/Monofilament-Fabrics.jpg?url';
import asset_rPET_Fabrics from '../assets/images/official/rPET-Fabrics.jpg?url';
import asset_Lumber_Cover_Fabrics from '../assets/images/official/Lumber-Cover-Fabrics.jpg?url';
import asset_woven_specialty_fabrics from '../assets/images/official/specialty_fabrics.png?url';

// Retail
import asset_PP_shopping_bag from '../assets/images/official/PP-shopping-bag.jpg?url';
import asset_jute_shopping_bag from '../assets/images/juth_shopping_bag.png?url';
import asset_paper_bag_twisted_handle from '../assets/images/paper_bag_with_twisted_handle.png?url';
import asset_white_bleached_flat_handle from '../assets/images/white_bleached_flat_handle.png?url';

// Agro Textiles
import asset_hail_nets from '../assets/images/official/hail_nets.png?url';
import asset_roofing_underlayment from '../assets/images/official/roofing_underlayment.png?url';
import asset_house_wrap from '../assets/images/official/house_wrap.png?url';
import asset_silage_wrap from '../assets/images/official/SILAGE-WRAP-BALE-WRAP.jpg?url';

// Retail — additional
import asset_retail_friendly from '../assets/images/official/Retail-Friendly-Packaging.jpg?url';




// ─── WhatsApp Floating Button ─────────────────────────────────────────────────
function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '86px',
        right: '24px',
        zIndex: 9990,
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      <div
        style={{
          background: '#142E3D',
          color: '#FFFFFF',
          fontSize: '12.5px',
          fontWeight: '700',
          padding: '6px 12px',
          borderRadius: '10px',
          boxShadow: '0 8px 24px rgba(20,46,61,0.25)',
          border: '1px solid rgba(37, 211, 102, 0.35)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          opacity: showTooltip ? 1 : 0,
          transform: showTooltip ? 'translateX(0)' : 'translateX(6px)',
          transition: 'opacity 0.2s, transform 0.2s',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}
      >
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#25D366' }} />
        Chat on WhatsApp
      </div>

      <a
        href="https://wa.me/919898398989"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with BulkFlex on WhatsApp"
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(37,211,102,0.4)',
          transition: 'transform 0.2s, box-shadow 0.2s',
          textDecoration: 'none'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.boxShadow = '0 12px 30px rgba(37,211,102,0.55)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,0.4)';
        }}
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 24 24" width="28" height="28" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.526 5.855L.057 23.882a.5.5 0 00.61.61l6.102-1.518A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.93 0-3.74-.522-5.293-1.432l-.38-.222-3.933.977.998-3.85-.248-.397A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </a>
    </div>
  );
}

// ─── Clean Packaging Visual (Pure Transparent Cutout) ─────────────────────────
function GlobalSourcingGraphic() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <img
        src={heroPackagingCutout}
        alt="BulkFlex Industrial Packaging Products - FIBC Jumbo Bag, Kraft Sacks, Corrugated Boxes"
        style={{
          width: '100%',
          maxWidth: '580px',
          height: 'auto',
          maxHeight: '380px',
          objectFit: 'contain',
          display: 'block',
          mixBlendMode: 'multiply',
          filter: 'contrast(1.04) brightness(1.01)'
        }}
        loading="eager"
      />
    </div>
  );
}

// ─── Product Card Image with Shimmer Skeleton ────────────────────────────────
function ProductCardImage({ src, alt }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <div style={{
      height: '240px',
      background: '#FFFFFF',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Shimmer Skeleton Placeholder */}
      {!isLoaded && (
        <div
          className="image-skeleton"
          style={{
            position: 'absolute',
            inset: '16px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1
          }}
        >
          <Package size={30} color="#94A3B8" style={{ opacity: 0.5 }} />
        </div>
      )}

      {/* Actual Product Image */}
      <img
        src={src}
        alt={alt}
        loading="eager"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'scale(1)' : 'scale(0.96)',
          transition: 'opacity 0.28s ease, transform 0.28s ease',
          position: 'relative',
          zIndex: 2
        }}
      />
    </div>
  );
}

// ─── Main HomePage Component ───────────────────────────────────────────────────
export default function HomePage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState('');
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -280 : 280,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevCategory = () => {
    setActiveTab((prev) => (prev > 0 ? prev - 1 : categories.length - 1));
  };
  const handleNextCategory = () => {
    setActiveTab((prev) => (prev < categories.length - 1 ? prev + 1 : 0));
  };

  const handleOpenQuote = (productName = '') => {
    setSelectedProductForQuote(productName);
    setQuoteSubmitted(false);
    setInquiryModalOpen(true);
  };

  // ── Product categories & data ───────────────────────────────────────────────
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
      {
        title: 'UN Bag',
        desc: 'Our UN Certified Bags are designed for the safe and...',
        image: asset_un_bag_actual,
        link: '/product/un-bags'
      },

      {
        title: 'Diaper Bag',
        desc: 'We provide high-performance Diaper Bags that are specially designed to...',
        image: asset_diaper_bag_actual,
        link: '/product/diaper-bag'
      },

      {
        title: 'Conductive Bag',
        desc: 'Our Conductive Bags are designed to eliminate the risks associated...',
        image: asset_conductive_bag_actual,
        link: '/product/c-conductive-bag'
      },

      {
        title: 'Baffle Bags',
        desc: 'We offer premium-quality Baffle Bags that are specially engineered to...',
        image: asset_baffle_bag_actual,
        link: '/product/baffle-bags'
      },
    ],
    // Leno Bags & Fabric
    [
      { title: 'Raschel Bags & Fabric', desc: 'What is a Raschel Bag? Raschel bags are knitted —...', image: asset_RASCHEL_BAGS, link: '/product/raschel-bags-fabric' },
      { title: 'Leno Flat Fabric – Rolls', desc: 'Leno Flat Fabric in Rolls Leno flat fabric is the...', image: asset_LENO_FLAT_FABRIC, link: '/product/leno-flat-fabric-rolls' },
      { title: 'Leno Bag', desc: 'It is a long established fact that a reader will...', image: asset_leno_bag, link: '/product/leno-bag' },
      { title: 'Wicketed Leno Bag', desc: 'Speed Meets Freshness on Every Packing Line When a packing...', image: asset_wileted_leno_bag, link: '/product/wileted-leno-bag' },
    ],
    // PP Woven Sacks
    [
      { title: 'Print Options', desc: 'All woven PP bags are available with direct print on...', image: asset_printed_pp_woven, link: '/product/print-options' },
      { title: 'Liner Options', desc: 'A liner turns a woven PP bag into a moisture...', image: asset_liner_options, link: '/product/liner-options' },
      { title: 'Bottom Construction', desc: 'The bottom seam is the most load-stressed point in a...', image: asset_bottom_construction, link: '/product/bottom-construction' },
      { title: 'Top Finishes', desc: 'The top finish determines how the bag behaves at the...', image: asset_top_finish, link: '/product/top-finishes' },
    ],
    // Jute / Burlap
    [
      { title: 'Jute & Burlap Bags', desc: 'No synthetic material replicates what natural burlap does in the...', image: asset_juteburlap_bags, link: '/product/jute-burlap-bags' },
      { title: 'Jute Sacks & Printed Bags', desc: 'Standard Jute Sack The jute sack is the original sustainable...', image: asset_jutesacks_printed, link: '/product/jute-sacks-printed' },
      { title: 'Horticultural & Landscaping', desc: 'Jute Soil Saver Topsoil is one of the most valuable...', image: asset_horticultural, link: '/product/horticultural-landscaping' },
      { title: 'Jute Twin & Cord', desc: 'Why Jute Twine? Garden twine sounds simple. It is not...', image: asset_jutetwine, link: '/product/jute-twine-cord' },
    ],
    // Specialty Fabrics
    [
      { title: 'Monofilament Fabrics', desc: 'Single Strand. Superior Strength. Our Monofilament Fabrics are high-performance technical...', image: asset_Monofilament_Fabrics, link: '/product/monofilament-fabrics' },
      { title: 'rPET Fabrics', desc: 'Recycled from Plastic. Reimagined for Industry. Our rPET Fabrics are...', image: asset_rPET_Fabrics, link: '/product/rpet-fabrics' },
      { title: 'Lumber Cover Fabrics', desc: 'Protect Your Timber. Preserve Your Value. Our Lumber Cover Fabrics...', image: asset_Lumber_Cover_Fabrics, link: '/product/lumber-cover-fabrics' },
      { title: 'Woven Specialty Fabrics', desc: 'HDPE Woven Fabric High-density polyethylene woven fabric is produced from...', image: asset_woven_specialty_fabrics, link: '/product/woven-specialty-fabrics' },
    ],
    // Retail Shopping Bags
    // Retail Shopping Bags
    [
      {
        title: 'Paper Bag With Twisted Handle',
        desc: 'Simple to Hold. Hard to Forget. The paper bag with...',
        image: asset_paper_bag_twisted_handle,
        link: '/product/paper-bag-with-twisted-handle'
      },

      {
        title: 'White Bleached Flat Handle',
        desc: 'Clean, Confident, and Unmistakably Premium. First impressions in retail happen...',
        image: asset_white_bleached_flat_handle,
        link: '/product/white-bleached-flat-handle'
      },

      {
        title: 'Jute Shopping Bag',
        desc: 'Carry More Than Just Groceries. Carry a Statement. There is...',
        image: asset_jute_shopping_bag,
        link: '/product/jute-shopping-bag'
      },

      {
        title: 'PP Shopping Bags',
        desc: 'The Bag That Works As Hard As Your Business Ask...',
        image: asset_PP_shopping_bag,
        link: '/product/pp-shopping-bag'
      },
    ],
    // Agro Textiles
    [
      {
        title: 'Roofing Underlayment',
        desc: 'The Layer Between Structure and Weather. A roof covering –...',
        image: asset_roofing_underlayment,
        link: '/product/roofing-underlayment'
      },

      {
        title: 'House Wrap',
        desc: 'One Fabric. Two Jobs. A house wrap — also called...',
        image: asset_house_wrap,
        link: '/product/house-wrap'
      },

      {
        title: 'Hail Nets',
        desc: 'The One Threat That Gives No Warning. Drought develops over...',
        image: asset_hail_nets,
        link: '/product/hail-nets'
      },

      {
        title: 'Silage Wrap & Bale Wrap',
        desc: 'Preserving the Harvest Through Fermentation Silage is fermented forage —...',
        image: asset_silage_wrap,
        link: '/product/silage-wrap'
      },
    ]
  ];

  // Preload all exact product images in browser cache so tab switching is instant
  useEffect(() => {
    productsData.forEach((category) => {
      category.forEach((item) => {
        if (item && item.image) {
          const img = new Image();
          img.src = item.image;
        }
      });
    });
  }, []);

  return (
    <Layout>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(170deg, #F0F7E4 0%, #FBF1E6 45%, #FFFFFF 100%)',
        paddingTop: 'clamp(20px, 2.5vw, 36px)',
        paddingBottom: 'clamp(8px, 1vw, 14px)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(24px, 3vw, 40px)',
            alignItems: 'center'
          }}>

            {/* ── Left: Hero Copy ── */}
            <div>
              <Reveal>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '12px',
                  fontWeight: '800',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  color: '#8DC63F',
                  marginBottom: '16px'
                }}>
                  <span style={{ width: '24px', height: '2px', background: '#8DC63F', display: 'inline-block' }} />
                  {t('heroTag')}
                </span>
              </Reveal>

              <Reveal delay={0.07}>
                <div style={{ marginBottom: '16px' }}>
                  <h1 style={{
                    fontSize: 'clamp(32px, 4.2vw, 48px)',
                    fontWeight: '800',
                    lineHeight: 1.15,
                    color: '#142E3D',
                    fontFamily: 'Manrope, sans-serif',
                    marginBottom: '10px'
                  }}>
                    {t('heroTitle')}
                  </h1>
                  <div style={{
                    width: '100%',
                    maxWidth: '480px',
                    height: '4px',
                    backgroundColor: '#BAE6FD',
                    borderRadius: '2px'
                  }} />
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <p style={{
                  fontSize: 'clamp(16px, 1.8vw, 18.5px)',
                  fontWeight: '700',
                  lineHeight: 1.5,
                  color: '#142E3D',
                  maxWidth: '620px',
                  marginBottom: '14px'
                }}>
                  {t('heroDesc')}
                </p>
              </Reveal>

              {(t('heroDescSub1') || t('heroDescSub2') || t('heroTagline')) && (
                <Reveal delay={0.18}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    fontSize: 'clamp(13.5px, 1.45vw, 15px)',
                    fontWeight: '400',
                    lineHeight: 1.6,
                    color: '#64748B',
                    maxWidth: '620px',
                    marginBottom: '20px'
                  }}>
                    {t('heroDescSub1') && (
                      <p style={{ margin: 0 }}>
                        {t('heroDescSub1')}
                      </p>
                    )}
                    {t('heroDescSub2') && (
                      <p style={{ margin: 0 }}>
                        {t('heroDescSub2')}
                      </p>
                    )}
                    {t('heroTagline') && (
                      <p style={{ margin: 0, fontWeight: '500', color: '#475569' }}>
                        {t('heroTagline')}
                      </p>
                    )}
                  </div>
                </Reveal>
              )}

              <Reveal delay={0.22}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '0px' }}>
                  <a
                    href="#how-we-work"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#142E3D',
                      color: '#FFFFFF',
                      fontWeight: '700',
                      fontSize: '13.5px',
                      padding: '10px 22px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      transition: 'background 0.2s, transform 0.2s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#0F2531'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#142E3D'; e.currentTarget.style.transform = 'none'; }}
                  >
                    {t('heroCtaPrimary')} <ArrowRight size={16} />
                  </a>
                  <Link
                    to="/products"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'transparent',
                      color: '#142E3D',
                      fontWeight: '700',
                      fontSize: '13.5px',
                      padding: '10px 22px',
                      borderRadius: '8px',
                      border: '1.5px solid #142E3D',
                      textDecoration: 'none',
                      transition: 'background 0.2s, color 0.2s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#142E3D'; e.currentTarget.style.color = '#FFFFFF'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#142E3D'; }}
                  >
                    {t('heroCtaSecondary')}
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* ── Right: Global Sourcing Graphic ── */}
            <Reveal delay={0.18}>
              <GlobalSourcingGraphic />
            </Reveal>

          </div>

          {/* Stats Credibility Strip — inside hero */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 160px), 1fr))',
            gap: '10px',
            marginTop: 'clamp(12px, 1.5vw, 18px)'
          }}>
            {[
              { number: '20+', label: 'Years of Industrial Experience', icon: <Award color="#8DC63F" size={24} /> },
              { number: '30+', label: 'Vetted Manufacturer Network', icon: <ShieldCheck color="#8DC63F" size={24} /> },
              { number: 'Multi-SKU', label: 'Container Optimisation', icon: <Truck color="#8DC63F" size={24} /> },
              { number: '8+', label: 'Audited Factory Partners', icon: <Building2 color="#8DC63F" size={24} /> },
            ].map((stat, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 12px',
                background: 'rgba(255,255,255,0.7)',
                borderRadius: '14px',
                border: '1px solid #E8EFF5',
                transition: 'box-shadow 0.2s'
              }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(7,40,52,0.06)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{
                  width: '32px', height: '32px',
                  borderRadius: '8px',
                  background: '#F0F7E4',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: '800', color: '#142E3D', lineHeight: 1.1 }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#64748B', fontWeight: '600', marginTop: '1px' }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — PRODUCTS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(16px, 2vw, 24px) 0 clamp(20px, 2.5vw, 32px) 0', background: '#FBF1E6' }}>
        <div className="container">

          {/* Section header with FIBC emphasis */}
          <div style={{ textAlign: 'center', maxWidth: '1100px', margin: '0 auto 24px auto' }}>
            <span style={{ color: '#8DC63F', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'inline-block', marginBottom: '6px' }}>
              Industrial Grade Range
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              fontWeight: '800',
              color: '#142E3D',
              marginBottom: '8px',
              marginTop: '5px'
            }}>
              Our Product Portfolio
            </h2>
            <p style={{ color: '#64748B', fontSize: '15px', lineHeight: 1.5, maxWidth: '100%' }}>
              Flexible packaging and technical fabric solutions engineered to global ISO & UN specifications — sourced from our audited India & Asia network.
            </p>
          </div>


          {/* Category Tabs with Carousel */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '36px' }}>
            <button
              onClick={() => { handleScroll('left'); handlePrevCategory(); }}
              aria-label="Previous Category"
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: '#FFFFFF', border: '1px solid #E2E8F0',
                color: '#142E3D', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)', transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#142E3D'; e.currentTarget.style.color = '#FFFFFF'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#142E3D'; }}
            >
              <ChevronLeft size={18} />
            </button>

            <div
              ref={scrollContainerRef}
              style={{
                display: 'flex', gap: '10px',
                overflowX: 'auto', padding: '4px 2px 10px 2px',
                scrollBehavior: 'smooth', scrollbarWidth: 'none', flexGrow: 1
              }}
            >
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  onMouseEnter={() => {
                    productsData[idx]?.forEach((item) => {
                      if (item && item.image) {
                        const img = new Image();
                        img.src = item.image;
                      }
                    });
                  }}
                  style={{
                    background: activeTab === idx ? '#142E3D' : '#FFFFFF',
                    color: activeTab === idx ? '#FFFFFF' : '#475569',
                    border: activeTab === idx ? 'none' : '1px solid #E2E8F0',
                    padding: '11px 22px',
                    borderRadius: '50px',
                    fontWeight: '700',
                    fontSize: '13.5px',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    boxShadow: activeTab === idx ? '0 6px 20px rgba(7,40,52,0.2)' : 'none',
                    transition: 'all 0.22s'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <button
              onClick={() => { handleScroll('right'); handleNextCategory(); }}
              aria-label="Next Category"
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                background: '#FFFFFF', border: '1px solid #E2E8F0',
                color: '#142E3D', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)', transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#142E3D'; e.currentTarget.style.color = '#FFFFFF'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = '#142E3D'; }}
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Product Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {productsData[activeTab]?.map((prod, idx) => (
              <div
                key={`${activeTab}-${prod.title || idx}`}
                className="product-card-premium"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #E8EFF5',
                  boxShadow: '0 4px 16px rgba(20,46,61,0.04)',
                  transition: 'transform 0.25s, box-shadow 0.25s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(20,46,61,0.10)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(20,46,61,0.04)'; }}
              >
                <ProductCardImage src={prod.image} alt={prod.title} />
                <div style={{ padding: '0 20px 20px 20px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#142E3D', marginBottom: '6px' }}>{prod.title}</h3>
                  <p style={{ fontSize: '12.5px', color: '#64748B', lineHeight: 1.6, marginBottom: '16px' }}>{prod.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F1F5F9', paddingTop: '14px' }}>
                    <button
                      onClick={() => handleOpenQuote(prod.title)}
                      style={{
                        background: 'none', border: 'none',
                        color: '#8DC63F', fontWeight: '800', fontSize: '12.5px',
                        cursor: 'pointer', padding: 0
                      }}
                    >
                      Get Spec & Quote →
                    </button>
                    <Link
                      to={prod.link}
                      style={{
                        width: '34px', height: '34px', borderRadius: '50%',
                        background: '#F0F7E4', color: '#142E3D',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'all 0.2s', textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#8DC63F'; e.currentTarget.style.color = '#FFFFFF'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = '#F0F7E4'; e.currentTarget.style.color = '#142E3D'; }}
                    >
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — WHY BUYERS TRUST BULKFLEX (Zero Surprises)
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{
        background: '#142E3D',
        color: '#FFFFFF',
        padding: 'clamp(28px, 3.5vw, 40px) 0'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 28px auto' }}>
            <span style={{ color: '#8DC63F', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              Built on Trust
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 3.8vw, 42px)',
              fontWeight: '800',
              color: '#FFFFFF',
              marginBottom: '10px',
              lineHeight: 1.15
            }}>
              Why Buyers Trust BulkFlex
            </h2>
            <p style={{
              fontSize: 'clamp(22px, 2.5vw, 28px)',
              fontWeight: '800',
              color: '#8DC63F',
              marginBottom: '12px',
              lineHeight: 1.2
            }}>
              Zero Surprises. Zero Stress.
            </p>
            <p style={{ color: '#94A3B8', fontSize: '15px', lineHeight: 1.65 }}>
              Reliable packaging supply means your operations never stop because your packaging didn't arrive. BulkFlex is structured so that predictability, transparency, and continuity are the default — not the exception.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '16px',
            marginBottom: '0px'
          }}>
            {[
              {
                title: t('oneContact'),
                desc: t('oneContactDesc'),
                icon: <Globe size={22} color="#8DC63F" />
              },
              {
                title: t('armAsia'),
                desc: t('armAsiaDesc'),
                icon: <MapPin size={22} color="#8DC63F" />
              },
              {
                title: t('auditedFactories'),
                desc: t('auditedFactoriesDesc'),
                icon: <ShieldCheck size={22} color="#8DC63F" />
              },
              {
                title: t('complianceBuilt'),
                desc: t('complianceBuiltDesc'),
                icon: <CheckCircle2 size={22} color="#8DC63F" />
              },
              {
                title: t('sopsFactory'),
                desc: t('sopsFactoryDesc'),
                icon: <Target size={22} color="#8DC63F" />
              },
              {
                title: t('endToEnd'),
                desc: t('endToEndDesc'),
                icon: <Truck size={22} color="#8DC63F" />
              }
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: '16px',
                padding: '26px 24px',
                transition: 'background 0.2s, border-color 0.2s'
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.borderColor = 'rgba(141,198,63,0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'; }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(141,198,63,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#FFFFFF', marginBottom: '10px', lineHeight: 1.3 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '13.5px', color: '#94A3B8', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 5 — HOW WE WORK
      ═══════════════════════════════════════════════════════════════════════ */}
      <section id="how-we-work" style={{ padding: 'clamp(28px, 3.5vw, 40px) 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{
            marginBottom: '44px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <span style={{ color: '#8DC63F', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                Our Process
              </span>
              <h2 style={{
                fontSize: 'clamp(28px, 3.8vw, 40px)',
                fontWeight: '800',
                color: '#142E3D',
                marginTop: '8px',
                marginBottom: '12px'
              }}>
                How We Work
              </h2>
              <p style={{ color: '#64748B', fontSize: '15px', maxWidth: '480px', lineHeight: 1.65 }}>
                Our structured approach ensures absolute clarity from initial specification review through to final container delivery.
              </p>
            </div>
            <Link
              to="/contact-us-2"
              style={{
                background: '#142E3D',
                color: '#FFFFFF',
                fontWeight: '800',
                padding: '13px 26px',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                textDecoration: 'none',
                fontSize: '14px'
              }}
            >
              Discuss Your Requirements <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { step: '01', title: 'Specification Review', desc: 'Detailed analysis of your packaging needs, SWL, SF, compliance requirements and market destination.', icon: <CheckCircle2 size={22} color="#116B58" /> },
              { step: '02', title: 'Factory Matching', desc: 'Selecting the right audited facility based on production capacity, capability, certification and timeline.', icon: <Factory size={22} color="#116B58" /> },
              { step: '03', title: 'Sample Approval', desc: 'Physical sample production and rigorous testing before bulk manufacturing begins.', icon: <ShieldCheck size={22} color="#116B58" /> },
              { step: '04', title: 'Production & QC', desc: 'On-ground monitoring and step-by-step quality control at the factory during manufacturing.', icon: <Award size={22} color="#116B58" /> },
              { step: '05', title: 'Compliance Docs', desc: 'Generating batch traceability, certificates of origin, inspection reports, and testing documentation.', icon: <Package size={22} color="#116B58" /> },
              { step: '06', title: 'Global Logistics', desc: 'Container optimisation, freight booking, and transparent dispatch tracking to your port.', icon: <Truck size={22} color="#116B58" /> }
            ].map((step, i) => (
              <div key={i} style={{
                background: '#F8FAFC',
                borderRadius: '16px',
                padding: '26px 24px',
                border: '1px solid #E8EFF5',
                transition: 'background 0.2s, border-color 0.2s, transform 0.2s'
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.borderColor = '#8DC63F'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#F8FAFC'; e.currentTarget.style.borderColor = '#E8EFF5'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: '#F0F7F4',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    {step.icon}
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                    Step {step.step}
                  </span>
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: '800', color: '#142E3D', marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 6 — INDUSTRIES WE SERVE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(36px, 4vw, 54px) 0', background: '#FBF1E6', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '580px', margin: '0 auto 32px auto' }}>
            <span style={{ color: '#8DC63F', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              Sectors Served
            </span>
            <h2 style={{
              fontSize: 'clamp(26px, 3.2vw, 38px)',
              fontWeight: '800',
              color: '#142E3D',
              marginTop: '8px',
              marginBottom: '10px'
            }}>
              Industries We Serve
            </h2>
            <p style={{ color: '#64748B', fontSize: '15px' }}>
              Customised flexible packaging and technical fabric solutions for global industry sectors.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
            gap: '16px'
          }}>
            {[
              { title: 'Chemicals & Resins', icon: <Factory size={22} color="#8DC63F" /> },
              { title: 'Agriculture & Grain', icon: <Sprout size={22} color="#8DC63F" /> },
              { title: 'Construction Materials', icon: <Building2 size={22} color="#8DC63F" /> },
              { title: 'Food & Pharmaceuticals', icon: <Package size={22} color="#8DC63F" /> },
              { title: 'Mining & Minerals', icon: <Target size={22} color="#8DC63F" /> },
              { title: 'Retail & Consumer Goods', icon: <ShieldCheck size={22} color="#8DC63F" /> },
            ].map((ind, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                borderRadius: '14px',
                padding: '20px 18px',
                border: '1px solid #E8EFF5',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(0,0,0,0.06)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.02)'; }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: '#F0F7E4',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {ind.icon}
                </div>
                <span style={{ fontSize: '15px', fontWeight: '800', color: '#142E3D' }}>{ind.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 7 — BUYER'S CORNER BANNER STRIP
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: 'clamp(28px, 3.5vw, 40px) 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: 'clamp(20px, 3vw, 28px) clamp(20px, 3.5vw, 36px)',
            border: '1.5px solid #E2E8F0',
            boxShadow: '0 4px 16px rgba(20,46,61,0.04)'
          }}>
            <div style={{ maxWidth: '640px' }}>
              <span style={{ color: '#8DC63F', fontWeight: '800', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'inline-block', marginBottom: '6px' }}>
                Buyer's Corner & Sourcing Intelligence
              </span>
              <h3 style={{ fontSize: 'clamp(18px, 2.2vw, 24px)', fontWeight: '800', color: '#142E3D', margin: '0 0 6px 0', lineHeight: 1.25 }}>
                Questions About Sourcing, QC, or Factory Audits?
              </h3>
              <p style={{ color: '#64748B', fontSize: '14px', margin: 0, lineHeight: 1.5 }}>
                Get clear answers on factory matching, pre-shipment inspections, multi-SKU optimization, and compliance documentation in our Buyer's Corner.
              </p>
            </div>

            <div>
              <Link
                to="/buyer-tools"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#142E3D',
                  color: '#FFFFFF',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'background 0.2s, color 0.2s'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#091C26'; e.currentTarget.style.color = '#8DC63F'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#142E3D'; e.currentTarget.style.color = '#FFFFFF'; }}
              >
                Visit Buyer's Corner <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 8 — GLOBAL SOURCING CTA
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{
        background: '#142E3D',
        color: '#FFFFFF',
        padding: 'clamp(40px, 5vw, 60px) 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle background pattern */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(141,198,63,0.06) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(32px, 5vw, 60px)',
            alignItems: 'center'
          }}>

            {/* Compact sourcing map */}
            <div style={{ maxWidth: '380px', margin: '0 auto', width: '100%' }}>
              <GlobalSourcingGraphic />
            </div>

            {/* CTA text */}
            <div>
              <span style={{ color: '#8DC63F', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'block', marginBottom: '14px' }}>
                Start Sourcing
              </span>
              <h2 style={{
                fontSize: 'clamp(26px, 3.5vw, 40px)',
                fontWeight: '800',
                color: '#FFFFFF',
                marginBottom: '16px',
                lineHeight: 1.15
              }}>
                Ready to Source from India & Asia with Confidence?
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px' }}>
                Tell us your requirement — product, quantity, destination, and timeline. We will tell you honestly whether we can serve it, and what it would look like.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link
                  to="/contact-us-2"
                  style={{
                    background: '#8DC63F',
                    color: '#142E3D',
                    padding: '14px 30px',
                    borderRadius: '8px',
                    fontWeight: '800',
                    fontSize: '15px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'transform 0.2s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}
                >
                  Discuss Your Requirements <ArrowRight size={16} />
                </Link>
                <Link
                  to="/buyer-tools"
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    color: '#FFFFFF',
                    padding: '14px 30px',
                    borderRadius: '8px',
                    fontWeight: '700',
                    fontSize: '15px',
                    textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'background 0.2s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.16)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                >
                  Buyer's Corner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          FLOATING WHATSAPP BUTTON
      ═══════════════════════════════════════════════════════════════════════ */}
      <WhatsAppButton />

      {/* ═══════════════════════════════════════════════════════════════════════
          INQUIRY / QUOTE MODAL
      ═══════════════════════════════════════════════════════════════════════ */}
      {inquiryModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0,
          width: '100vw', height: '100vh',
          background: 'rgba(7, 40, 52, 0.75)',
          backdropFilter: 'blur(4px)',
          zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            maxWidth: '500px',
            width: '100%',
            padding: '32px',
            position: 'relative',
            boxShadow: '0 24px 60px rgba(0,0,0,0.3)'
          }}>
            <button
              onClick={() => setInquiryModalOpen(false)}
              style={{
                position: 'absolute', top: '18px', right: '18px',
                background: '#F1F5F9', border: 'none', borderRadius: '50%',
                width: '34px', height: '34px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#64748B'
              }}
            >
              ✕
            </button>

            {!quoteSubmitted ? (
              <>
                <div style={{ marginBottom: '22px' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#142E3D', marginBottom: '6px' }}>
                    Request B2B Quote
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748B' }}>
                    {selectedProductForQuote
                      ? `Enquiring for: ${selectedProductForQuote}`
                      : 'Fill in your requirements and we will respond within 24 business hours.'}
                  </p>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); setQuoteSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#142E3D', marginBottom: '5px' }}>Full Name *</label>
                    <input type="text" required placeholder="e.g. John Doe" style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#142E3D', marginBottom: '5px' }}>Business Email *</label>
                      <input type="email" required placeholder="john@company.com" style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#142E3D', marginBottom: '5px' }}>Phone / WhatsApp</label>
                      <input type="tel" placeholder="+1 (555) 000-0000" style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none' }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#142E3D', marginBottom: '5px' }}>Requirements / Quantity</label>
                    <textarea rows="3" placeholder="Product, dimensions, quantity, destination port..." style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', outline: 'none', resize: 'none' }}></textarea>
                  </div>
                  <button
                    type="submit"
                    style={{
                      background: '#142E3D', color: '#FFFFFF',
                      padding: '13px', borderRadius: '50px',
                      fontWeight: '700', fontSize: '15px',
                      border: 'none', cursor: 'pointer',
                      boxShadow: '0 8px 20px rgba(7,40,52,0.2)'
                    }}
                  >
                    Submit RFQ
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <div style={{
                  width: '60px', height: '60px', borderRadius: '50%',
                  background: '#F0F7E4',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 18px auto'
                }}>
                  <CheckCircle2 size={32} color="#8DC63F" />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#142E3D', marginBottom: '8px' }}>Quote Request Received</h3>
                <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '22px' }}>
                  Our team will review your request and respond within 24 business hours.
                </p>
                <button
                  onClick={() => setInquiryModalOpen(false)}
                  style={{
                    background: '#8DC63F', color: '#142E3D',
                    padding: '11px 26px', borderRadius: '50px',
                    fontWeight: '700', fontSize: '14px',
                    border: 'none', cursor: 'pointer'
                  }}
                >
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