/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Cormorant Garamond'", 'system-ui', 'sans-serif'],
        serif: ["'Cormorant Garamond'", 'serif'],
      },
      fontSize: {
        h1: ['3rem', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '0.5px' }],
        h2: ['2.25rem', { lineHeight: '1.3', fontWeight: '700', letterSpacing: '0.25px' }],
        h3: ['1.875rem', { lineHeight: '1.4', fontWeight: '600' }],
        h4: ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        h5: ['1.25rem', { lineHeight: '1.5', fontWeight: '500' }],
        h6: ['1rem', { lineHeight: '1.5', fontWeight: '500' }],
      },
    },
  },
  plugins: [],
}
