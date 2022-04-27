import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'saifu-ui',
      fileName: (format) => `saifu-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react(), dts()],
});
