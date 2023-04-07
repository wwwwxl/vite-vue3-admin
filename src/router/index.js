import { createRouter,createWebHistory} from 'vue-router';


// 组件引用
// const Login =()=> import('@/pages/login/index.vue')
const Pinia =()=> import('@/pages/layouts/pinia.vue')
const Test =()=> import('@/pages/layouts/test.vue')
const Home =()=> import('@/pages/layouts/index.vue')

import Login from "@/pages/login/index.vue"// 避免首屏加载缓慢

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
        {
            path: '/pinia',
            component:Pinia,
            name: 'Pinia'
        },
        {
            path: '/test',
            component:Test,
            name: 'Test'
        },
        {
            path: '/home',
            component:Home,
            name: 'Home'
        },

    ],
    history: createWebHistory()
})
export default router;