import { SOCIAL_LINKS } from '../config.js';
import { LinkedInIcon, WhatsAppIcon } from './icons/SocialIcons.jsx';

/**
 * Fixed vertical rail on the right edge of the screen (desktop) that
 * collapses to a horizontal row at the bottom-right on mobile.
 * Only shows LinkedIn + WhatsApp — the footer has all four social links.
 */
export default function SocialRail() {
  const links = [
    { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
    { href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp', Icon: WhatsAppIcon },
  ];

  return (
    <div
      className="fixed z-[90] flex flex-col gap-3
                 right-[clamp(0.75rem,2vw,1.5rem)] top-1/2 -translate-y-1/2
                 sm:right-[clamp(0.75rem,2vw,1.5rem)]
                 max-sm:top-auto max-sm:bottom-4 max-sm:right-4 max-sm:translate-y-0 max-sm:flex-row"
      aria-label="Social links"
    >
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="w-11 h-11 max-sm:w-10 max-sm:h-10 flex items-center justify-center rounded-full
                     bg-surface border border-hairline text-muted shadow-soft
                     transition-transform duration-200 hover:text-accent hover:border-accent
                     hover:-translate-y-0.5 hover:scale-105"
        >
          <Icon className="w-[19px] h-[19px]" />
        </a>
      ))}
    </div>
  );
}
