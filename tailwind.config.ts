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
    },
  },
  plugins: [],
}

export default config
