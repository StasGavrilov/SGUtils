import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'text-secondary',
    'text-main',
    'text-red',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main': '#2c3e50',
        'secondary': '#18bc9c',
        'input': '#DEDFE4',
      },
      borderColor: {
        'main': '#2c3e50',
        'secondary': '#18bc9c',
      },
      textColor: {
        'main': '#2c3e50',
        'secondary': '#18bc9c',
        'red': '#FF0000',
      },
      screens: {
        'xs': '430px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '2048px',
      },
    },
  },
  plugins: [],
}

export default config
