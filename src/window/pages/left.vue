<template>
  <view>
    <view>
      <view @tap="handleClickMenuItem(item)" :class="item['itemClass']" class="flex justify-between align-center text-lg padding-left-lg padding-right-lg menu-item" v-for="(item, index) in menuMap" :key="index">
        <view class="flex align-center">
          <view class="margin-right-sm"><text class="lg" :class="[ `cuIcon-${ item['icon'] }` ]"></text></view>
          <view class="lg">{{ item['title'] }}</view>
        </view>
        <view><text class="lg" :class="[ `cuIcon-${ !!item['children'] ? 'unfold' : 'right' }`  ]"></text></view>
      </view>
    </view>
  </view>
</template>

<script>
import { mapGetters } from 'vuex'
import menu from '../menu'
import { GET_HUMAN_CURRENT_PAGE_ROUTE } from '@/store/namespace'
export default {
  data() {
    return {
      menu,
    }
  },
  computed: { 
    ...mapGetters([
      GET_HUMAN_CURRENT_PAGE_ROUTE
    ]),
    menuMap() {
      const current = this[GET_HUMAN_CURRENT_PAGE_ROUTE]
      const menu = this.menu
      return menu.map(item=> {
        item['itemClass'] = current == item.router ? `active` : ``
        item['iconClass'] = `cuIcon-${ item.icon }`
        item['rightClass'] = [ `cuIcon-${ !!item['children'] ? 'unfold' : 'right' }` ]
        return item
      })
    }
  },
  methods: {
    handleClickMenuItem(item) {
      // if (!!item.children) return
      const router = `/pages/${ item.router }`
      uni.navigateTo({
         url: router,
         success(res) {
           console.log("成功", res)
         },
         fail(res) {
           console.log("失败", res)
         }
      });
    }
  }
}
</script>

<style scoped>
.menu-item {
  height: 56px;
  margin: 9px 0;
  cursor: pointer;
  transform: translateX(-10px);
  color: #f1f1f1;
  transition: all .3s;
}
.menu-item:hover {
  outline: none;
  box-shadow: var(--ShadowSize) rgba(26,26,26,0.2);
  border-radius: 12px;
  transform: translateX(20px);
  background-color: rgba(254, 253, 253, .5);
  color: #fff;
}
.menu-item.active {
  outline: none;
  box-shadow: var(--ShadowSize) rgba(26,26,26,0.2);
  border-radius: 12px;
  transform: translateX(20px);
  background-color: rgb(255, 255, 255);
  color: #333;
}
</style>