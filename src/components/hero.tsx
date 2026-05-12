import React from 'react';
import heroImg from '../temp-image.jpg';
import useScrollReveal from '../hooks/useScrollReveal';



const Hero: React.FC = () => {
  const ref = useScrollReveal();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  return(
    <section ref={ref} id="hero" style={{
      minHeight: '100vh', position: 'relative',
      display: 'flex', alignItems: 'flex-end', overflow: 'hidden',
    }}>
     
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />

      {/* Warm window-light glow top right */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '55%', height: '100%',
        background: 'radial-gradient(ellipse at 78% 28%, rgba(220,170,80,0.38) 0%, rgba(180,120,40,0.18) 42%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Dark left gradient for text legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(0, 0, 0, 0.94) 0%, rgba(0, 0, 0, 0.72) 38%, rgba(0, 0, 0, 0.18) 68%, transparent 100%)',
      }} />

      {/* Bottom fade into stats strip */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px',
        background: 'linear-gradient(to top, var(--bg), transparent)',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, padding: isMobile ? '0 12px 60px' : '0 56px 88px', maxWidth: isMobile ? '100%' : '520px' }}>
        <div style={{
          fontSize: '0.62rem', fontWeight: 400, letterSpacing: '0.28em',
          textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '30px',
          display: 'flex', alignItems: 'center', gap: '12px',fontFamily: 'var(--font2)'
        }}>
          <span style={{ display: 'inline-block', width: '28px', height: '1px', background: 'var(--gold)', }} />
          Premium Real Estate · Nigeria
        </div>

        <h1 style={{
          fontSize: 'clamp(2.9rem, 5.4vw, 5.9rem)', fontWeight: 500,
          fontStyle: 'normal', lineHeight: 1.09, fontFamily: 'var(--font2)',
          letterSpacing: '-0.02em', color: 'var(--hero)', marginBottom: '20px',
        }}>
          Discover your<br />
          ideal{' '}
          <span style={{ color: 'var(--hero)', fontStyle: 'normal', fontFamily: 'var(--font2)', fontWeight: 500 }}>luxury</span>
          <br />residence.
        </h1>

        <p style={{
          fontSize: '1.07rem', fontWeight: 400,
          color: 'rgba(255, 238, 215, 0.58)', lineHeight: 1.85,
          maxWidth: '400px', marginBottom: '32px',fontFamily: 'var(--font3)'
        }}>
          Exquisite homes designed for discerning buyers across Nigeria — from Lagos penthouses to Abuja estates.
        </p>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="#listings" style={{
            fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--bg)', background: 'var(--gold)',
            padding: '13px 28px', transition: 'background 0.2s', fontFamily:'var(--font)'
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-lt)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
          >Browse Listings</a>
          <a href="#about" style={{
            fontSize: '0.68rem', fontWeight: 400, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--gold)',
            border: '1px solid rgba(200,168,75,0.35)', padding: '13px 28px',
            transition: 'border-color 0.2s', fontFamily:'var(--font)'
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(200,168,75,0.35)'}
          >Contact Us</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section { min-height: 90vh !important; }
          div[style*="padding: 0 30px"] { padding: 0 24px 72px !important; }
        }
          
      `}</style>
    </section>
  );
};

export default Hero;