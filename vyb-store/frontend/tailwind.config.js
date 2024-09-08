/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A508E',
        secondary: '#E5F0F1',
        tertiary: '#00DC82',
        'primary-text': '#000000',
        'secondary-text': '#838383',
        'cta-text': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
      },
      fontSize: {
        h1: '40px',
        h2: '32px',
        h3: '27px',
        h4: '22px',
        body1: '18px',
        body2: '16px',
        cta: '18px',
      },
    },
  },
  plugins: [],
};
