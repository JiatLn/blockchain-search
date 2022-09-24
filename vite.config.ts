import * as path from 'path'
import { defineConfig, loadEnv } from 'vite'

import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Injection from 'vite-plugin-injection'
import Unocss from 'unocss/vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import { createBlockletPlugin } from 'vite-plugin-blocklet'

// https://vitejs.dev/config/
export default ({ mode }) => {
  // load .env.[mode]
  const envMap = loadEnv(mode, process.cwd(), '')
  return defineConfig({
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      Vue(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: envMap.APP_TITLE,
          },
        },
      }),
      createBlockletPlugin(),
      VueJsx(),
      Unocss(),
      Injection(),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          '@vueuse/core',
        ],
        dts: 'src/auto-import.d.ts',
        dirs: [
          'src/composables/**',
          'src/store/**',
        ],
        vueTemplate: true,
        resolvers: [],
      }),
      Components({
        dts: 'src/components.d.ts',
        resolvers: [],
      }),
    ],
    server: {
      host: '0.0.0.0',
      port: 2022,
    },
    build: {
      // 浏览器兼容性
      target: 'es2015',
      assetsDir: 'assets',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  })
}
