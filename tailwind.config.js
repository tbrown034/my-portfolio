/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
        shadows: ["var(--font-shadows-into-light)"],
        penScript: ["var(--font-nanum-pen-script)"],
        majorMono: ["var(--font-major-mono-display)"],
      },
    },
  },
  plugins: [],
};
