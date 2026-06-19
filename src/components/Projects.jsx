import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section className="section" id="projects" style={{ zIndex: 10 }}>
      <div className="eyebrow">Projects</div>
      <h2 className="section-title">Selected <span className="grad-text">Work</span></h2>
      <p className="section-sub" style={{ marginBottom: '50px' }}>
        Three builds spanning full-stack web apps, academic tools and embedded IoT.
      </p>

      {projects.map((proj, i) => (
        <div key={i} className="proj-card glass" style={{ marginBottom: '30px' }}>
          <div className="proj-head">
            <div className="proj-tag">{proj.subtitle}</div>
            <div className="proj-title">{proj.title}</div>
            <p className="proj-desc">{proj.description}</p>
            <div className="proj-tech">
              {proj.technologies.map(t => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </div>
          <div className="proj-body">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
              {proj.features.map((feat, j) => (
                <div key={j} className="glass" style={{ padding: '14px 16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '.85rem', color: 'var(--text-dim)' }}>
                    <span style={{ color: 'var(--secondary)', marginRight: '6px' }}>▹</span>
                    {feat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}