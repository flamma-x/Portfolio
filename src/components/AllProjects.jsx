import atriaImg from '../assets/il_fullxfull.5263316982_pkfn.avif';
import linkerThumb from '../assets/Linker/Frame 7.png';

const projects = [
  { name: 'Atria',       type: 'Mobile App · UI/UX', bg: '#1a0a2e', img: atriaImg,     route: '/project/atria' },
  { name: 'Linker',      type: 'Mobile App · UI/UX', bg: '#4C5DDA', img: linkerThumb,  route: null },
  { name: 'Hawitak',     type: 'Mobile App · UI/UX', bg: '#0a1f0a', img: null,      route: null },
  { name: 'VideoCollab', type: 'Web App · UI/UX',    bg: '#0D0F12', img: null,      route: null },
];

const renderName = (name) => {
  if (!name.includes('.')) return name;
  const [before, after] = name.split('.');
  return (
    <>{before}<img src="/smiley.png" alt="." style={{ width: 14, height: 14, verticalAlign: '-3px' }} />{after}</>
  );
};

function AllProjects() {
  return (
    <section className="all-projects">
      <div className="section-label-wrap">
        <span className="section-label">all projects</span>
        <div className="section-underline" style={{ width: 100, background: '#FF6634' }} />
      </div>

      <div className="project-rows">
        {projects.map((p) => {
          const inner = (
            <>
              <div className="project-thumb" style={{
                background: p.bg,
                backgroundImage: p.img ? `url(${p.img})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                  fontSize: 26,
                  color: '#fff',
                  lineHeight: 1,
                }}>
                  {p.name[0]}
                </span>
              </div>
              <div className="project-info">
                <div className="project-name">{renderName(p.name)}</div>
                <div className="project-type">{p.type}</div>
              </div>
              <span className="project-arrow" style={{ color: p.route ? '#cccccc' : '#e0e0e0' }}>→</span>
            </>
          );
          return p.route ? (
            <a key={p.name} href={p.route} className="project-row" style={{ textDecoration: 'none' }}>{inner}</a>
          ) : (
            <div key={p.name} className="project-row" style={{ opacity: 0.6 }}>{inner}</div>
          );
        })}
      </div>
    </section>
  );
}

export default AllProjects;
