import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { LenisProvider } from './hooks/useLenis.jsx';
import Nav from './components/Nav.jsx';
import SocialRail from './components/SocialRail.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Pricing from './pages/Pricing.jsx';

/**
 * Shared page chrome — header nav, fixed social rail, and footer are the
 * same on every page. `<Outlet />` renders whichever page matched the
 * current route in between them.
 */
function Layout() {
  return (
    <>
      {/* Skip link for keyboard/screen-reader users — jumps straight past the nav */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[300]
                   focus:bg-accent focus:text-white focus:px-5 focus:py-3 focus:rounded-full
                   focus:font-mono focus:text-sm"
      >
        Skip to content
      </a>

      <Nav />
      <SocialRail />

      <main id="main-content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LenisProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LenisProvider>
  );
}
