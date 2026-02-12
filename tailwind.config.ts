import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f8f7f3',
        ink: '#1f1d18',
        muted: '#6a665a'
      },
      boxShadow: {
        soft: '0 10px 25px rgba(20, 20, 20, 0.06)'
      }
    }
  },
  plugins: []
};

export default config;
