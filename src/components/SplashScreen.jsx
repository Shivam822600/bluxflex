import React, { useState, useEffect } from 'react';
import asset_logo from '../assets/images/Bulk_Flex_Brand_white-300x86.png?url';

export default function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out slightly before 3 seconds for a smooth transition
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2600);

    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'radial-gradient(circle at center, #0F3A4A 0%, #072834 70%, #041820 100%)',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: fadeOut ? 'none' : 'all',
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        padding: '24px',
        boxSizing: 'border-box'
      }}
    >
      {/* Background Animated Pulse Glow */}
      <div
        style={{
          position: 'absolute',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 194, 168, 0.16) 0%, rgba(7, 40, 52, 0) 70%)',
          animation: 'pulseGlow 2.5s infinite ease-in-out',
          pointerEvents: 'none'
        }}
      />

      {/* Decorative Subtle Line Grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          pointerEvents: 'none'
        }}
      />

      {/* Main Centered Content */}
      <div
        style={{
          textAlign: 'center',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '800px',
          animation: 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        {/* Larger Branded Logo */}
        <img
          src={asset_logo}
          alt="BulkFlex Private Limited"
          style={{
            height: '110px',
            width: 'auto',
            maxWidth: '90vw',
            objectFit: 'contain',
            marginBottom: '28px',
            filter: 'drop-shadow(0 14px 28px rgba(0, 194, 168, 0.35))'
          }}
        />

        {/* Elegant Gold/Cyan Divider Line */}
        <div
          style={{
            width: '120px',
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #00C2A8, transparent)',
            borderRadius: '2px',
            marginBottom: '24px'
          }}
        />

        {/* Tagline & Subheading */}
        <h2
          style={{
            color: '#FFFFFF',
            fontSize: '24px',
            fontWeight: '800',
            letterSpacing: '0.5px',
            margin: '0 0 10px 0',
            fontFamily: 'var(--font-heading, "DM Sans", sans-serif)'
          }}
        >
          GLOBAL PACKAGING &amp; INDUSTRIAL SOURCING
        </h2>

        <p
          style={{
            color: '#00C2A8',
            fontSize: '14px',
            fontWeight: '700',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            margin: 0
          }}
        >
          Your Extended Arm In Asia · Audited Factory Network
        </p>
      </div>

      <style>{`
        @keyframes pulseGlow {
          0% { transform: scale(0.85); opacity: 0.4; }
          50% { transform: scale(1.15); opacity: 0.85; }
          100% { transform: scale(0.85); opacity: 0.4; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
