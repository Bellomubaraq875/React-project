import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00A064",  
        secondary: "#067A52",
        accent: "#3FC283",   

        // full palette for flexibility
        tlhgreen1: "#0F4F34",
        tlhgreen2: "#046645",
        tlhgreen3: "#067A52",
        tlhgreen4: "#00A064",
        tlhlight1: "#87E9A9",
        tlhlight2: "#3FC283",
      },
    },
  },
  plugins: [],
};
export default config;
