import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Globe, Menu, X, Clock, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const [time, setTime] = useState({
    ny: '',
    london: '',
    mumbai: ''
  });

  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

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

  const languages = [
    { code: 'EN', name: 'English', flag: '🇬🇧' },
    { code: 'ES', name: 'Spanish', flag: '🇪🇸' },
    { code: 'FR', name: 'French', flag: '🇫🇷' },
    { code: 'DE', name: 'German', flag: '🇩🇪' },
    { code: 'AR', name: 'Arabic', flag: '🇦🇪' },
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00C2A8', fontWeight: '700' }}>
              <Clock size={13} color="#00C2A8" />
              <span>LIVE REGIONAL DESKS:</span>
            </div>

            {/* Americas Hub */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
              <span style={{ color: '#E2E8F0', fontWeight: '700' }}>US/Americas:</span>
              <span>{time.ny || '07:11 AM'} EST</span>
            </div>

            <span style={{ opacity: 0.3 }}>|</span>

            {/* Europe Hub */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
              <span style={{ color: '#E2E8F0', fontWeight: '700' }}>Europe:</span>
              <span>{time.london || '12:11'} BST</span>
            </div>

            <span style={{ opacity: 0.3 }}>|</span>

            {/* Asia Sourcing Hub */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
              <span style={{ color: '#E2E8F0', fontWeight: '700' }}>India HQ:</span>
              <span>{time.mumbai || '04:41 PM'} IST</span>
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

      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '76px' }}>
        
        {/* Logo Left */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} aria-label="BulkFlex Home">
          <span style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '-0.5px', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
            BULK <span style={{ color: '#00C2A8' }}>FLEX</span>
          </span>
        </Link>

        {/* Centered Navigation Links */}
        <nav className="desktop-only" style={{ display: 'flex', gap: '32px', alignItems: 'center', fontWeight: '600', fontSize: '14px' }}>
          <Link to="/" style={{ color: location.pathname === '/' ? '#00C2A8' : '#FFFFFF', padding: '8px 0', transition: 'color 0.2s' }}>
            Home
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
              Products <ChevronDown size={14} />
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
            RPET FIBC
          </Link>
          <Link to="/buyer-tools" style={{ color: location.pathname === '/buyer-tools' ? '#00C2A8' : '#FFFFFF', padding: '8px 0', transition: 'color 0.2s' }}>
            Buyer Corner
          </Link>
          <Link to="/about-us" style={{ color: location.pathname === '/about-us' ? '#00C2A8' : '#FFFFFF', padding: '8px 0', transition: 'color 0.2s' }}>
            About Us
          </Link>
          <Link to="/contact-us-2" style={{ color: location.pathname === '/contact-us-2' ? '#00C2A8' : '#FFFFFF', padding: '8px 0', transition: 'color 0.2s' }}>
            Contact Us
          </Link>
        </nav>

        {/* Right Section: Pill Language Selector + Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          
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
                padding: '6px 16px',
                minHeight: '38px',
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
              <span>🇬🇧</span> {currentLang} <ChevronDown size={14} />
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
                minWidth: '140px',
                zIndex: 1100
              }}>
                {languages.map((lang) => (
                  <div 
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    style={{
                      padding: '8px 12px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#072834',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#E8F7F5'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <span>{lang.flag}</span> {lang.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '8px',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="mobile-only"
          style={{
            background: '#0B2532',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '16px 24px 24px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          <Link to="/" style={{ color: location.pathname === '/' ? '#00C2A8' : '#FFFFFF', fontSize: '15px', fontWeight: '600', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            Home
          </Link>

          <div>
            <div 
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              style={{ color: location.pathname.startsWith('/product') ? '#00C2A8' : '#FFFFFF', fontSize: '15px', fontWeight: '600', padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer' }}
            >
              <span>Products</span>
              <ChevronDown size={16} style={{ transform: mobileProductsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </div>

            {mobileProductsOpen && (
              <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '6px', paddingTop: '8px' }}>
                <Link to="/products" style={{ color: '#00C2A8', fontSize: '13px', fontWeight: '600', padding: '6px 0' }}>
                  All Products Overview →
                </Link>
                {productCategories.map((cat, idx) => (
                  <Link key={idx} to={cat.path} style={{ color: '#CBD5E1', fontSize: '13px', padding: '6px 0' }}>
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/rpet-fibc" style={{ color: location.pathname === '/rpet-fibc' ? '#00C2A8' : '#FFFFFF', fontSize: '15px', fontWeight: '600', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            RPET FIBC
          </Link>
          <Link to="/buyer-tools" style={{ color: location.pathname === '/buyer-tools' ? '#00C2A8' : '#FFFFFF', fontSize: '15px', fontWeight: '600', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            Buyer Corner
          </Link>
          <Link to="/about-us" style={{ color: location.pathname === '/about-us' ? '#00C2A8' : '#FFFFFF', fontSize: '15px', fontWeight: '600', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            About Us
          </Link>
          <Link to="/contact-us-2" style={{ color: location.pathname === '/contact-us-2' ? '#00C2A8' : '#FFFFFF', fontSize: '15px', fontWeight: '600', padding: '10px 0' }}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}