import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      name: 'react-cheezy-term',
      entry: ['src/main-lib.ts'],
      fileName: (format, entryName) => `react-cheezy-term-${entryName}.${format}.js`,
      cssFileName: 'react-cheezy-term-style',
    },
  },
})
