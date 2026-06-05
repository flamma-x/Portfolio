import { useNavigate } from 'react-router-dom';
import pixelFace from '../assets/illustrations and icons/face.png';
import PortfolioID from './PortfolioID';

function Hero() {
  const navigate = useNavigate();

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


      <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}>
        <PortfolioID />
      </div>

      <div className="hero-buttons">
        <div className="btn-hire-wrapper">
          <button className="btn-hire" onClick={() => navigate('/contact')}>
            <img src={pixelFace} alt="" style={{ width: 24, height: 24, marginRight: 8, verticalAlign: 'middle', marginBottom: 2 }} />
            Hire Me
          </button>
        </div>
        <a href="#" target="_blank" rel="noopener noreferrer" className="btn-resume" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: '#42477E', borderColor: '#42477E' }}>
          Explore
        </a>
      </div>

    </section>
  );
}

export default Hero;
