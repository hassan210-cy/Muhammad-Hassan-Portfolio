import { Link, useLocation } from 'react-router-dom';
import SectionLink from './SectionLink.jsx';
import { services } from '../data/services.js';
import { SOCIAL_LINKS } from '../config.js';
import { LinkedInIcon, WhatsAppIcon, FacebookIcon, EmailIcon } from './icons/SocialIcons.jsx';

const QUICK_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Experience' }, 
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const socialLinks = [
    { href: SOCIAL_LINKS.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
    { href: SOCIAL_LINKS.whatsapp, label: 'WhatsApp', Icon: WhatsAppIcon },
    { href: SOCIAL_LINKS.facebook, label: 'Facebook', Icon: FacebookIcon },
    { href: SOCIAL_LINKS.email, label: 'Email', Icon: EmailIcon },
  ];

  const footerLinkClasses = 'text-muted hover:text-accent no-underline text-[0.92rem] transition-colors duration-200';

  return (
    <footer className="bg-sunken border-t border-hairline pt-[clamp(3rem,6vw,4.5rem)] px-[clamp(1.5rem,6vw,4rem)]">
      <div className="max-w-content mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-8 md:gap-[clamp(2rem,4vw,4rem)] pb-10">

        {/* Brand column */}
        <div>
          <span className="font-display font-semibold text-[1.15rem] text-ink tracking-tight">
            Muhammad Hassan
          </span>
          <p className="mt-4 mb-5 text-muted text-[0.92rem] leading-relaxed max-w-[32ch]">
            Website developer building web &amp; mobile products — open to freelance work.
          </p>
          <div className="flex gap-[0.6rem]">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={label === 'Email' ? undefined : '_blank'}
                rel={label === 'Email' ? undefined : 'noopener noreferrer'}
                className="w-[38px] h-[38px] flex items-center justify-center rounded-full
                           bg-surface border border-hairline text-muted
                           hover:text-accent hover:border-accent hover:-translate-y-0.5
                           transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links column */}
        <div>
          <h3 className="font-mono text-[0.78rem] uppercase tracking-wider text-dim mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-[0.65rem] list-none p-0 m-0">
            {QUICK_LINKS.map((link) =>
              isHome ? (
                <li key={link.id}>
                  <SectionLink sectionId={link.id} className={footerLinkClasses}>
                    {link.label}
                  </SectionLink>
                </li>
              ) : (
                <li key={link.id}>
                  <Link to={`/#${link.id}`} className={footerLinkClasses}>
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services column */}
        <div>
          <h3 className="font-mono text-[0.78rem] uppercase tracking-wider text-dim mb-4">Services</h3>
          <ul className="flex flex-col gap-[0.65rem] list-none p-0 m-0">
            {services.map((service) => (
              <li key={service.title}>
                {isHome ? (
                  <SectionLink sectionId="services" className={footerLinkClasses}>
                    {service.title}
                  </SectionLink>
                ) : (
                  <Link to="/#services" className={footerLinkClasses}>
                    {service.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline py-6 text-center text-dim text-[0.85rem] font-mono">
        <p>&copy; 2026 Muhammad Hassan. All rights reserved.</p>
      </div>
    </footer>
  );
}
