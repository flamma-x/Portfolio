import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Footer from './Footer';
import imgEnvelope from '../assets/illustrations and icons/pixel-envelope-icon-open-mail-260nw-2601227717 1.png';

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

const WhatsAppIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="#42477E">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#F65A89" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="17.5" cy="6.5" r="1.2" fill="#F65A89" stroke="none" />
  </svg>
);

const EmailSvgIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#FFC548" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="3" />
    <path d="M2 7l10 7 10-7" />
  </svg>
);

function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

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
      <nav className="ct-nav">
        <div className="ct-nav-main">
          <button className="ct-back-btn" onClick={() => navigate('/')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="10" viewBox="0 0 32 15" fill="none">
              <path d="M31 8.36395C31.5523 8.36395 32 7.91624 32 7.36395C32 6.81167 31.5523 6.36395 31 6.36395L31 7.36395L31 8.36395ZM0.29289 6.65685C-0.0976334 7.04737 -0.0976333 7.68054 0.292891 8.07106L6.65685 14.435C7.04738 14.8255 7.68054 14.8255 8.07107 14.435C8.46159 14.0445 8.46159 13.4113 8.07107 13.0208L2.41421 7.36396L8.07107 1.7071C8.46159 1.31658 8.46159 0.683411 8.07107 0.292887C7.68054 -0.0976375 7.04738 -0.0976375 6.65685 0.292887L0.29289 6.65685ZM31 7.36395L31 6.36395L0.999998 6.36396L0.999998 7.36396L0.999998 8.36396L31 8.36395L31 7.36395Z" fill="#42477E"/>
            </svg>
          </button>
          <button className="ct-hamburger" style={{ background: 'none', border: 'none', padding: 0 }} onClick={() => navigate('/menu')}>
            <span className="ct-ham-line" style={{ width: 30, background: '#42477E' }} />
            <span className="ct-ham-line" style={{ width: 22, background: '#FF6634', marginLeft: 8 }} />
            <span className="ct-ham-line" style={{ width: 30, background: '#F65A89' }} />
            <span className="ct-ham-line" style={{ width: 14, background: '#44C9E8', marginLeft: 16 }} />
          </button>
        </div>
      </nav>

      {/* ── Content ── */}
      <div className="ct-content">
        <h1 className="ct-title">Let's work</h1>
        <p className="ct-subtitle">Have a project in mind? Reach out directly or send a message below.</p>

        {/* ── Social Buttons ── */}
        <div className="ct-socials">
          <a href="https://wa.me/96181021098?text=Hi%20Tarek!%20I%20checked%20your%20portfolio%20and%20I%27d%20love%20to%20discuss%20a%20project%20with%20you.%20Are%20you%20available%3F" target="_blank" rel="noopener noreferrer" className="ct-social-btn ct-social-navy">
            <WhatsAppIcon />
          </a>
          <a href="https://www.instagram.com/flamma.ux/" target="_blank" rel="noopener noreferrer" className="ct-social-btn ct-social-pink">
            <InstagramIcon />
          </a>
          <a href="mailto:flamma.ux@gmail.com" className="ct-social-btn ct-social-amber">
            <EmailSvgIcon />
          </a>
        </div>

        {/* ── Contact Form ── */}
        <div className="ct-form-wrap">
          <div className="ct-form-card">
            <div className="ct-form-top">
              <p className="ct-form-heading">SEND A MESSAGE</p>
              <img src={imgEnvelope} alt="" style={{ width: 56, height: 59, objectFit: 'cover' }} />
            </div>

            {status === 'success' ? (
              <div className="ct-success">
                <div className="ct-success-icon">✉️</div>
                <p className="ct-success-title">Message Sent!</p>
                <p className="ct-success-sub">Thanks for reaching out.<br />I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="ct-form-fields" onSubmit={handleSubmit}>
                <div>
                  <label className="ct-field-label">Your Name</label>
                  <input
                    className="ct-input"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jhon Smith"
                    required
                  />
                </div>
                <div>
                  <label className="ct-field-label">Email Address</label>
                  <input
                    className="ct-input"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="ct-field-label">Message</label>
                  <textarea
                    className="ct-textarea"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {status === 'error' && (
                  <p className="ct-error-msg">Something went wrong. Try again or message me directly.</p>
                )}

                <div className="ct-submit-wrap">
                  <button className="ct-submit" type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
