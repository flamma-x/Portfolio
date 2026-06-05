const PencilIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F65A89" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);

const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#44C9E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

function Services() {
  return (
    <section className="services">
      <div className="section-label-wrap">
        <span className="section-label">services</span>
        <div className="section-underline" style={{ width: 80, background: '#FF6634' }} />
      </div>

      <div className="service-cards">
        {/* UI/UX Design */}
        <div className="service-card">
          <div className="service-card-header">
            <div
              className="service-icon-circle"
              style={{ background: 'rgba(246,90,137,0.1)' }}
            >
              <PencilIcon />
            </div>
            <span className="service-title">UI/UX Design</span>
          </div>
          <div className="service-pills">
            {['User Research', 'Wireframing', 'Prototyping', 'UI Design', 'Usability Testing'].map(p => (
              <span key={p} className="pill">{p}</span>
            ))}
          </div>
        </div>

        {/* Web Development */}
        <div className="service-card">
          <div className="service-card-header">
            <div
              className="service-icon-circle"
              style={{ background: 'rgba(68,201,232,0.1)' }}
            >
              <CodeIcon />
            </div>
            <span className="service-title">Web Development</span>
          </div>
          <div className="service-pills">
            {['React', 'Shopify', 'Elementor', 'WordPress', 'Responsive Design'].map(p => (
              <span key={p} className="pill">{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
