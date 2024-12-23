/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        endeavour: {
          50: '#f1f7fe',
          100: '#e1edfd',
          200: '#bddafa',
          300: '#83bcf6',
          400: '#419bef',
          500: '#187ddf',
          600: '#0b61be',
          700: '#0b54a8',
          800: '#0d427f',
          80050: '#0d427f80',
          900: '#10396a',
          90050: '#10396a80',
          950: '#0b2346',
          1000: '#151d28',
        },
        tag: {
          'html-200': '#f6c9b2',
          'html-500': '#e34f26',
          'html-900': '#72211c',
          'css-200': '#c1d5fc',
          'css-600': '#264de4',
          'css-900': '#213187',
          'javascript-200': '#fcf98c',
          'javascript-400': '#f7df1e',
          'javascript-900': '#704713',
          'typescript-200': '#c5d9f2',
          'typescript-500': '#3178c6',
          'typescript-900': '#1c385e',
          'react-200': '#9ef7ff',
          'react-400': '#00d8ff',
          'react-900': '#104f69',
          'tailwind-200': '#bae4e7',
          'tailwind-400': '#44a8b3',
          'tailwind-900': '#284751',
        },
      },
    },
  },
};
