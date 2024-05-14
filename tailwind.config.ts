import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '376px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      grey10: '#F6F8FC',
      grey20: '#F1F4F9',
      grey30: '#E2E8F0',
      grey40: '#CBD4E1',
      grey50: '#94A3B8',
      grey60: '#64748B',
      grey70: '#475569',
      grey80: '#27364B',
      grey90: '#1E2A3B',
      grey100: '#0F1A2A',
      grey01: '#FCFCFD',
      blue10: '#D3E1FE',
      blue20: '#7EA5F8',
      blue40: '#4D82F3',
      blue60: '#2563EB',
      blue80: '#0037B3',
      blue100: '#002987',
      red10: '#FFD3DD',
      red60: '#FF345F',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-to-b': 'linear-gradient(180deg, #F1F3F7 19.19%, rgba(252, 252, 253, 0.00) 112.86%)',
        'gradient-floating': 'linear-gradient(180deg, #5F8DF1 0%, #2563EB 122.86%)',
      },
      boxShadow: {
        'soft-shadow': '0px 3px 50px 0px rgba(59, 59, 75, 0.05)',
        'boarding-shadow': '0px 0px 20px 0px rgba(65, 76, 97, 0.07)',
        'box-shadow3': '17px 22px 22.32px 0px rgba(68, 77, 123, 0.05)',
        'card-shadow': ' 17.5px 10px 96.97px 0px rgba(0, 0, 0, 0.15)',
        'frame-shaow': '53px 19px 86.97px 18px rgba(109, 114, 120, 0.18)',
        'rec-shadow': '8.204px 6.381px 40.11px 0px rgba(148, 157, 186, 0.15)',
        'faq-shadow': '8.204px 6.381px 40.11px 0px rgba(148, 157, 186, 0.15);',
        'alarm-shadow':
          '11.634px 6.648px 64.466px 0px rgba(36, 41, 62, 0.00), 11.634px 6.648px 64.466px 0px rgba(36, 41, 62, 0.10);',
        'gray-07': '151.669px 78.968px 171.689px 0px rgba(109, 114, 120, 0.25)',
        'logo-shadow': '11.99px 5.595px 11.67px 0px rgba(53, 54, 66, 0.04);',
      },
      backdropFilter: {
        'blur-lg': 'blur(32px)',
      },
      backgroundColor: {
        'white-alpha-20': 'rgba(255, 255, 255, 0.20)',
        'white-alpha-50': 'rgba(255, 255, 255, 0.50);',
        'gray-07': 'rgba(79, 81, 98, 0.07)',
      },
      // animation library
      keyframes: {
        infiniteScroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        infiniteScrollLeft: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0%)' },
        },
      },
      animation: {
        infiniteScroll: 'infiniteScroll 50s linear infinite',
        infiniteScrollLeft: 'infiniteScrollLeft 50s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config
