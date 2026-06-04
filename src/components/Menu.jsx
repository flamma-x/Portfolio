import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const navigate = useNavigate();
  const [active, setActive] = useState('recent');
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => navigate('/'), 260);
  };

  const handleNav = (item, action) => {
    setActive(item);
    setTimeout(action, 220);
  };

  return (
    <div className="menu-wrapper page-anim">
      {/* ── Navbar ── */}
      <nav className="menu-nav">
        <button className={`menu-close-btn ${closing ? 'exit' : ''}`} onClick={handleClose}>
          <div className="menu-close-line menu-close-line-1" />
          <div className="menu-close-line menu-close-line-2" />
        </button>

        <div className="menu-hamburger">
          <span className="menu-ham-line" style={{ width: 30, background: '#42477E' }} />
          <span className="menu-ham-line" style={{ width: 22, background: '#FF6634', marginLeft: 8 }} />
          <span className="menu-ham-line" style={{ width: 30, background: '#F65A89' }} />
          <span className="menu-ham-line" style={{ width: 14, background: '#44C9E8', marginLeft: 16 }} />
        </div>
      </nav>

      {/* ── Menu Items ── */}
      <div className="menu-content">

        <div
          className={`menu-nav-item stagger-1 ${active === 'recent' ? 'active' : ''}`}
          onClick={() => handleNav('recent', () => navigate('/'))}
        >
          <span className="menu-nav-text">recent work</span>
          <div className="menu-nav-line" style={{ background: '#F65A89' }} />
        </div>

        <div
          className={`menu-nav-item stagger-2 ${active === 'contact' ? 'active' : ''}`}
          onClick={() => handleNav('contact', () => navigate('/contact'))}
        >
          <span className="menu-nav-text">Contact Me</span>
          <div className="menu-nav-line" style={{ background: '#44C9E8' }} />
        </div>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className={`menu-nav-item stagger-3 ${active === 'resume' ? 'active' : ''}`}
          onClick={(e) => { e.preventDefault(); handleNav('resume', () => {}); }}
        >
          <span className="menu-nav-text">View Resume</span>
          <div className="menu-nav-line" style={{ background: '#FFC548' }} />
        </a>

      </div>
    </div>
  );
}

export default Menu;
