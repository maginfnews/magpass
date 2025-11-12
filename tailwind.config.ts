
import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9ecff',
          200: '#bcd9ff',
          300: '#92c1ff',
          400: '#5fa0ff',
          500: '#2e7dff',
          600: '#1d61db',
          700: '#184eb2',
          800: '#173f8f',
          900: '#142e66'
        }
      }
    },
  },
  plugins: [],
}

export default config
