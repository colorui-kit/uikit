import Vue from 'vue'
import vuex from 'vuex'
import { state, mutations, getters } from './root'
import persistedstate from 'vuex-persistedstate'

Vue.use(vuex)

export default new vuex.Store({
  state,
  mutations,
  getters,
  plugins: [
    // persistedstate()
  ]
})