import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        lab: {
          bg: '#05070d',
          panel: '#101521',
          line: '#263042',
          cyan: '#22f5d1',
          violet: '#8d6cff',
          lime: '#b9ff66'
        }
      },
      boxShadow: {
        glow: '0 0 34px rgba(34, 245, 209, 0.22)',
        violet: '0 0 42px rgba(141, 108, 255, 0.26)'
      }
    }
  }
}
