import { useEffect, useRef, useState } from 'react';

/**
 * Tracks whether an element has scrolled into view. Only fires once
 * (unobserves itself after the first time) since reveal animations should
 * play once, not every time the user scrolls back up and down.
 *
 * @param {number} threshold - fraction of the element that must be visible
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isInView];
}
