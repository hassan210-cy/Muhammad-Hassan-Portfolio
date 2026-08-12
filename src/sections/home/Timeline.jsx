import Reveal from '../../components/Reveal.jsx';
import { timeline } from '../../data/timeline.js';

export default function   Timeline() {
  return (
    <section id="timeline" className="relative py-[clamp(4rem,10vw,7rem)] px-[clamp(1.5rem,6vw,4rem)] scroll-mt-24">
      <div className="max-w-content mx-auto">
        <Reveal as="p" className="font-mono text-[0.8rem] tracking-wider uppercase text-accent mb-3">
          05 — Experience
        </Reveal>
        <Reveal as="h2" delay={80} className="font-display text-display-lg font-semibold mb-6">
          Experience & Growth.
        </Reveal>

        <ol className="list-none mt-10 p-0 max-w-[620px] relative">
          {/* Vertical connecting line */}
          <span className="absolute left-[5px] top-[6px] bottom-[6px] w-px bg-hairline-strong" aria-hidden="true" />

          {timeline.map((item, i) => (
            <Reveal key={item.title} as="li" delay={i * 100} className="relative pb-9 pl-8">
              {/* Timeline dot */}
              <span
                className="absolute left-0 top-[5px] w-[11px] h-[11px] rounded-full bg-surface border-2 border-accent"
                aria-hidden="true"
              />
              <p className="font-mono text-xs tracking-wider uppercase text-dim mb-[0.4rem]">{item.period}</p>
              <h3 className="font-display text-[1.15rem] font-semibold mb-[0.4rem]">{item.title}</h3>
              <p className="text-muted text-[0.95rem] leading-relaxed">{item.detail}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
