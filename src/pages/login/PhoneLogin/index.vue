<template>
	<div>
		<div class="login-tit p-b-20">手机登录</div>
		<div class="login-form">
			<a-form :layout="formState.layout" name="phoneLoginForm" :model="formState">
				<a-form-item name="phone" :rules="[{ required: true, message: '请输入手机号!' }]">
					<a-input
						v-model:value="formState.phone"
						placeholder="请输入手机号"
					/>
				</a-form-item>
				<a-form-item class="code-flex" name="phoneCode" :rules="[{ required: true, message: '请输入验证码!' }]">
					<a-input
						v-model:value="formState.phoneCode"
						placeholder="请输入验证码"
					/>
                    <GetCode></GetCode>
				</a-form-item>
				<a-form-item>
					<a-button class="login-btn" type="primary" block @click="loginforPhone"
						>登录</a-button
					>
				</a-form-item>
			</a-form>
		</div>
	</div>
</template>
<script>
import GetCode from '../GetCode/index.vue'
import { defineComponent, ref, reactive } from 'vue'
export default defineComponent({
    components: {
        GetCode
    },
	setup(props, ctx) {
		const formState = reactive({
			layout: 'horizontal',
			phone: '',
			phoneCode: '',
		})
		const loginforPhone = () => {
            let {
                phone,
                phoneCode
            } = formState
			ctx.emit('phone-login',{phone,phoneCode})
		}

		return {
			formState,
			loginforPhone,

		}
	},
})
</script>
<style scoped lang='scss'>
.login-tit {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}
.login-form {
  width: 100%;
  height: auto;
  .ant-input-affix-wrapper,
  .ant-input,
  .login-btn {
    height: 4rem;
  }
  .ant-input{
    border: none;
    border-bottom: 1px solid #d9d9d9;
  }
  .ant-input:focus{
    border: none;
    border-bottom: 1px solid #3db389;
    box-shadow: none;
  }
}
.code-flex{
    position: relative;
}
</style>