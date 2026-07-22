import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#072834', color: '#FFFFFF', padding: 'clamp(40px, 6vw, 72px) 0 28px 0', borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
      <div className="container">
        <div
          className="footer-grid-container"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.8fr 1fr 1.2fr 1.2fr 1.4fr',
            gap: '40px',
            paddingBottom: '48px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >

          {/* Column 1: Brand Info */}
          <div>
            <div style={{ fontSize: '24px', fontWeight: '800', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
              BULK <span style={{ color: '#00C2A8' }}>FLEX</span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '13px', lineHeight: '1.6', marginBottom: '20px', maxWidth: '280px' }}>
              Your reliable partner for flexible packaging and logistics solutions. Building relationships and delivering value every container.
            </p>

            {/* Social Circle Icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="BulkFlex LinkedIn"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#FFFFFF'
                }}
              >
                in
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="BulkFlex Instagram"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  fontWeight: '700',
                  color: '#FFFFFF'
                }}
              >
                ig
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#00C2A8', marginBottom: '18px' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px' }}>
              <li><Link to="/" style={{ color: '#CBD5E1' }}>{t('home')}</Link></li>
              <li><Link to="/about-us" style={{ color: '#CBD5E1' }}>{t('aboutUs')}</Link></li>
              <li><Link to="/products" style={{ color: '#CBD5E1' }}>{t('products')}</Link></li>
              <li><Link to="/rpet-fibc" style={{ color: '#CBD5E1' }}>{t('rpetFibc')}</Link></li>
              <li><Link to="/buyer-tools" style={{ color: '#CBD5E1' }}>{t('buyerCorner')}</Link></li>
              <li><Link to="/contact-us-2" style={{ color: '#CBD5E1' }}>{t('contactUs')}</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#00C2A8', marginBottom: '18px' }}>
              Categories
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px' }}>
              <li><Link to="/product_category/fibc" style={{ color: '#CBD5E1' }}>FIBC Jumbo Bags</Link></li>
              <li><Link to="/north-america-paper-bag-2" style={{ color: '#CBD5E1' }}>Paper Bags</Link></li>
              <li><Link to="/product_category/leno-bags-febric" style={{ color: '#CBD5E1' }}>Leno Bags</Link></li>
              <li><Link to="/product_category/pp-woven-sacks" style={{ color: '#CBD5E1' }}>PP Woven Sacks</Link></li>
              <li><Link to="/product_category/jute-burlap" style={{ color: '#CBD5E1' }}>Jute / Burlap</Link></li>
              <li><Link to="/product_category/container-liners" style={{ color: '#CBD5E1' }}>Container Liners</Link></li>
            </ul>
          </div>

          {/* Column 4: Sourcing Hubs */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#00C2A8', marginBottom: '18px' }}>
              Global Hubs
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#CBD5E1' }}>
              <li><strong>India Sourcing HQ:</strong> Gujarat &amp; Mumbai</li>
              <li><strong>Vietnam Hub:</strong> Ho Chi Minh City</li>
              <li><strong>Americas Desk:</strong> New York, USA</li>
              <li><strong>Europe Desk:</strong> London, UK</li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#00C2A8', marginBottom: '18px' }}>
              Contact HQ
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#CBD5E1' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <MapPin size={16} color="#00C2A8" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>BulkFlex Private Limited, India</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Phone size={16} color="#00C2A8" style={{ flexShrink: 0 }} />
                <a href="tel:+919876543210" style={{ color: '#CBD5E1' }}>+91 98765 43210</a>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Mail size={16} color="#00C2A8" style={{ flexShrink: 0 }} />
                <a href="mailto:info@bulkflex.com" style={{ color: '#CBD5E1' }}>info@bulkflex.com</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '13px', color: '#64748B' }}>
          <div>
            © {new Date().getFullYear()} BulkFlex Private Limited. {t('footerRights')}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link to="/terms-and-conditions" style={{ color: '#64748B' }}>Terms &amp; Conditions</Link>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top of page"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
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
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}