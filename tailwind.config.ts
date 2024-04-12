import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "cloud-blur" : 'url("/images/cloud-bg-blur.jpg")',
        "cloud" : 'url("/images/cloud-bg.jpg")',
        "cloud-dark" : 'url("/images/pexels-alex-conchillos-3888585.jpg")',
      },
      borderRadius : {
        "cm-lg" : "24px"
      },
    },
  },
  plugins: [],
};
export default config;
