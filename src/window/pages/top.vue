<template>
  <view>
    <view class="header">
      <view class="flex justify-between align-center navbar-box">
        <view class="flex-sub h100 flex align-center">
          <view class="bg-img" :style="logoImgStyle"></view>
          <view class="text-xxl text-green text-ABC text-shadow">{{ 'color-ui kit' }}</view>
        </view>
        <view class="h100 flex align-center">
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts">

import { topDataInterface, topLogoImgType } from '..'

import { Properties } from 'csstype'


import Vue from 'vue'
export default Vue.extend({
  data(): topDataInterface {
    return {
      logoImg: `/static/color-logo.png`,
      logoImgType: topLogoImgType.static
    }
  },
  computed: {
    logoImgStyle(): Properties {
      const img = this.logoImg
      return {
        width: `82px`,
        height: `80%`,
        backgroundImage: `url(${ img })`,
        backgroundSize: `contain`,
      }
    }
  }
})
</script>

<style scoped>
.header {
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #ebebeb;
  background-color: #fff;
  color: #999;
  font-size: 12px;
}
.navbar-box {
  padding: 0 12px;
  height: 100%;
}
</style>