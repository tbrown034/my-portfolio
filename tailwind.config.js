/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      minHeight: {
        "1/2-screen": "50vh",
        "110-screen": "110vh",
        "90-screen": "90vh",
        "95-screen": "95vh", // corrected from vh to 95vh
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
        shadows: ["var(--font-shadows-into-light)"],
        majorMono: ["var(--font-major-mono-display)"],
        hand: ["var(--font-patrick-hand)"],
        playfair: ["var(--font-playfair-display)"],
        lato: ["var(--font-lato)"],
        montserrat: ["var(--font-montserrat)"],
        openSans: ["var(--font-open-sans)"],
        poppins: ["var(--font-poppins)"],
        nunito: ["var(--font-nunito)"],
        raleway: ["var(--font-raleway)"],
        roboto: ["var(--font-roboto)"],
        firaCode: ["var(--font-fira-code)"],
        breeSerif: ["var(--font-bree-serif)"],
        alegreyaSans: ["var(--font-alegreya-sans)"],
        josefinSans: ["var(--font-josefin-sans)"],
        josefinSlab: ["var(--font-josefin-slab)"],
        robotoSlab: ["var(--font-roboto-slab)"],
        nunitoSans: ["var(--font-nunito-sans)"],
      },
    },
  },
  plugins: [],
};
