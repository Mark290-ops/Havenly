import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';



const reviews = [
  { name: 'Adaeze Okonkwo',   role: 'First-time Buyer · Lagos',     init: 'A', text: 'Havenly made the whole process feel manageable — my agent was patient, transparent, and found me a flat I genuinely love within my budget.' },
  { name: 'Chukwuemeka Eze',  role: 'Property Investor · Abuja',    init: 'C', text: 'As someone who has bought and sold multiple properties, I can say Havenly is the most professional platform I have used in Nigeria.' },
  { name: 'Folake Adeyemi',   role: 'Tenant · Ibadan',              init: 'F', text: 'Finding a decent rental used to be a nightmare. I found my current apartment on Havenly in under a week. The virtual tour saved me so much time.' },
];

const Testimonials: React.FC = () => {
  const ref = useScrollReveal();
  const [active, setActive] = useState(0);

  return (
    <div ref={ref}> 
      <section id="testimonials" style={{ background: 'var(--surface3)', padding: '96px 56px', borderTop: '1px solid var(--border2)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '64px', alignItems: 'start' }}>

          {/* Left */}
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>Our Client Stories</div>
            <h2 style={{ fontSize: 'clamp(2.7rem,5vw,3.3rem)', fontWeight: 300, fontStyle: 'normal', color: 'var(--text)', lineHeight: 1.1, marginBottom: '40px',fontFamily:'var(--font3)'}}>
              Real people<span style={{fontFamily:'var(--font2)'}}>,</span><br />
              <strong style={{ fontStyle: 'normal', fontWeight: 500, fontFamily:'var(--font3)', color: 'var(--gold-lt)' }}>Real homes</strong>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {reviews.map((r, i) => (
                <button key={r.name} onClick={() => setActive(i)} style={{
                  background: active===i ? 'rgba(200,168,75,0.06)' : 'transparent',
                  border: 'none',
                  borderLeft: `2px solid ${active===i ? 'var(--gold)' : 'var(--border)'}`,
                  padding: '16px 20px',
                  textAlign: 'left', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '14px',
                  transition: 'all 0.2s',
                }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '50%', flexShrink: 0,
                    background: active===i ? 'var(--gold)' : 'var(--border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.85rem', fontWeight: 600, fontFamily: 'var(--font3)',
                    color: active===i ? 'var(--bg)' : 'var(--muted)',
                    transition: 'all 0.2s',
                  }}>{r.init}</div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: active===i ? 500 : 400, color: active===i ? 'var(--text)' : 'var(--text)', marginBottom: '2px', transition: 'color 0.2s',fontFamily: 'var(--font4)' }}>{r.name}</div>
                    <div style={{ fontSize: '0.68rem', fontWeight: 300, color: 'var(--gold3)' }}>{r.role}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right */}
          <div style={{ background: 'var(--surface2)', border: '1px solid var(--border)', padding: '48px', position: 'relative' }}>
            <div style={{ fontSize: '5rem', fontWeight: 700, color: 'var(--gold)', opacity: 0.12, lineHeight: 0.7, marginBottom: '24px', userSelect: 'none' }}>"</div>
            <p style={{ fontSize: '1.02rem', fontStyle: 'italic', fontWeight: 100, color: 'var(--text)', lineHeight: 1.9, marginBottom: '32px', fontFamily:'var(--font2)' }}>
              {reviews[active].text}
            </p>
            <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
              {[1,2,3,4,5].map(s => <span key={s} style={{ color: 'var(--gold)', fontSize: '0.85rem' }}>★</span>)}
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text)', marginBottom: '3px',fontFamily: 'var(--font4)' }}>{reviews[active].name}</div>
            <div style={{ fontSize: '0.72rem', fontWeight: 300, color: 'var(--gold3)' }}>{reviews[active].role}</div>
            {/* Gold corner */}
            <div style={{ position: 'absolute', bottom: 0, right: 0, width: '44px', height: '44px', background: 'var(--gold)' }} />
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            section { padding: 72px 24px !important; }
            div[style*="gridTemplateColumns: 1fr 1.15fr"] { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>
    </div>
  );
};

export default Testimonials;