import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './HireMe.css';
import Footer from './Footer';

// ── EmailJS config — fill these in after setting up emailjs.com ──
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

/* ─── LINK DATA ───────────────────────────────────────── */
const links = [
  {
    name: 'WhatsApp',
    handle: '+961 81 021 098',
    href: 'https://wa.me/96181021098?text=Hi%20Tarek!%20I%20checked%20your%20portfolio%20and%20I%27d%20love%20to%20discuss%20a%20project%20with%20you.%20Are%20you%20available%3F',
    bg: '#E7F9ED',
    iconBg: '#25D366',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    handle: 'flamma.ux@gmail.com',
    href: 'mailto:flamma.ux@gmail.com',
    bg: '#FFF0F4',
    iconBg: '#F65A89',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@flamma.studio',
    href: 'https://www.instagram.com/flamma.ux/',
    bg: '#FFF4F0',
    iconBg: '#FF6634',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="#fff" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'Flamma Studio',
    href: 'https://linkedin.com',
    bg: '#EEF4FF',
    iconBg: '#42477E',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.98 0H13v2.18h.07C13.8 8.7 15.5 7.7 17.5 7.7c5.35 0 6.34 3.52 6.34 8.1V24h-5v-7.34c0-1.75-.03-4-2.44-4-2.44 0-2.82 1.9-2.82 3.87V24H8.02L7.98 8z" />
      </svg>
    ),
  },
  {
    name: 'Behance',
    handle: 'Flamma Studio',
    href: 'https://behance.net',
    bg: '#EEF6FF',
    iconBg: '#44C9E8',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
        <path d="M9.5 7H2v10h7.5c2.5 0 4.5-1.5 4.5-3.8 0-1.3-.6-2.3-1.7-2.9.8-.6 1.2-1.4 1.2-2.3C13.5 8.3 11.8 7 9.5 7zm-.3 3.8H4.5V9H9c.8 0 1.5.5 1.5 1.3 0 .8-.6 1.5-1.3 1.5zM4.5 15v-2.3h5.3c.9 0 1.7.6 1.7 1.5S10.6 15 9.7 15H4.5zm10-5.5h7v1.8h-7V9.5zm.5 2.8c0-1.9 1.4-3.3 3.3-3.3 1.9 0 3.2 1.4 3.2 3.3v.7h-4.6c.1 1 .8 1.5 1.7 1.5.7 0 1.2-.3 1.5-.8H22c-.6 1.5-2 2.5-3.7 2.5-2.2 0-3.8-1.5-3.8-3.9z" />
      </svg>
    ),
  },
];

/* ─── MAIN COMPONENT ──────────────────────────────────── */
function HireMe() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="page-anim">
      {/* ── Navbar ── */}
      <nav className="hm-nav">
        <div className="hm-nav-main">
          <button className="hm-back-btn" onClick={() => navigate('/')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="15" viewBox="0 0 32 15" fill="none">
              <path d="M31 8.36395C31.5523 8.36395 32 7.91624 32 7.36395C32 6.81167 31.5523 6.36395 31 6.36395L31 7.36395L31 8.36395ZM0.29289 6.65685C-0.0976334 7.04737 -0.0976333 7.68054 0.292891 8.07106L6.65685 14.435C7.04738 14.8255 7.68054 14.8255 8.07107 14.435C8.46159 14.0445 8.46159 13.4113 8.07107 13.0208L2.41421 7.36396L8.07107 1.7071C8.46159 1.31658 8.46159 0.683411 8.07107 0.292887C7.68054 -0.0976375 7.04738 -0.0976375 6.65685 0.292887L0.29289 6.65685ZM31 7.36395L31 6.36395L0.999998 6.36396L0.999998 7.36396L0.999998 8.36396L31 8.36395L31 7.36395Z" fill="#42477E"/>
            </svg>
          </button>
          <button className="hm-hamburger" style={{ background: 'none', border: 'none', padding: 0 }} onClick={() => navigate('/menu')}>
            <span className="hm-ham-line" style={{ width: 30, background: '#42477E' }} />
            <span className="hm-ham-line" style={{ width: 22, background: '#FF6634', marginLeft: 8 }} />
            <span className="hm-ham-line" style={{ width: 30, background: '#F65A89' }} />
            <span className="hm-ham-line" style={{ width: 14, background: '#44C9E8', marginLeft: 16 }} />
          </button>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hm-hero">
        <h1 className="hm-title">LET'S WORK</h1>
        <p className="hm-subtitle">Have a project in mind? Reach out directly or send a message below.</p>
      </section>

      {/* ── Quick Links ── */}
      <section className="hm-links-section">
        <p className="hm-links-label">FIND ME ON</p>
        <div className="hm-links-grid">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hm-link-btn"
              style={{ background: l.bg, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}
            >
              <div className="hm-link-icon" style={{ background: l.iconBg }}>
                {l.icon}
              </div>
              <div className="hm-link-text">
                <span className="hm-link-name">{l.name}</span>
                <span className="hm-link-handle">{l.handle}</span>
              </div>
              <span className="hm-link-arrow">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── Contact Form ── */}
      <section className="hm-form-section">
        <p className="hm-form-label">SEND A MESSAGE</p>

        {status === 'success' ? (
          <div className="hm-success">
            <div className="hm-success-icon">✉️</div>
            <p className="hm-success-title">Message Sent!</p>
            <p className="hm-success-sub">Thanks for reaching out.<br />I'll get back to you soon.</p>
          </div>
        ) : (
          <form className="hm-form" onSubmit={handleSubmit}>
            <div>
              <label className="hm-field-label">Your Name</label>
              <input
                className="hm-input"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Tarek Daher"
                required
              />
            </div>
            <div>
              <label className="hm-field-label">Email Address</label>
              <input
                className="hm-input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label className="hm-field-label">Message</label>
              <textarea
                className="hm-textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
              />
            </div>
            {status === 'error' && (
              <p className="hm-error-msg">Something went wrong. Try again or message me directly.</p>
            )}
            <button className="hm-submit" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default HireMe;
