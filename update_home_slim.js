const fs = require('fs');

try {
  let code = fs.readFileSync('src/pages/HomePage.jsx', 'utf8');

  // 1. Revert Hero Text to original (LanguageContext driven)
  const heroTarget = `<p className="mt-6 max-w-lg text-[17px] font-semibold leading-relaxed" style={{ color: 'var(--color-brand-dark)' }}>
                  Source industrial packaging products from trusted Indian manufacturing partners in India.
                </p>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed" style={{ color: '#475569' }}>
                  {t('heroDesc')}
                </p>`;
  const heroReplacement = `<p className="mt-6 max-w-lg text-[17px] font-semibold leading-relaxed" style={{ color: 'var(--color-brand-dark)' }}>
                  {t('heroDesc')}
                </p>`;
  if(code.includes('Source industrial packaging products')) {
    code = code.replace(heroTarget, heroReplacement);
  }

  // 2. Remove all imported components
  code = code.replace("<WhyBulkFlexSection />\n      <ProductSourcingProcessSection />", "");
  code = code.replace("<WhySourceFromIndiaSection />\n      <GlobalExportCapabilitySection />\n      <FaqSection />", "");

  // 3. Re-enable Vision & Values, but rename to "Sourcing Managed End to End"
  // Let's replace the whole VISION & VALUES hidden section with the updated 3-card layout
  const startVis = "{/* 5. VISION & VALUES (Hidden legacy) */}";
  const endVis = "{/* 6. INDUSTRIES WE SERVE */}";
  const startVisIdx = code.indexOf(startVis);
  const endVisIdx = code.indexOf(endVis);

  if (startVisIdx !== -1 && endVisIdx !== -1) {
    const newSourcingSection = `
      {/* SOURCING MANAGED END TO END */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 0', background: '#FBF1E6' }}>
        <div className="container">
          
          <div style={{ maxWidth: '600px', marginBottom: '52px' }}>
            <span style={{ color: '#8DC63F', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.2px', display: 'block', marginBottom: '8px' }}>
              COMPANY OVERVIEW
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 42px)', fontWeight: '800', color: '#142E3D', marginBottom: '12px' }}>
              Sourcing Managed End to End
            </h2>
            <div style={{ width: '40px', height: '3px', background: '#8DC63F', marginBottom: '16px' }}></div>
            <p style={{ color: '#64748B', fontSize: '16px' }}>
              BulkFlex manages sourcing and supply — matching buyers to vetted manufacturing partners, coordinating quality checks, and consolidating shipments across multiple facilities.
            </p>
          </div>

          {/* 3-Column Card Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px'
          }}>
            {[
              { title: 'Quality Assurance', desc: 'Inspection and compliance checks aligned with international packaging standards.' },
              { title: 'Supply Chain Continuity', desc: 'Multi-plant sourcing designed to support consistent delivery timelines.' },
              { title: 'Cost Optimization', desc: 'Direct mill pricing with container space optimization to help reduce landed costs.' }
            ].map((val, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '36px 32px',
                border: '1px solid #E2E8F0',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(7,40,52,0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#142E3D', marginBottom: '10px' }}>
                  {val.title}
                </h3>
                <p style={{ fontSize: '15px', color: '#64748B', lineHeight: '1.65' }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
`;
    code = code.substring(0, startVisIdx) + newSourcingSection + "\n      " + code.substring(endVisIdx);
  }

  // 4. Re-enable interactive FAQ accordion, but change FAQs to match PDF
  const startFaq = "{/* 8. INTERACTIVE FAQ ACCORDION (Hidden legacy) */}";
  const endFaq = "{/* 9. RFQ CTA BANNER */}";
  const startFaqIdx = code.indexOf(startFaq);
  const endFaqIdx = code.indexOf(endFaq);

  if (startFaqIdx !== -1 && endFaqIdx !== -1) {
    const newFaqSection = `
      {/* 8. INTERACTIVE FAQ ACCORDION */}
      <section style={{ padding: 'clamp(64px, 8vw, 96px) 0', background: '#FBF1E6', borderTop: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ color: '#8DC63F', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1.2px', display: 'block', marginBottom: '8px' }}>
              FAQ
            </span>
            <h2 style={{ fontSize: 'clamp(30px, 3.8vw, 42px)', fontWeight: '800', color: '#142E3D', marginBottom: '12px' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {faqs.slice(0, 3).map((faq, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '12px',
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
`;
    code = code.substring(0, startFaqIdx) + newFaqSection + "\n      " + code.substring(endFaqIdx);
  }

  // Ensure INDUSTRIES WE SERVE is visible
  code = code.replace("<section style={{ display: 'none', padding: 'clamp(64px, 8vw, 96px) 0', background: '#FBF1E6', borderTop: '1px solid #E2E8F0' }}>", "<section style={{ padding: 'clamp(64px, 8vw, 96px) 0', background: '#FBF1E6', borderTop: '1px solid #E2E8F0' }}>");

  // Note: I also need to update the faqs array at the top of the file to match the PDF mockups
  const targetFaqs = `const faqs = [
    {
      q: 'What is an FIBC?',`;
  
  const replacementFaqs = `const faqs = [
    {
      q: 'What is the Minimum Order Quantity (MOQ)?',
      a: 'Our MOQs depend on product customization. Standard FIBC bulk bags usually start at 1,000 units, while custom printed PP woven sacks start at 5,000 units. Container load consolidations are also available for multi-SKU orders.'
    },
    {
      q: 'Are your FIBC bags UN Certified for dangerous chemicals?',
      a: 'Yes, we supply UN Certified Type A, B, C (Conductive), and D FIBC bulk bags tested for hazardous cargo in compliance with international maritime and transport regulations.'
    },
    {
      q: 'Can BulkFlex handle multi-supplier order consolidation?',
      a: 'Yes, absolutely. We specialize in single-point procurement. We manage quality checks, production scheduling, and container optimization across multiple manufacturing facilities so you receive a single consolidated shipment.'
    },
    {
      q: 'What is an FIBC?',`;

  if(code.includes(targetFaqs)) {
    code = code.replace(targetFaqs, replacementFaqs);
  }

  fs.writeFileSync('src/pages/HomePage.jsx', code);
  console.log("HomePage slimmed down successfully.");
} catch(e) {
  console.error(e);
}
