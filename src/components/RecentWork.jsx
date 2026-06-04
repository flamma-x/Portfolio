import { Link } from 'react-router-dom';
import atriaImg from '../assets/il_fullxfull.5263316982_pkfn.avif';

function RecentWork() {
  return (
    <section className="recent-work">
      <div className="section-label-wrap">
        <span className="section-label">recent work</span>
        <div className="section-underline" style={{ width: 113, background: '#F65A89' }} />
      </div>

      <div className="rw-cards">
        {/* Atria — navigates to case study */}
        <Link to="/project/atria" style={{ textDecoration: 'none', width: '100%', maxWidth: '350px' }}>
          <div
            className="rw-card"
            style={{
              backgroundImage: `url(${atriaImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="rw-overlay" />
            <div className="rw-card-content">
              <div className="rw-title-atria">Atria</div>
              <div className="rw-card-sub">Mobile App</div>
            </div>
          </div>
        </Link>

        {/* Deal.io */}
        <div className="rw-card rw-card-deal">
          <div className="rw-card-content">
            <div className="rw-title-deal">deal<img src="/smiley.png" alt="." style={{ width: 22, height: 22, verticalAlign: '-6px' }} />io</div>
            <div className="rw-card-sub">Mobile App</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentWork;
