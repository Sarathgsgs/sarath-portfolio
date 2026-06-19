import { useState } from 'react';
import Loader from './components/Loader';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsOrbit from './components/SkillsOrbit';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <Background />
      <Navbar />

      <main>
        <Hero />
        <Experience />
        <Projects />
        <SkillsOrbit />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}