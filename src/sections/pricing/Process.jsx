import Reveal from '../../components/Reveal.jsx';
import { pricingProcess } from '../../data/pricing.js';

export default function Process() {
  return (
    <section id="process" className="relative py-[clamp(4rem,10vw,7rem)] px-[clamp(1.5rem,6vw,4rem)]">
      <div className="max-w-content mx-auto">
        <Reveal as="p" className="font-mono text-[0.8rem] tracking-wider uppercase text-accent mb-3">
          How it works
        </Reveal>
        <Reveal as="h2" delay={80} className="font-display text-display-lg font-semibold mb-6">
          Working together.
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingProcess.map((step, i) => (
            <Reveal key={step.step} delay={i * 80}>
              <div>
                <span className="inline-block font-mono text-[0.78rem] text-accent mb-3">{step.step}</span>
                <h3 className="font-display text-[1.05rem] font-semibold mb-2">{step.title}</h3>
                <p className="text-[0.9rem] text-muted leading-relaxed">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
