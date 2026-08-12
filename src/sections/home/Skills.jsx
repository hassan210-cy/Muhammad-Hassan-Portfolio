import { useState } from 'react';
import Reveal from '../../components/Reveal.jsx';
import { skills } from '../../data/skills.js';

/** A single skill logo tile. Falls back to an initials badge if the CDN logo fails to load. */
function SkillLogo({ skill }) {
  const [failed, setFailed] = useState(false);
  const initials = skill.name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();

  return (
    <div
      className="bg-surface border border-hairline rounded-2xl px-3 py-5 flex flex-col items-center gap-3
                 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-soft hover:border-hairline-strong"
    >
      {failed ? (
        <span className="w-10 h-10 rounded-full bg-accent-tint text-accent flex items-center justify-center font-mono text-[0.85rem] font-semibold">
          {initials}
        </span>
      ) : (
        <img
          src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
          alt={`${skill.name} logo`}
          loading="lazy"
          onError={() => setFailed(true)}
          className="w-10 h-10 object-contain"
        />
      )}
      <span className="text-[0.82rem] font-medium text-muted">{skill.name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-[clamp(4rem,10vw,7rem)] px-[clamp(1.5rem,6vw,4rem)] scroll-mt-24">
      <div className="max-w-content mx-auto">
        <Reveal as="p" className="font-mono text-[0.8rem] tracking-wider uppercase text-accent mb-3">
          03 — Skills
        </Reveal>
        <Reveal as="h2" delay={80} className="font-display text-display-lg font-semibold mb-6">
          Tools I reach for.
        </Reveal>

        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={i * 30}>
              <SkillLogo skill={skill} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
