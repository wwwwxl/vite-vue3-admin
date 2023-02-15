<template>
	<div>
		<div class="login-tit p-b-20">注册</div>
		<div class="login-form">
			<a-form layout="horizontal" name="registerForm" ref="formRef" :model="formState" :rules="rules" @finish="handleFinish">
				<a-form-item has-feedback name="userName">
					<a-input
						v-model:value="formState.userName"
						placeholder="请输入用户名"
						autocomplete="off"
					>
						<template #prefix>
							<UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
						</template>
					</a-input>
				</a-form-item>

				<a-form-item
					has-feedback
					name="password"
				>
					<a-input-password
						v-model:value="formState.password"
						placeholder="请输入密码"
						autocomplete="off"
					>
						<template #prefix>
							<LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
						</template>
					</a-input-password>
				</a-form-item>

				<a-form-item
					has-feedback
					name="passwordConfirm"
				>
					<a-input-password
						v-model:value="formState.passwordConfirm"
						placeholder="请确认输入密码"
						autocomplete="off"
					>
						<template #prefix>
							<LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
						</template>
					</a-input-password>
				</a-form-item>

				<a-form-item has-feedback name="phone">
					<a-input
						v-model:value="formState.phone"
						placeholder="请输入手机号"
						autocomplete="off"
					>
						<template #prefix>
							<PhoneOutlined style="color: rgba(0, 0, 0, 0.25)" />
						</template>
					</a-input>
				</a-form-item>
				<a-form-item has-feedback name="phoneCode" class="code-flex">
					<a-input
						v-model:value="formState.phoneCode"
						placeholder="请输入验证码"
						autocomplete="off"
					>
						<template #prefix>
							<MailOutlined style="color: rgba(0, 0, 0, 0.25)" />
						</template>
					</a-input>
					<GetCode></GetCode>
				</a-form-item>
				<a-form-item>
					<a-button class="login-btn" type="primary" block html-type="submit">登录</a-button>
				</a-form-item>
				<a-form-item>
					<a-button class="login-btn" block @click="resetForm">重置</a-button>
				</a-form-item>
			</a-form>
		</div>
	</div>
</template>
<script>
import GetCode from '../GetCode/index.vue'
import {
	UserOutlined,
	LockOutlined,
	PhoneOutlined,
	MailOutlined,
} from '@ant-design/icons-vue'
import { defineComponent, ref, reactive } from 'vue'
export default defineComponent({
	components: {
		GetCode,
		UserOutlined,
		LockOutlined,
		PhoneOutlined,
		MailOutlined,
	},
	setup(props, ctx) {
		const formRef = ref();
		const formState = reactive({
			userName: '',
			password: '',
			passwordConfirm: '',
			phone: '',
			phoneCode: '',
		})
		let userName = async (_rule, value) => {
			if (value === '') {
				return Promise.reject('请输入用户名称');
			} else {
				return Promise.resolve();
			}
		};
		let password = async (_rule, value) => {
			if (value === '') {
				return Promise.reject('请输入密码');
			} else {
				if (formState.passwordConfirm !== '') {
					formRef.value.validateFields('passwordConfirm');
				}
				return Promise.resolve();
			}
		};
		let passwordConfirm = async (_rule, value) => {
			if (value === '') {
				return Promise.reject('请确认输入密码');
			} else if (value !== formState.password) {
				return Promise.reject("两次密码输入不一致!");
			} else {
				return Promise.resolve();
			}
		};
		const rules = {
			userName: [{
				required: true,
				validator: userName,
				trigger: 'change',
			}],
			password: [{
				required: true,
				validator: password,
				trigger: 'change',
			}],
			passwordConfirm: [{
				required: true,
				validator: passwordConfirm,
				trigger: 'change',
			}],
			phone: [{
				required: true,
				max: 11,
				message: '请输入11位数字电话号码',
				pattern: /^1[2-9]{2}[0-9]{8}$/,
				trigger: 'change',
			}],
			phoneCode: [{
				required: true,
				message: '请输入验证码',
				trigger: 'change',
			}]
		}

		const handleFinish = () => {
			ctx.emit('phone-login', formState)
		}

		const resetForm = () => {
			formRef.value.resetFields();
		};

		return {
			formRef,
			formState,
			rules,
			handleFinish,
			resetForm
		}
	},
})
</script>
<style scoped lang="scss">
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
}
.code-flex {
	position: relative;
}
</style>
