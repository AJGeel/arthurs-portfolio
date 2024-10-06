import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#0D1116",
      yellow: {
        200: "#FCF3DE",
        700: "#EFE4CA",
      },
      blue: {
        500: "#007EF2",
      },
    },
    extend: {
      keyframes: {
        "come-in-out": {
          "0%, 100%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
        },
        "spin-half": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
      },
      animation: {
        "come-in-out": "come-in-out 700ms forwards",
        "spin-half": "spin-half 1000ms linear",
      },
    },
  },
  plugins: [],
};
export default config;
