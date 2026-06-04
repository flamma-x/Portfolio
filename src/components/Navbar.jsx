import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Navbar({ className = '' }) {
  const navigate = useNavigate();
  const [exiting, setExiting] = useState(false);

  const handleHamburger = () => {
    setExiting(true);
    setTimeout(() => navigate('/menu'), 260);
  };

  return (
    <nav className={`navbar ${className}`}>
      <div className="navbar-main">
        <img src="/logo.png" alt="Flamma logo" onClick={() => navigate('/')} style={{ width: 40, height: 40, objectFit: 'contain', cursor: 'pointer' }} />

        <div className="navbar-desktop-links">
          <Link to="/" className="desktop-nav-link">recent work</Link>
          <Link to="/contact" className="desktop-nav-link">contact</Link>
          <a href="#" target="_blank" rel="noopener noreferrer" className="desktop-nav-link">resume</a>
        </div>

        <div className={`hamburger ${exiting ? 'exit' : ''}`} onClick={handleHamburger}>
          <span className="ham-line ham-line-1" />
          <span className="ham-line ham-line-2" />
          <span className="ham-line ham-line-3" />
          <span className="ham-line ham-line-4" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
