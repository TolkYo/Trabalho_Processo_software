// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080c18',
        bg2: '#0d1225',
        card: '#111827',
        card2: '#0f1629',
        purple: '#7c5af6',
        'purple-light': '#9d7dff',
        green: '#22d06e',
        'green-dark': '#1aaa58',
        white: '#f0f4ff',
        muted: '#8892a4',
        border: 'rgba(124,90,246,0.18)',
        border2: 'rgba(255,255,255,0.06)',
      },
      fontFamily: {
        bebas: ['var(--font-bebas-neue)', 'sans-serif'],
        syne: ['var(--font-syne)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        fadeIn: 'fadeIn 0.35s ease',
        toastIn: 'toastIn 0.3s ease',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        toastIn: {
          from: { opacity: '0', transform: 'translateX(-50%) translateY(16px)' },
          to: { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config