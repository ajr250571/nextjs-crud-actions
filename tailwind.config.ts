import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [daisyui],
  daisyui: {
    themes: [
      "corporate",
      "black",
      "retro",
      "cyberpunk",
      "business",
      "wireframe",
    ],
  },
};
export default config;
