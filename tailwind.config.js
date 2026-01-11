/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'karla-dark': '#1e1e1e',
        'karla-darker': '#121212',
        'karla-accent': '#61dafb',
        'karla-green': '#98c379',
        'karla-pink': '#ff6bb5',
        'karla-blue': '#61afef',
        'karla-purple': '#c678dd',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
