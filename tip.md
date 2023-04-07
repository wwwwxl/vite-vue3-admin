# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).



# 目标，参考http://boot3.jeecg.com/login?redirect=/dashboard/analysis  https://snowy.xiaonuo.vip/login
# 使用vite+vue3+antdesign 编写一个较为完整简单的管理后台 
# 

#
# 此处是vite创建项目
# webpack项目创建参考文章 https://blog.csdn.net/m0_67403076/article/details/125401294
# npm -v
# node -v
# npm install -g @vue/cli
# webpack: vue create test_vue
# ===============================接下来是配置选项=========================
# 注意node版本环境===16.18.1
# 0 启动 npm run dev
# 1
删除初始无用代码
设置媒体查询主题色，
响应式根标签字体大小，解除谷歌浏览器最小字体方式
引入元素初始化样式文件@import url('./initBrowse.css');


# 文档说明：https://router.vuejs.org/zh/guide/   （npm install vue-router@4）
# 安装使用router
# 安装npm install vue-router --save
# 使用  src新建router文件夹,文件夹下index.js文件
# 内容如 src/router/index.js
import { createRouter,createWebHistory} from 'vue-router';
// 组件引用
const Login =()=> import('@/pages/login/index.vue')
const router = createRouter({
    routes: [
        {
            path: "/",
            redirect: '/login'
        },
        {
            path: '/login',//路由到的地址(自定义)
            component:Login, //引入组件，组件所在路径
            name: 'Login'//组件名称
        },
    ],
    history: createWebHistory()
})
export default router;

# ==============在main.js中引用index.js================== #
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
 
const app = createApp(App)
app.use(router)
app.mount('#app')
 
//此处也是vue3与vue2的区别之处


# 关联git 
git init
git remote add origin https://github.com/wwwwxl/vite-vue3-admin.git
git push --set-upstream origin master

# 安装使用按需引入antdesign  文档地址:https://www.antdv.com/docs/vue/introduce-cn
# npm install ant-design-vue --save
# 插件安装   
# npm i less -D
# npm i unplugin-vue-components -D
# vite.config.js配置
# 按照文档vite按需引入
# 注意事项:
# 如果你使用的 Vite，你可以使用 unplugin-vue-components 来进行按需加载。但是此插件无法处理非组件模块，如 message，这种组件需要手动加载：
# import { message } from 'ant-design-vue';
# import 'ant-design-vue/es/message/style/css'; //vite只能用 ant-design-vue/es 而非 ant-design-vue/lib
# 测试使用
# <a-button type="primary">Primary Button</a-button>
# =============================== #
// =====vite.config.js=======
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default {
  plugins: [
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
};

# 登录表单，前端验证码，安装sass
# npm install node-sass sass-loader style-loader sass-resources-loader --save-dev
# npm install sass --save-dev

# 安装使用动画库
# npm install animate.css --save

# pinia的使用方式
# https://www.pudn.com/news/635253712aaf6043c94e17e5.html
# https://blog.csdn.net/qq_44880095/article/details/128555364?spm=1001.2014.3001.5501
# 1\安装npm install pinia
# 2\main.js引入   import { createPinia } from 'pinia'  app.use(createPinia())
# 3\使用  src根目录新建store/index.js中写入
import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', {
  state: () => {
    return {
      counter: 0,
    }
  },
  getters:{},
  actions:{}
})
# Pinia持久化存储
# 安装 npm i pinia-plugin-persist
# main.js使用
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js';

import animated from 'animate.css'
import { createPinia } from 'pinia'
#
import piniaPluginPersist from 'pinia-plugin-persist'
const store = createPinia()
store.use(piniaPluginPersist)
#

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

# pinia中store缓存函数加入
// 开启数据缓存,数据默认存在 sessionStorage 里，并且会以 store 的 id 作为 key。
    persist: {
      enabled: true, // 开启缓存
      // 缓存名称和缓存方式
      // 默认所有 state 都会进行缓存，你能够通过 paths 指定要长久化的字段，其余的则不会进行长久化。
      strategies: [
        // {
        //   key: 'my_user',
        //   storage: localStorage,
        // },
        {
          key: 'my_user',
          storage: localStorage,
          paths: ['name', 'age']
        }
      ]
    }

# 安装使用jsx和mock
# npm install vite-plugin-mock mockjs -D
# npm i @vitejs/plugin-vue-jsx -s
# npm i @vitejs/plugin-vue-jsx@1.3.10 -D
# vite.config.js配置如下
plugins: [
    // vue
    vue(),
    vueJsx({
      // 默认只对扩展名为 .jsx/.tsx 进行babel解析
      // 需要需要它解析.vue扩展名下面的jsx
      // include: /\.[jt]sx/
      // include: /\.[jt]sx|vue/
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
  # 在项目根目录下面创建目录 mock，创建文件 mock/index.js：
  # https://blog.csdn.net/liguoyuan819/article/details/124768562
  # 如果mock文件夹建在src文件目录下，需要修改tsconfig.json文件  
  # "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue","src/mock/**/*.ts"],
  import Mockjs from 'mockjs'

const mockData = [
  {
    url: '/api/films',
    method: 'get',
    response: ({ query }) => {
      const data = Mockjs.mock({
        'films|10': [
          {
            "filmId|+1": 1,
            'name': '@cname'
          }
        ]
      })
      return {
        code: 0,
        msg: 'ok',
        data
      }
    }
  }
]

export default mockData

# 安装使用npm install axios --save
# 在main.js全局引入axios
# import axios from 'axios';
# Vue.prototype.$axios =axios; // vue2
# app.config.globalProperties.$axios=axios;  //vue3 配置axios的全局引用
# 调用
// 方法一 start
    // const currentInstance = getCurrentInstance()
    // const { $axios, $message, $route } = currentInstance.appContext.config.globalProperties
    // 方法二 start
    const { proxy } = getCurrentInstance()

    onMounted(()=>{
      proxy.$axios.get('/api/films').then((res)=>{
        console.log('res', res)
      })
    })

# vue3使用jsx  (jsx in js)在js中使用jsx语法
# https://blog.bingxs.com/vue3zazjsxbj.html
# vite
# 安装
npm install @vitejs/plugin-vue-jsx -D
# 配置 Vite vite.config.js
import vueJsx from '@vitejs/plugin-vue-jsx' // Vue-jsx插件
plugins: [
    vue(),
    // 配置Vue-jsx插件
    vueJsx({
      "include": ["src/**/*.js"]
    })
  ]

## vue cli
# 安装插件（ Vue 3 Babel JSX 插件）
# npm install @vue/babel-plugin-jsx -D
# 配置 Babel babel.config.json
{
  "plugins": ["@vue/babel-plugin-jsx"]
}

# css in js （在js中使用css）
# 安装 npm install @styils/vue
# 使用
import {styled} from '@styils/vue' // css in js
const DivModal = styled('div',{
position: 'fixed',
  width: '100%',
  height: '100%',
  left: '0',
  top: '0',
  zIndex: '999',
  background: 'rgba(0, 0, 0, 0.5)',
})

# 渲染该标签 DivModal

# npm i @vitejs/plugin-vue-jsx -s

# vite-plugin-optimize-persist

# 第一个页面采用直接导入加载，加快加载速度。
# 编译之后加载缓慢，发现是ant-design-vue加载缓慢或者解析过长。
# vite按需引入，不能引入message等方法组件
# 采用全局引入或者手动按需引入或者采用babel按需引入
# 也有可能浏览器原因，换个浏览器试一试