import { useState } from 'react';
import Folder from './Folder';
import './Certifications.css';

const certificateGroups = [
  {
    id: "internships",
    title: "Internship Certifications",
    description: "Industrial training and project completion credentials.",
    issuer: "OneYes, TechNest, Thozhil",
    category: "internships",
    color: "#06B6D4",
    certificates: [
      { title: "Web Developer Internship", issuer: "OneYes Infotech", image: "WhatsApp Image 2026-06-19 at 8.43.29 PM.jpeg" },
      { title: "Cloud Computing Internship", issuer: "TechNest Intern", image: "WhatsApp Image 2026-06-19 at 8.43.30 PM (2).jpeg" },
      { title: "Web Developer Placement", issuer: "Thozhil Platform", image: "WhatsApp Image 2026-06-19 at 8.43.30 PM.jpeg" }
    ]
  },
  {
    id: "skillrack",
    title: "SkillRack Courses & Challenges",
    description: "Hands-on coding courses and challenge milestones.",
    issuer: "SkillRack",
    category: "coding",
    color: "#7C3AED",
    certificates: [
      { title: "Python 3.x Programming Course", issuer: "SkillRack", image: "1756386279775.jpeg" },
      { title: "Python 3.x: 50 Average Challenges", issuer: "SkillRack", image: "1758638709763.jpeg" },
      { title: "Python 3.x: 50 Easy Challenges", issuer: "SkillRack", image: "1758638729560.jpeg" },
      { title: "Python 3.x: 50 Very Easy Challenges", issuer: "SkillRack", image: "1758638732579.jpeg" }
    ]
  },
  {
    id: "hackathons",
    title: "Hackathon & Symposiums",
    description: "Competitive programming and national-level events.",
    issuer: "SRM University, IE(I)",
    category: "participations",
    color: "#EC4899",
    certificates: [
      { title: "REGENHACK VR 2.0 Hackathon", issuer: "SRM Institute / IE(I)", image: "WhatsApp Image 2026-06-19 at 8.43.27 PM (1).jpeg" },
      { title: "AskGPT - GENESIS'25 Symposium", issuer: "SRM Institute of Science & Tech", image: "1759844633306.jpeg" }
    ]
  },
  {
    id: "appreciations",
    title: "Appreciations & Bootcamps",
    description: "Industrial visits, entrepreneurial training, and workshops.",
    issuer: "Gradtwin, Wadhwani Foundation",
    category: "participations",
    color: "#10B981",
    certificates: [
      { title: "Ignite Bootcamp", issuer: "Wadhwani Foundation", image: "WhatsApp Image 2026-06-19 at 8.43.26 PM (1).jpeg" },
      { title: "Industrial Visit Appreciation", issuer: "Gradtwin", image: "WhatsApp Image 2026-06-19 at 8.43.27 PM.jpeg" }
    ]
  },
  {
    id: "academic",
    title: "Academic & Tech Courses",
    description: "Professional networking and foundational computer science courses.",
    issuer: "Cisco Academy",
    category: "coding",
    color: "#F59E0B",
    certificates: [
      { title: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy", image: "1760794204124.jpeg" }
    ]
  }
];

export default function Certifications() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeGroup, setActiveGroup] = useState(null);
  const [activeCertIndex, setActiveCertIndex] = useState(0);

  const filteredGroups = certificateGroups.filter(group => {
    if (activeTab === 'all') return true;
    return group.category === activeTab;
  });

  const openGroup = (group) => {
    setActiveGroup(group);
    setActiveCertIndex(0);
  };

  return (
    <section className="certs-section" id="certifications">
      <div className="eyebrow">Certifications</div>
      <h2 className="section-title">
        Certification <span className="grad-text">Vault</span>
      </h2>
      <p className="section-sub">
        Verification details and certificate credentials grouped by issuers and programs.
      </p>

      {/* Tabs */}
      <div className="certs-tabs">
        <button
          className={`cert-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
        <button
          className={`cert-tab-btn ${activeTab === 'internships' ? 'active' : ''}`}
          onClick={() => setActiveTab('internships')}
        >
          Internships
        </button>
        <button
          className={`cert-tab-btn ${activeTab === 'coding' ? 'active' : ''}`}
          onClick={() => setActiveTab('coding')}
        >
          Coding Courses
        </button>
        <button
          className={`cert-tab-btn ${activeTab === 'participations' ? 'active' : ''}`}
          onClick={() => setActiveTab('participations')}
        >
          Participations
        </button>
      </div>

      {/* Grid */}
      <div className="certs-grid">
        {filteredGroups.map((group) => {
          // Dynamic paper assignments based on count
          const paperItems = [];
          const certs = group.certificates;

          if (certs.length >= 3) {
            paperItems.push(
              <img key="img1" src={`/certificates/${certs[2].image}`} alt="cert" className="paper-img" />,
              <img key="img2" src={`/certificates/${certs[1].image}`} alt="cert" className="paper-img" />,
              <img key="img3" src={`/certificates/${certs[0].image}`} alt="cert" className="paper-img" />
            );
          } else if (certs.length === 2) {
            paperItems.push(
              <div key="label" className="paper-label-text">2 Certificates</div>,
              <img key="img1" src={`/certificates/${certs[1].image}`} alt="cert" className="paper-img" />,
              <img key="img2" src={`/certificates/${certs[0].image}`} alt="cert" className="paper-img" />
            );
          } else {
            paperItems.push(
              <div key="issuer" className="paper-label-sub">{certs[0].issuer}</div>,
              <div key="title" className="paper-label-text">{certs[0].title}</div>,
              <img key="img" src={`/certificates/${certs[0].image}`} alt="cert" className="paper-img" />
            );
          }

          return (
            <div key={group.id} className="cert-folder-card" onClick={() => openGroup(group)}>
              <Folder
                color={group.color}
                size={1.1}
                items={paperItems}
              />
              <div style={{ marginTop: '10px', width: '100%', textAlign: 'center' }}>
                <div className="cert-folder-issuer">{group.issuer}</div>
                <div className="cert-folder-label">{group.title}</div>
                <div className="cert-folder-count">{certs.length} Document{certs.length > 1 ? 's' : ''}</div>
              </div>
              
              <button 
                className="cert-zoom-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  openGroup(group);
                }}
              >
                📂 View Folder ({certs.length})
              </button>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal (File Explorer style for groups) */}
      {activeGroup && (
        <div className="lightbox-backdrop" onClick={() => setActiveGroup(null)}>
          <div className="lightbox-content explorer-style" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setActiveGroup(null)}>×</button>
            
            <div className="explorer-layout">
              {/* Sidebar list of files in folder */}
              {activeGroup.certificates.length > 1 && (
                <div className="explorer-sidebar">
                  <div className="sidebar-header">
                    <span>📁 Folder Contents</span>
                  </div>
                  <div className="sidebar-list">
                    {activeGroup.certificates.map((cert, idx) => (
                      <button
                        key={idx}
                        className={`sidebar-item ${idx === activeCertIndex ? 'active' : ''}`}
                        onClick={() => setActiveCertIndex(idx)}
                      >
                        <span className="file-icon">📄</span>
                        <div className="file-info">
                          <div className="file-title">{cert.title}</div>
                          <div className="file-issuer">{cert.issuer}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Main preview window */}
              <div className="explorer-preview">
                <div className="preview-header">
                  <h3>{activeGroup.certificates[activeCertIndex].title}</h3>
                  <p>Issued by: {activeGroup.certificates[activeCertIndex].issuer}</p>
                </div>
                <div className="preview-image-container">
                  <img
                    src={`/certificates/${activeGroup.certificates[activeCertIndex].image}`}
                    alt={activeGroup.certificates[activeCertIndex].title}
                    className="explorer-img"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
