# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).



# 目标，参考http://boot3.jeecg.com/login?redirect=/dashboard/analysis
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