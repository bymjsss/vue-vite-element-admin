import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { loadEnv } from "vite"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import styleImport from "vite-plugin-style-import"
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const ENV = loadEnv(mode, __dirname)
  const IS_DEV = ENV.VITE_APP_ENV !== 'production'
  return {
    base: './', // 打包路径

    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },

    // 打包配置
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

    // css配置
    css: {
      // css预处理器
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/index.scss";' // 添加公共样式
        }
      }
    },

    // 插件
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      styleImport({
        libs: [
          { // 按需引入ele css 文件
            libraryName: "element-plus",
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: (name) => {
              return `element-plus/lib/theme-chalk/${name}.css`;
            },
            resolveComponent: (name) => {
              return `element-plus/lib/${name}`;
            }
          }
        ]
      })
    ]
  }
})