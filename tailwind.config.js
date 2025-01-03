import typography from '@tailwindcss/typography'

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, ui-sans-serif, system-ui, -apple-system, Arial, Roboto, sans-serif',
      },
    },
  },
  plugins: [
    typography(),
  ],
}