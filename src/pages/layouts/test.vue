<template>
	<div>
    <a-button type="primary" @click="showMsg">打开弹框</a-button>
  </div>
</template>

<script>
import {
	defineComponent, onMounted, getCurrentInstance
} from 'vue'
import {showMsgFun} from '@/utils/message.js'
export default defineComponent({
	setup(props, ctx) {
    const showMsg =()=>{
      showMsgFun("我是show msg内容",(close)=>{
        close('===params===')
      })
    }
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
		return {
      showMsg
    }
	},
})
</script>
<style scoped lang="sass"></style>

<!-- <template>
  <a-button type="primary" @click="showMsg">打开弹框</a-button>
  <Message :msg="msgRef" v-if="isShow" @close-btn="closeBtn"></Message>
  <div></div>
</template>

<script>
import { ref } from "vue";
import Message from "@/components/Message/index.vue";
export default {
  components: {
    Message,
  },
  setup() {
    let msg = "我是标题msg传递";
    let msgRef = ref(msg);
    let isShow = ref(true);
    function closeBtn() {
      isShow.value = false;
    }
    const showMsg = ()=>{
        isShow.value = true;
    }
    return {
      msgRef,
      isShow,
      closeBtn,
      showMsg
    };
  },
};
</script> -->
