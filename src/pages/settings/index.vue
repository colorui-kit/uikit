<template>
  <view style="margin: 0 auto; max-width: 32vw;">
    <view class="cu-bar bg-white margin-top">
			<view class="action">
				<text class="cuIcon-title text-green"></text>
				<text>编辑器代码主题</text>
			</view>
      <view class="action">
        <button class="cu-btn shadow round bg-green padding-left-lg padding-right-lg">{{ false ? `暗色` : `亮色` }}</button>
      </view>
		</view>
  </view>
</template>

<script>
export default {

}
</script>

<style>

</style>