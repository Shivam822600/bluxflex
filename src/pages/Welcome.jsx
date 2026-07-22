import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

import asset_Bulk_Flex_Brand_white_1024x293_png_1 from '../assets/images/Bulk_Flex_Brand_white-1024x293.png?url';
import asset_Bulk_Flex_Brand_white_300x86_png_2 from '../assets/images/Bulk_Flex_Brand_white-300x86.png?url';
import asset_Bulk_Flex_Brand_white_768x220_png_3 from '../assets/images/Bulk_Flex_Brand_white.png?url';
import asset_simplified_text_1024x146_png_4 from '../assets/images/simplified_text-1024x146.png?url';

export default function Welcome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div style={{
        background: '#072834',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(32px, 6vw, 64px)',
        textAlign: 'center'
      }}>
        <img
          src={asset_Bulk_Flex_Brand_white_1024x293_png_1}
          alt="BulkFlex Industrial Packaging"
          style={{ maxWidth: '480px', width: '100%', height: 'auto', marginBottom: '24px' }}
        />
        <img
          src={asset_simplified_text_1024x146_png_4}
          alt="Bulk Sourcing Simplified"
          style={{ maxWidth: '360px', width: '100%', height: 'auto', marginBottom: '32px' }}
        />
        <Link to="/" className="btn-dark" style={{ background: '#00C2A8', color: '#072834', padding: '14px 32px', fontWeight: '800' }}>
          Explore Homepage →
        </Link>
      </div>
    </Layout>
  );
}