import { Link } from 'react-router-dom';
import atriaImg from '../assets/il_fullxfull.5263316982_pkfn.avif';
import linkerImg from '../assets/Linker/Frame 8.png';

function RecentWork() {
  return (
    <section className="recent-work" style={{ marginTop: 25 }}>
      <div className="section-label-wrap">
        <span className="section-label">recent work</span>
        <div className="section-underline" style={{ width: 113, background: '#F65A89' }} />
      </div>

      <div className="rw-cards">
        {/* Atria — navigates to case study */}
        <Link to="/project/atria" className="rw-card-link">
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

        {/* Linker */}
        <div className="rw-card-link">
          <div className="rw-card rw-card-deal">
            <img src={linkerImg} alt="Linker" style={{ width: 250, height: 'auto' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentWork;
