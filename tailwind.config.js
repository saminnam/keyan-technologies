/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/hero.png')",
        'webservice-pattern': "url('./assets/web-service-bg.png')",
        'service-pattern': "url('./assets/service_bg.jpg')",
        'common-pattern': "url('./assets/hero.png')",
      },
    },
  },
  plugins: [],
}
