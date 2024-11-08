import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

const env = dotenv.config()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, 
    port: parseInt(env.PORT) || 3000, 
    watch: {
      usePolling: true, 
      ignored: ['**/node_modules/**', '**/dist/**', '/run/udev/**'],
    },
    hmr: {
      host: env.DROPLET_IP, 
      port: parseInt(env.PORT) || 3000, 
    },
  },
})
