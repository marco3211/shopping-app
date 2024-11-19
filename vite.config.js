import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', 
    port: parseInt(process.env.PORT) || 3000, 
    watch: {
      usePolling: true,
      interval: 100,
      ignored: [
        '**',
        '!/home/ec2-user/project/**'
      ],
    },
    hmr: {
      port: 3001, 
    },
  },
})
