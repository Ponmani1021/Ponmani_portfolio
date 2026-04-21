import { useEffect, useRef } from 'react';

/**
 * useReveal — IntersectionObserver-based scroll reveal.
 * Adds 'visible' class when element enters viewport.
 * If already in view on mount, triggers immediately.
 */
export default function useReveal({ threshold = 0.15, rootMargin = '0px', delay = 0 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = () => {
      if (delay) {
        setTimeout(() => el.classList.add('visible'), delay);
      } else {
        el.classList.add('visible');
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trigger();
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, delay]);

  return ref;
}
