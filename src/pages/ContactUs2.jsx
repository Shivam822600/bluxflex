import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ContactUs2() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <Layout>
      {/* Banner */}
      <section style={{ background: '#142E3D', color: '#FFFFFF', padding: 'clamp(36px, 6vw, 64px) 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 42px)', color: '#FFFFFF', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
            {t('contactUs')}
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '15px', marginTop: '8px', maxWidth: '540px', margin: '8px auto 0 auto' }}>
            Get in touch with our global procurement execution team.
          </p>
        </div>
      </section>

      {/* Main Form & Address Section */}
      <section style={{ padding: 'clamp(36px, 6vw, 72px) 0', background: '#FBF1E6' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(24px, 4vw, 48px)',
            alignItems: 'start'
          }}>
            
            {/* Contact Details Card */}
            <div style={{ background: '#142E3D', color: '#FFFFFF', padding: 'clamp(24px, 4vw, 40px)', borderRadius: '20px' }}>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 28px)', color: '#FFFFFF', marginBottom: '12px' }}>Get In Touch</h2>
              <p style={{ color: '#CBD5E1', fontSize: '14.5px', lineHeight: '1.6', marginBottom: '32px' }}>
                Ready to discuss your bulk packaging requirements? Contact our technical team today.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(141, 198, 63, 0.2)', padding: '12px', borderRadius: '10px', color: '#8DC63F', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', color: '#FFFFFF', marginBottom: '4px' }}>Headquarters</h4>
                    <p style={{ fontSize: '14px', color: '#CBD5E1', lineHeight: '1.5' }}>
                      A6/7 Mangalam Housing Society, Gotri Vadodara, Gujarat, India - 390021
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ background: 'rgba(141, 198, 63, 0.2)', padding: '12px', borderRadius: '10px', color: '#8DC63F', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', color: '#FFFFFF', marginBottom: '2px' }}>Phone / WhatsApp</h4>
                    <a href="tel:+919898398989" style={{ fontSize: '14px', color: '#8DC63F', fontWeight: '600' }}>+91 98983 98989</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ background: 'rgba(141, 198, 63, 0.2)', padding: '12px', borderRadius: '10px', color: '#8DC63F', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', color: '#FFFFFF', marginBottom: '2px' }}>Email Support</h4>
                    <a href="mailto:info@bulkflex.com" style={{ fontSize: '14px', color: '#CBD5E1' }}>info@bulkflex.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="card-clean" style={{ padding: 'clamp(24px, 4vw, 40px)' }}>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 26px)', color: '#142E3D', marginBottom: '8px' }}>Send Us a Message</h2>
              <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '24px' }}>
                Fill out the form below and an export engineer will respond within 24 hours.
              </p>

              {submitted ? (
                <div style={{ background: '#F0F7E4', border: '1px solid #8DC63F', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
                  <CheckCircle2 size={40} color="#8DC63F" style={{ margin: '0 auto 12px auto' }} />
                  <h3 style={{ fontSize: '18px', color: '#142E3D' }}>Thank You!</h3>
                  <p style={{ fontSize: '14px', color: '#475569', marginTop: '4px' }}>Your message has been sent successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '16px'
                  }}>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: '600', color: '#142E3D', display: 'block', marginBottom: '6px' }}>Your Name</label>
                      <input type="text" placeholder="John Doe" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px' }} />
                    </div>
                    <div>
                      <label style={{ fontSize: '13px', fontWeight: '600', color: '#142E3D', display: 'block', marginBottom: '6px' }}>Email Address</label>
                      <input type="email" placeholder="john@company.com" required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px' }} />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '13px', fontWeight: '600', color: '#142E3D', display: 'block', marginBottom: '6px' }}>Company &amp; Country</label>
                    <input type="text" placeholder="Acme Logistics, USA" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px' }} />
                  </div>

                  <div>
                    <label style={{ fontSize: '13px', fontWeight: '600', color: '#142E3D', display: 'block', marginBottom: '6px' }}>Message / Product Requirements</label>
                    <textarea rows="4" placeholder="Describe your bag dimensions, SWL requirement, and quantity..." required style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px', resize: 'vertical' }}></textarea>
                  </div>

                  <button type="submit" className="btn-dark" style={{ background: '#142E3D', justifyContent: 'center', minHeight: '44px' }}>
                    Send Message <Send size={16} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}