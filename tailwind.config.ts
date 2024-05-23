import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        'C/165': '165px',
      },
      width: {
        'C/150': '150px',
      },
      height: {
        'C/1.5': '1.5px',
      },
      margin: {
        'C/-1': '10px'
      },
    },
  },
  plugins: [],
}

export default config
