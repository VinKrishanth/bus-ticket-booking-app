/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D8A4F',
        secondary: '#8FD3B5',
        tertiary: '#f2802f',
      },
      fontFamily: {
        'body': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ],
          'sans': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ]
    }
    },
    backgroundImage: {
      'gradient-blue': 'radial-gradient(100% 100% at 50% 50%, rgba(30,167,253,0) 0%, #1ea7fd 100%)',
      'gradient-purple': 'radial-gradient(100% 100% at 50% 50%, rgba(111,44,172,0) 0%, #6f2cac 100%)',
    },
    transform: {
    },
    animation: {
    },
    keyframes: {
    },
    clipPath: {
      triangle: 'polygon(50% 0%, 0% 100%, 100% 100%)',
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}


