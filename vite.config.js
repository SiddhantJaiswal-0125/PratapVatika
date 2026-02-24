import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    allowedHosts: ["1b7e-2a09-bac1-3680-60-00-29e-93.ngrok-free.app"]
  }
})
