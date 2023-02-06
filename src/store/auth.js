import { defineStore } from 'pinia'

export const authStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      currentPlatform: 'admin-web',
      token: 'xfdfdsjkdsj',
      munuList: [
        { id: 1, name: 'getUserInfo' }
      ],
      userList: [
        { id: 1, name: 'May' }, 
        { id: 2, name: 'Block' },
        { id: 3, name: 'www' }
      ]
    }
  },
  // getter 本质上是一个 computed ，无法向它传递任何参数。但是，我们可以让它返回一个函数以接受参数：
  getters: {
    getCurrentPlatform () {
      return `当前平台${this.currentPlatform}`
    },
    // 注意：如果这样使用，getter 不会缓存，它只会当作一个普通函数使用。一般不推荐这种用法，因为在组件中定义一个函数，可以实现同样的功能。
    getUserById: (state) => {
      return (userId) => state.userList.find((user) => user.id === userId)
    }
  },
  actions: {
    // 权限store
    useAuthStore (userId) {
      return new Promise((reslove,reject)=>{
        setTimeout(() => {
          if(userId){
            reslove(this.token)
          }else {
            reslove('该用户不存在')
          }
        }, 1000)
      })
    }
  }
})