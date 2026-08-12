// Icons for the Services section. Each `services` entry in
// src/data/services.js has an `icon` key that must match one of these.

const strokeProps = { stroke: 'currentColor', strokeWidth: '1.6', fill: 'none' };

export function CodeIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M8 6L3 12L8 18M16 6L21 12L16 18" {...strokeProps} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MobileIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect x="7" y="2" width="10" height="20" rx="2" {...strokeProps} />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
    </svg>
  );
}

export function GlobeIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <circle cx="12" cy="12" r="9" {...strokeProps} />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" {...strokeProps} />
    </svg>
  );
}

export function PlugIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0V8zM12 17v5" {...strokeProps} strokeLinecap="round" />
    </svg>
  );
}

export function LayoutIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" {...strokeProps} />
      <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function WrenchIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2 2.6-2.6z" {...strokeProps} strokeLinejoin="round" />
    </svg>
  );
}

// Lookup map so <Services> can render the right icon from a data string,
// e.g. ICONS[service.icon]
export const ICONS = {
  code: CodeIcon,
  mobile: MobileIcon,
  globe: GlobeIcon,
  plug: PlugIcon,
  layout: LayoutIcon,
  wrench: WrenchIcon
};
