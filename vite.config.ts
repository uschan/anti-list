import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Determine API KEY based on environment variable to prevent build errors if missing
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  }
})