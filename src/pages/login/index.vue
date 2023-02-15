<template>
	<div class="container">
		<div class="bg-img">
			<div class="left-top"></div>
			<img class="right" src="@/assets/login.svg" />
		</div>
		<div class="f-r login-bg">
			<div class="login-container p-30">
				<transition
					:appear="true"
					mode="out-in"
					:duration="{ enter: 500, leave: 800 }"
					enter-active-class="animate__animated animate__bounceInRight"
					leave-active-class="animate__animated animate__bounceOutLeft"
				>
					<component :is="currentFormName"></component>
				</transition>

					<!-- 
						注释tag="ul"是父元素标签名,
						没有将没有父节点会把子元素标签名当成是父节点包裹渲染
						transition-group 子元素必须有唯一key才能渲染, 
						transition是子组件元素只有一个，多个也可，
						但是要注意persisted - boolean。如果是 true，表示这是一个不真实插入/删除元素的转换和v-if类似
						意思是增加了persisted需注意子元素v-if和v-show使用
					 -->

					<transition
						:appear="true"
						:duration="{ enter: 500, leave: 300,delay: 3000 }"
						enter-active-class="animate__animated animate__fadeInUpBig"
						leave-active-class="animate__animated animate__fadeOutDownBig"
					>
					<div class="login-or-register f-r">
						<a-button
							v-for="(item, index) in formListStrName" :key="item.id"
							:class="index>=1?'m-l-5':''"
							@click="TransFormButton(item)"
							>{{ item.name }}</a-button
						>
					</div>
						
					</transition>
			</div>
		</div>
	</div>
</template>
<script>
import {
	defineComponent,
	getCurrentInstance,
	ref,
	reactive,
	computed,
} from 'vue'
// import { useRouter } from "vue-router"
import AccountLogin from './AccountLogin/index.vue'
import PhoneLogin from './PhoneLogin/index.vue'
import RegisterForm from './RegisterForm/index.vue'
export default defineComponent({
	components: {
		AccountLogin,
		PhoneLogin,
		RegisterForm,
	},
	setup(props, ctx) {
		const operaList = [
			{
				id: 1,
				name: '账户登录',
				componentName: 'AccountLogin',
			},
			{
				id: 2,
				name: '手机号登录',
				componentName: 'PhoneLogin',
			},
			{
				id: 3,
				name: '注册',
				componentName: 'RegisterForm',
			},
		]
		const currentFormName = ref('AccountLogin')
		const formListStrName = computed(() => {
			return operaList.filter(
				(item) => item.componentName !== currentFormName.value
			)
		})

		// const router = useRouter()
		const { proxy } = getCurrentInstance()
		const onFinish = (values) => {
			console.log('success', values)
			// router.push('/home')
			// proxy.$router.push('/home')
			proxy.$router.push('/test')
		}

		const TransFormButton = (item) => {
			currentFormName.value = item.componentName
		}

		return {
			currentFormName,
			formListStrName,
			onFinish,
			TransFormButton,
		}
	},
})
</script>
<style scoped lang="scss">
.container {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.bg-img {
	position: absolute;
	width: 100%;
	height: 100%;
	background-image: linear-gradient(to bottom right, #1296db, #1890ff);
	opacity: 0.95;
	.left-top {
		position: absolute;
		top: 10rem;
		left: 8rem;
		display: block;
		width: 20rem;
		height: 10rem;
		opacity: 0.75;
		transform: rotateY(-180deg);
		background-image: url('@/image/login-bg.png');
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	.right {
		position: absolute;
		top: 1.8rem;
		right: 0rem;
		display: block;
		width: 38rem;
		height: 93rem;
	}
}
.login-bg {
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	.login-container {
		position: relative;
		z-index: 99;
		width: 48rem;
		height: auto;
		margin: 0 auto;
		background-color: #fff;
		border-radius: 0.2rem;
	}
}
.login-or-register {
	justify-content: flex-end;
}
</style>
