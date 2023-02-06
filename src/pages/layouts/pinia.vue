<template>
	<div>首页</div>
	<hr />
	<h3>pinia基础实验使用</h3>
  <div>平台名称：{{ platformName }}</div>
  <div>当前用户：{{ getUserById(3) }}</div>
  <div>姓名：{{ name }}</div>
  <div>年龄：{{ age }}</div>
  <div>性别：{{ sex }}</div>
  <div>地址：{{ areaAddress }}</div>
  <div>详细地址：{{ areaAddressDetail }}</div>
  <hr>
  <div>用户权限：{{ preferences }}</div>
  <a-space>
    <a-button type="primary" @click="changeUserData">改变用户数据</a-button>
    <a-button type="primary" @click="changeAge">改变年龄</a-button>
    <a-button type="primary" @click="resetData">恢复store中的数据</a-button>
  </a-space>
  <hr>
  <a-space>
    <a-button type="primary" @click="getAsyncUserToken">获取用户权限token</a-button>
  </a-space>
</template>

<script>
import {
	defineComponent,
	ref,
	reactive,
	toRefs,
	onBeforeMount,
	onMounted,
	watchEffect,
	computed,
} from 'vue'

import { userInfoStore } from '@/store/index'
import { authStore } from '@/store/auth'
import { storeToRefs } from 'pinia'

export default defineComponent({
	setup(props, ctx) {

    const store = userInfoStore();
    const authInfoStore = authStore()

    // let { name,age,sex } = store; // 不是响应式的
    let { name,age,sex,platformName, areaAddress, areaAddressDetail, preferences } = storeToRefs(store) // 是响应式的

    // 权限数据
    let {getUserById} = storeToRefs(authInfoStore)

    // 改变store中pinia数据方式
    const changeUserData = ()=>{
      // 单改
      // age.value = 30

      // 使用$patch进行批量更新
      store.$patch(state=>{
        state.name='www';
        state.age=18;
        state.sex = '女';
      })
    }

    // 恢复store中pinia的数据
    const resetData = () =>{
      store.$reset()
    }
    
    // 调用store中pinia方法
    const changeAge = ()=>{
      store.changeAge(10);
    }

    // 调用store中pinia异步方法
    const getAsyncUserToken = ()=>{
      store.fetchUserPreferences();
    }

    // 我们可以通过 $subscribe() 方法可以监听 store 状态的变化，类似于 Vuex的 subscribe 方法。
    // 与 watch() 相比，使用$subscribe()的优点是，store 多个状态发生变化之后，回调函数只会执行一次。
    store.$subscribe((mutation, state) => {
      // 每当状态发生变化时，将 state 持久化到本地存储
      console.log('state改变', state)
    })

    // 也可以监听 pinia 实例上所有 store 的变化,看main.js

		return {
      // userInfoStore
      name,
      age,
      sex,
      platformName,
      areaAddress,
      areaAddressDetail,
      preferences,
      // authInfoStore
      getUserById,
      changeUserData,
      resetData,
      changeAge,
      getAsyncUserToken
    }
	},
})
</script>
<style scoped lang="sass"></style>
