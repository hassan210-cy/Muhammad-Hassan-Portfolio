import Reveal from '../../components/Reveal.jsx';
import SectionLink from '../../components/SectionLink.jsx';

export default function PricingCta() {
  return (
    <section id="pricing-cta" className="relative py-[clamp(4rem,10vw,7rem)] px-[clamp(1.5rem,6vw,4rem)]">
      <div className="max-w-content mx-auto">
        <div className="max-w-[620px] mx-auto text-center">
          <Reveal as="h2" className="font-display text-display-lg font-semibold mb-6">
            Not sure which fits?
          </Reveal>
          <Reveal as="p" delay={80} className="text-body-lg text-muted mb-5 mx-auto">
            Send a quick note about your project and I&apos;ll point you to the right
            option — or a custom quote if nothing above fits.
          </Reveal>
          <Reveal delay={140} className="flex justify-center">
            <SectionLink
              sectionId="contact"
              className="font-semibold text-[0.95rem] px-[1.6rem] py-[0.85rem] rounded-full no-underline
                         inline-flex items-center gap-2 bg-ink text-white transition-all duration-200
                         hover:bg-accent hover:-translate-y-0.5 hover:shadow-lift"
            >
              Let&apos;s talk
            </SectionLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
