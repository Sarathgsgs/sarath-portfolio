import { useState, useEffect } from 'react';

/**
 * Custom hook to monitor which section is currently active in the viewport.
 * @param {string[]} sectionIds - Array of element IDs to observe.
 * @param {number} offset - Offset from the top of the viewport in pixels.
 * @returns {string} - The ID of the currently active section.
 */
export default function useScrollSpy(sectionIds, offset = 0) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // Root margin: top offset triggers active state slightly early
        rootMargin: `-${offset}px 0px -50% 0px`,
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sectionIds, offset]);

  return activeSection;
}
