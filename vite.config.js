import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        react2: resolve(__dirname, 'latihan-react2/index.html'),
        react4: resolve(__dirname, 'latihan-react4/index.html'),
      },
    },
    outDir: 'public',
  },
});