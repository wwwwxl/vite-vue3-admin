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