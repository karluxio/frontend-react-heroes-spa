import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://karluxio.github.io/frontend-react-heroes-spa/',
  plugins: [react()],
})
