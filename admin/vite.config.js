import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174
  },
  build: {
    target: 'esnext' // You can use 'es2020' for broader compatibility
  }
});
