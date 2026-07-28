const fs = require('fs');

try {
  let code = fs.readFileSync('src/pages/HomePage.jsx', 'utf8');

  // Add imports
  const importsToAdd = `
import { 
  WhyBulkFlexSection, 
  ProductSourcingProcessSection, 
  WhySourceFromIndiaSection, 
  GlobalExportCapabilitySection, 
  FaqSection 
} from '../components/home/HomeBlocks';
`;
  if(!code.includes('HomeBlocks')) {
    code = code.replace("} from 'lucide-react';", "} from 'lucide-react';" + importsToAdd);
  }

  // Update hero text
  const heroTarget = "{t('heroDesc')}";
  const heroReplacement = `Source industrial packaging products from trusted Indian manufacturing partners in India.
                </p>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed" style={{ color: '#475569' }}>
                  {t('heroDesc')}`;
  
  if(!code.includes('Source industrial packaging products')) {
    code = code.replace(heroTarget, heroReplacement);
  }

  // Replace sections
  const startMarker = "{/* 4. STORYTELLING SECTION (Full-Width Organic Wave Background) */}";
  const endMarker = "{/* 9. RFQ CTA BANNER */}";

  const startIndex = code.indexOf(startMarker);
  const endIndex = code.indexOf(endMarker);

  if(startIndex !== -1 && endIndex !== -1) {
    const newSections = `
      <WhyBulkFlexSection />
      <ProductSourcingProcessSection />
      
      {/* 6. INDUSTRIES WE SERVE */}
      <section style={{ padding: 'clamp(56px, 7vw, 80px) 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 44px auto' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: '800', color: '#142E3D', marginBottom: '10px' }}>
              Built for These Sectors
            </h2>
            <p style={{ color: '#64748B', fontSize: '15px' }}>
              Customized flexible packaging solutions for diverse global sectors.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Chemicals & Resins', icon: <Factory size={24} color="#8DC63F" /> },
              { title: 'Agriculture & Grain', icon: <Sprout size={24} color="#8DC63F" /> },
              { title: 'Construction Materials', icon: <Building2 size={24} color="#8DC63F" /> },
              { title: 'Food & Pharma', icon: <Package size={24} color="#8DC63F" /> },
            ].map((ind, i) => (
              <div key={i} style={{ background: '#FFFFFF', borderRadius: '16px', padding: '24px', border: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 6px 16px rgba(0,0,0,0.03)', transition: 'transform 0.2s' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: '#F0F7E4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {ind.icon}
                </div>
                <span style={{ fontSize: '16px', fontWeight: '800', color: '#142E3D' }}>{ind.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhySourceFromIndiaSection />
      <GlobalExportCapabilitySection />
      <FaqSection />

      `;
    code = code.substring(0, startIndex) + newSections + code.substring(endIndex);
  }

  fs.writeFileSync('src/pages/HomePage.jsx', code);
  console.log("HomePage.jsx updated successfully.");
} catch (error) {
  console.error("Error updating file:", error);
}
