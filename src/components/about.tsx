import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import Livingroom from '../parlor4.jpg';
import masterSuite from '../bedroom2.jpg';
import exterior from '../exterior2.jpg';



const About: React.FC = () => {
  const ref = useScrollReveal();
  return(
    <div ref={ref}>
      <section ref={ref} id="about" style={{ background: 'var(--surface2)', padding: '96px 56px', borderTop: '1px solid var(--border2)' }}>


      {/* ── TOP ROW: text left, two images right ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '48px', alignItems: 'center', marginBottom: '56px' }}>
        <div>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>Who Are We? </div>
          <h2 style={{ fontSize: 'clamp(2.7rem,5vw,3.3rem)', fontWeight: 300, fontStyle: 'normal', color: 'var(--text)', lineHeight: 1.15, marginBottom: '16px', fontFamily: 'var(--font3)' }}>
            Nigeria's most{' '}
            <strong style={{ fontStyle: 'normal', fontWeight: 500, color: 'var(--gold)', fontFamily: 'var(--font3)' }}>trusted</strong>{' '}
            property platform
          </h2>
          <p style={{ fontSize: '0.96rem', fontWeight: 300, color: 'var(--gold3)', lineHeight: 1.95, marginBottom: '28px' }}>
            We connect buyers, sellers and renters with verified premium properties across Lagos, Abuja, Anambra, Port Harcourt and beyond. Eight years of trust. Thousands of homes found.
          </p>
          <button style={{
            fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--gold)',
            background: 'rgba(200,168,75,0.08)',
            border: '1px solid rgba(200,168,75,0.25)',
            padding: '11px 24px', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background='var(--gold)'; e.currentTarget.style.color='var(--bg)'; }}
            onMouseLeave={e => { e.currentTarget.style.background='rgba(200,168,75,0.08)'; e.currentTarget.style.color='var(--gold)'; }}
          >Learn More →</button>
        </div>

        {/* Two images right */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>

          {/* Living Space */}
          <div style={{
            height: '250px',
            backgroundImage: `url(${Livingroom})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '4px', position: 'relative', overflow: 'hidden',
            transition: 'transform 0.5s ease',
          }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,5,0.55) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: '12px', left: '12px', fontSize: '0.68rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>Living Space</div>
          </div>

          {/* Master Suite */}
          <div style={{
            height: '250px',
            backgroundImage: `url(${masterSuite})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '4px', position: 'relative', overflow: 'hidden',
            transition: 'transform 0.5s ease',
          }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,5,0.55) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: '12px', left: '12px', fontSize: '0.68rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.5)' }}>Master Suite</div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'var(--border)', marginBottom: '56px' }} />

      {/* ── BOTTOM ROW: big image left, text right ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '48px', alignItems: 'center' }}>

        {/* Big image */}
        <div style={{
          height: '370px',
          backgroundImage: `url(${exterior})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '4px', position: 'relative', overflow: 'hidden',
          transition: 'transform 0.5s ease',
        }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,8,5,0.6) 0%, transparent 52%)' }} />
          <div style={{ position: 'absolute', bottom: '20px', left: '20px', fontSize: '0.8rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.55)' }}>Pool & Garden View</div>
        </div>

        {/* Text */}
        <div>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>Our Promise</div>
          <h2 style={{ fontSize: 'clamp(2.7rem,5vw,3.3rem)', fontWeight: 300, fontStyle: 'normal', color: 'var(--text)', lineHeight: 1.2, marginBottom: '16px', fontFamily: 'var(--font3)' }}>
            Every home{''}
            <strong style={{ fontStyle: 'normal', fontWeight: 500, color: 'var(--gold-lt)', fontFamily: 'var(--font2)' }}><span style={{color:'var(--text'}}>,</span> verified.</strong>
            <br />Every deal{''}
            <strong style={{ fontStyle: 'normal', fontWeight: 500, color: 'var(--gold-lt)', fontFamily: 'var(--font2)' }}><span style={{color:'var(--text)'}}>,</span> supported.</strong>
          </h2>
          <p style={{ fontSize: '0.96rem', fontWeight: 300, color: 'var(--gold3)', lineHeight: 1.95, marginBottom: '24px' }}>
            Our agents conduct physical inspections of every listed property before it goes live. No phantom listings. No surprises. Just homes you can trust.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Physical inspection on every listing','Dedicated agent from search to handover','Transparent pricing — no hidden fees'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.96rem', fontWeight: 300, color: 'var(--gold3)' }}>
                <span style={{ width: '6px', height: '6px', background: 'var(--gold)', borderRadius: '50%', flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>


      <style>{`
        @media (max-width: 900px) {
          section { padding: 72px 24px !important; }
          div[style*="gridTemplateColumns: 1fr 1.4fr"],
          div[style*="gridTemplateColumns: 1.3fr 1fr"],
          div[style*="gridTemplateColumns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>

      </section>
    </div>
    
  );
};

export default About;