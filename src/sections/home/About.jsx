import Reveal from '../../components/Reveal.jsx';

export default function About() {
  return (
    <section id="about" className="relative py-[clamp(4rem,10vw,7rem)] px-[clamp(1.5rem,6vw,4rem)] scroll-mt-24">
      <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-[clamp(2rem,5vw,5rem)]">

        {/* Left column — sticky heading on desktop */}
        <div>
          <Reveal as="p" className="font-mono text-[0.8rem] tracking-wider uppercase text-accent mb-3">
            01 — About
          </Reveal>
          <Reveal as="h2" delay={80} className="font-display text-display-lg font-semibold mb-6 md:sticky md:top-28">
            Full-stack,
            <br />
            both hands.
          </Reveal>
        </div>

        {/* Right column — bio + quick facts */}
        <div>
          <Reveal as="p" className="text-body-lg text-muted mb-5 max-w-[60ch]">
            I’m a MERN Stack Developer focused on building modern, scalable web and mobile 
            applications using React, Node.js, Express, and MongoDB. I work across the full
            development stack, from responsive interfaces and user experiences to backend APIs
            and database architecture.
            Alongside freelance and personal projects, I’m currently studying at NUML, where I
            continue to strengthen my technical foundation while turning what I learn into real, 
            functional products.
          </Reveal>
          <Reveal as="p" delay={80} className="text-body-lg text-muted mb-5 max-w-[60ch]">
            <b>My goal is simple:</b> write clean code, build useful products, and keep 
            improving with every project.
          </Reveal>

          <Reveal delay={160} className="flex flex-col gap-[0.6rem] text-[0.95rem] mt-7 list-none p-0" as="ul">
            <li>
              <span className="text-dim font-mono text-[0.78rem] uppercase tracking-wider mr-[0.6rem]">Based in</span>
              Pakistan
            </li>
            <li>
              <span className="text-dim font-mono text-[0.78rem] uppercase tracking-wider mr-[0.6rem]">Studying at</span>
              National University of Modern Languages (NUML)
            </li>
            <li>
              <span className="text-dim font-mono text-[0.78rem] uppercase tracking-wider mr-[0.6rem]">Focused on</span>
              MERN Stack, Website Development
            </li>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
