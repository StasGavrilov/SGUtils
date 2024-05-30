import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: 'typing 6.5s steps(40, end) infinite, blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '50%': { width: '25%' },
          '90%': { width: '25%' },
          '100%': { width: '0%' },
        },
        'blink-caret': {
          '0%, 100%': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'black' },
        },
      },
    },
  },
  plugins: [],
}

export default config
