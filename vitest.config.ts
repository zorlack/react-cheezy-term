// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,        // optional
    environment: 'jsdom', // for React DOM testing
    setupFiles: './vitest.setup.ts', // if you need it
  },
});
