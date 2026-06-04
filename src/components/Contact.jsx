import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './Contact.css';
import Footer from './Footer';
import emailIcon from '../assets/illustrations and icons/formkit_email.png';

const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

const imgWhatsapp = "http://localhost:3845/assets/ef90829b7c8a5e3e32b2bbffc2179605a2ada9f4.svg";
const imgInstagram = "http://localhost:3845/assets/f37860cc74148f370cc4e227813f53b18422395c.svg";
const imgEmail = "http://localhost:3845/assets/ba5454e0f957cbbeccf10c31e8d3110480319d6d.svg";
const imgEnvelope = "http://localhost:3845/assets/a4bf038e7b5a2c8d0607178d5fe42d3cf4e45511.png";

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
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="15" viewBox="0 0 32 15" fill="none">
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
            <img src={imgWhatsapp} alt="WhatsApp" style={{ width: 30, height: 30 }} />
          </a>
          <a href="https://www.instagram.com/flamma.ux/" target="_blank" rel="noopener noreferrer" className="ct-social-btn ct-social-pink">
            <img src={imgInstagram} alt="Instagram" style={{ width: 30, height: 30 }} />
          </a>
          <a href="mailto:flamma.ux@gmail.com" className="ct-social-btn ct-social-amber">
            <img src={emailIcon} alt="Email" style={{ width: 30, height: 30, objectFit: 'contain' }} />
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
