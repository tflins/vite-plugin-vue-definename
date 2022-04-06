import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'

import defineName from './src'

export default defineConfig({
  root: resolve(__dirname, './test'),
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vite-plugin-vue-definename',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vite', '@vue/compiler-sfc'],
    }
  },
  plugins: [dts(), defineName(), vue()],
})
