import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // Add this line for proper relative path handling
  build: {
    outDir: 'dist',  // Ensures build files go to 'dist'
  },
})