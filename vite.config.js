import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'  // vue文件编译
import vueJsx from '@vitejs/plugin-vue-jsx' // 使用Jsx
import { viteMockServe } from 'vite-plugin-mock' // mock

import { resolve } from 'path' // 使用import导入解决错误

// antdesign按需引入(vite)
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue
    vue(),
    vueJsx({
      // 默认只对扩展名为 .jsx/.tsx 进行babel解析
      // 需要需要它解析.vue扩展名下面的jsx
      // include: /\.[jt]sx/
      // include: /\.[jt]sx|vue/
      // "include": ["src/**/*.vue", "src/**/*.tsx", "src/**/*.jsx", "src/**/*.ts", "src/**/*.js"]
      "include": ["src/**/*.js"]
    }),
    viteMockServe({}),
    // antdesign
    Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: 'less', // 一定要开启这个配置项
          })
        ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: { // 在这里自定义主题色等样式，可不填，不填写，ant-design-vue主题为默认颜色.
          'primary-color': '#1da57a',
          'link-color': '#1da57a',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true,// 必填，不填报错
      },
    },
  },
  resolve: {
      alias: [//配置别名
          { find: '@', replacement: resolve(__dirname, 'src') },
          { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
          { find: '@c', replacement: resolve(__dirname, 'src/components') },
          { find: '@p', replacement: resolve(__dirname, 'src/pages') }
      ],
      // 情景导出 package.json 配置中的exports字段
      conditions: [],
      // 导入时想要省略的扩展名列表
      // 不建议使用 .vue 影响IDE和类型支持
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  //本地运行配置，以及反向代理配置
  server: {
    host: "localhost",
    https: false,//是否启用 http 2
    cors: true,//为开发服务器配置 CORS , 默认启用并允许任何源
    open: true,//服务启动时自动在浏览器中打开应用
    port: "9000",
    strictPort: false, //设为true时端口被占用则直接退出，不会尝试下一个可用端口
    force: true,//是否强制依赖预构建
    hmr: false,//禁用或配置 HMR 连接
    // 传递给 chockidar 的文件系统监视器选项
    watch: {
        ignored: ["!**/node_modules/your-package-name/**"]
    },
    // 反向代理配置
    proxy: {
        '/api': {
            target: "https://xxxx.com/",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, '')
        }
    }
  },
})
