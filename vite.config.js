import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/backerworld-frontend/',   // ← 這行決定一切！
  plugins: [react()],
  server: {
    port: 3000,
  },
})
