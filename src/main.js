// import { watch, createApp } from 'vue'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js';

import animated from 'animate.css'

import axios from 'axios';
import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
const store = createPinia()
store.use(piniaPluginPersist)


// watch(
//     store.state,
//     (state) => {
//       // 监听所有pinia
//       console.log('main.js',state)
//     },
//     { deep: true }
// )

const app = createApp(App)
app.config.globalProperties.$axios=axios;  //配置axios的全局引用
app.use(router)
app.use(store)
app.mount('#app')