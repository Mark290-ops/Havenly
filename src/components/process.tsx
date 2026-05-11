import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';


const steps = [
  { n: '01', title: 'Search',    desc: 'Browse thousands of verified listings filtered by location, budget and property type.' },
  { n: '02', title: 'Connect',   desc: 'Get matched with a local expert who knows the market. Schedule viewings in person or virtually.' },
  { n: '03', title: 'Negotiate', desc: 'We handle the complexity of offers, paperwork and agreements so you can focus on the excitement.' },
  { n: '04', title: 'Move In',   desc: 'Keys in hand. We stay with you through final inspection, signing and handover.' },
];

const Process: React.FC = () => {
  const ref = useScrollReveal();
  return(
    <div ref={ref}>
      <section id="process" style={{ background: 'var(--bg)', padding: '96px 56px', borderTop: '1px solid var(--border2)' }}>
      <div style={{ marginBottom: '64px' }}>
        <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>Process</div>
        <h2 style={{ fontSize: 'clamp(2.7rem,5vw,3.3rem)', fontWeight: 300, fontStyle: 'normal', color: 'var(--text)', lineHeight: 1.1, fontFamily: 'var(--font3)' }}>
          Your path to a{' '}
          <strong style={{ fontStyle: 'normal', fontWeight: 300, color: 'var(--gold-lt)',fontFamily: 'var(--font3)' }}>new home</strong>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'var(--border2)' }}>
        {steps.map(s => (
          <div key={s.n} style={{ background: 'var(--bg)', padding: '44px 32px', position: 'relative', transition: 'background 0.25s' }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}
          >
            {/* Ghost number */}
            <div style={{
              position: 'absolute', top: '12px', right: '16px',
              fontSize: '4rem', fontStyle: 'italic', fontWeight: 700,
              color: 'rgba(200,168,75,0.06)', lineHeight: 1, userSelect: 'none',
            }}>{s.n}</div>

            <div style={{ fontSize: '0.60rem', color: 'var(--gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>Step | {s.n}</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '12px', fontFamily: 'var(--font4)' }}>{s.title}</h3>
            <p style={{ fontSize: '0.90rem', fontWeight: 300, color: 'var(--gold3)', lineHeight: 1.85 }}>{s.desc}</p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          section { padding: 72px 24px !important; }
          div[style*="repeat(4,1fr)"] { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 500px) {
          div[style*="repeat(4,1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
      </section>
    </div>
    
  );
};

export default Process;