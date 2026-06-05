import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PortfolioID from './PortfolioID';

const FaceSad = ({ style = {} }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
    <path d="M14 8H17V11H14V8Z" fill="#42477E"/>
    <path d="M22 9V7H21V5H20V4H19V3H17V2H15V1H9V2H7V3H5V4H4V5H3V7H2V9H1V15H2V17H3V19H4V20H5V21H7V22H9V23H15V22H17V21H19V20H20V19H21V17H22V15H23V9H22ZM21 15H20V17H19V18H18V19H17V20H15V21H9V20H7V19H6V18H5V17H4V15H3V9H4V7H5V6H6V5H7V4H9V3H15V4H17V5H18V6H19V7H20V9H21V15Z" fill="#42477E"/>
    <path d="M7 8H10V11H7V8ZM17 16V17H16V18H15V17H14V16H10V17H9V18H8V17H7V16H8V15H9V14H15V15H16V16H17Z" fill="#42477E"/>
  </svg>
);

const FaceMeh = ({ size = 24, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
    <path d="M4 18H16V20H4V18ZM4 0H16V2H4V0ZM16 2H18V4H16V2ZM2 2H4V4H2V2ZM2 16H4V18H2V16ZM16 16H18V18H16V16ZM0 4H2V16H0V4ZM18 4H20V16H18V4ZM5 12H15V14H5V12ZM6 6H8V8H6V6ZM12 6H14V8H12V6Z" fill="#42477E"/>
  </svg>
);

const FaceGrin = ({ size = 24, style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
    <path d="M16 14V15H8V14H6V17H7V18H8V19H16V18H17V17H18V14H16ZM15 17V18H10V17H11V16H16V17H15Z" fill="#42477E"/>
    <path d="M22 9V7H21V5H20V4H19V3H17V2H15V1H9V2H7V3H5V4H4V5H3V7H2V9H1V15H2V17H3V19H4V20H5V21H7V22H9V23H15V22H17V21H19V20H20V19H21V17H22V15H23V9H22ZM21 15H20V17H19V18H18V19H17V20H15V21H9V20H7V19H6V18H5V17H4V15H3V9H4V7H5V6H6V5H7V4H9V3H15V4H17V5H18V6H19V7H20V9H21V15Z" fill="#42477E"/>
    <path d="M7 8H10V11H7V8ZM14 8H17V11H14V8Z" fill="#42477E"/>
  </svg>
);

function Hero() {
  const navigate = useNavigate();
  const [btnState, setBtnState] = useState('normal'); // 'normal' | 'grinning' | 'easter'
  const btnStateRef = useRef('normal');
  const holdTimer = useRef(null);
  const easterTimer = useRef(null);

  const setBS = (s) => { btnStateRef.current = s; setBtnState(s); };

  const handlePressStart = (e) => {
    e.preventDefault();
    clearTimeout(holdTimer.current);
    clearTimeout(easterTimer.current);
    setBS('grinning');
    holdTimer.current = setTimeout(() => {
      setBS('easter');
      easterTimer.current = setTimeout(() => setBS('normal'), 3000);
    }, 3000);
  };

  const handlePressEnd = () => {
    if (btnStateRef.current === 'grinning') {
      clearTimeout(holdTimer.current);
      navigate('/contact');
    }
  };

  const handlePressCancel = () => {
    clearTimeout(holdTimer.current);
    clearTimeout(easterTimer.current);
    setBS('normal');
  };

  const isEaster = btnState === 'easter';

  return (
    <section className="hero">
      <h1 className="hero-heading">
        <span style={{ color: '#1a1a1a' }}>UI/UX </span>
        <span style={{ color: '#42477E' }}>D</span>
        <span style={{ color: '#F65A89' }}>E</span>
        <span style={{ color: '#FF6634' }}>S</span>
        <span style={{ color: '#FFC548' }}>I</span>
        <span style={{ color: '#44C9E8' }}>G</span>
        <span style={{ color: '#42477E' }}>N</span>
        <span style={{ color: '#F65A89' }}>E</span>
        <span style={{ color: '#FF6634' }}>R</span>
        <span style={{ color: '#1a1a1a' }}> &amp; BUILDER</span>
      </h1>

      <div style={{ marginTop: 25, display: 'flex', justifyContent: 'center' }}>
        <PortfolioID />
      </div>

      <div className="hero-buttons" style={{ marginTop: 25 }}>
        <div className="btn-hire-wrapper">
          <button
            className="btn-hire"
            onPointerDown={handlePressStart}
            onPointerUp={handlePressEnd}
            onPointerCancel={handlePressCancel}
            style={{ userSelect: 'none', WebkitUserSelect: 'none', touchAction: 'none' }}
          >
            {isEaster ? (
              <FaceMeh size={34} />
            ) : (
              <>
                {btnState === 'grinning'
                  ? <FaceGrin style={{ marginRight: 8, flexShrink: 0 }} />
                  : <FaceSad style={{ marginRight: 8, flexShrink: 0 }} />
                }
                Hire Me
              </>
            )}
          </button>
        </div>
        <a href="/resume" className="btn-resume" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#42477E', borderColor: '#42477E' }}>
          Resume
        </a>
      </div>

    </section>
  );
}

export default Hero;
