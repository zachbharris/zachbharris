const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      mono: ['GeistMono', ...defaultTheme.fontFamily.mono],
    },
    animation: {
      'fade-in': 'fade-in 1.5s ease-in-out',
    },
    keyframes: {
      'fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      }
    }
  },
  plugins: [],
}
