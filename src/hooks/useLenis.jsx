import { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';

// Fixed header height, used to offset scroll targets so sections don't
// land underneath the nav. Change this if you resize the header.
export const NAV_OFFSET = 88;

const LenisContext = createContext({ scrollToId: () => {} });

/**
 * Wraps the whole app. Sets up Lenis smooth scrolling once, hooks it into
 * GSAP's ticker (so ScrollTrigger-based reveals stay in sync), and exposes
 * a `scrollToId(id)` helper via context for nav links, buttons, etc.
 *
 * Respects `prefers-reduced-motion`: skips Lenis entirely and falls back to
 * the browser's native (instant) scrolling.
 */
export function LenisProvider({ children }) {
  const lenisRef = useRef(null);
  const [reducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (reducedMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      easing: (t) => 1 - Math.pow(1 - t, 3)
    });
    lenisRef.current = lenis;

    // Drive Lenis from GSAP's ticker so scroll-linked animations stay smooth
    const onTick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reducedMotion]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -NAV_OFFSET, duration: 1.2 });
    } else {
      // Reduced-motion / Lenis-not-ready fallback
      const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: reducedMotion ? 'auto' : 'smooth' });
    }
  };

  return <LenisContext.Provider value={{ scrollToId }}>{children}</LenisContext.Provider>;
}

export function useLenisScroll() {
  return useContext(LenisContext);
}
