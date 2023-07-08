/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#BF8B15',
        textColor: '#474747',
        secondary: '#98bf0e',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
        bGreen: '#49a92780',
        bGrey: '#808080a6',
        dimIcon: '#474747',
        background: 'e5e7eb',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1369px',
      xl: '1580px',
    },
  },
  plugins: [],
};
