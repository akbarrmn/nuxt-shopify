import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '1rem',
          lg: '1rem',
          xl: '1rem',
          '2xl': '1rem',
        },
      },
    }
  },
  plugins: []
}
