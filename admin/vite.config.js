export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174
  },
  build: {
    target: 'esnext' // You can use 'es2020' for broader compatibility
  }
});
