import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: 'var(--brand-dark-deep)', color: 'var(--text-on-dark)' }}>
      
      {/* Main Footer Content */}
      <div className="container" style={{ padding: 'clamp(64px, 8vw, 96px) clamp(1.25rem, 5vw, 2.5rem) 48px' }}>
        <div 
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr 1.2fr 1.4fr',
            gap: '64px',
            paddingBottom: '48px',
            borderBottom: '1px solid var(--border-dark)'
          }}
        >

          {/* Column 1: Brand */}
          <div>
            <div style={{ fontSize: '22px', fontWeight: 800, marginBottom: '14px', fontFamily: 'var(--font-family)' }}>
              BULK<span style={{ color: '#8DC63F' }}>FLEX</span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: '1.65', marginBottom: '20px', maxWidth: '300px' }}>
              BulkFlex Private Limited connects businesses with trusted manufacturing partners for industrial packaging solutions. We manage sourcing, quality coordination, and export logistics.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--brand-green)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Navigation
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'Products', path: '/products' },
                { label: 'rPET FIBC', path: '/rpet-fibc' },
                { label: 'Buyer Corner', path: '/buyer-tools' },
                { label: 'About Us', path: '/about-us' },
                { label: 'Contact Us', path: '/contact-us-2' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} style={{ color: '#CBD5E1', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8DC63F'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#CBD5E1'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--brand-green)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Products
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'FIBC Jumbo Bags', path: '/product_category/fibc' },
                { label: 'PP Woven Sacks', path: '/product_category/pp-woven-sacks' },
                { label: 'Leno Bags & Fabrics', path: '/product_category/leno-bags-febric' },
                { label: 'Jute / Burlap', path: '/product_category/jute-burlap' },
                { label: 'Container Liners', path: '/product_category/container-liners' },
                { label: 'Multi-Wall Paper Bags', path: '/north-america-paper-bag-2' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} style={{ color: '#CBD5E1', fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#8DC63F'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#CBD5E1'}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 800, color: 'var(--brand-green)', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9375rem', color: 'var(--text-on-dark-muted)' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={16} color="#8DC63F" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>BulkFlex Private Limited, India</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={16} color="#8DC63F" style={{ flexShrink: 0 }} />
                <a href="mailto:info@bulkflex.com" style={{ color: '#CBD5E1', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#8DC63F'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#CBD5E1'}
                >
                  info@bulkflex.com
                </a>
              </div>
            </div>

            {/* Markets Served */}
            <div style={{ marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-dark)' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Markets Served
              </div>
              <p style={{ color: 'var(--text-light)', fontSize: '0.875rem', lineHeight: '1.7' }}>
                North America · Europe · Asia-Pacific
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.8125rem',
          color: '#64748B'
        }}>
          <div>
            © {new Date().getFullYear()} BulkFlex Private Limited. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link to="/terms-and-conditions" style={{ color: '#64748B', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#CBD5E1'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
            >
              Terms & Conditions
            </Link>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              style={{
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#FFFFFF',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#8DC63F';
                e.currentTarget.style.borderColor = '#8DC63F';
                e.currentTarget.style.color = '#142E3D';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}