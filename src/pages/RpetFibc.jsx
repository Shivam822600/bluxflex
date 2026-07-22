import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

import asset_baffle_bag_png_1 from '../assets/images/baffle-bag.png?url';
import asset_single_loop_png_2 from '../assets/images/single-loop.png?url';

export default function RpetFibc() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="productDetailsWrapper">
        {/* Section 1: Hero Header & Policy Mandates */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid #E2E8F0',
          padding: '36px',
          marginBottom: '32px',
          boxShadow: '0 8px 30px rgba(7, 40, 52, 0.04)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', alignItems: 'center' }}>
            <div style={{ background: '#F8FAFC', borderRadius: '20px', padding: '24px', border: '1px solid #EEF2F6', textAlign: 'center' }}>
              <img src={asset_baffle_bag_png_1} alt="rPET FIBC Baffle Bag" style={{ maxHeight: '340px', width: 'auto', margin: '0 auto', objectFit: 'contain' }} />
            </div>

            <div>
              <h1 style={{ fontSize: '32px', color: '#072834', fontWeight: '800', marginBottom: '8px' }}>
                rPET FIBC
              </h1>
              <h3 style={{ fontSize: '18px', color: '#00C2A8', fontWeight: '700', marginBottom: '16px' }}>
                Circular Performance. Commercial Advantage.
              </h3>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', marginBottom: '16px', fontWeight: '700' }}>
                The “Status Quo” is now your most expensive strategy.
              </p>
              <p style={{ fontSize: '14px', color: '#64748B', lineHeight: '1.6', marginBottom: '16px' }}>
                Across major economies, packaging policy is shifting toward circular material integration and regulatory mandates:
              </p>
              <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#475569', fontSize: '14px', lineHeight: '1.7', margin: 0 }}>
                <li><strong>United States:</strong> California AB 793 content mandate; State-level EPR legislation.</li>
                <li><strong>European Union:</strong> €800/Tonne Plastic Packaging Tax; Circular Economy Action Plan.</li>
                <li><strong>Canada:</strong> Action Plan on Zero Plastic Waste; Proposed 50% recycled targets by 2030. Federal Plastics Registry reporting requirements.</li>
                <li><strong>Australia/NZ:</strong> 2025 National Packaging Targets; 50% average recycled content objective.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Bottle to Bag & Integrated Container Programs */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid #E2E8F0',
          padding: '36px',
          marginBottom: '32px',
          boxShadow: '0 8px 30px rgba(7, 40, 52, 0.04)'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '40px', alignItems: 'center' }}>
            <div style={{ background: '#F8FAFC', borderRadius: '20px', padding: '24px', border: '1px solid #EEF2F6', textAlign: 'center' }}>
              <img src={asset_single_loop_png_2} alt="Single Loop rPET FIBC" style={{ maxHeight: '340px', width: 'auto', margin: '0 auto', objectFit: 'contain' }} />
            </div>

            <div>
              <h2 style={{ fontSize: '26px', color: '#072834', fontWeight: '800', marginBottom: '16px' }}>
                Bottle to Bag
              </h2>
              
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#00C2A8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                  Industrial Stability. Circular Material.
                </h4>
                <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6', marginBottom: '10px' }}>
                  Transparency in supply. Clarity in performance. Through Intrinsic Viscosity (IV) stabilization and precision extrusion, our material achieves mechanical performance comparable to conventional PP woven fabric.
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#475569', fontSize: '13px', lineHeight: '1.6' }}>
                  <li>Advanced optical sorting & Multi-stage decontamination.</li>
                  <li>SSP for molecular stabilization.</li>
                  <li>Stable stacking performance & Controlled elongation.</li>
                  <li>Food grade certification under process.</li>
                </ul>
              </div>

              <div style={{ background: '#F8FAFC', padding: '16px 20px', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#072834', marginBottom: '4px' }}>
                  INTEGRATED CONTAINER PROGRAMS
                </h4>
                <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.6', margin: '0 0 8px 0' }}>
                  Innovation without the “All-In” Gamble. Bulk Flex enables mixed container loads. Trial rPET innovation within the same load as your existing PP specifications.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: '#072834', fontWeight: '600' }}>
                  <li>✓ No portfolio replacement.</li>
                  <li>✓ No isolated stock.</li>
                  <li>✓ No operational disruption. Your PP foundation remains intact while your portfolio gains circular capability.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Market & Engineering Impact */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid #E2E8F0',
          padding: '32px',
          marginBottom: '32px'
        }}>
          <h2 style={{ fontSize: '24px', color: '#072834', fontWeight: '800', marginBottom: '12px' }}>
            The Market is Moving — Quietly
          </h2>
          <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
            Importers across North America and Europe are evaluating rPET FIBC alongside established Polypropylene programs. This is a structured and commercially benchmarked expansion. The advantage belongs to those who prepare before the demand.
          </p>

          <div style={{ background: '#072834', color: '#FFFFFF', padding: '24px', borderRadius: '16px' }}>
            <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#00C2A8', marginBottom: '12px' }}>
              ENGINEERING IMPACT
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '13px', color: '#94A3B8' }}>Bag:</span>
                <p style={{ fontSize: '18px', fontWeight: '800', color: '#FFFFFF', margin: '2px 0 0 0' }}>~ 200 Recycled Bottles</p>
              </div>
              <div>
                <span style={{ fontSize: '13px', color: '#94A3B8' }}>1 Full Container (20T):</span>
                <p style={{ fontSize: '18px', fontWeight: '800', color: '#FFFFFF', margin: '2px 0 0 0' }}>Bottles Diverted At Scale</p>
              </div>
              <div>
                <span style={{ fontSize: '13px', color: '#94A3B8' }}>Performance Standard:</span>
                <p style={{ fontSize: '18px', fontWeight: '800', color: '#00C2A8', margin: '2px 0 0 0' }}>Industrial & Circular</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Why rPET Commercial Advantage & Comprehensive Portfolio */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', marginBottom: '32px' }}>
          <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid #E2E8F0', padding: '28px' }}>
            <h3 style={{ fontSize: '20px', color: '#072834', fontWeight: '800', marginBottom: '14px' }}>
              Why rPET is a Commercial Advantage
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#475569' }}>
              <li>➢ Aligns with customer ESG commitments.</li>
              <li>➢ Enables participation in circular procurement tenders.</li>
              <li>➢ Mitigates exposure to recycled content taxation models.</li>
              <li>➢ Differentiates your portfolio beyond commodity supply.</li>
            </ul>
          </div>

          <div style={{ background: '#FFFFFF', borderRadius: '20px', border: '1px solid #E2E8F0', padding: '28px' }}>
            <h3 style={{ fontSize: '20px', color: '#072834', fontWeight: '800', marginBottom: '14px' }}>
              Comprehensive Portfolio
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#475569' }}>
              <li>➢ <strong>rPET & Virgin PP:</strong> U+2, 4-panel, Baffle (Q-Bags), Circular, and Single Loop Bags.</li>
              <li>➢ <strong>High-Airflow:</strong> Available in Virgin PP High-Airflow Ventilated Bags.</li>
              <li>➢ <strong>Food Grade Programs:</strong> Virgin PP BRC certified production (rPET Food Grade in-process).</li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '24px' }}>
          <Link to="/contact-us-2" className="btn-dark" style={{ display: 'inline-flex', padding: '14px 36px', fontSize: '15px' }}>
            Inquire About rPET Programs <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </Layout>
  );
}