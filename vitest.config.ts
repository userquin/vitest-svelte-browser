import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [
    svelte({ hot: !process.env.VITEST }),
  ],
  test: {
    globals: true,
    browser: {
      enabled: true,
      enableUI: true,
      headless: false,
      name: 'chrome',
      provider: process.env.BROWSER_PROVIDER || 'none',
    },
  },
})
