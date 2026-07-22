import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Calculator, CheckCircle2, ArrowRight, ShieldCheck, FileText, UserCheck, Search, Award } from 'lucide-react';

export default function BuyerTools() {
  const [width, setWidth] = useState(90);
  const [length, setLength] = useState(90);
  const [height, setHeight] = useState(120);
  const [bulkDensity, setBulkDensity] = useState(800);

  const volumeM3 = ((width * length * height) / 1000000).toFixed(2);
  const totalWeightKg = Math.round(volumeM3 * bulkDensity);
  const recommendedSwl = totalWeightKg <= 500 ? 500 : totalWeightKg <= 1000 ? 1000 : totalWeightKg <= 1500 ? 1500 : 2000;

  return (
    <Layout>
      {/* Banner */}
      <section style={{ background: '#072834', color: '#FFFFFF', padding: '56px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '38px', color: '#FFFFFF', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
            Buyer Corner & Tools
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '15px', marginTop: '8px' }}>
            Interactive capacity calculators, technical specification guides, and step-by-step procurement workflows.
          </p>
        </div>
      </section>

      {/* Buyer Journey Steps */}
      <section style={{ padding: '72px 0', background: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '32px', color: '#072834', display: 'inline-block', borderBottom: '3px solid #00C2A8', paddingBottom: '6px' }}>
              Your Buyer Journey
            </h2>
            <p style={{ color: '#64748B', fontSize: '15px', marginTop: '8px' }}>
              A transparent, step-by-step process from first contact to final delivery
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '28px' }}>
            
            <div className="card-clean" style={{ padding: '32px' }}>
              <div style={{ fontSize: '36px', fontWeight: '900', color: '#00C2A8', opacity: '0.4', marginBottom: '12px' }}>01</div>
              <h3 style={{ fontSize: '18px', color: '#072834', marginBottom: '10px' }}>Buyer Specs & Use-Case Review</h3>
              <p style={{ color: '#64748B', fontSize: '13px', lineHeight: '1.6' }}>
                We start by understanding your application, SWL requirements, GSM, UV stabilisation hours, loop type, and liner spec into a structured brief.
              </p>
            </div>

            <div className="card-clean" style={{ padding: '32px' }}>
              <div style={{ fontSize: '36px', fontWeight: '900', color: '#00C2A8', opacity: '0.4', marginBottom: '12px' }}>02</div>
              <h3 style={{ fontSize: '18px', color: '#072834', marginBottom: '10px' }}>Audited Factory Shortlisting</h3>
              <p style={{ color: '#64748B', fontSize: '13px', lineHeight: '1.6' }}>
                We match your spec to pre-screened factories based on category capability, certifications, and capacity, maintaining pre-audited backup suppliers.
              </p>
            </div>

            <div className="card-clean" style={{ padding: '32px' }}>
              <div style={{ fontSize: '36px', fontWeight: '900', color: '#00C2A8', opacity: '0.4', marginBottom: '12px' }}>03</div>
              <h3 style={{ fontSize: '18px', color: '#072834', marginBottom: '10px' }}>Sampling & Pre-Shipment QC</h3>
              <p style={{ color: '#64748B', fontSize: '13px', lineHeight: '1.6' }}>
                Samples are reviewed against your spec. Live production QC reports and photographic evidence are provided at each stage of our 11-stage protocol.
              </p>
            </div>

            <div className="card-clean" style={{ padding: '32px' }}>
              <div style={{ fontSize: '36px', fontWeight: '900', color: '#00C2A8', opacity: '0.4', marginBottom: '12px' }}>04</div>
              <h3 style={{ fontSize: '18px', color: '#072834', marginBottom: '10px' }}>Contract & Traceability</h3>
              <p style={{ color: '#64748B', fontSize: '13px', lineHeight: '1.6' }}>
                SOPs, batch traceability records, and food-grade / UN compliance documentation are provided alongside your shipment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Calculator Section */}
      <section style={{ padding: '72px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '32px', color: '#072834' }}>FIBC Load & Capacity Calculator</h2>
            <p style={{ color: '#64748B', fontSize: '15px', marginTop: '8px' }}>Adjust dimensions and density to calculate recommended Safe Working Load (SWL).</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
            
            <div className="card-clean" style={{ padding: '36px' }}>
              <h3 style={{ fontSize: '20px', color: '#072834', marginBottom: '24px' }}>Bag Dimensions & Bulk Density</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ fontSize: '14px', fontWeight: '600', color: '#072834', display: 'block', marginBottom: '8px' }}>
                    Width: <strong>{width} cm</strong>
                  </label>
                  <input type="range" min="50" max="150" value={width} onChange={(e) => setWidth(Number(e.target.value))} style={{ width: '100%', accentColor: '#00C2A8' }} />
                </div>

                <div>
                  <label style={{ fontSize: '14px', fontWeight: '600', color: '#072834', display: 'block', marginBottom: '8px' }}>
                    Length: <strong>{length} cm</strong>
                  </label>
                  <input type="range" min="50" max="150" value={length} onChange={(e) => setLength(Number(e.target.value))} style={{ width: '100%', accentColor: '#00C2A8' }} />
                </div>

                <div>
                  <label style={{ fontSize: '14px', fontWeight: '600', color: '#072834', display: 'block', marginBottom: '8px' }}>
                    Height: <strong>{height} cm</strong>
                  </label>
                  <input type="range" min="60" max="220" value={height} onChange={(e) => setHeight(Number(e.target.value))} style={{ width: '100%', accentColor: '#00C2A8' }} />
                </div>

                <div>
                  <label style={{ fontSize: '14px', fontWeight: '600', color: '#072834', display: 'block', marginBottom: '8px' }}>
                    Material Bulk Density
                  </label>
                  <select 
                    value={bulkDensity} 
                    onChange={(e) => setBulkDensity(Number(e.target.value))}
                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '14px' }}
                  >
                    <option value={500}>Light Powders (~500 kg/m³)</option>
                    <option value={800}>Standard Granules (~800 kg/m³)</option>
                    <option value={1200}>Heavy Minerals (~1200 kg/m³)</option>
                    <option value={1600}>Ultra Heavy Ore (~1600 kg/m³)</option>
                  </select>
                </div>
              </div>
            </div>

            <div style={{ background: '#072834', color: '#FFFFFF', padding: '36px', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '22px', color: '#FFFFFF', marginBottom: '24px' }}>Recommended Specification</h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '13px', color: '#94A3B8' }}>Calculated Volume</div>
                  <div style={{ fontSize: '28px', fontWeight: '800', color: '#00C2A8', marginTop: '4px' }}>{volumeM3} m³</div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.08)', padding: '16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '13px', color: '#94A3B8' }}>Estimated Weight</div>
                  <div style={{ fontSize: '28px', fontWeight: '800', color: '#FFFFFF', marginTop: '4px' }}>{totalWeightKg} kg</div>
                </div>
              </div>

              <div style={{ background: 'rgba(0, 194, 168, 0.15)', border: '1px solid #00C2A8', padding: '20px', borderRadius: '12px', marginBottom: '28px' }}>
                <div style={{ fontSize: '13px', color: '#00C2A8', fontWeight: '600' }}>Recommended Safe Working Load:</div>
                <div style={{ fontSize: '24px', fontWeight: '800', color: '#FFFFFF', marginTop: '4px' }}>SWL {recommendedSwl} KG (5:1 Safety Factor)</div>
              </div>

              <a href="/contact-us-2" className="btn-dark" style={{ background: '#00C2A8', color: '#072834', width: '100%', justifyContent: 'center' }}>
                Request Custom RFQ Pricing <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}