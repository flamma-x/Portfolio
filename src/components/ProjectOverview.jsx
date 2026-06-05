import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import './ProjectOverview.css';
import Footer from './Footer';

import screenSignUp      from '../assets/atria screens/Sign Up 1.png';
import screenHomepage    from '../assets/atria screens/HOMEPAGE 1.png';
import screenExhibitions from '../assets/atria screens/EXHIBITIONS 1.png';
import screenBooking     from '../assets/atria screens/BOOKING PAGE 1.png';
import screenLoading     from '../assets/atria screens/loading screen 1.png';
import screenTicket      from '../assets/atria screens/TICKET READY 1.png';

import carouselArtist     from '../assets/atria screens/carousel/Artist spotlight.png';
import carouselBid        from '../assets/atria screens/carousel/Bid.png';
import carouselFeatured   from '../assets/atria screens/carousel/Featured artists.png';
import carouselExhibition from '../assets/atria screens/carousel/exhibions cards.png';

const carouselImages = [carouselArtist, carouselBid, carouselFeatured, carouselExhibition];

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
  { dot: '#42477E', name: 'EMPATHIZE', desc: '6 user interviews revealed collectors have no single place to discover, buy, and track art.',           num: '01', color: '#42477E' },
  { dot: '#F65A89', name: 'DEFINE',    desc: 'POV: art buyers need a unified discovery + purchase experience, not 3 separate apps.',                  num: '02', color: '#F65A89' },
  { dot: '#FF6634', name: 'IDEATE',    desc: 'Chose live bidding as the differentiator — no competitor had it on mobile.',                            num: '03', color: '#FF6634' },
  { dot: '#44C9E8', name: 'PROTOTYPE', desc: 'Dark navy system chosen for gallery feel — contrast tested to WCAG AA.',                                num: '04', color: '#44C9E8' },
  { dot: '#FFC548', name: 'TEST',      desc: '13 participants. Iterated nav labels after 8/13 missed the bidding tab on first pass.',                  num: '05', color: '#FFC548' },
];

/* ─── SCREEN IMAGES ───────────────────────────────────── */
const screenImages = [
  screenSignUp, screenHomepage, screenExhibitions, screenBooking, screenLoading, screenTicket,
];

/* ─── MAIN COMPONENT ──────────────────────────────────── */
function ProjectOverview() {
  const navigate = useNavigate();
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [carouselDrag, setCarouselDrag] = useState(0);
  const carouselDragStart = useRef(0);
  const carouselDragging = useRef(false);
  const carouselTimer = useRef(null);
  const [processIdx, setProcessIdx] = useState(0);
  const [processDrag, setProcessDrag] = useState(0);
  const [processCardWidth, setProcessCardWidth] = useState(0);
  const processWrapRef = useRef(null);
  const processDragStart = useRef(0);
  const processDragging = useRef(false);

  useEffect(() => {
    const measure = () => {
      if (processWrapRef.current) setProcessCardWidth(processWrapRef.current.offsetWidth);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const onCarouselTouchStart = (e) => {
    clearInterval(carouselTimer.current);
    carouselDragStart.current = e.touches[0].clientX;
    carouselDragging.current = true;
  };
  const onCarouselTouchMove = (e) => {
    if (!carouselDragging.current) return;
    setCarouselDrag(e.touches[0].clientX - carouselDragStart.current);
  };
  const onCarouselTouchEnd = (e) => {
    if (!carouselDragging.current) return;
    carouselDragging.current = false;
    const diff = e.changedTouches[0].clientX - carouselDragStart.current;
    if (diff < -50) setCarouselIdx(i => (i + 1) % carouselImages.length);
    else if (diff > 50) setCarouselIdx(i => (i - 1 + carouselImages.length) % carouselImages.length);
    setCarouselDrag(0);
    startCarouselTimer();
  };

  const goProcessPrev = () => setProcessIdx(i => (i - 1 + steps.length) % steps.length);
  const goProcessNext = () => setProcessIdx(i => (i + 1) % steps.length);

  const onProcessTouchStart = (e) => {
    processDragStart.current = e.touches[0].clientX;
    processDragging.current = true;
  };
  const onProcessTouchMove = (e) => {
    if (!processDragging.current) return;
    setProcessDrag(e.touches[0].clientX - processDragStart.current);
  };
  const onProcessTouchEnd = (e) => {
    if (!processDragging.current) return;
    processDragging.current = false;
    const diff = e.changedTouches[0].clientX - processDragStart.current;
    if (diff < -50) goProcessNext();
    else if (diff > 50) goProcessPrev();
    setProcessDrag(0);
  };

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const startCarouselTimer = () => {
    clearInterval(carouselTimer.current);
    carouselTimer.current = setInterval(() => {
      setCarouselIdx(i => (i + 1) % carouselImages.length);
    }, 3000);
  };

  useEffect(() => {
    startCarouselTimer();
    return () => clearInterval(carouselTimer.current);
  }, []);

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
      {/* ── Mobile Navbar ── */}
      <nav className="po-nav">
        <div className="po-nav-main">
          <button className="po-back-btn" onClick={() => navigate('/')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#42477E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l6-6M5 12l6 6"/>
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

      {/* ── Hero (full width) ── */}
      <section className="po-hero">
        <h1 className="po-title">ATRIA</h1>
        <p className="po-subtitle">Mobile App . UI/UX Design</p>
        <p className="po-tagline">art gallery, live bidding &amp; social</p>
        <div className="po-tags">
          <span className="po-tag po-tag-pink">UI DESIGN</span>
          <span className="po-tag po-tag-cyan">UX RESEARCH</span>
          <span className="po-tag po-tag-orange">FIGMA</span>
        </div>
      </section>

      {/* ── Desktop 2-column grid ── */}
      <div className="po-desktop-grid">

        {/* LEFT COLUMN: Carousel + Meta */}
        <div className="po-left-col">
          <div
            className="po-carousel"
            onTouchStart={onCarouselTouchStart}
            onTouchMove={onCarouselTouchMove}
            onTouchEnd={onCarouselTouchEnd}
          >
            <div
              className="po-carousel-track"
              style={{
                transform: `translateX(calc(${-carouselIdx * 100}% + ${carouselDrag}px))`,
                transition: carouselDragging.current ? 'none' : 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              {carouselImages.map((img, i) => (
                <img key={i} src={img} alt={`Atria screen ${i + 1}`} className="po-carousel-img" />
              ))}
            </div>
          </div>
          <div className="po-carousel-nav">
            <button className="po-process-arrow" onClick={() => setCarouselIdx(i => (i - 1 + carouselImages.length) % carouselImages.length)}>‹</button>
            <div className="po-carousel-dots">
              {['#42477E','#F65A89','#FF6634','#44C9E8'].map((color, i) => (
                <button
                  key={i}
                  className={`po-carousel-dot ${i === carouselIdx ? 'active' : ''}`}
                  style={i === carouselIdx ? { background: color } : {}}
                  onClick={() => setCarouselIdx(i)}
                />
              ))}
            </div>
            <button className="po-process-arrow" onClick={() => setCarouselIdx(i => (i + 1) % carouselImages.length)}>›</button>
          </div>

          {/* Meta Grid */}
          <div className="po-meta-grid">
            <div className="po-meta-box" style={{ border: '1px solid #42477E' }}>
              <div className="po-meta-label">ROLE</div>
              <div className="po-meta-value">UI/UX Designer</div>
            </div>
            <div className="po-meta-box" style={{ border: '1px solid #F65A89' }}>
              <div className="po-meta-label">TIMELINE</div>
              <div className="po-meta-value">4 Weeks</div>
            </div>
            <div className="po-meta-box" style={{ border: '1px solid #FF6634' }}>
              <div className="po-meta-label">TOOL</div>
              <div className="po-meta-value">Figma</div>
            </div>
            <div className="po-meta-box" style={{ border: '1px solid #44C9E8' }}>
              <div className="po-meta-label">PLATFORM</div>
              <div className="po-meta-value">Mobile App</div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: All sections */}
        <div className="po-right-col">

          {/* Section 01 — Overview */}
          <section className="po-section">
            <SectionHeader number="01" label="OVERVIEW" underlineColor="#42477E" />
            <p className="po-body-text">
              Atria is an art gallery mobile app combining exhibition ticketing, an art marketplace
              with live bidding, and a social layer for artists and collectors.
            </p>
          </section>

          {/* Section 02 — The Problem */}
          <section className="po-section">
            <SectionHeader number="02" label="THE PROBLEM" underlineColor="#F65A89" />
            <p className="po-body-text">
              Art discovery is fragmented — galleries, auctions, and artist profiles live on separate
              platforms. There is no single space that connects discovery, purchase, and community.
            </p>
          </section>

          {/* Section 03 — Process */}
          <section className="po-section">
            <SectionHeader number="03" label="PROCESS" underlineColor="#FF6634" />
            <div
              ref={processWrapRef}
              className="po-process-track-wrap"
              onTouchStart={onProcessTouchStart}
              onTouchMove={onProcessTouchMove}
              onTouchEnd={onProcessTouchEnd}
            >
              <div
                className="po-process-track"
                style={{
                  transform: `translateX(${-(processIdx * (processCardWidth + 16)) + processDrag}px)`,
                  transition: processDragging.current ? 'none' : 'transform 0.35s cubic-bezier(0.22,1,0.36,1)',
                }}
              >
                {steps.map((s, i) => (
                  <div
                    key={i}
                    className="po-process-card"
                    style={{ width: processCardWidth || '100%', borderColor: s.color }}
                  >
                    <div className="po-process-card-num" style={{ color: s.color }}>{s.num}</div>
                    <div className="po-process-card-name">{s.name}</div>
                    <div className="po-process-card-desc">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="po-process-nav">
              <button className="po-process-arrow" onClick={goProcessPrev}>‹</button>
              <div className="po-process-dots">
                {steps.map((s, i) => (
                  <button
                    key={i}
                    className={`po-process-dot ${i === processIdx ? 'active' : ''}`}
                    style={i === processIdx ? { background: s.color } : {}}
                    onClick={() => setProcessIdx(i)}
                  />
                ))}
              </div>
              <button className="po-process-arrow" onClick={goProcessNext}>›</button>
            </div>
          </section>

          {/* Section 04 — Screens */}
          <section className="po-section-screens">
            <div style={{ paddingRight: 0 }}>
              <SectionHeader number="04" label="SCREENS" underlineColor="#44C9E8" />
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

          {/* Section 05 — Outcome */}
          <section className="po-section">
            <SectionHeader number="05" label="OUTCOME" underlineColor="#FFC548" />
            <div className="po-outcome-box">
              <p className="po-body-text" style={{ marginTop: 0 }}>
                Full hi-fi shipped across 8 screens. 85% usability success rate. Navigation iterated 2× based on test findings.
                <br /><br />
                <strong>What I'd do differently</strong><br />
                Test the IA earlier — nav confusion caught late.<br />
                Add an artist onboarding flow in v2.<br />
                Explore accessibility contrast for dark palette.
              </p>
            </div>
          </section>

          {/* Next Project */}
          <section className="po-section">
            <div className="po-grad-wrap po-next-wrap">
              <div className="po-next-card">
                <div>
                  <div className="po-next-label">NEXT PROJECT</div>
                  <div className="po-next-title">LINKER</div>
                </div>
                <span className="po-next-arrow">→</span>
              </div>
            </div>
          </section>

        </div>{/* end po-right-col */}
      </div>{/* end po-desktop-grid */}

      <Footer />

      {/* ── Lightbox ── */}
      {lightboxIdx !== null && createPortal(
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
        </div>,
        document.body
      )}
    </div>
  );
}

export default ProjectOverview;
