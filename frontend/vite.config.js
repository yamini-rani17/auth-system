import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'   // ✅ ye missing tha

export default defineConfig({
  plugins: [react(), tailwindcss()],   // ✅ yaha use ho raha hai
})