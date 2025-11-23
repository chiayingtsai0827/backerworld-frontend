import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',   // ← 這行決定一切！Render 專用
  plugins: [react()],
  server: {
    port: 3000,
  },
})
