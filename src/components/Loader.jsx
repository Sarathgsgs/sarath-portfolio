import { useEffect, useState } from 'react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600); // Fade out buffer
          return 100;
        }
        return old + 20;
      });
    }, 200);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="loader-screen" style={{ opacity: progress === 100 ? 0 : 1, visibility: progress === 100 ? 'hidden' : 'visible' }}>
      <div className="loader-bar-track">
        <div className="loader-bar-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="loader-line">System.boot() ... {progress}%</div>
    </div>
  );
}