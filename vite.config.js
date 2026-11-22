import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' = every asset path is relative, so the site works at
// https://USERNAME.github.io/REPO-NAME/ without knowing the repo name.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 900,
  },
})
