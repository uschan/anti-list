import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // The third parameter '' means load all variables, not just those starting with VITE_
  // Fix: Cast process to any to avoid TS error regarding missing cwd() in Process type
  const env = loadEnv(mode, (process as any).cwd(), '')

  return {
    plugins: [react()],
    define: {
      // Map your .env variable (VITE_GEMINI_API_KEY) to the process.env.API_KEY used in the code
      'process.env.API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY || env.API_KEY || '')
    }
  }
})