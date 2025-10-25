import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    // Otimizações para produção
    minify: 'terser',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor chunks para melhor cache
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          icons: ['lucide-react']
        }
      }
    },
    // Configurações de compressão
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Limite de chunk warning
    chunkSizeWarningLimit: 1000
  },
  // Otimizações de desenvolvimento
  server: {
    port: 5173,
    host: true
  },
  // Preview server config
  preview: {
    port: 4173,
    host: true
  },
  // Configurações de assets
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif']
})