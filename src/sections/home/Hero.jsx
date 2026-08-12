import Reveal from '../../components/Reveal.jsx';
import SectionLink from '../../components/SectionLink.jsx';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center pt-24 overflow-hidden
                 px-[clamp(1.5rem,6vw,4rem)]"
    >
      {/* Decorative background — soft drifting color blobs + dot grid.
          Purely visual, hidden from screen readers.
          Note: these use inline `style` (not Tailwind classes) because the
          gradients need runtime color values — Tailwind's `theme()` helper
          only works inside compiled className strings, not inline styles,
          so the hex codes below are written out directly. They match the
          `accent.tint` / `sage.tint` / `hairline-strong` colors in
          tailwind.config.js — keep them in sync if you change the palette. */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <span
          className="absolute w-[480px] h-[480px] -top-[120px] -left-20 rounded-full blur-[60px]
                     opacity-55 animate-drift"
          style={{ background: 'radial-gradient(circle, #eceeff, transparent 70%)' }}
        />
        <span
          className="absolute w-[420px] h-[420px] -bottom-[140px] -right-[60px] rounded-full blur-[60px]
                     opacity-55 animate-drift [animation-delay:-9s]"
          style={{ background: 'radial-gradient(circle, #ecf3ee, transparent 70%)' }}
        />
        <span
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: 'radial-gradient(#d3d0c6 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-[1] max-w-[760px] mx-auto">
        <Reveal as="p" className="inline-flex items-center gap-2 font-mono text-[0.78rem] text-sage
                                   bg-sage-tint border border-sage/25 px-[0.85rem] py-[0.4rem] rounded-full mb-5">
          <span className="w-[7px] h-[7px] rounded-full bg-sage animate-pulse-dot" />
          Available for freelance work
        </Reveal>

        <Reveal as="p" delay={80} className="font-mono text-[0.8rem] tracking-wider uppercase text-accent mb-3">
          MERN Stack Developer
        </Reveal>

        <Reveal as="h1" delay={140} className="font-display text-display-xl font-semibold mb-6 tracking-tight">
          Muhamad Hassan
        </Reveal>

        <Reveal as="p" delay={200} className="text-body-lg text-muted mb-5 max-w-[60ch] mx-auto">
          I develop modern web and mobile applications using the MERN stack, combining 
          thoughtful UI, reliable backend systems, and practical user experiences.
        </Reveal>

        <Reveal delay={260} className="flex gap-4 flex-wrap justify-center">
          <SectionLink
            sectionId="projects"
            className="font-semibold text-[0.95rem] px-[1.6rem] py-[0.85rem] rounded-full no-underline
                       inline-flex items-center gap-2 bg-ink text-white
                       transition-all duration-200 hover:bg-accent hover:-translate-y-0.5 hover:shadow-lift"
          >
            See the work
          </SectionLink>
          <SectionLink
            sectionId="contact"
            className="font-semibold text-[0.95rem] px-[1.6rem] py-[0.85rem] rounded-full no-underline
                       inline-flex items-center gap-2 border border-hairline-strong text-ink
                       transition-all duration-200 hover:border-accent hover:text-accent hover:-translate-y-0.5"
          >
            Get in touch
          </SectionLink>
        </Reveal>
      </div>

      {/* Scroll-down cue */}
      <div
        className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                   font-mono text-[0.72rem] text-dim tracking-wider uppercase z-[1]"
        aria-hidden="true"
      >
        <span>scroll</span>
        <span className="w-px h-[30px] bg-gradient-to-b from-dim to-transparent animate-scrollcue" />
      </div>
    </section>
  );
}
