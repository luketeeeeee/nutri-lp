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
        // foreground: "var(--foreground)",
        // text: "#001d11",
        // background: "#f4fffb",
        // primary: "#239f6f",
        // secondary: "#a8b8c6",
        // accent: "#8592af",
        foreground: "var(--foreground)",
        text: "#001d11",
        background: "#f4fffb",
        primary: "#0f482f",
        secondary: "#779e39",
        accent: "#e5ab7e",
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
