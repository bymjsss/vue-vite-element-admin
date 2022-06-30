import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { UserConfigExport, ConfigEnv, loadEnv } from "vite";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
const resolve = str => path.resolve(__dirname, str)

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const ENV = loadEnv(mode, __dirname)
  const IS_DEV = ENV.VITE_APP_ENV !== 'production'
  return {
    base: './',
    resolve: {
      alias: {
        '@': resolve('src')
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    build: {
      // 打包构建输出路径
	    outDir: 'dist',
      // 生成静态资源的存放路径
      assetsDir: 'static',
      // 构建后是否生成 source map 文件
      sourcemap: IS_DEV,
      // chunk 大小警告的限制
      chunkSizeWarningLimit: 700,
      // 生产环境移除 console
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: !IS_DEV,
          drop_debugger: !IS_DEV
        }
      },
      rollupOptions: {
        output: {
          // https://rollupjs.org/guide/en/#outputmanualchunks
          manualChunks: {
            vlib: ['vue', 'vue-router', 'pinia']
          }
        }
      }
    },
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ]
  }
})