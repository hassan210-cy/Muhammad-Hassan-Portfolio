import Reveal from '../../components/Reveal.jsx';

export default function PricingHero() {
  return (
    <section id="pricing-hero" className="relative py-[clamp(4rem,10vw,7rem)] px-[clamp(1.5rem,6vw,4rem)]">
      <div className="max-w-content mx-auto">
        <Reveal as="p" className="font-mono text-[0.8rem] tracking-wider uppercase text-accent mb-3">
          Pricing
        </Reveal>
        <Reveal as="h1" delay={80} className="font-display text-display-lg font-semibold mb-6">
          Simple, transparent pricing.
        </Reveal>
        <Reveal as="p" delay={140} className="text-body-lg text-muted mb-5 max-w-[60ch]">
          Starting-point packages for the most common project types. Every real
          project is a little different, so think of these as a guide to a
          conversation, not a fixed menu.
        </Reveal>
      </div>
    </section>
  );
}
