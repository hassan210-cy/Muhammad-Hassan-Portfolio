import Reveal from '../../components/Reveal.jsx';
import { pricingAddOns } from '../../data/pricing.js';

export default function AddOns() {
  return (
    <section id="addons" className="relative py-[clamp(4rem,10vw,7rem)] px-[clamp(1.5rem,6vw,4rem)]">
      <div className="max-w-content mx-auto">
        <Reveal as="p" className="font-mono text-[0.8rem] tracking-wider uppercase text-accent mb-3">
          Add-ons
        </Reveal>
        <Reveal as="h2" delay={80} className="font-display text-display-lg font-semibold mb-6">
          Extras &amp; common add-ons.
        </Reveal>

        <Reveal delay={140}>
          <ul className="mt-10 max-w-[620px] border-t border-hairline list-none p-0">
            {pricingAddOns.map((addon) => (
              <li
                key={addon.name}
                className="flex items-center justify-between gap-4 py-4 border-b border-hairline text-[0.95rem]"
              >
                <span>{addon.name}</span>
                <span className="font-mono text-[0.85rem] text-sage whitespace-nowrap">{addon.price}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
