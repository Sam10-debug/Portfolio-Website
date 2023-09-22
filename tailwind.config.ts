import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        gradient:"#9847FF",
        grad:"#EF34FF",
        grads:"#C23EFF",
        light_gradient:"#CCA5FF",
        dark_gradient:"#0D0716",
        body_colour:"#090411",
        stroke:"#27202F",
        supText:"#E2D2F6",
        crappo:"#12091D",
        gray:"#999999",
        formColor:"#24202B",
      },
    },
  },
  plugins: [],
}
export default config
