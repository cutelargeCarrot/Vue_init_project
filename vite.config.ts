import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import * as path from 'path';
// 解决 ElLoading、ElMessage、ElNotification、ElMessageBox样式丢失的问题
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        vue(),
        ElementPlus({
        //     importStyle: 'css',
        //     useSource: true
          }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
          Components({
            resolvers: [ElementPlusResolver()],
        }),
          
    
    ],
    server: {
        port: 5173, //启动端口
        hmr: {
            host: 'localhost',
            port: 5173
        },
        // 设置 https 代理
        proxy: {
            '/api': {
                target: 'your https address',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, '')
            }
        }
    }
});

