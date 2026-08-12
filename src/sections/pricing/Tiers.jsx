import Reveal from '../../components/Reveal.jsx';
import SectionLink from '../../components/SectionLink.jsx';
import { pricingTiers } from '../../data/pricing.js';

export default function Tiers() {
  return (
    <section id="tiers" className="relative py-[clamp(4rem,10vw,7rem)] px-[clamp(1.5rem,6vw,4rem)]">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingTiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 80}>
              <div
                className={`relative bg-surface border rounded-2xl p-8 flex flex-col h-full
                            transition-all duration-200 hover:-translate-y-1
                            ${tier.highlighted
                              ? 'border-accent shadow-lift hover:-translate-y-1.5'
                              : 'border-hairline hover:shadow-soft hover:border-hairline-strong'}`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-8 bg-accent text-white font-mono text-[0.68rem]
                                    uppercase tracking-wider px-[0.7rem] py-[0.3rem] rounded-full">
                    Most Popular
                  </span>
                )}

                <h3 className="font-display text-[1.2rem] font-semibold mb-3">{tier.name}</h3>

                <p className="font-display text-[2.1rem] font-semibold text-ink mb-1 flex items-baseline gap-2">
                  {tier.price}
                  <span className="font-sans text-[0.78rem] font-medium text-dim">{tier.priceNote}</span>
                </p>

                <p className="text-[0.88rem] text-muted leading-relaxed mb-5">{tier.description}</p>

                <ul className="flex flex-col gap-[0.6rem] mb-6 flex-1 list-none p-0">
                  {tier.features.map((feature) => (
                    <li key={feature} className="text-[0.88rem] text-ink pl-6 relative">
                      <span className="absolute left-0 top-[0.45rem] w-2 h-2 rounded-full bg-sage" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <SectionLink
                  sectionId="contact"
                  className={`w-full text-center justify-center font-semibold text-[0.95rem] px-[1.6rem]
                              py-[0.85rem] rounded-full no-underline inline-flex items-center gap-2
                              transition-all duration-200
                              ${tier.highlighted
                                ? 'bg-ink text-white hover:bg-accent hover:-translate-y-0.5 hover:shadow-lift'
                                : 'border border-hairline-strong text-ink hover:border-accent hover:text-accent hover:-translate-y-0.5'}`}
                >
                  {tier.cta}
                </SectionLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
