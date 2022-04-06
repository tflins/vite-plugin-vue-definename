import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vite-plugin-vue-definname',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vite', '@vue/compiler-sfc'],
    }
  }
})
