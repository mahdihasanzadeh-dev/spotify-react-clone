import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { splitVendorChunkPlugin } from 'vite'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin()
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@data': path.resolve(__dirname, './src/data'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@redux': path.resolve(__dirname, './src/redux'),
      '@common': path.resolve(__dirname, './src/common'),
    },
  },
  publicDir: 'public',
  base:'./'
})
