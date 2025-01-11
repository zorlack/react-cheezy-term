import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve('src/index.ts'),
      name: 'ReactCheezyTerm',
      fileName: (format) => `react-cheezy-term.${format}.js`,
    },
    rollupOptions: {
      // Externalize dependencies to avoid bundling them
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  }
});
