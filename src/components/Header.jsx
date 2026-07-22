import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Clock, Phone, Mail } from 'lucide-react';
import { useLanguage, languages } from '../context/LanguageContext';

export default function Header() {
  const { language, changeLanguage, t, currentLangObj } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [time, setTime] = useState({ ny: '', london: '', mumbai: '' });

  const location = useLocation();

  // Close sidebar and reset sub-menus on route change
  useEffect(() => {
    setSidebarOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  // Live Time Clock Updater
  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTime({
        ny: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: true }),
        london: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: false }),
        mumbai: now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true })
      });
    };

    updateClocks();
    const timer = setInterval(updateClocks, 10000);
    return () => clearInterval(timer);
  }, []);

  const productCategories = [
    { name: 'FIBC Jumbo Bag', path: '/product_category/fibc' },
    { name: 'Leno Bags & Fabric', path: '/product_category/leno-bags-febric' },
    { name: 'PP Woven Sacks', path: '/product_category/pp-woven-sacks' },
    { name: 'Jute / Burlap', path: '/product_category/jute-burlap' },
    { name: 'Specialty Fabrics', path: '/product_category/specialty-febrics' },
    { name: 'Retail Shopping Bags', path: '/product_category/retail-shoping-bags' },
    { name: 'Agro Textiles', path: '/product_category/agro-textiles' },
    { name: 'Container Liners', path: '/product_category/container-liners' },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      background: '#072834',
      color: '#FFFFFF',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      
      {/* Top Live Global Desk & Timezone Bar */}
      <div style={{
        background: '#041B23',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        fontSize: '11px',
        fontWeight: '600',
        color: '#94A3B8',
        padding: '6px 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          
          {/* Live Regional Desks & Local Times */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00C2A8', fontWeight: '700' }}>
              <Clock size={13} color="#00C2A8" />
              <span>{t('liveDesks')}</span>
            </div>

            {/* Americas Hub */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
              <span style={{ color: '#E2E8F0', fontWeight: '700' }}>US:</span>
              <span>{time.ny || '07:11 AM'}</span>
            </div>

            <span className="desktop-only" style={{ opacity: 0.3 }}>|</span>

            {/* Europe Hub */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
              <span style={{ color: '#E2E8F0', fontWeight: '700' }}>EU:</span>
              <span>{time.london || '12:11'}</span>
            </div>

            <span className="desktop-only" style={{ opacity: 0.3 }}>|</span>

            {/* Asia Sourcing Hub */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
              <span style={{ color: '#E2E8F0', fontWeight: '700' }}>IN:</span>
              <span>{time.mumbai || '04:41 PM'}</span>
            </div>
          </div>

          {/* Direct Support Contact */}
          <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="tel:+919876543210" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#CBD5E1' }}>
              <Phone size={12} color="#00C2A8" /> +91 98765 43210
            </a>
            <a href="mailto:info@bulkflex.com" style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#CBD5E1' }}>
              <Mail size={12} color="#00C2A8" /> info@bulkflex.com
            </a>
          </div>

        </div>
      </div>

      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '72px' }}>
        
        {/* Logo Left */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} aria-label="BulkFlex Home">
          <span style={{ fontSize: 'clamp(20px, 3.5vw, 24px)', fontWeight: '800', letterSpacing: '-0.5px', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
            BULK <span style={{ color: '#00C2A8' }}>FLEX</span>
          </span>
        </Link>

        {/* Centered Navigation Links (Desktop 1025px+) */}
        <nav className="desktop-only" style={{ display: 'flex', gap: '28px', alignItems: 'center', fontWeight: '600', fontSize: '14px' }}>
          <Link to="/" style={{ color: location.pathname === '/' ? '#00C2A8' : '#FFFFFF', padding: '8px 0', transition: 'color 0.2s' }}>
            {t('home')}
          </Link>

          {/* Products Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setProductDropdownOpen(true)}
            onMouseLeave={() => setProductDropdownOpen(false)}
          >
            <Link to="/products" style={{
              color: location.pathname.startsWith('/product') ? '#00C2A8' : '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '8px 0',
              transition: 'color 0.2s'
            }}>
              {t('products')} <ChevronDown size={14} />
            </Link>

            {productDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: '-20px',
                width: '240px',
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '10px',
                boxShadow: '0 12px 32px rgba(7, 40, 52, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                zIndex: 1100
              }}>
                {productCategories.map((cat, idx) => (
                  <Link 
                    key={idx} 
                    to={cat.path}
                    style={{
                      padding: '9px 14px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#072834',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#E8F7F5';
                      e.currentTarget.style.color = '#00C2A8';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#072834';
                    }}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/rpet-fibc" style={{ color: location.pathname === '/rpet-fibc' ? '#00C2A8' : '#FFFFFF', padding: '8px 0', transition: 'color 0.2s' }}>
            {t('rpetFibc')}
          </Link>
          <Link to="/north-america-paper-bag-2" style={{ color: location.pathname === '/north-america-paper-bag-2' ? '#00C2A8' : '#FFFFFF', padding: '8px 0', transition: 'color 0.2s' }}>
            {t('paperBag')}
          </Link>
          <Link to="/buyer-tools" style={{ color: location.pathname === '/buyer-tools' ? '#00C2A8' : '#FFFFFF', padding: '8px 0', transition: 'color 0.2s' }}>
            {t('buyerCorner')}
          </Link>
          <Link to="/about-us" style={{ color: location.pathname === '/about-us' ? '#00C2A8' : '#FFFFFF', padding: '8px 0', transition: 'color 0.2s' }}>
            {t('aboutUs')}
          </Link>
          <Link to="/contact-us-2" style={{ color: location.pathname === '/contact-us-2' ? '#00C2A8' : '#FFFFFF', padding: '8px 0', transition: 'color 0.2s' }}>
            {t('contactUs')}
          </Link>
        </nav>

        {/* Right Section: Brochure Download CTA + Language Selector + Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          
          {/* Brochure Download Button */}
          <a
            href="/src/assets/wp-content/uploads/2026/02/Bulk-Flex-Pvt-Ltd-brochure-.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="desktop-only"
            style={{
              background: '#00C2A8',
              color: '#072834',
              padding: '8px 18px',
              borderRadius: '50px',
              fontWeight: '800',
              fontSize: '13px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              textDecoration: 'none',
              transition: 'all 0.25s ease'
            }}
          >
            <svg width="14" height="14" viewBox="0 0 512 512" fill="currentColor">
              <path d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"/>
            </svg>
            Brochure
          </a>
          
          {/* Pill-style language selector */}
          <div style={{ position: 'relative' }}>
            <button 
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              aria-label="Select Language"
              aria-expanded={langDropdownOpen}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                borderRadius: '50px',
                padding: '6px 14px',
                minHeight: '40px',
                color: '#FFFFFF',
                fontSize: '13px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <span>{currentLangObj.flag}</span> {currentLangObj.code} <ChevronDown size={14} />
            </button>

            {langDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '120%',
                right: 0,
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '8px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                minWidth: '145px',
                zIndex: 1100
              }}>
                {languages.map((lang) => (
                  <div 
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: language === lang.code ? '#00C2A8' : '#072834',
                      background: language === lang.code ? '#E8F7F5' : 'transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'background 0.2s'
                    }}
                  >
                    <span>{lang.flag}</span> {lang.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile/Tablet Hamburger Toggle (Below 1024px) */}
          <button 
            className="mobile-toggle"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open Navigation Sidebar"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer'
            }}
          >
            <Menu size={22} />
          </button>
        </div>

      </div>

      {/* Mobile Slide-in Sidebar & Overlay */}
      {/* 1. Backdrop Overlay */}
      <div 
        onClick={() => setSidebarOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(7, 40, 52, 0.75)',
          backdropFilter: 'blur(4px)',
          zIndex: 1200,
          opacity: sidebarOpen ? 1 : 0,
          pointerEvents: sidebarOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease'
        }}
      />

      {/* 2. Slide-In Sidebar Panel */}
      <aside 
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: 'min(82vw, 360px)',
          height: '100vh',
          background: '#072834',
          color: '#FFFFFF',
          zIndex: 1300,
          boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transform: sidebarOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          overflowY: 'auto',
          padding: '24px 20px'
        }}
      >
        <div>
          {/* Top Panel Header: Logo & Close Button */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
            <span style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
              BULK <span style={{ color: '#00C2A8' }}>FLEX</span>
            </span>
            <button
              onClick={() => setSidebarOpen(false)}
              aria-label="Close Navigation Sidebar"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Vertical Stack Nav Links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '20px' }}>
            <Link 
              to="/" 
              onClick={() => setSidebarOpen(false)}
              style={{
                color: location.pathname === '/' ? '#00C2A8' : '#FFFFFF',
                fontSize: '16px',
                fontWeight: '700',
                padding: '12px 14px',
                borderRadius: '8px',
                background: location.pathname === '/' ? 'rgba(0, 194, 168, 0.1)' : 'transparent',
                display: 'block'
              }}
            >
              {t('home')}
            </Link>

            {/* Accordion Products Submenu */}
            <div>
              <div
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                style={{
                  color: location.pathname.startsWith('/product') ? '#00C2A8' : '#FFFFFF',
                  fontSize: '16px',
                  fontWeight: '700',
                  padding: '12px 14px',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <span>{t('products')}</span>
                <ChevronDown size={18} style={{ transform: mobileProductsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s' }} />
              </div>

              {mobileProductsOpen && (
                <div style={{ paddingLeft: '14px', display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                  <Link 
                    to="/products"
                    onClick={() => setSidebarOpen(false)}
                    style={{ color: '#00C2A8', fontSize: '13.5px', fontWeight: '700', padding: '8px 12px', borderRadius: '6px', background: 'rgba(0,194,168,0.08)' }}
                  >
                    View All Categories →
                  </Link>
                  {productCategories.map((cat, idx) => (
                    <Link
                      key={idx}
                      to={cat.path}
                      onClick={() => setSidebarOpen(false)}
                      style={{ color: '#CBD5E1', fontSize: '13.5px', padding: '8px 12px', borderRadius: '6px' }}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/rpet-fibc" 
              onClick={() => setSidebarOpen(false)}
              style={{
                color: location.pathname === '/rpet-fibc' ? '#00C2A8' : '#FFFFFF',
                fontSize: '16px',
                fontWeight: '700',
                padding: '12px 14px',
                borderRadius: '8px',
                display: 'block'
              }}
            >
              {t('rpetFibc')}
            </Link>

            <Link 
              to="/north-america-paper-bag-2" 
              onClick={() => setSidebarOpen(false)}
              style={{
                color: location.pathname === '/north-america-paper-bag-2' ? '#00C2A8' : '#FFFFFF',
                fontSize: '16px',
                fontWeight: '700',
                padding: '12px 14px',
                borderRadius: '8px',
                display: 'block'
              }}
            >
              {t('paperBag')}
            </Link>

            <Link 
              to="/buyer-tools" 
              onClick={() => setSidebarOpen(false)}
              style={{
                color: location.pathname === '/buyer-tools' ? '#00C2A8' : '#FFFFFF',
                fontSize: '16px',
                fontWeight: '700',
                padding: '12px 14px',
                borderRadius: '8px',
                display: 'block'
              }}
            >
              {t('buyerCorner')}
            </Link>

            <Link 
              to="/about-us" 
              onClick={() => setSidebarOpen(false)}
              style={{
                color: location.pathname === '/about-us' ? '#00C2A8' : '#FFFFFF',
                fontSize: '16px',
                fontWeight: '700',
                padding: '12px 14px',
                borderRadius: '8px',
                display: 'block'
              }}
            >
              {t('aboutUs')}
            </Link>

            <Link 
              to="/contact-us-2" 
              onClick={() => setSidebarOpen(false)}
              style={{
                color: location.pathname === '/contact-us-2' ? '#00C2A8' : '#FFFFFF',
                fontSize: '16px',
                fontWeight: '700',
                padding: '12px 14px',
                borderRadius: '8px',
                display: 'block'
              }}
            >
              {t('contactUs')}
            </Link>
          </nav>
        </div>

        {/* Sidebar Bottom CTA & Language Pill */}
        <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.12)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a
            href="/src/assets/wp-content/uploads/2026/02/Bulk-Flex-Pvt-Ltd-brochure-.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#00C2A8',
              color: '#072834',
              padding: '12px',
              borderRadius: '50px',
              fontWeight: '800',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              textDecoration: 'none'
            }}
          >
            Download Brochure PDF
          </a>

          <div style={{ textAlign: 'center', fontSize: '12px', color: '#64748B' }}>
            BulkFlex Global Procurement HQ
          </div>
        </div>
      </aside>

    </header>
  );
}