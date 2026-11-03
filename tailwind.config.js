/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--c-bg) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        raised: 'rgb(var(--c-raised) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        accent: {
          DEFAULT: '#6366f1',
          soft: '#818cf8',
          deep: '#4f46e5',
        },
        aqua: '#22d3ee',
        lime: '#a3e635',
      },
      fontFamily: {
        sans: ['Inter', 'Vazirmatn', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        fa: ['Vazirmatn', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      maxWidth: {
        content: '76rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(99 102 241 / 0.25), 0 18px 50px -12px rgb(99 102 241 / 0.45)',
        card: '0 20px 45px -30px rgb(2 6 23 / 0.9)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
