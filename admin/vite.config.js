import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 5174 },
  build: {
    target: 'esnext', // Ensures compatibility with modern browsers
    outDir: 'dist',   // Output directory for build files
    rollupOptions: {
      output: {
        manualChunks: undefined, // Let Rollup handle chunk splitting automatically
      },
    },
  },
});
