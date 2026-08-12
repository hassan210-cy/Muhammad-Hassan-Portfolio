# Muhammad Hassan — Portfolio (React + Tailwind)

React + Tailwind rewrite of the portfolio. Tailwind utility classes are
written directly in each component's `className` — no `@apply`, no custom
CSS component classes. Two pages (Home, Pricing) via React Router, sharing
one header/rail/footer.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
├── main.jsx                     # React entry point
├── App.jsx                      # Router + shared page layout (Nav/Rail/Footer)
├── index.css                    # Tailwind directives + true global styles only
├── config.js                    # ← the 2 things you'll actually want to edit
├── data/                        # content — edit these, not the components
│   ├── services.js
│   ├── skills.js
│   ├── projects.js
│   ├── timeline.js
│   └── pricing.js               # tiers, add-ons, FAQ, process steps
├── hooks/
│   ├── useLenis.jsx             # smooth scroll + scrollToId() helper
│   └── useInView.js             # powers the scroll-reveal animation
├── components/
│   ├── Reveal.jsx               # fade+rise-in-on-scroll wrapper
│   ├── SectionLink.jsx          # smart link: scrolls if on home, navigates+scrolls if not
│   ├── Nav.jsx / SocialRail.jsx / Footer.jsx
│   ├── ProjectCard.jsx
│   └── icons/                   # hand-drawn SVG icon components
├── pages/
│   ├── Home.jsx                 # composes all home sections
│   └── Pricing.jsx              # composes all pricing sections
└── sections/
    ├── home/                    # Hero, About, Services, Skills, Projects, Timeline, Contact
    └── pricing/                 # PricingHero, Tiers, AddOns, Process, Faq, PricingCta
```

## Editing content

You should rarely need to touch a component file just to change text/data:

- **Bio, skills, projects, timeline, pricing** → edit the matching file in `src/data/`
- **Contact form endpoint + social links** → `src/config.js`
- **Colors, fonts, shadows, custom animations** → `tailwind.config.js` (`theme.extend`)
- **Section copy that isn't in a data file** (headings, intro paragraphs) → directly in the relevant file under `src/sections/`

## How styling works

Every bit of styling is a Tailwind class in a `className` string, right next
to the markup it styles — e.g. `<button className="bg-ink text-white rounded-full ...">`.
To restyle something, find its component and edit the classes directly.

A few spots use Tailwind's arbitrary-value syntax (`px-[1.6rem]`,
`text-[0.92rem]`) where a value needed to match the original design exactly
rather than Tailwind's default spacing/sizing scale — these work exactly
like any other Tailwind class, just with a custom value in brackets.

**One gotcha to know about:** the hero's background blobs (`src/sections/home/Hero.jsx`)
use an inline `style` attribute for their gradients instead of a Tailwind
class, because Tailwind's `theme()` helper only works inside compiled
`className` strings — not in React's `style` prop, which is plain
JavaScript/CSS with no build step. Those inline colors are written out as
literal hex codes and are commented in the file; if you change
`accent.tint` / `sage.tint` / `hairline-strong` in `tailwind.config.js`,
update those hex codes too so they stay in sync.

## How the smooth scroll + two pages fit together

- `useLenis.jsx` sets up [Lenis](https://github.com/darkroomengineering/lenis)
  for smooth scrolling and exposes `scrollToId(id)`.
- `<SectionLink sectionId="contact">` is used everywhere a link should land
  on a home-page section. If you're already on the home page, it scrolls
  there. If you're on `/pricing`, it navigates to `/` first and Home.jsx
  scrolls to the right section once it has rendered (via React Router's
  navigation `state`).
- Scroll reveal animations (`<Reveal>`) use a small IntersectionObserver
  hook (`useInView`) — no GSAP/ScrollTrigger dependency, just plain React
  state + Tailwind transition classes.

## Deploying (important: SPA routing)

This is a client-side-routed single-page app now (unlike a plain
multi-page site) — `/pricing` only exists as a real HTTP route if your host
is configured to serve `index.html` for any path it doesn't recognize.
Both configs are already included:

- **Netlify** — `public/_redirects` (copied into `dist/` automatically on build)
- **Vercel** — `vercel.json` rewrite rule

Other static hosts (GitHub Pages, S3, etc.) need the equivalent "SPA
fallback" setting, or direct navigation to `/pricing` (not via clicking a
link inside the app) will 404.

## Known gaps / next steps

- Project images are placeholders (`public/assets/projects/*.svg`) — swap
  in real screenshots via the `image` field in `src/data/projects.js`.
- `CONTACT_FORM_ENDPOINT` and `SOCIAL_LINKS` in `src/config.js` are
  placeholders — set your real Formspree endpoint and profile links before
  going live.
- Pricing numbers in `src/data/pricing.js` are examples, not real quotes.
- No automated tests — manual QA across breakpoints before deploying.
- Mobile nav hides all links except "Hire Me" below the `sm` breakpoint
  (same as the previous version) — a hamburger menu would be the natural
  next step if you want full nav access on mobile.
