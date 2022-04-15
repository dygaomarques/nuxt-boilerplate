module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // https://tailwindcss.com/docs/typography-plugin
    require('@tailwindcss/typography'),
    // https://daisyui.com/
    require('daisyui'),
  ],
}
