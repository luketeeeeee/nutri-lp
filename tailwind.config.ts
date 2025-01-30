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
        primary: "#239f6f",
        secondary: "#7aa9fd",
        accent: "#4c57fd",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        playfairDisplay: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
