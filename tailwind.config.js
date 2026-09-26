/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F172A",
          800: "#111C33",
          700: "#16213E",
        },
        brand: {
          50: "#F3F1FF",
          100: "#E9E5FF",
          200: "#D4CCFF",
          400: "#8B7CF6",
          500: "#7C5CFC",
          600: "#6D3CF0",
          700: "#5B2FD4",
        },
        mint: {
          DEFAULT: "#10B981",
          50: "#E7FBF3",
        },
        sunset: "#F59E0B",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(31, 22, 87, 0.08)",
        card: "0 4px 18px rgba(31, 22, 87, 0.06)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(120% 120% at 20% 0%, #EDE9FE 0%, #F8FAFC 55%, #FFFFFF 100%)",
      },
    },
  },
  plugins: [],
};
