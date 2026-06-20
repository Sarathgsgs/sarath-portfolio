import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { email, phone, location, github, linkedin, name } = portfolioData.personal;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      alert("Failed to copy email automatically. You can copy it manually: " + email);
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.message.trim()) errs.message = "Message can't be empty";
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSubmitting(true);
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("message", form.message);
      
      // Use env variable or fallback placeholder key
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
      formData.append("access_key", accessKey);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (response.ok && data.success) {
          setSent(true);
          setForm({ name: '', email: '', message: '' });
          setTimeout(() => setSent(false), 4000);
        } else {
          alert(data.message || "Something went wrong. Please try again.");
        }
      } catch (error) {
        alert("Something went wrong. Please try again.");
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <section className="section" id="contact">
      <div className="eyebrow">Contact</div>
      <h2 className="section-title">Let's build something <span className="grad-text">amazing</span> together</h2>

      <div className="contact-card glass">
        <div className="contact-grid">
          <div>
            <div
              className="contact-link"
              onClick={handleCopyEmail}
              style={{ cursor: 'pointer' }}
              title="Click to copy email address"
            >
              <div className="contact-icon">✉</div>
              <div>
                <div style={{ fontSize: '.75rem', color: 'var(--text-dim)' }}>
                  {copied ? 'COPIED TO CLIPBOARD! ✓' : 'EMAIL (CLICK TO COPY)'}
                </div>
                {email}
              </div>
            </div>
            <a className="contact-link" href={`tel:${phone}`}>
              <div className="contact-icon">📞</div>
              <div>
                <div style={{ fontSize: '.75rem', color: 'var(--text-dim)' }}>PHONE</div>
                {phone}
              </div>
            </a>
            <a className="contact-link" href={linkedin} target="_blank" rel="noreferrer">
              <div className="contact-icon">in</div>
              <div>
                <div style={{ fontSize: '.75rem', color: 'var(--text-dim)' }}>LINKEDIN</div>
                {name}
              </div>
            </a>
            <a className="contact-link" href={github} target="_blank" rel="noreferrer">
              <div className="contact-icon">⌥</div>
              <div>
                <div style={{ fontSize: '.75rem', color: 'var(--text-dim)' }}>GITHUB</div>
                Sarathgsgs
              </div>
            </a>
            <a className="contact-link" href="#" onClick={e => e.preventDefault()}>
              <div className="contact-icon">📍</div>
              <div>
                <div style={{ fontSize: '.75rem', color: 'var(--text-dim)' }}>LOCATION</div>
                {location}
              </div>
            </a>
          </div>

          <form onSubmit={submit}>
            <input className="form-field" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} disabled={submitting} />
            {errors.name && <div className="form-error">{errors.name}</div>}
            <input className="form-field" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} disabled={submitting} />
            {errors.email && <div className="form-error">{errors.email}</div>}
            <textarea className="form-field" placeholder="Message" rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} disabled={submitting}></textarea>
            {errors.message && <div className="form-error">{errors.message}</div>}
            <button 
              className="btn btn-primary" 
              style={{ width: '100%', justifyContent: 'center' }} 
              type="submit"
              disabled={submitting}
            >
              {submitting ? 'Sending...' : sent ? 'Message Sent ✓' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <footer style={{ marginTop: '60px' }}>
        © {new Date().getFullYear()} {name} — Built with React
      </footer>
    </section>
  );
}