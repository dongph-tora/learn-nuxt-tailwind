/** @type {import('tailwindcss').Config} */
export default {
  cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
  configPath: 'tailwind.config',
  content: [],
  theme: {
    extend: {},
  },
  exposeConfig: {
    level: 2
  },
  plugins: [],
  viewer: true,
}

