import { defineStore } from 'pinia'
// 使用其他的store
import {authStore} from './auth'
const authStoreItem = authStore()

export const userInfoStore = defineStore('userInfo', {

    state: () => {
      return {
        name: 'wxl',
        age: 18,
        sex: '男',
        province: '广东省',
        city: '惠州市',
        preferences: null
      }
    },
    getters:{
      // 使用其他store的getters数据
      platformName() {
        return authStoreItem.getCurrentPlatform
      },
      areaAddress() {
        return `${this.province},${this.city}`
      },
      // 使用自己的getters
      areaAddressDetail() {
        return this.areaAddress + '惠东县'
      }
    },
    actions:{
      // 同步方法
      changeAge( val ){
        this.age += val;
      },
      // 异步方法
      async fetchUserPreferences() {
        // 使用其他store的actions
        const auth = await authStoreItem.useAuthStore(123)
        if (auth) {
         this.preferences = auth
        } else {
          throw new Error('该用户没有权限')
        }
      },
    },

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

  })