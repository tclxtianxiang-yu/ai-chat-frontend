/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 浅色主题
        light: {
          bg: '#FFFFFF',
          'bg-secondary': '#F7F7F8',
          text: '#2D2D2D',
          'text-secondary': '#6B7280',
          border: '#E5E5E5',
          primary: '#2563EB',
          'primary-hover': '#1D4ED8',
        },
        // 深色主题
        dark: {
          bg: '#0F0F0F',
          'bg-secondary': '#1F1F1F',
          text: '#ECECEC',
          'text-secondary': '#9CA3AF',
          border: '#3F3F3F',
          primary: '#60A5FA',
          'primary-hover': '#3B82F6',
        },
      },
      borderRadius: {
        'bubble': '16px',
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-in',
        'slide-up': 'slideUp 200ms ease-out',
        'slide-in-left': 'slideInLeft 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
