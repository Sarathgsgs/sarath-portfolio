import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const TITLES = ["Frontend Developer", "MERN Stack Developer", "AI Enthusiast", "Cloud Explorer", "Problem Solver"];

export default function Hero() {
  const { name, tagline } = portfolioData.personal;
  const [titleIdx, setTitleIdx] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = TITLES[titleIdx];
    const speed = deleting ? 35 : 65;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = full.slice(0, display.length + 1);
        setDisplay(next);
        if (next === full) setTimeout(() => setDeleting(true), 1100);
      } else {
        const next = full.slice(0, display.length - 1);
        setDisplay(next);
        if (next === '') { setDeleting(false); setTitleIdx((titleIdx + 1) % TITLES.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [display, deleting, titleIdx]);

  return (
    <section className="hero" id="about" style={{ position: 'relative', zIndex: 10 }}>
      <div className="hero-greet">{"// Hello, I'm"}</div>
      <h1>
        {name.split(' ')[0]} <span className="grad-text">{name.split(' ')[1]}</span>
      </h1>
      <div className="hero-role font-display">
        {display}<span className="cursor-blink">&nbsp;</span>
      </div>
      <p className="section-sub" style={{ textAlign: 'center', marginTop: '16px' }}>{tagline}</p>

      <div className="hero-buttons">
        <a href="#projects" className="btn btn-primary" style={{ textDecoration: 'none' }}>View Projects</a>
        <a href="#experience" className="btn glass" style={{ textDecoration: 'none' }}>Experience</a>
        <a href="#contact" className="btn glass" style={{ textDecoration: 'none' }}>Contact Me</a>
      </div>

      <a href="#experience" className="scroll-indicator">
        SCROLL
        <span>↓</span>
      </a>
    </section>
  );
}