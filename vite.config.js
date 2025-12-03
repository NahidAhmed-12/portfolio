import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true,   // এই লাইনটাই মোবাইলে অ্যাক্সেস করতে দেবে
    port: 5173
  }
})
