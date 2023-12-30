/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-nunito)'],
      },

      colors: {
        red: {
          200: '#BF3B44',
          150: '#F3BABD',
          50: '#F4E6E7',
        },

        green: {
          100: '#639339',
          150: '#CBE4B4',
          50: '#E5F0DB',
        },

        gray: {
          200: '#1B1D1E',
          150: '#333638',
          100: '#5C6265',
          50: '#B9BBBC',
        },

        white: {
          dd: '#DDDEDF',
          ef: '#EFF0F0',
          fa: '#FAFAFA',
          ff: '#FFFFFF',
        },

      }
    },
  },
  plugins: [],
}
