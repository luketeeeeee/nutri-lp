import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--foreground)",
        text: "#001d11",
        background: "#f4fffb",
        primary: "#0f482f",
        secondary: "#779e39",
        accent: "#e5ab7e",
        // new colors
        green1: "#7ea246",
        gray1: "#f7f6f2",
        gray2: "#d6dcd8",
        brown1: "#ba9772",
        brown2: "#471b1d",
        yellow1: "#d5b86f",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfairDisplay: ["Playfair Display", "serif"],
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
} satisfies Config;
