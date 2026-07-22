import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#072834', color: '#FFFFFF', padding: 'clamp(40px, 6vw, 72px) 0 28px 0' }}>
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

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '18px', color: '#FFFFFF' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#CBD5E1' }}>
              <li><Link to="/" style={{ padding: '4px 0', display: 'inline-block' }}>Home</Link></li>
              <li><Link to="/products" style={{ padding: '4px 0', display: 'inline-block' }}>Products</Link></li>
              <li><Link to="/rpet-fibc" style={{ padding: '4px 0', display: 'inline-block' }}>RPET FIBC</Link></li>
              <li><Link to="/about-us" style={{ padding: '4px 0', display: 'inline-block' }}>About Us</Link></li>
              <li><Link to="/contact-us-2" style={{ padding: '4px 0', display: 'inline-block' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '18px', color: '#FFFFFF' }}>Products</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#CBD5E1' }}>
              <li><Link to="/product_category/fibc" style={{ padding: '4px 0', display: 'inline-block' }}>FIBC Jumbo Bag</Link></li>
              <li><Link to="/product_category/leno-bags-febric" style={{ padding: '4px 0', display: 'inline-block' }}>Leno Bags & Fabric</Link></li>
              <li><Link to="/product_category/pp-woven-sacks" style={{ padding: '4px 0', display: 'inline-block' }}>PP Woven Sacks</Link></li>
              <li><Link to="/product_category/jute-burlap" style={{ padding: '4px 0', display: 'inline-block' }}>Jute / Burlap</Link></li>
              <li><Link to="/product_category/specialty-febrics" style={{ padding: '4px 0', display: 'inline-block' }}>Specialty Fabrics</Link></li>
              <li><Link to="/product_category/retail-shoping-bags" style={{ padding: '4px 0', display: 'inline-block' }}>Retail Shopping Bags</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal & Compliance */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '18px', color: '#FFFFFF' }}>Legal & Compliance</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#CBD5E1' }}>
              <li><Link to="/terms-and-conditions" style={{ padding: '4px 0', display: 'inline-block' }}>Terms & Conditions</Link></li>
              <li><Link to="/terms-and-conditions" style={{ padding: '4px 0', display: 'inline-block' }}>Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" style={{ padding: '4px 0', display: 'inline-block' }}>Disclaimer</Link></li>
              <li><Link to="/terms-and-conditions" style={{ padding: '4px 0', display: 'inline-block' }}>Certificates</Link></li>
            </ul>
          </div>

          {/* Column 5: Get in Touch */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '700', marginBottom: '18px', color: '#FFFFFF' }}>Get in Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#CBD5E1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="#00C2A8" />
                <a href="mailto:info@bulkflex.com" style={{ color: '#CBD5E1' }}>info@bulkflex.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="#00C2A8" />
                <a href="tel:+919876543210" style={{ color: '#CBD5E1' }}>+91 98765 43210</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={16} color="#00C2A8" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Address<br />India Hub | Asia Hub</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div 
          className="footer-bottom-bar"
          style={{ paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#64748B' }}
        >
          <div>© 2025 Bulk Flex. All Rights Reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>Design & Developed by Webpark Technologies</span>
            <button 
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                background: 'transparent',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
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