import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'The Anti-List System | 80条不为清单',
        short_name: 'Anti-List',
        description: '基于段永平“不为清单”哲学构建的 AI 辅助决策系统。',
        theme_color: '#020204',
        background_color: '#020204',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'https://pic.wildsalt.me/storage/img/logo/duan-png-1767328147666-6305.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://pic.wildsalt.me/storage/img/logo/duan-png-1767328147666-6305.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'https://pic.wildsalt.me/storage/img/logo/duan-png-1767328147666-6305.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  define: {
    // Determine API KEY based on environment variable to prevent build errors if missing
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || '')
  }
})