/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-bg': "url('/hero-bg.png')",
      },
      colors: {
        'primary': '#59815b',
        'secondary': '#f1f1e7'
      },
      // keyframes: {
      //   scaleUp: {
      //     '0%': { transform: 'scale(1)' },
      //     '50%': { transform: 'scale(0.95)' },
      //     '100%': { transform: 'scale(1)' }
      //   }
      // }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
