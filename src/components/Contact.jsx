import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { email, phone, location, github, linkedin, name } = portfolioData.personal;
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.message.trim()) errs.message = "Message can't be empty";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      const subject = encodeURIComponent(`Portfolio Message from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;

      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }
  };


  return (
    <section className="section" id="contact">
      <div className="eyebrow">Contact</div>
      <h2 className="section-title">Let's build something <span className="grad-text">amazing</span> together</h2>

      <div className="contact-card glass">
        <div className="contact-grid">
          <div>
            <a className="contact-link" href={`mailto:${email}`}>
              <div className="contact-icon">✉</div>
              <div>
                <div style={{ fontSize: '.75rem', color: 'var(--text-dim)' }}>EMAIL</div>
                {email}
              </div>
            </a>
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
            <input className="form-field" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            {errors.name && <div className="form-error">{errors.name}</div>}
            <input className="form-field" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            {errors.email && <div className="form-error">{errors.email}</div>}
            <textarea className="form-field" placeholder="Message" rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}></textarea>
            {errors.message && <div className="form-error">{errors.message}</div>}
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} type="submit">
              {sent ? 'Message Sent ✓' : 'Send Message'}
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