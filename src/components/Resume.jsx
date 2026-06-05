import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import './Resume.css';

const experience = [
  { role: 'Production Coordinator', company: 'Freelance – TV & Media Projects', location: 'Istanbul', period: 'Jun 2025 – Mar 2026', color: '#F65A89', bullets: ['Coordinated production activities for TV series including "Jinn Wedding" and "Ginayet Hobb"', 'Managed on-ground logistics, schedules, and team communication', 'Ensured smooth execution under tight deadlines'] },
  { role: 'Operations Manager', company: 'KCC Contracting Company', location: 'Khobar', period: 'Aug 2022 – Jan 2024', color: '#FF6634', bullets: ['Oversaw daily operations and project workflows across multiple sites', 'Improved efficiency and coordination between departments', 'Managed resources, timelines, and team performance'] },
  { role: 'Web3 Marketing Manager', company: 'Arab Alpha', location: 'Dubai', period: 'Apr 2020 – Jul 2022', color: '#FFC548', bullets: ['Led digital marketing strategies in the Web3/crypto space', 'Managed campaigns, community growth, and brand positioning', 'Worked closely with product and tech teams'] },
  { role: 'Marketing Manager', company: 'V Energy Drink', location: 'Beirut', period: 'Feb 2017 – Mar 2020', color: '#44C9E8', bullets: ['Developed and executed marketing campaigns', 'Increased brand awareness and market presence', 'Managed promotions, events, and partnerships'] },
  { role: 'Business Owner', company: 'Import & Trading Business', location: 'Kinshasa', period: '2012 – 2017', color: '#42477E', bullets: ['Founded and managed a retail shop and warehouse', 'Imported and sold tires, batteries, motorcycles, and tools', 'Handled operations, sales, and supplier relationships'] },
  { role: 'Production & Sales Associate', company: 'KTF', location: 'Lubumbashi', period: '2010 – 2012', color: '#F65A89', bullets: ['Worked in production and sales of tile adhesive products', 'Assisted in operations and distribution processes'] },
];

const education = [
  { degree: 'Bachelor\'s in Business Administration', school: 'AUL', location: 'Beirut' },
  { degree: 'Web Development', school: 'Horizon', location: 'Online' },
  { degree: 'Computer Programming', school: 'Horizon', location: 'Online' },
  { degree: 'UX Design', school: 'Google', location: 'Beirut' },
];

const skills = ['UX Design', 'UI Design', 'Figma', 'Python', 'JavaScript', 'React', 'Project Management', 'Production Coordination', 'Operations Management', 'Logistics & Planning', 'Team Leadership', 'Problem Solving', 'Communication & Coordination'];

const certifications = ['Build Wireframes and Low-Fidelity Prototypes', 'Conduct UX Research and Test Early Concepts', 'Foundations of User Experience (UX) Design', 'Start the UX Design Process: Empathize, Define, and Ideate', 'Building Web Applications With TypeScript, Angular, and React', 'Advanced Programming Techniques with Python', 'Introduction to Programming with Python (v1.0)', 'Driver\'s License'];

function SectionHeader({ number, label, color }) {
  return (
    <div className="rv-section-header">
      <div className="rv-section-row">
        <span className="rv-section-num">{number}</span>
        <span className="rv-section-label">{label}</span>
        <div className="rv-section-line" />
      </div>
      <div className="rv-section-bar" style={{ background: color }} />
    </div>
  );
}

function Resume() {
  const navigate = useNavigate();

  return (
    <div className="page-anim rv-page">
      {/* Mobile nav */}
      <nav className="rv-nav">
        <div className="rv-nav-main">
          <button className="rv-back-btn" onClick={() => navigate('/')}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="10" viewBox="0 0 32 15" fill="none">
              <path d="M31 8.36395C31.5523 8.36395 32 7.91624 32 7.36395C32 6.81167 31.5523 6.36395 31 6.36395L31 7.36395L31 8.36395ZM0.29289 6.65685C-0.0976334 7.04737 -0.0976333 7.68054 0.292891 8.07106L6.65685 14.435C7.04738 14.8255 7.68054 14.8255 8.07107 14.435C8.46159 14.0445 8.46159 13.4113 8.07107 13.0208L2.41421 7.36396L8.07107 1.7071C8.46159 1.31658 8.46159 0.683411 8.07107 0.292887C7.68054 -0.0976375 7.04738 -0.0976375 6.65685 0.292887L0.29289 6.65685ZM31 7.36395L31 6.36395L0.999998 6.36396L0.999998 7.36396L0.999998 8.36396L31 8.36395L31 7.36395Z" fill="#42477E"/>
            </svg>
          </button>
          <button className="rv-hamburger" style={{ background: 'none', border: 'none', padding: 0 }} onClick={() => navigate('/menu')}>
            <span className="rv-ham-line" style={{ width: 30, background: '#42477E', display:'block', height:3, borderRadius:99, marginBottom:6 }} />
            <span className="rv-ham-line" style={{ width: 22, background: '#FF6634', marginLeft: 8, display:'block', height:3, borderRadius:99, marginBottom:6 }} />
            <span className="rv-ham-line" style={{ width: 30, background: '#F65A89', display:'block', height:3, borderRadius:99, marginBottom:6 }} />
            <span className="rv-ham-line" style={{ width: 14, background: '#44C9E8', marginLeft: 16, display:'block', height:3, borderRadius:99 }} />
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="rv-hero">
        <h1 className="rv-name">Tarek Daher</h1>
        <p className="rv-role">UI/UX Designer &amp; Builder</p>
        <div className="rv-contact">
          <span>📍 Beirut</span>
          <span>📞 +961 81 021 098</span>
          <span>✉️ tarekdaher3@gmail.com</span>
        </div>
      </section>

      {/* Summary */}
      <section className="rv-section">
        <SectionHeader number="01" label="SUMMARY" color="#F65A89" />
        <p className="rv-body">Operations and Production Coordinator turned UI/UX Designer. Extensive experience across logistics, marketing, contracting, and media production — now channeling that into building digital products that feel as good as they look.</p>
      </section>

      {/* Experience */}
      <section className="rv-section">
        <SectionHeader number="02" label="EXPERIENCE" color="#FF6634" />
        <div className="rv-exp-list">
          {experience.map((e, i) => (
            <div key={i} className="rv-exp-card" style={{ borderLeftColor: e.color }}>
              <div className="rv-exp-top">
                <div>
                  <p className="rv-exp-role">{e.role}</p>
                  <p className="rv-exp-company">{e.company} · {e.location}</p>
                </div>
                <span className="rv-exp-period" style={{ color: e.color }}>{e.period}</span>
              </div>
              <ul className="rv-exp-bullets">
                {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="rv-section">
        <SectionHeader number="03" label="EDUCATION" color="#FFC548" />
        <div className="rv-edu-grid">
          {education.map((e, i) => (
            <div key={i} className="rv-edu-card">
              <p className="rv-edu-degree">{e.degree}</p>
              <p className="rv-edu-school">{e.school} · {e.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="rv-section">
        <SectionHeader number="04" label="SKILLS" color="#44C9E8" />
        <div className="service-pills" style={{ marginTop: 14 }}>
          {skills.map(s => <span key={s} className="pill">{s}</span>)}
        </div>
      </section>

      {/* Languages */}
      <section className="rv-section">
        <SectionHeader number="05" label="LANGUAGES" color="#42477E" />
        <div className="service-pills" style={{ marginTop: 14 }}>
          {['Arabic', 'English', 'French'].map(l => <span key={l} className="pill">{l} · Fluent</span>)}
        </div>
      </section>

      {/* Certifications */}
      <section className="rv-section">
        <SectionHeader number="06" label="CERTIFICATIONS" color="#F65A89" />
        <div className="rv-cert-list">
          {certifications.map((c, i) => (
            <div key={i} className="rv-cert-item">
              <div className="rv-cert-dot" style={{ background: ['#F65A89','#FF6634','#FFC548','#44C9E8','#42477E','#F65A89','#FF6634','#FFC548'][i] }} />
              <span>{c}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Resume;
