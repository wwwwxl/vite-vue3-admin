<template>
	<div>
		<div class="login-tit p-b-20">登录</div>
		<div class="login-form">
			<a-form
				:model="formState"
				name="loginForm"
				:label-col="{ span: formCol.labelCol }"
				:wrapper-col="{ span: formCol.wrapperCol }"
				autocomplete="off"
				@finish="onFinish"
			>
				<a-form-item
					label=""
					name="username"
					:rules="[{ required: true, message: '请输入用户名称!' }]"
				>
					<a-input
						v-model:value="formState.username"
						placeholder="请输入用户名称"
					>
						<template #prefix>
							<UserOutlined style="color: rgba(0, 0, 0, 0.25)" />
						</template>
					</a-input>
				</a-form-item>

				<a-form-item
					label=""
					name="password"
					:rules="[{ required: true, message: '请输入密码!' }]"
				>
					<a-input-password
						v-model:value="formState.password"
						autocomplete="off"
						placeholder="请输入密码"
					>
						<template #prefix>
							<LockOutlined style="color: rgba(0, 0, 0, 0.25)" />
						</template>
					</a-input-password>
				</a-form-item>

				<a-form-item
					label=""
					name="identify"
					:wrapper-col="{ span: formCol.wrapperCol }"
					:rules="[{ required: true, message: '请输入验证码!' }]"
				>
					<a-row type="flex">
						<a-col flex="200px">
							<a-input
								v-model:value="formState.identify"
								placeholder="验证码"
							/>
						</a-col>
						<a-col flex="auto">
							<span @click="refreshCode" style="cursor: pointer">
								<Identify
									:identifyCode="identifyCode"
									:contentHeight="40"
								></Identify>
							</span>
						</a-col>
					</a-row>
				</a-form-item>

				<a-form-item
					name="remember"
					:wrapper-col="{
						offset: formCol.labelCol,
						span: formCol.wrapperCol,
					}"
				>
					<a-checkbox v-model:checked="formState.remember"
						>记住我</a-checkbox
					>
					<span class="forget-pass"><a href="#">忘记密码？</a></span>
				</a-form-item>

				<a-form-item
					:wrapper-col="{
						offset: formCol.labelCol,
						span: formCol.wrapperCol,
					}"
				>
					<a-button
						type="primary"
						block
						class="login-btn"
						html-type="submit"
						>登录</a-button
					>
				</a-form-item>
			</a-form>
		</div>
	</div>
</template>

<script>
import { ref, reactive, onMounted, defineComponent } from 'vue'
import Identify from '@/components/Identify/index.vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
export default defineComponent({
	components: {
		Identify,
		UserOutlined,
		LockOutlined,
	},
	setup(props, ctx) {
		const formCol = reactive({
			labelCol: 0,
			wrapperCol: 24,
		})

		const formState = reactive({
			username: '',
			password: '',
			identify: '',
			remember: true,
		})

		// 图片验证码
		let identifyCode = ref('')
		// 验证码规则
		const identifyCodes = '3456789ABCDEFGHGKMNPQRSTUVWXY'
		// 切换验证码
		const refreshCode = () => {
			identifyCode.value = ''
			makeCode(identifyCodes, 4)
		}
		// 生成随机验证码
		const makeCode = (o, l) => {
			for (let i = 0; i < l; i++) {
				identifyCode.value +=
					identifyCodes[
						Math.floor(
							Math.random() * (identifyCodes.length - 0) + 0
						)
					]
			}
		}

		const onFinish = (values) => {
			// console.log('Success:', values)
			ctx.emit('on-finish', values)
		}

		onMounted(() => {
			makeCode(identifyCodes, 4)
		})

		return {
			formCol,
			formState,
			identifyCode,
			refreshCode,
			onFinish,
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
.forget-pass {
	position: absolute;
	right: 0rem;
}
</style>
