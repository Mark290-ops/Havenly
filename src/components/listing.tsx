import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import livingRoom from '../parlor1.jpg';
import masterSuite from '../bedroom1.jpg';
import manor from '../exterior1.jpg'


/* ── shared image placeholder styles ── */
const imgStyle = (bg: string, h: string | number): React.CSSProperties => ({
  height: h, background: bg, position: 'relative', overflow: 'hidden',
  borderRadius: '4px', transition: 'transform 0.5s ease',
});

const overlay: React.CSSProperties = {
  position: 'absolute', inset: 0,
  background: 'linear-gradient(to top, rgba(10,8,5,0.65) 0%, transparent 55%)',
};

const tag = (color: string): React.CSSProperties => ({
  position: 'absolute', top: '12px', left: '12px',
  background: color, color: '#fff',
  fontSize: '0.55rem', fontWeight: 500, letterSpacing: '0.15em',
  textTransform: 'uppercase', padding: '3px 10px',
});

/* ── search field ── */
const fieldWrap: React.CSSProperties = { marginBottom: '10px' };
const fieldLabel: React.CSSProperties = {
  display: 'block', fontSize: '0.58rem', fontWeight: 400,
  letterSpacing: '0.15em', textTransform: 'uppercase',
  color: 'var(--muted)', marginBottom: '5px',
};

const fieldInput: React.CSSProperties = {
  width: '100%', background: 'var(--surface2)',
  border: '1px solid var(--border)', outline: 'none',
  fontFamily: 'var(--font)', fontSize: '0.78rem', fontWeight: 300,
  color: 'var(--text)', padding: '10px 12px',
};

const Listings: React.FC = () => {
  const ref = useScrollReveal();
  const [filter, setFilter] = useState<'all'|'buy'|'rent'>('all');

  return (
    <div ref={ref}>
      <section id="listings" style={{ background: 'var(--surface2)', padding: '96px 56px', borderTop: '1px solid var(--border2)' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '52px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>Properties</div>
            <h2 style={{ fontSize: 'clamp(2.7rem,5vw,3.3rem)', fontWeight: 300, fontStyle: 'normal', color: 'var(--text)', lineHeight: 1.1, fontFamily: 'var(--font3)' }}>
              Featured <strong style={{ fontStyle: 'normal', fontWeight: 400, fontFamily: 'var(--font3)' }}>Listings</strong>
            </h2>
          </div>
          <div style={{ display: 'flex', border: '1px solid var(--border)' }}>
            {(['all','buy','rent'] as const).map((f,i) => (
              <button key={f} onClick={() => setFilter(f)} style={{
                fontSize: '0.62rem', fontWeight: 400, letterSpacing: '0.12em',
                textTransform: 'uppercase', padding: '9px 20px',
                background: filter===f ? 'var(--gold)' : 'transparent',
                color: filter===f ? 'var(--bg)' : 'var(--muted)',
                borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                transition: 'all 0.2s',
              }}>{f==='all'?'All':f==='buy'?'For Sale':'For Rent'}</button>
            ))}
          </div>
        </div>

        {/* ── TOP ROW: property text LEFT, two images RIGHT ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '24px', marginBottom: '24px', alignItems: 'center' }}>

          {/* Left — featured property detail */}
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>For Sale · Victoria Island</div>
            <h3 style={{ fontSize: '1.7rem', fontWeight: 600, fontStyle: 'normal', color: 'var(--text)', lineHeight: 1.2, marginBottom: '12px', fontFamily: 'var(--font4)' }}>
              Skyline{' '}
              <strong style={{ fontStyle: 'normal', fontWeight: 600, color: 'var(--gold-lt)' }}>Penthouse</strong>
            </h3>
            <p style={{ fontSize: '0.84rem', fontWeight: 300, color: 'var(--gold-lt)', lineHeight: 1.9, marginBottom: '20px', maxWidth: '340px' }}>
              A stunning 4-bedroom penthouse above Victoria Island with panoramic ocean views, floor-to-ceiling windows and a private rooftop terrace.
            </p>
            <div style={{ display: 'flex', gap: '24px', marginBottom: '20px' }}>
              {[['4','Beds'],['3','Baths'],['3,200','Sqft']].map(([v,l]) => (
                <div key={l}> 
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)', lineHeight: 1 }}>{v}</div>
                  <div style={{ fontSize: '0.58rem', color: 'var(--gold3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '3px' }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--gold)', marginBottom: '20px' }}>₦450,000,000</div>
            <button style={{
              fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'var(--gold)',
              border: '1px solid rgba(200,168,75,0.35)', background: 'transparent',
              padding: '10px 22px', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background='var(--gold)'; e.currentTarget.style.color='var(--bg)'; }}
              onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='var(--gold)'; }}
            >View Property →</button>
          </div>

          {/* Right — two images side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
    
        {/* Living Room */}
        <div style={{
          height: '250px',
          backgroundImage: `url(${livingRoom})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative', overflow: 'hidden', borderRadius: '4px',
          transition: 'transform 0.5s ease',
        }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div style={overlay} />
          <div style={{ position:'absolute', bottom:'12px', left:'12px', fontSize:'0.68rem', fontStyle:'italic', color:'rgba(255,255,255,0.55)' }}>Living Room</div>
        </div>

        {/* Master Suite */}
        <div style={{
          height: '250px',
          backgroundImage: `url(${masterSuite})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative', overflow: 'hidden', borderRadius: '4px',
          transition: 'transform 0.5s ease',
        }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div style={overlay} />
          <div style={{ position:'absolute', bottom:'12px', left:'12px', fontSize:'0.68rem', fontStyle:'italic', color:'rgba(255,255,255,0.55)' }}>Master Suite</div>
        </div>

  </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border)', margin: '0 0 24px' }} />

        {/* ── BOTTOM ROW: big image LEFT, search form RIGHT ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '24px', alignItems: 'center', }}>

          {/* Left — Manor Estate hero image */}
          <div style={{
                height: '300px',
                backgroundImage: `url(${manor})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '4px',
                position: 'relative', overflow: 'hidden',
                transition: 'transform 0.5s ease',}}
            onMouseEnter={e => (e.currentTarget.style.transform='scale(1.02)')}
            onMouseLeave={e => (e.currentTarget.style.transform='scale(1)')}
          >
            <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 65% 28%, rgba(220,170,70,0.28) 0%, transparent 60%)' }} />
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(10,8,5,0.78) 0%, transparent 52%)' }} />
            <div style={tag('#8b6914')}>Luxury</div>
            <div style={{ position:'absolute', top:'12px', right:'12px', background:'rgba(10,8,5,0.55)', border:'1px solid rgba(200,168,75,0.2)', color:'rgba(255,255,255,0.7)', fontSize:'0.55rem', letterSpacing:'0.12em', textTransform:'uppercase', padding:'3px 10px' }}>For Sale</div>
            <div style={{ position:'absolute', bottom:'16px', left:'16px' }}>
              <div style={{ fontSize:'1.2rem', fontStyle:'italic', fontWeight:300, color:'var(--text)', marginBottom:'4px' }}>The Manor Estate</div>
              <div style={{ fontSize:'0.68rem', fontWeight:300, color:'rgba(255,255,255,0.42)' }}>● Asokoro, Abuja · 6 Beds · 5 Baths · 6,400 sqft</div>
            </div>
            <div style={{ position:'absolute', bottom:'16px', right:'16px', fontSize:'1.3rem', fontWeight:700, color:'var(--gold)' }}>₦980M</div>
          </div>

          {/* Right — Find Your Home search */}
          <div>
            <div style={{ fontSize:'0.6rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'8px' }}>Find Your Home</div>
            <h3 style={{ fontSize:'1.7rem', fontWeight:300, fontStyle:'normal', color:'var(--text)', lineHeight:1.2, marginBottom:'20px',fontFamily: 'var(--font4)' }}>
              Search across{' '}
              <strong style={{ fontStyle:'normal', fontWeight:600, color:'var(--gold-lt)' }}>14,000+</strong>{' '}
              listings
            </h3>
            <div style={{ background:'var(--surface)', border:'1px solid var(--border)', padding:'20px' }}>
              <div style={fieldWrap}>
                <label style={fieldLabel}>Location</label>
                <input style={fieldInput} type="text" placeholder="City, area or postcode..." />
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginBottom:'14px' }}>
                <div>
                  <label style={fieldLabel}>Type</label>
                  <select style={{ ...fieldInput, appearance:'none' }}>
                    <option>Any type</option>
                    <option>Apartment</option>
                    <option>House</option>
                    <option>Villa</option>
                    <option>Land</option>
                  </select>
                </div>
                <div>
                  <label style={fieldLabel}>Budget</label>
                  <select style={{ ...fieldInput, appearance:'none' }}>
                    <option>Any price</option>
                    <option>Under ₦50M</option>
                    <option>₦50M – ₦150M</option>
                    <option>₦150M – ₦500M</option>
                    <option>₦500M+</option>
                  </select>
                </div>
              </div>
              <button style={{
                width:'100%', fontSize:'0.68rem', fontWeight:500,
                letterSpacing:'0.15em', textTransform:'uppercase',
                color:'var(--bg)', background:'var(--gold)', padding:'14px',
                transition:'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background='var(--gold-lt)'}
                onMouseLeave={e => e.currentTarget.style.background='var(--gold)'}
              >Search Properties →</button>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            section { padding: 72px 24px !important; }
            div[style*="gridTemplateColumns: 1fr 1.5fr"],
            div[style*="gridTemplateColumns: 1.5fr 1fr"] { grid-template-columns: 1fr !important; }
            div[style*="gridTemplateColumns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </div>
  );
};

export default Listings;