import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

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
  },
  plugins: [dts()],
})
