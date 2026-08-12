import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenisScroll } from '../hooks/useLenis.jsx';

import Hero from '../sections/home/Hero.jsx';
import About from '../sections/home/About.jsx';
import Services from '../sections/home/Services.jsx';
import Skills from '../sections/home/Skills.jsx';
import Projects from '../sections/home/Projects.jsx';
import Timeline from '../sections/home/Timeline.jsx';
import Contact from '../sections/home/Contact.jsx';

export default function Home() {
  const location = useLocation();
  const { scrollToId } = useLenisScroll();

  // If we arrived here from another page via a <SectionLink> (e.g. clicking
  // "Contact" while on /pricing), location.state.scrollTo tells us which
  // section to scroll to once this page has rendered.
  useEffect(() => {
    if (location.state?.scrollTo) {
      const frame = requestAnimationFrame(() => scrollToId(location.state.scrollTo));
      return () => cancelAnimationFrame(frame);
    }
    return undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </>
  );
}
