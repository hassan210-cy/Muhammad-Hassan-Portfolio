import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLenisScroll } from '../hooks/useLenis.jsx';

/**
 * A link that scrolls to a section on the home page (e.g. "#contact").
 *
 * - Already on the home page? Scrolls there smoothly, no page change.
 * - On another page (e.g. /pricing)? Navigates home first, then Home.jsx
 *   picks up `location.state.scrollTo` and scrolls once it has rendered.
 *
 * Usage: <SectionLink sectionId="contact">Contact</SectionLink>
 */
export default function SectionLink({ sectionId, children, className = '', onClick }) {
  const { scrollToId } = useLenisScroll();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      scrollToId(sectionId);
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
    onClick?.();
  };

  return (
    <Link to={`/#${sectionId}`} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
