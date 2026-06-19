import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-floating ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-pill">
        <a href="#about" className="nav-logo">SG</a>

        <div className="nav-links-desktop">
          {NAV_ITEMS.map(item => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-bar ${mobileOpen ? 'open' : ''}`} />
          <span className={`hamburger-bar ${mobileOpen ? 'open' : ''}`} />
          <span className={`hamburger-bar ${mobileOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="nav-mobile-menu">
          {NAV_ITEMS.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="nav-mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}