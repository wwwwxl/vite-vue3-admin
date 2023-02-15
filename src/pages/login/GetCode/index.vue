<template>
	<span class="get-code p-10" @click="getCode">{{ codeBtnStr }}</span>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
	setup(props, ctx) {
		let codeBtnStr = ref('获取验证码')
		let countDownTime = 60
		let countDownInterval = null
		const getCode = () => {
			if (countDownInterval) {
				return
			}
			countDownInterval = setInterval(() => {
				countDownTime -= 1
				if (countDownTime <= 0) {
					countDownTime = 60
					clearInterval(countDownInterval)
					countDownInterval = null
					codeBtnStr.value = '获取验证码'
					return
				}
				codeBtnStr.value = `${countDownTime}s`
			}, 1000)
		}
		return {
			codeBtnStr,
			getCode,
		}
	},
})
</script>
<style scoped lang="scss">
.get-code {
	position: absolute;
	right: 1.5rem;
	display: inline-block;
	width: auto;
	height: auto;
	color: #1890ff;
	cursor: pointer;
	z-index: 9;
	font-weight: 600;
}
</style>
