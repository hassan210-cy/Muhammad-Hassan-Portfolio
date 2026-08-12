import { useInView } from '../hooks/useInView.js';

/**
 * Wraps any content and fades + rises it in once it scrolls into view.
 * This is the React replacement for the old GSAP ScrollTrigger reveals —
 * same visual effect, no extra animation library needed.
 *
 * Usage: <Reveal><h2>Heading</h2></Reveal>
 * Usage with delay (for staggering a list): <Reveal delay={100}>...</Reveal>
 */
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, isInView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: isInView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
