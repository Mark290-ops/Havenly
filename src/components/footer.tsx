import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';


const Footer: React.FC = () => {
  const ref = useScrollReveal();
  return(
    <div ref={ref}>
      <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border2)', padding: '80px 56px 32px' }}>

        {/* CTA Banner */}
        <div style={{
          background: 'rgba(200,168,75,0.07)',
          border: '1px solid rgba(200,168,75,0.18)',
          padding: '40px 48px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: '64px', flexWrap: 'wrap', gap: '24px',
        }}>
          <div>
            <div style={{ fontSize: '1.7rem', fontStyle: 'normal', fontWeight: 300, color: 'var(--text)', marginBottom: '6px', fontFamily: 'var(--font4)' }}>
              Ready to find your{' '}
              <strong style={{ fontStyle: 'normal', fontWeight: 600, color: 'var(--gold-lt)' }}>dream home?</strong>
            </div>
            <div style={{ fontSize: '0.78rem', fontWeight: 300, color: 'var(--muted)' }}>Browse over 12,000 verified listings across Nigeria today.</div>
          </div>
          <a href="#listings" style={{
            fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--bg)', background: 'var(--gold)',
            padding: '14px 32px', whiteSpace: 'nowrap', transition: 'background 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-lt)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
          >Browse Listings →</a>
        </div>

        {/* Links */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '56px' }}>
          <div>
            <div style={{ fontFamily: 'var(--font5)', fontSize: '1.6rem', fontWeight: 400, fontStyle: 'normal', color: 'var(--text)', marginBottom: '16px' }}>
              Haven<span style={{ color: 'var(--gold-lt)' }}>ly!</span>
            </div>
            <p style={{ fontSize: '0.78rem', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.85, maxWidth: '240px', marginBottom: '20px' }}>
              Nigeria's most trusted real estate platform. Find, buy, rent or sell with confidence.
            </p>
            <div style={{ fontSize: '0.72rem', color: 'var(--gold)' }}>hello@havenly.ng</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--dim)', marginTop: '5px', fontWeight: 300 }}>+234 810 531 1179</div>
          </div>

          {[
            { title: 'Properties', links: ['Buy a Home','Rent a Home','Sell a Property','New Developments','Land for Sale'] },
            { title: 'Company',    links: ['About Us','Our Agents','Careers','Press','Blog'] },
            { title: 'Support',    links: ['Help Centre','Contact Us','Privacy Policy','Terms of Service','Sitemap'] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: '0.58rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: '20px' }}>{col.title}</h4>
              {col.links.map(l => (
                <a key={l} href="/" style={{ display: 'block', fontSize: '0.76rem', fontWeight: 300, color: 'var(--muted)', marginBottom: '10px', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                >{l}</a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24px', borderTop: '1px solid var(--border2)', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ fontSize: '0.66rem', fontWeight: 300, color: 'var(--muted2)' }}>© 2025 Havenly. All rights reserved. Nigeria.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Twitter','Instagram','LinkedIn','Facebook'].map(s => (
              <a key={s} href="/" style={{ fontSize: '0.66rem', fontWeight: 300, color: 'var(--muted)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
              >{s}</a>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            footer { padding: 64px 24px 28px !important; }
            div[style*="gridTemplateColumns: 2fr 1fr 1fr 1fr"] { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 500px) {
            div[style*="gridTemplateColumns: 2fr 1fr 1fr 1fr"] { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </footer>
    </div>
  );
};
export default Footer;