# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

# 注意node版本环境
# 0 启动 npm run dev
# 1
删除初始无用代码
设置媒体查询主题色，
响应式根标签字体大小，解除谷歌浏览器最小字体方式
引入元素初始化样式文件@import url('./initBrowse.css');


# 安装使用router
# 安装npm install vue-router --save
# 使用  src新建router文件夹,文件夹下index.js文件
# 内容如下
import { createRouter,createWebHistory} from 'vue-router';
 
const router = createRouter({
    routes: [
        {
            path: '/home',             
                 //路由到的地址(自定义)
            component:()=>import('../components/Home.vue'), 
                 //引入组件，组件Home.vue所在路径
                 //Home.vue是需要路由的vue组件
            name: 'Home'
                 //组件名称
        },
 
    ],
    history: createWebHistory()
})
export default router;
# 在main.js中引用index.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
 
const app = createApp(App)
app.use(router)
app.mount('#app')
 
//此处也是vue3与vue2的区别之处


// 关联git 
git init
git remote add origin https://github.com/wwwwxl/vite-vue3-admin.git
