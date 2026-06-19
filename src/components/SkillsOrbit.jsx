import { portfolioData } from '../data/portfolioData';

export default function SkillsOrbit() {
  const { skills } = portfolioData;

  const categories = [
    { cat: 'Frontend', items: skills.frontend, color: 'var(--primary)' },
    { cat: 'Backend', items: skills.backend, color: 'var(--secondary)' },
    { cat: 'Cloud', items: skills.cloud, color: 'var(--accent)' },
    { cat: 'AI / ML', items: skills.ai, color: 'var(--primary-light)' },
    { cat: 'Tools', items: skills.tools, color: 'var(--secondary)' },
  ];

  // Flatten skills for the orbit visualization
  const allSkills = [
    ...skills.frontend.slice(0, 3),
    ...skills.backend.slice(0, 3),
    ...skills.cloud.slice(0, 2),
    ...skills.ai.slice(0, 2),
    ...skills.tools.slice(0, 2),
  ];

  const innerSkills = allSkills.filter((_, i) => i % 2 === 0);
  const outerSkills = allSkills.filter((_, i) => i % 2 === 1);

  return (
    <section className="section" id="skills">
      <div className="eyebrow">Skills</div>
      <h2 className="section-title">Skills <span className="grad-text">Galaxy</span></h2>
      <p className="section-sub">Technologies I use to build real-world applications.</p>

      {/* Orbit Visualization */}
      <div className="orbit-wrap">
        <div className="orbit-ring" style={{ width: '62%', height: '62%' }}></div>
        <div className="orbit-ring" style={{ width: '92%', height: '92%' }}></div>

        {/* Inner ring */}
        <div className="orbit-rotator ring1">
          {innerSkills.map((skill, i) => {
            const angle = (i / innerSkills.length) * 2 * Math.PI;
            const left = 50 + 31 * Math.cos(angle);
            const top = 50 + 31 * Math.sin(angle);
            return (
              <div key={skill} className="orbit-item-anchor" style={{ left: left + '%', top: top + '%' }}>
                <div className="orbit-item-counter">
                  <div className="orbit-item">{skill}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Outer ring */}
        <div className="orbit-rotator ring2">
          {outerSkills.map((skill, i) => {
            const angle = (i / outerSkills.length) * 2 * Math.PI;
            const left = 50 + 46 * Math.cos(angle);
            const top = 50 + 46 * Math.sin(angle);
            return (
              <div key={skill} className="orbit-item-anchor" style={{ left: left + '%', top: top + '%' }}>
                <div className="orbit-item-counter">
                  <div className="orbit-item">{skill}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="orbit-center">Sarath G</div>
      </div>

      {/* Stack Grid */}
      <div className="stack-grid">
        {categories.map((cat, i) => (
          <div key={cat.cat} className="stack-card glass">
            <div className="stack-cat">{cat.cat}</div>
            <div className="stack-tags">
              {cat.items.map(item => (
                <span key={item} className="tech-pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}