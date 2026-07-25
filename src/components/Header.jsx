import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Mail, ArrowRight } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Scroll detection for header background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const productCategories = [
    { name: 'FIBC Jumbo Bags', path: '/product_category/fibc' },
    { name: 'Leno Bags & Fabrics', path: '/product_category/leno-bags-febric' },
    { name: 'PP Woven Sacks', path: '/product_category/pp-woven-sacks' },
    { name: 'Jute / Burlap', path: '/product_category/jute-burlap' },
    { name: 'Specialty Fabrics', path: '/product_category/specialty-febrics' },
    { name: 'Retail Shopping Bags', path: '/product_category/retail-shoping-bags' },
    { name: 'Agro Textiles', path: '/product_category/agro-textiles' },
    { name: 'Container Liners', path: '/product_category/container-liners' },
  ];

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'rPET FIBC', path: '/rpet-fibc' },
    { label: 'Buyer Corner', path: '/buyer-tools' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Contact', path: '/contact-us-2' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Info Bar */}
      <div style={{
        background: 'var(--brand-dark-deep)',
        borderBottom: '1px solid var(--border-dark)',
        fontSize: '0.8125rem',
        color: 'var(--text-light)',
        padding: '10px 0',
        letterSpacing: '0.02em'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ fontWeight: 600 }}>
            Sourcing & Supply Management for Industrial Packaging
          </span>
          <a href="mailto:info@bulkflex.com" className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#CBD5E1', fontWeight: 600 }}>
            <Mail size={13} color="#8DC63F" />
            info@bulkflex.com
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className={scrolled ? 'bg-glass' : ''} style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: scrolled ? 'var(--glass-dark-bg)' : 'var(--brand-dark)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-dark)' : '1px solid transparent',
        transition: 'all var(--transition-normal)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: scrolled ? '72px' : '88px', transition: 'height var(--transition-normal)' }}>
          
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} aria-label="BulkFlex Home">
            <span style={{
              fontSize: 'clamp(20px, 3vw, 24px)',
              fontWeight: 800,
              letterSpacing: '-0.5px',
              color: '#FFFFFF',
              fontFamily: 'var(--font-family)'
            }}>
              BULK<span style={{ color: '#8DC63F' }}>FLEX</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-only" style={{ display: 'flex', gap: '24px', alignItems: 'center', fontWeight: 600, fontSize: '0.9375rem' }}>
            
            <Link to="/" style={{ color: isActive('/') ? '#8DC63F' : '#FFFFFF', padding: '8px 0', transition: 'color 0.2s' }}>
              Home
            </Link>

            {/* Products Dropdown */}
            <div 
              style={{ position: 'relative' }}
              onMouseEnter={() => setProductDropdownOpen(true)}
              onMouseLeave={() => setProductDropdownOpen(false)}
            >
              <Link to="/products" style={{
                color: location.pathname.startsWith('/product') ? '#8DC63F' : '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '8px 0',
                transition: 'color 0.2s'
              }}>
                Products <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: productDropdownOpen ? 'rotate(180deg)' : 'none' }} />
              </Link>

              {productDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-24px',
                  width: '320px',
                  background: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '12px',
                  boxShadow: 'var(--shadow-elevated)',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  zIndex: 1100,
                  transformOrigin: 'top left',
                  animation: 'fadeInUp 0.2s var(--ease-out)'
                }}>
                  {productCategories.map((cat, idx) => (
                    <Link 
                      key={idx} 
                      to={cat.path}
                      style={{
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.9375rem',
                        fontWeight: 600,
                        color: 'var(--brand-dark)',
                        transition: 'all var(--transition-fast)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--brand-green-light)';
                        e.currentTarget.style.color = 'var(--brand-green-hover)';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--brand-dark)';
                        e.currentTarget.style.transform = 'none';
                      }}
                    >
                      {cat.name}
                      <ArrowRight size={14} style={{ opacity: 0.4 }} />
                    </Link>
                  ))}
                  <div style={{ borderTop: '1px solid #E5E7EB', margin: '4px 0', padding: 0 }} />
                  <Link 
                    to="/products"
                    style={{
                      padding: '10px 14px',
                      borderRadius: '8px',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: '#8DC63F',
                      transition: 'all 0.15s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#F0F7E4'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    View All Products →
                  </Link>
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                style={{ 
                  color: isActive(link.path) ? '#8DC63F' : '#FFFFFF', 
                  padding: '8px 0', 
                  transition: 'color 0.2s' 
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link 
              to="/contact-us-2" 
              className="btn btn-green btn-sm desktop-only"
            >
              Request Quote
            </Link>

            {/* Mobile Hamburger */}
            <button 
              className="mobile-only"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              style={{
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          display: 'flex'
        }}>
          {/* Backdrop */}
          <div 
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(10, 31, 43, 0.6)',
              backdropFilter: 'blur(4px)'
            }}
          />

          {/* Sidebar Panel */}
          <div style={{
            position: 'relative',
            marginLeft: 'auto',
            width: '85%',
            maxWidth: '360px',
            height: '100%',
            background: '#142E3D',
            overflowY: 'auto',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
            {/* Close */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-family)' }}>
                BULK<span style={{ color: '#8DC63F' }}>FLEX</span>
              </span>
              <button 
                onClick={() => setMobileOpen(false)}
                style={{ background: 'none', border: 'none', color: '#FFFFFF', cursor: 'pointer', padding: '8px' }}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav Links */}
            <Link to="/" style={mobileLinkStyle(isActive('/'))}>Home</Link>
            
            {/* Products Expandable */}
            <button 
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              style={{
                ...mobileLinkStyle(location.pathname.startsWith('/product')),
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                fontFamily: 'var(--font-family)'
              }}
            >
              Products
              <ChevronDown size={16} style={{ transform: mobileProductsOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            {mobileProductsOpen && (
              <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {productCategories.map((cat, idx) => (
                  <Link key={idx} to={cat.path} style={{
                    padding: '10px 12px',
                    color: '#CBD5E1',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    borderRadius: '8px',
                    transition: 'all 0.15s'
                  }}>
                    {cat.name}
                  </Link>
                ))}
                <Link to="/products" style={{
                  padding: '10px 12px',
                  color: '#8DC63F',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  borderRadius: '8px'
                }}>
                  View All Products →
                </Link>
              </div>
            )}

            {navLinks.slice(1).map((link) => (
              <Link key={link.path} to={link.path} style={mobileLinkStyle(isActive(link.path))}>
                {link.label}
              </Link>
            ))}

            <Link to="/north-america-paper-bag-2" style={mobileLinkStyle(isActive('/north-america-paper-bag-2'))}>
              Multi-Wall Paper Bags
            </Link>

            {/* Mobile CTA */}
            <div style={{ marginTop: 'auto', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <Link 
                to="/contact-us-2" 
                className="btn btn-green"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Request a Quote
              </Link>
              <a href="mailto:info@bulkflex.com" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                color: '#94A3B8',
                fontSize: '0.875rem',
                marginTop: '16px'
              }}>
                <Mail size={14} color="#8DC63F" />
                info@bulkflex.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function mobileLinkStyle(active) {
  return {
    padding: '14px 12px',
    color: active ? '#8DC63F' : '#FFFFFF',
    fontSize: '1rem',
    fontWeight: 600,
    borderRadius: '8px',
    transition: 'all 0.15s',
    textAlign: 'left'
  };
}