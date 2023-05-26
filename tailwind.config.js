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
        sans: 'var(--font-saira)',
        alt: 'var(--font-Logo)',
      },
      colors: {
        bgColor: '#1B1A20',
        headerColor: '#16161A',
        selectedColor: '#D9D9D9',
        unselectedColor: '#414141',
        hoverColor: '#EDEDED',
      },
    },
  },
  plugins: [],
}
