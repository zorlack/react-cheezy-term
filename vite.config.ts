import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0,
    lib: {
      entry: path.resolve('src/index.ts'),
      name: 'ReactCheezyTerm',
      fileName: (format) => `react-cheezy-term.${format}.js`,
    },
    rollupOptions: {
      // Externalize dependencies to avoid bundling them
      external: ['react', 'react-dom'],
      output: {
        assetFileNames: 'assets/images/[name].[hash].[ext]',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  }
});
