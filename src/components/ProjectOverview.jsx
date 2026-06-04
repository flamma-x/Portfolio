import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectOverview.css';
import Footer from './Footer';

import screenSignUp      from '../assets/atria screens/Sign Up 1.png';
import screenHomepage    from '../assets/atria screens/HOMEPAGE 1.png';
import screenExhibitions from '../assets/atria screens/EXHIBITIONS 1.png';
import screenBooking     from '../assets/atria screens/BOOKING PAGE 1.png';
import screenLoading     from '../assets/atria screens/loading screen 1.png';
import screenTicket      from '../assets/atria screens/TICKET READY 1.png';

const imgProjectCover = "http://localhost:3845/assets/76d5b39f49bee95733f729fbbf5f6124dcc55182.png";

/* ─── SECTION HEADER ──────────────────────────────────── */
const SectionHeader = ({ number, label, underlineColor }) => (
  <div className="po-section-header">
    <div className="po-section-header-row">
      <span className="po-section-number" style={{ color: '#1a1a1a' }}>{number}</span>
      <span className="po-section-label-text" style={{ color: '#1a1a1a' }}>{label}</span>
      <div className="po-section-line" />
    </div>
    <div className="po-section-bar" style={{ background: underlineColor }} />
  </div>
);

/* ─── PROCESS STEPS DATA ──────────────────────────────── */
const steps = [
  { dot: '#F65A89', name: 'EMPATHIZE', desc: 'User interviews · Competitive research',    num: '01', color: '#F65A89' },
  { dot: '#FF6634', name: 'DEFINE',    desc: 'Personas · Problem statement · HMW',        num: '02', color: '#FF6634' },
  { dot: '#FFC548', name: 'IDEATE',    desc: 'Sketches · User flows · IA',                num: '03', color: '#FFC548' },
  { dot: '#44C9E8', name: 'PROTOTYPE', desc: 'Wireframes · Hi-fi screens · Design system', num: '04', color: '#44C9E8' },
  { dot: '#42477E', name: 'TEST',      desc: 'Usability testing · Iterations',             num: '05', color: '#42477E' },
];

/* ─── SCREEN IMAGES ───────────────────────────────────── */
const screenImages = [
  screenSignUp, screenHomepage, screenExhibitions, screenBooking, screenLoading, screenTicket,
];

/* ─── MAIN COMPONENT ──────────────────────────────────── */
function ProjectOverview() {
  const navigate = useNavigate();
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };
  const onMouseUp = () => { isDragging.current = false; };
  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.2;
  };

  const openLightbox = (i) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const goPrev = (e) => { e.stopPropagation(); setLightboxIdx(i => (i - 1 + screenImages.length) % screenImages.length); };
  const goNext = (e) => { e.stopPropagation(); setLightboxIdx(i => (i + 1) % screenImages.length); };

  return (
    <div className="page-anim">
      {/* ── Navbar ── */}
      <nav className="po-nav">
        <div className="po-nav-main">
          <button className="po-back-btn" onClick={() => navigate('/')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="15" viewBox="0 0 32 15" fill="none">
              <path d="M31 8.36395C31.5523 8.36395 32 7.91624 32 7.36395C32 6.81167 31.5523 6.36395 31 6.36395L31 7.36395L31 8.36395ZM0.29289 6.65685C-0.0976334 7.04737 -0.0976333 7.68054 0.292891 8.07106L6.65685 14.435C7.04738 14.8255 7.68054 14.8255 8.07107 14.435C8.46159 14.0445 8.46159 13.4113 8.07107 13.0208L2.41421 7.36396L8.07107 1.7071C8.46159 1.31658 8.46159 0.683411 8.07107 0.292887C7.68054 -0.0976375 7.04738 -0.0976375 6.65685 0.292887L0.29289 6.65685ZM31 7.36395L31 6.36395L0.999998 6.36396L0.999998 7.36396L0.999998 8.36396L31 8.36395L31 7.36395Z" fill="#42477E"/>
            </svg>
          </button>
          <button className="po-hamburger" style={{ background: 'none', border: 'none', padding: 0 }} onClick={() => navigate('/menu')}>
            <span className="po-ham-line" style={{ width: 30, background: '#42477E' }} />
            <span className="po-ham-line" style={{ width: 22, background: '#FF6634', marginLeft: 8 }} />
            <span className="po-ham-line" style={{ width: 30, background: '#F65A89' }} />
            <span className="po-ham-line" style={{ width: 14, background: '#44C9E8', marginLeft: 16 }} />
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="po-hero">
        <h1 className="po-title">ATRIA</h1>
        <p className="po-subtitle">Mobile App . UI/UX Design</p>
        <p className="po-tagline">art gallery, live bidding &amp; social</p>
      </section>

      {/* ── Cover Card ── */}
      <div
        className="po-cover-card"
        style={{ backgroundImage: `url(${imgProjectCover})` }}
      >
        <div className="po-cover-overlay" />
        <div className="po-cover-content">
          <div className="po-cover-title">Atria</div>
          <div className="po-cover-sub">Mobile App</div>
        </div>
      </div>

      {/* ── Meta Grid ── */}
      <div className="po-meta-grid">
        <div className="po-meta-box" style={{ border: '1px solid #F65A89' }}>
          <div className="po-meta-label">ROLE</div>
          <div className="po-meta-value">UI/UX Designer</div>
        </div>
        <div className="po-meta-box" style={{ border: '1px solid #FFC548' }}>
          <div className="po-meta-label">TIMELINE</div>
          <div className="po-meta-value">4 Weeks</div>
        </div>
        <div className="po-meta-box" style={{ border: '1px solid #44C9E8' }}>
          <div className="po-meta-label">TOOL</div>
          <div className="po-meta-value">Figma</div>
        </div>
        <div className="po-meta-box" style={{ border: '1px solid #FF6634' }}>
          <div className="po-meta-label">PLATFORM</div>
          <div className="po-meta-value">Mobile App</div>
        </div>
      </div>

      {/* ── Section 01 — Overview ── */}
      <section className="po-section">
        <SectionHeader number="01" label="OVERVIEW" color="#F65A89" underlineColor="#F65A89" />
        <p className="po-body-text">
          Atria is an art gallery mobile app combining exhibition ticketing, an art marketplace
          with live bidding, and a social layer for artists and collectors.
        </p>
      </section>

      {/* ── Section 02 — The Problem ── */}
      <section className="po-section">
        <SectionHeader number="02" label="THE PROBLEM" color="#FF6634" underlineColor="#FF6634" />
        <p className="po-body-text">
          Art discovery is fragmented — galleries, auctions, and artist profiles live on separate
          platforms. There is no single space that connects discovery, purchase, and community.
        </p>
      </section>

      {/* ── Section 03 — Process ── */}
      <section className="po-section">
        <SectionHeader number="03" label="PROCESS" color="#44C9E8" underlineColor="#44C9E8" />
        <div className="po-process-steps">
          {steps.map((s) => (
            <div className="po-step-row" key={s.num}>
              <div className="po-step-left">
                <div className="po-step-dot" style={{ background: s.dot }} />
                <div>
                  <div className="po-step-name">{s.name}</div>
                  <div className="po-step-desc">{s.desc}</div>
                </div>
              </div>
              <span className="po-step-num" style={{ color: s.color }}>{s.num}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 04 — Screens ── */}
      <section className="po-section-screens">
        <div style={{ paddingRight: 0 }}>
          <SectionHeader number="04" label="SCREENS" color="#FFC548" underlineColor="#FFC548" />
        </div>
        <div
          className="po-screens-scroll"
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {screenImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Screen ${i + 1}`}
              className="po-screen-img"
              draggable={false}
              onClick={() => openLightbox(i)}
            />
          ))}
        </div>
      </section>

      {/* ── Section 05 — Outcome ── */}
      <section className="po-section">
        <SectionHeader number="05" label="OUTCOME" color="#42477E" underlineColor="#42477E" />
        <div className="po-outcome-box">
          <p className="po-body-text" style={{ marginTop: 0 }}>
            Delivered a complete hi-fi screen set covering the full user journey — onboarding,
            exhibition booking, live bidding, and artist profiles. Established a dark navy
            design system.
          </p>
        </div>
      </section>

      {/* ── Next Project ── */}
      <div className="po-grad-wrap po-next-wrap">
        <div className="po-next-card">
          <div>
            <div className="po-next-label">NEXT PROJECT</div>
            <div className="po-next-title">DEAL.IO</div>
          </div>
          <span className="po-next-arrow">→</span>
        </div>
      </div>

      <Footer />

      {/* ── Lightbox ── */}
      {lightboxIdx !== null && (
        <div className="po-lightbox" onClick={closeLightbox}>
          <button className="po-lightbox-prev" onClick={goPrev}>‹</button>
          <img
            src={screenImages[lightboxIdx]}
            alt={`Screen ${lightboxIdx + 1}`}
            className="po-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="po-lightbox-next" onClick={goNext}>›</button>
          <button className="po-lightbox-close" onClick={closeLightbox}>✕</button>
        </div>
      )}
    </div>
  );
}

export default ProjectOverview;
