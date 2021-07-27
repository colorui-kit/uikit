import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import { router,RouterMount } from './router'  
Vue.use(router)

Vue.config.productionTip = false

const app = new App({
  store
}).$mount()

// #ifdef H5
RouterMount(app,router,'#app')
// #endif