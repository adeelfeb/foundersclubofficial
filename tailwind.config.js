/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Founders Club – match client site (dark forest + gold/cream)
        forest: {
          950: '#010704',
          900: '#0f1f18',
          800: '#1a2e26',
          700: '#1e3d30',
          600: '#2a4d3d',
          500: '#2C443C',
          400: '#3d6b54',
        },
        gold: {
          50: '#F7F0DE',
          100: '#f5f0e6',
          200: '#e8dfc9',
          300: '#d6c39b',
          400: '#c9a227',
          500: '#D4AF37',
          600: '#b8962e',
          700: '#9a7b26',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'serif'],
        heading: ['var(--font-heading)', 'Luxerie', 'Georgia', 'Cambria', 'serif'],
        subheading: ['var(--font-subheading)', 'Dragon-Serial', 'Georgia', 'Cambria', 'serif'],
      },
      borderRadius: {
        'fc': '0.5rem',
        'fc-lg': '0.75rem',
        'fc-xl': '1rem',
      },
      boxShadow: {
        'fc-gold': '0 1px 3px rgba(212, 175, 55, 0.15)',
        'fc-gold-md': '0 4px 12px rgba(212, 175, 55, 0.2)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s ease-in-out infinite',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'pulse-soft': 'pulse 1.5s ease-in-out infinite',
      },
      backgroundSize: {
        'shimmer': '200% 100%',
        'texture': 'auto',
      },
      backgroundImage: {
        'footer-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='24' viewBox='0 0 56 24'%3E%3Cpath fill='%23D4AF37' fill-opacity='0.07' fill-rule='evenodd' d='M0 8h8V4h8V0h8v4h8v4h8v8h-8v4h-8v4h-8v-4H8v-4H0V8zm16 0v4h8V8h-8zm16 4v4h8v-4h-8z'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

