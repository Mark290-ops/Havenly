import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = ['Listings', 'About', 'Process', 'Testimonials'];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        padding: '18px 56px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: scrolled ? 'rgba(10,8,5,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(-5px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border2)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}>
        <a href="#" style={{ fontFamily: 'var(--font5)', fontSize: '1.7rem', fontWeight: 400, fontStyle: 'normal', color: 'var(--text)' }}>
          Haven<span style={{ color: 'var(--gold-lt)' }}>ly!</span>
        </a>

        <div className="nav-links" style={{ display: 'flex', gap: '36px' }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.13em', fontFamily: 'var(--font3)',
              textTransform: 'uppercase', color: 'var(--gold)', transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--gold)'}
            >{l}</a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a href="#listings" className="nav-cta" style={{
            fontSize: '0.74rem', fontWeight: 500, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--bg2)', background: 'var(--gold)',
            padding: '13px 26px', transition: 'background 0.2s', fontFamily: 'var(--font3)'
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-lt)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
          >Find a Home</a>

          <button className="hamburger" onClick={() => setOpen(!open)}
            style={{ display: 'none', flexDirection: 'column', gap: '5px', background: 'none', padding: '4px' }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: '20px', height: '1.5px', background: 'var(--text)',
                transition: 'all 0.3s ease',
                transform: open ? i===0 ? 'translateY(6.5px) rotate(45deg)' : i===2 ? 'translateY(-6.5px) rotate(-45deg)' : 'scaleX(0)' : 'none',
                opacity: open && i===1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </nav>

      {open && (
        <div style={{
          position: 'fixed', top: '63px', left: 0, right: 0, zIndex: 199,
          background: 'rgba(10,8,5,0.98)', backdropFilter: 'blur(14px)',
          borderBottom: '1px solid var(--border2)', padding: '8px 28px 24px',
        }}>
          {[...links, 'Find a Home'].map((l, i) => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g,'-')}`}
              onClick={() => setOpen(false)}
              style={{
                display: 'block', fontSize: '0.82rem', fontWeight: 400,
                color: i === links.length ? 'var(--gold)' : 'var(--text)',
                padding: '15px 0', borderBottom: '1px solid var(--border2)',
                letterSpacing: '0.06em', textTransform: 'uppercase',fontFamily: 'var(--font3)',
              }}>{l}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-cta   { display: none !important; }
          .hamburger { display: flex !important; }
          nav { padding: 18px 24px !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;