/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind scans these files for class names it needs to generate.
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // ---- Brand colors — edit these to change the whole site's palette ----
      colors: {
        paper: '#faf9f6', // page background
        surface: '#ffffff',
        sunken: '#f2f0eb',
        ink: '#17181c', // primary text
        muted: '#5b5d6b',
        dim: '#9698a3',
        hairline: '#e6e4dd', // default border
        'hairline-strong': '#d3d0c6',
        accent: {
          DEFAULT: '#2b3fe0',
          hover: '#2333b8',
          tint: '#eceeff'
        },
        sage: {
          DEFAULT: '#4f7a5c',
          tint: '#ecf3ee'
        },
        danger: '#c04444'
      },
      // ---- Fonts — swap the Google Fonts <link> in index.html to match ----
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      // ---- Custom responsive font sizes for headings ----
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6.5vw, 5.5rem)', { lineHeight: '1.03', letterSpacing: '-0.01em' }],
        'display-lg': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'body-lg': ['clamp(1.05rem, 1.3vw, 1.2rem)', { lineHeight: '1.6' }]
      },
      boxShadow: {
        soft: '0 2px 8px rgba(23, 24, 28, 0.04), 0 12px 32px rgba(23, 24, 28, 0.06)',
        lift: '0 8px 20px rgba(23, 24, 28, 0.08), 0 20px 48px rgba(23, 24, 28, 0.1)'
      },
      maxWidth: {
        content: '1120px' // shared max-width for section containers
      },
      // ---- Custom animations used by the hero background + badges ----
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(30px, -20px) scale(1.06)' }
        },
        scrollcue: {
          '0%': { transform: 'scaleY(0.3)', transformOrigin: 'top', opacity: '0.4' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top', opacity: '1' },
          '100%': { transform: 'scaleY(0.3)', transformOrigin: 'bottom', opacity: '0.4' }
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' }
        }
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        scrollcue: 'scrollcue 1.8s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
