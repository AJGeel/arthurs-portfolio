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
  },
  plugins: [],
};
export default config;
