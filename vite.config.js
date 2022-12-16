import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // AutoImport({
        //   resolvers: [ElementPlusResolver()],
        // }),
        // Components({
        //   resolvers: [ElementPlusResolver()],
        // }),
    ],
    resolve: {
        alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        port: 3380,
        proxy: {
            '^/cockpit':{
                target: 'http://106.55.191.65:80',
                changeOrigin: true
            }
        }
    }
})
