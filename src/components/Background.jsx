import { useEffect, useRef, useState } from 'react';

export default function Background() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const spotlightRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (dotRef.current && ringRef.current) {
        dotRef.current.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
        ringRef.current.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
      }
      if (spotlightRef.current) {
        // Subtle delay/smoothness added to spotlight
        spotlightRef.current.style.setProperty('--mx', `${e.clientX}px`);
        spotlightRef.current.style.setProperty('--my', `${e.clientY}px`);
      }
    };

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollWidth((winScroll / height) * 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={ringRef} className="cursor-ring"></div>
      
      {/* Background layer */}
      <div className="bg-grid"></div>
      <div ref={spotlightRef} className="spotlight"></div>
      
      {/* Top progress bar */}
      <div className="scroll-progress" style={{ width: `${scrollWidth}%` }}></div>
      
      {/* Particles spread out to unify the page */}
      <div className="particle" style={{ left: '15%', top: '100vh', animationDuration: '15s', width: '8px', height: '8px' }}></div>
      <div className="particle" style={{ left: '85%', top: '100vh', animationDuration: '22s', width: '12px', height: '12px' }}></div>
      <div className="particle" style={{ left: '45%', top: '100vh', animationDuration: '18s', width: '6px', height: '6px' }}></div>
    </>
  );
}