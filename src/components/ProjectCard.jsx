import { useState } from 'react';

/**
 * A single project card. If `image` fails to load (missing file, bad
 * path), swaps to a plain placeholder block instead of showing a broken
 * image icon.
 */
export default function ProjectCard({ project }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article
      className="bg-surface border border-hairline rounded-[20px] overflow-hidden flex flex-col
                 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="aspect-[16/10] overflow-hidden bg-sunken">
        {imageFailed ? (
          <div className="w-full h-full flex items-center justify-center text-dim font-mono text-sm">
            {project.title.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase()}
          </div>
        ) : (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        )}
      </div>

      <div className="px-6 pt-[1.4rem] pb-[1.6rem] flex flex-col flex-1">
        <p className="font-mono text-[0.72rem] tracking-wider uppercase text-sage mb-2">{project.tag}</p>
        <h3 className="font-display text-[1.2rem] font-semibold mb-[0.6rem]">{project.title}</h3>
        <p className="text-[0.92rem] text-muted leading-relaxed mb-4 flex-1">{project.description}</p>
        <ul className="flex flex-wrap gap-[0.4rem] list-none p-0 m-0">
          {project.tech.map((t) => (
            <li key={t} className="font-mono text-[0.72rem] px-[0.6rem] py-[0.28rem] rounded-full bg-sunken text-muted">
              {t}
            </li>
          ))}
        </ul>
      </div> 
    </article>
  );
}
