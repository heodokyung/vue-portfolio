import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 이 프로젝트는 vite.config.ts 하나만 사용합니다.
// vite.config.js / jsconfig.json / src/main.js가 함께 있으면 Vite가 잘못된 설정을 읽을 수 있습니다.
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    devSourcemap: true,
  },
  server: {
    host: '0.0.0.0',
    port: 8000,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 8000,
    strictPort: true,
  },
  build: {
    sourcemap: false,
  },
})
