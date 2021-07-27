<template>
	<view>
		<view class="flex padding justify-between">
			<iphone>
				<iframe id="iframe" class="iframe" :src="COLORUI_URL" frameborder="0"></iframe>
			</iphone>
			<view>
				<view class="flex justify-between bg-black" style="border-top-left-radius: 12px;border-top-right-radius: 12px;padding: 0 12px;">
					<rainbox @action="handleTapRainbox" />
					<view class="text-gray text-sm text-right">
						<text>{{ currentPath }}</text>
					</view>
				</view>
				<MonacoEditor class="editor" :theme="codeTheme" v-model="code" language="html" />
				<view class="margin-top-lg">
					<button class="cu-btn shadow round bg-blue padding-left-lg padding-right-lg margin-right-sm" @tap="handleCopyCode">一键复制代码</button>
					<button class="cu-btn shadow round bg-green padding-left-lg padding-right-lg" @tap="codeThemeDark = !codeThemeDark">{{ !codeThemeDark ? `暗色` : `亮色` }}</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import iphone from '@/components/iphone/iphone.vue'
import rainbox from '@/components/rainbox/rainbox.vue'
import MonacoEditor from 'vue-monaco'
import { getPageSourceCodeURL, getSourceCode } from './utils'
import { COLORUI_URL } from '@/config'

export default {
	components: {
		iphone,
		MonacoEditor,
		rainbox,
	},
	data() {
		return {
			code: '',
			currentPath: '/pages/index/index',
			codeThemeDark: true,
			COLORUI_URL,
		}
	},
	computed: {
		codeTheme() {
			return this.codeThemeDark ? `vs-dark` : `vs`
		}
	},
	mounted() {
		this.$nextTick(()=> {
			try {
				const _self = this
				window.addEventListener('message', function (wrap) {
					try {
						const { data } = wrap
						if (!data) return
						if (typeof data != 'string') return
						const resp = JSON.parse(data)
						const { path, typeID } = resp
						if (!typeID || typeID != 'uni-app') return
						_self.currentPath = path
						const source = getPageSourceCodeURL(path)
						uni.showLoading({
							title: '加载中'
						})
						getSourceCode(source).then(res=> {
							_self.code = res
							uni.hideLoading()
						}).catch(function(reason) {
							console.log('catch:', reason)
							uni.hideLoading()
						})
					} catch (error) {
						console.error("消息错误: ", error)
					}
				})
			} catch (error) {
				console.error("注册失败: ", error)
			}
		})
	},
	methods: {
		handleTapRainbox(action) {
			if (action == 'close' || action == 'minimize') {
				// TODO impl code hide/show
			}
		},
		async handleCopyCode() {
			const code = this.code
			if (!code) return
			const canCopy = await new Promise(res=> {
				this.$copyText(code).then(e=> {
					res(true)
				}, e=> {
					res(false)
				})
			})
			uni.showToast({
				title: `复制` + (canCopy ? `成功` : `失败`),
				duration: 1000
			});
		}
	}
}
</script>

<style scoped>
.iframe {
	width: 100%;
	height: 100%;
}
.editor {
	width: 600px;
	height: 80vh;
	overflow: hidden;
	box-shadow: 1px solid #333;
	max-height: 520px;
	min-width: 420px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px;
	transition: all .3s;
}
</style>