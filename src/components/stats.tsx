import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';



const data = [
  { num: '14,000+', label: 'Active Listings',  sub: 'Verified across Nigeria' },
  { num: '7 Years',  label: 'In Business',      sub: 'Trusted by thousands'   },
  { num: '3,300+',  label: 'Homes Sold',        sub: 'Happy families'         },
  { num: '98%',     label: 'Satisfaction Rate', sub: 'From verified reviews'  },
];

const Stats: React.FC = () => {
  const ref = useScrollReveal();
  return(
    <div ref={ref}>
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border2)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {data.map((s, i) => (
            <div key={s.label} style={{
              padding: '44px 36px',
              borderRight: i < 3 ? '1px solid var(--border2)' : 'none',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(200,168,75,0.04)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={{ fontSize: '2.2rem', fontFamily: 'var(--font4)', fontWeight: 600, fontStyle: 'italic', color: 'var(--gold)', lineHeight: 1, marginBottom: '8px' }}>{s.num}</div>
              <div style={{ fontSize: '0.80rem', fontWeight: 400, color: 'var(--text)', marginBottom: '4px', fontFamily: 'var(--font)' }}>{s.label}</div>
              <div style={{ fontSize: '0.68rem', fontWeight: 300, color: 'var(--muted)',fontFamily: 'var(--font)', }}>{s.sub}</div>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 900px) { section > div { grid-template-columns: repeat(2,1fr) !important; } }
          @media (max-width: 500px) { section > div { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </div>
  );
};
export default Stats;