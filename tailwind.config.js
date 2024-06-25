/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      // xxsm: '365px',
        xsm: '480px',
        sm: '550px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
    },
      backgroundImage: {
        logo: "url('./assets/pictures/OIP.jpg')",
        logo2: "url('./assets/pictures/eye2.jpg')"
      }
    },
  },
  plugins: [],
}

