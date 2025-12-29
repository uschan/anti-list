import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    define: {
      // No longer exposing API Key to client side
      // The Backend (server.js) will handle the API_KEY environment variable directly
    }
  }
})