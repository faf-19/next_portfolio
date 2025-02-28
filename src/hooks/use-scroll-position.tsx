
import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', updatePosition);
    
    updatePosition();
    
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);
  
  return scrollPosition;
}

export function useElementOnScreen(options: IntersectionObserverInit) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, isVisible] as const;
}
