/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#F9B829',
        indigoCustom: '#9597D8',
        orange: '#E8492B',
        cyan: '#2BC8E6',
        pink: '#F04E8C',
        navyDeep: '#3D3C6E',
        dark: '#08071A',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 24px 80px rgba(0, 0, 0, 0.55)',
        glow: '0 0 0 1px rgba(43, 200, 230, 0.2), 0 20px 50px rgba(43, 200, 230, 0.16)',
      },
    },
  },
  plugins: [],
};
