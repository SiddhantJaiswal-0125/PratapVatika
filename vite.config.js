import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    allowedHosts: ["1fe4-2a09-bac5-3b54-1a46-00-29e-b6.ngrok-free.app", "0.0.0.0"]
  }
})
