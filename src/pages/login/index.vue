<template>
  <div class="f-r login-bg">
    <transition
                enter-active-class="animate__animated animate__tada"
                leave-active-class="animate__animated animate__bounceOutRight">
      <AccountLogin @on-finish="onFinish" @phone-login="phoneLogin" @register="register"></AccountLogin>
    </transition>
  </div>
</template>
<script>
import { defineComponent, onMounted, reactive, ref } from 'vue'
import AccountLogin from './AccountLogin/index.vue'
export default defineComponent({
  components: {
    AccountLogin
  },
  setup(props,ctx) {
    const onFinish = (values)=>{
      console.log('success',values)
    }
    const phoneLogin = ()=>{
      console.log('phoneLogin')
    }
    const register = ()=>{
      console.log('register')
    }
    return {
      onFinish,
      phoneLogin,
      register
    }
  },
})
</script>
<style scoped lang="scss">
.login-bg {
  width: 100%;
  height: 100%;
  background-color: #1890ff;
  justify-content: center;
  align-items: center;
}
</style>