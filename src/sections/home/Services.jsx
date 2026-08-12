import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal.jsx';
import { services } from '../../data/services.js';
import { ICONS } from '../../components/icons/ServiceIcons.jsx';

export default function Services() {
  return (
    <section id="services" className="relative py-[clamp(4rem,10vw,7rem)] px-[clamp(1.5rem,6vw,4rem)] scroll-mt-24">
      <div className="max-w-content mx-auto">
        <Reveal as="p" className="font-mono text-[0.8rem] tracking-wider uppercase text-accent mb-3">
          02 — Services
        </Reveal>
        <Reveal as="h2" delay={80} className="font-display text-display-lg font-semibold mb-6">
          What I can build for you.
        </Reveal>
        <Reveal as="p" delay={140} className="text-body-lg text-muted mb-5 max-w-[60ch]">
          Available for freelance projects — from a single landing page to a full product build.
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.title} delay={i * 60}>
                <div
                  className="bg-surface border border-hairline rounded-2xl p-[1.6rem] h-full
                             transition-all duration-200 hover:-translate-y-1 hover:shadow-soft hover:border-hairline-strong"
                >
                  <span className="inline-flex items-center justify-center w-[42px] h-[42px] rounded-lg bg-accent-tint text-accent mb-4">
                    {Icon && <Icon className="w-[22px] h-[22px]" />}
                  </span>
                  <h3 className="font-display text-[1.1rem] font-semibold mb-2">{service.title}</h3>
                  <p className="text-[0.9rem] text-muted leading-relaxed">{service.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200} className="mt-8 text-[0.95rem] text-muted">
          Curious what a project like this costs?{' '}
          <Link to="/pricing" className="text-accent font-semibold no-underline hover:underline">
            See pricing &rarr;
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
