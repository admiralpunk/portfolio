/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#FBF4E2",
        accent: "#ffd700",
        textPrimary: "#e2e8f0",
        textSecondary: "#D8F0FA",
        cardBg: "#71797E",
        vibrantBlue: "#D8F0FA",
        vibrantPink: "#ec4899",
        vibrantGreen: "#10b981",
        vibrantYellow: "#f59e0b",
      },
      backgroundImage: {
        "dark-theme": "url('/sidebar_image.jpg')",
        "side-theme": "url('/sidebar_image.jpg')",
      },
    },
  },
  plugins: [],
};
