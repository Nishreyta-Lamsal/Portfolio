/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInFromBottom: 'fadeInFromBottom 1s ease-out forwards',
        fadeInFromTop: 'fadeInFromTop 1s ease-out forwards',
        fadeInFromTopDelay: 'fadeInFromTop 1s ease-out 0.5s forwards', // Added delay for icons
        fadeInFromBottomDelay: 'fadeInFromBottom 1s ease-out 0.5s forwards', // Added delay for button
      },
      keyframes: {
        fadeInFromBottom: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInFromTop: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}