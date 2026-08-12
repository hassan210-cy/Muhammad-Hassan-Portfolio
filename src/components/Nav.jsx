import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SectionLink from './SectionLink.jsx';

// Home-page sections shown in the nav. Add/remove/reorder entries here to
// change the nav — each `id` must match a section's `id` attribute on the
// home page (see src/sections/home/*.jsx).
const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
];

export default function Nav() {
  const location = useLocation();
  const isPricingPage = location.pathname === '/pricing';

  // Adds a subtle border/shadow once the page has scrolled a bit, so the
  // nav reads as "floating above" the content instead of blending into it.
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkClasses =
    'text-muted hover:text-ink text-[0.92rem] font-medium px-[0.1rem] py-[0.3rem] transition-colors duration-200';

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] flex items-center justify-between
                  py-[1.1rem] px-[clamp(1.25rem,4vw,3rem)]
                  bg-paper/80 backdrop-blur-md
                  border-b transition-[border-color,box-shadow] duration-300
                  ${isScrolled ? 'border-hairline shadow-[0_1px_0_rgba(23,24,28,0.02)]' : 'border-transparent'}`}
    >
      {/* Wordmark / logo — change the name here to update it site-wide */}
      <Link
        to="/"
        className="font-display font-semibold text-[clamp(1rem,1.6vw,1.15rem)] tracking-tight
                   text-ink no-underline whitespace-nowrap"
      >
        Muhammad Hassan
      </Link>

      {/* Nav links — hidden below the sm breakpoint to keep mobile simple;
          the "Hire Me" CTA below always stays visible. */}
      <nav className="hidden sm:flex items-center gap-[clamp(1.25rem,2.5vw,2.25rem)]">
        {NAV_LINKS.map((link) => (
          <SectionLink key={link.id} sectionId={link.id} className={linkClasses}>
            {link.label}
          </SectionLink>
        ))}

        <Link
          to="/pricing"
          className={`${linkClasses} ${isPricingPage ? '!text-accent' : ''}`}
        >
          Pricing
        </Link>

        <SectionLink sectionId="skills" className={linkClasses}>Skills</SectionLink>
        <SectionLink sectionId="projects" className={linkClasses}>Projects</SectionLink>
        <SectionLink sectionId="timeline" className={linkClasses}>Experience</SectionLink>
      </nav>

      {/* Always-visible CTA */}
      <SectionLink
        sectionId="contact"
        className="bg-ink text-white !px-[1.1rem] !py-2 rounded-full text-[0.92rem] font-medium
                   hover:bg-accent transition-colors duration-200"
      >
        Hire Me
      </SectionLink>
    </header>
  );
}
