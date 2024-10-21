/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        Container: "1280px",
      },
      backgroundImage: {
        hero: "url(/public/Images/Banner.jpg)",
        service: "url(/public/Images/Background.jpg)",
      },
    },
  },
  plugins: [],
};
