import { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Folder from './Folder';
import './Certifications.css';

export default function Certifications() {
  const { certifications } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const filteredCerts = certifications.filter(cert => {
    if (activeTab === 'all') return true;
    return cert.category === activeTab;
  });

  return (
    <section className="certs-section" id="certifications">
      <div className="eyebrow">Certifications</div>
      <h2 className="section-title">
        Certification <span className="grad-text">Vault</span>
      </h2>
      <p className="section-sub">
        Verification details and certificate credentials from internships, coding courses, and events.
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
        {filteredCerts.map((cert, i) => (
          <div key={i} className="cert-folder-card">
            <Folder
              color={
                cert.category === 'internships'
                  ? '#06B6D4'
                  : cert.category === 'coding'
                  ? '#7C3AED'
                  : '#EC4899'
              }
              size={1.1}
              items={[
                // Paper 1 (Back-most): Shows Issuer Name
                <div
                  key="issuer"
                  style={{
                    fontSize: '8px',
                    fontWeight: 700,
                    color: '#666',
                    padding: '6px',
                    lineHeight: 1.2,
                  }}
                >
                  {cert.issuer}
                </div>,
                // Paper 2 (Middle): Shows Certificate Title
                <div
                  key="title"
                  style={{
                    fontSize: '9px',
                    fontWeight: 700,
                    color: '#1a1a2e',
                    padding: '6px',
                    lineHeight: 1.3,
                  }}
                >
                  {cert.title}
                </div>,
                // Paper 3 (Front-most): Shows Certificate Image Thumbnail
                <img
                  key="img"
                  src={`/certificates/${cert.image}`}
                  alt={cert.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    border: '1px solid rgba(0,0,0,0.08)',
                  }}
                />,
              ]}
            />
            <div style={{ marginTop: '10px', width: '100%', textAlign: 'center' }}>
              <div className="cert-folder-issuer">{cert.issuer}</div>
              <div className="cert-folder-label">{cert.title}</div>
            </div>
            
            <button 
              className="cert-zoom-btn"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxImage(`/certificates/${cert.image}`);
              }}
            >
              🔍 View Document
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox-backdrop" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>×</button>
            <img src={lightboxImage} alt="Certificate Document" className="lightbox-img" />
          </div>
        </div>
      )}
    </section>
  );
}
