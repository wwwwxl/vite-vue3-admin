// alert-message.vue
<template>
  <div class="body-box">
    <div class="msg-box">
      <div class="title">{{ titleRef }}</div>
      <div class="content">{{ msg }}</div>
      <div class="btn-box">
        <a-button type="primary" @click.stop="closeBtn">关闭</a-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Button as AButton} from "ant-design-vue";
import { ref, getCurrentInstance } from "vue";
export default {
  props: {
    msg: {
      type: String,
      default: function () {
        return "";
      },
    },
  },
  components: {
    AButton
  },
  setup(props, ctx) {
    console.log('===props, ctx===', props, ctx)
    let title = "标题";
    const titleRef = ref(title);
    let content = "弹框内容";
    const contentRef = ref(content);

    let instance = getCurrentInstance();
    function closeBtn() {
      instance.proxy.$emit("close-btn");
    }
    return {
      titleRef,
      contentRef,
      closeBtn,
    };
  },
};
</script>
<style lang="scss" scoped>
.body-box {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
}
.msg-box {
  position: relative;
  top: 260px;
  width: 400px;
  height: auto;
  padding: 30px;
  margin: 0 auto;
  border-radius: 10px;
  border: 2px solid gray;
  background: #fff;
  z-index: 999999999;
  .title {
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .content {
    width: 100%;
    height: 100%;
    padding-top: 15px;
  }
  .btn-box{
    width: auto;
    height: auto;
  }
}
</style>