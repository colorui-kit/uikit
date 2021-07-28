<template>
  <view>
    <view class="header">
      <view class="flex justify-between align-center navbar-box">
        <view class="flex-sub h100 flex align-center">
          <view class="bg-img" :style="logoImgStyle"></view>
          <view class="text-xxl text-green text-ABC text-shadow">{{ 'color-ui kit' }}</view>
          <view class="toggle-wrap" @tap="sidebarOpen = !sidebarOpen">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="64" height="64" class="hamburger" :class="{ 'is-active': !sidebarOpen }">
              <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z">
              </path>
            </svg>
          </view>
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

import { mapMutations, mapState } from 'vuex'

import { CHANGE_SIDEBAR_OPEN } from '@/store/namespace'

import Vue from 'vue'

export default Vue.extend({
  data(): topDataInterface {
    return {
      logoImg: `/static/color-logo.png`,
      logoImgType: topLogoImgType.static
    }
  },
  computed: {
    ...mapState([
      'sidebarHasOpen'
    ]),
    sidebarOpen: {
      get() {
        return this.sidebarHasOpen
      },
      set(newVal) {
        this[CHANGE_SIDEBAR_OPEN](newVal)
      }
    },
    logoImgStyle(): Properties {
      const img = (this as any).logoImg
      return {
        width: `82px`,
        height: `80%`,
        backgroundImage: `url(${ img })`,
        backgroundSize: `contain`,
      }
    }
  },
  methods: {
    ...mapMutations([
      CHANGE_SIDEBAR_OPEN
    ])
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
.toggle-wrap {
  text-align: right;
  cursor: pointer;
  padding: 4px 0;
  padding-right: 12px;
  margin-left: 12px;
}
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  fill: #39b54a;
  transition: all .4s;
}
.hamburger.is-active {
  transform: rotate(180deg);
}
</style>