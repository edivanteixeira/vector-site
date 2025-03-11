/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F52BA', // Blue - represents trust and professionalism
          light: '#3B7DD8',
          dark: '#0A3A8C',
        },
        secondary: {
          DEFAULT: '#2D3748', // Dark gray for text and contrast elements
          light: '#4A5568',
          dark: '#1A202C',
        },
        accent: {
          DEFAULT: '#4FD1C5', // Teal for CTAs and highlights
          light: '#76E4DA',
          dark: '#38B2A0',
        },
        light: {
          DEFAULT: '#F7FAFC', // Light gray for backgrounds
          dark: '#EDF2F7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
