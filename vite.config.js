import { defineConfig } from 'vite'

// Relative base so assets work on GitHub Pages (project or user site) without hardcoding the repo name.
export default defineConfig({
  base: './',
  publicDir: 'public',
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
  },
})