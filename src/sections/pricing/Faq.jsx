import { useState } from 'react';
import Reveal from '../../components/Reveal.jsx';
import { pricingFaqs } from '../../data/pricing.js';

/** A single accordion item — tracks its own open/closed state. */
function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-surface border border-hairline rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-[1.4rem] py-[1.1rem]
                   font-sans text-[0.98rem] font-semibold text-ink text-left
                   focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:-outline-offset-2"
      >
        <span>{question}</span>
        {/* Plus/minus icon — rotates the vertical bar to form a minus when open */}
        <span className="relative w-[18px] h-[18px] flex-shrink-0">
          <span className="absolute top-[8px] left-[2px] w-[14px] h-[2px] bg-dim" />
          <span
            className={`absolute top-[2px] left-[8px] w-[2px] h-[14px] bg-dim transition-transform duration-200
                        ${isOpen ? 'rotate-90 opacity-0' : ''}`}
          />
        </span>
      </button>

      {isOpen && (
        <div className="px-[1.4rem] pb-5">
          <p className="m-0 text-muted text-[0.92rem] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="relative py-[clamp(4rem,10vw,7rem)] px-[clamp(1.5rem,6vw,4rem)]">
      <div className="max-w-content mx-auto">
        <Reveal as="p" className="font-mono text-[0.8rem] tracking-wider uppercase text-accent mb-3">
          FAQ
        </Reveal>
        <Reveal as="h2" delay={80} className="font-display text-display-lg font-semibold mb-6">
          Common questions.
        </Reveal>

        <div className="mt-10 max-w-[720px] flex flex-col gap-3">
          {pricingFaqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <FaqItem question={item.q} answer={item.a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
