import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const EXP_COLORS = ['var(--primary)', 'var(--secondary)', 'var(--accent)'];

export default function Experience() {
  const { experience, timeline, education } = portfolioData;
  const [activeTimeline, setActiveTimeline] = useState(null);

  return (
    <section className="section" id="experience">
      <div className="eyebrow">Experience</div>
      <h2 className="section-title">Command <span className="grad-text">Center</span></h2>
      <p className="section-sub">Three internships, three different problem spaces — full-stack product, frontend UI, and cloud infrastructure.</p>

      {/* Timeline */}
      <div className="timeline" style={{ maxWidth: '800px' }}>
        {timeline.map((item, i) => (
          <div
            key={i}
            className={`t-node ${activeTimeline === i ? 'active' : ''}`}
            onClick={() => setActiveTimeline(activeTimeline === i ? null : i)}
            style={{ display: 'block' }}
          >
            <div className="t-dot"></div>
            <div className="t-year">{item.year}</div>
            <div className="t-title">{item.title}</div>
          </div>
        ))}
      </div>

      {/* Experience Cards Grid */}
      <div className="exp-grid">
        {experience.map((exp, i) => (
          <div key={i} className="exp-card glass" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="exp-top" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div>
                <div className="exp-company">{exp.company}</div>
                <div className="exp-role">{exp.role}</div>
              </div>
              <div className="exp-dots">
                <div className="exp-dot" style={{ background: '#FF5F56' }}></div>
                <div className="exp-dot" style={{ background: '#FFBD2E' }}></div>
                <div className="exp-dot" style={{ background: '#27C93F' }}></div>
              </div>
            </div>
            <div className="exp-period">{exp.duration}</div>

            <ul className="exp-list" style={{ paddingLeft: '20px', margin: '0' }}>
              {exp.description.map((point, j) => (
                <li key={j} style={{ marginBottom: '8px', color: EXP_COLORS[i] }}>
                  <span style={{ color: 'var(--text-dim)' }}>{point}</span>
                </li>
              ))}
            </ul>

            <div className="proj-tech" style={{ marginTop: '16px' }}>
              {exp.technologies.map(tech => (
                <span key={tech} className="tech-pill">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={{ marginTop: '60px' }}>
        <div className="eyebrow">Education</div>
        <div className="exp-grid">
          {education.map((edu, i) => (
            <div key={i} className="glass" style={{ padding: '26px' }}>
              <div className="exp-company">{edu.institution}</div>
              <div className="exp-role">{edu.degree}</div>
              <div className="exp-period">{edu.duration}</div>
              {edu.cgpa && <div style={{ marginTop: '12px', fontSize: '1.1rem', fontWeight: 600 }}>CGPA: <span className="grad-text">{edu.cgpa}</span></div>}
              {edu.percentage && <div style={{ marginTop: '12px', fontSize: '1.1rem', fontWeight: 600 }}>Score: <span className="grad-text">{edu.percentage}</span></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}