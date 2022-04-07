import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
import vue from '@vitejs/plugin-vue'

import defineName from './src'

const isBuild = process.env.NODE_ENV === 'production'

const buildConfig = {
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vite-plugin-vue-definename',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vite', '@vue/compiler-sfc']
    }
  },
  plugins: [dts()]
}

const devConfig = {
  root: resolve(__dirname, './test'),
  plugins: [defineName(), vue()]
}

export default defineConfig({
  ...(isBuild ? buildConfig : devConfig)
})
