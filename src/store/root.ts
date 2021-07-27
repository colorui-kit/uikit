import { CHANGE_CURRENT_PAGE_ROUTE, GET_HUMAN_CURRENT_PAGE_ROUTE } from "./namespace"
import { MutationTree, GetterTree } from 'vuex'

export interface rootState {
  currentPageRoute: string
}

const state: rootState = {
  currentPageRoute: '',
}

const mutations: MutationTree<rootState> = {
  [CHANGE_CURRENT_PAGE_ROUTE](state, route) {
    state.currentPageRoute = route
  }
}

const getters: GetterTree<rootState, any> = {
  [GET_HUMAN_CURRENT_PAGE_ROUTE](state) {
    const c = state.currentPageRoute
    return c.replace('/pages/', '')
  }
}

export {
  state,
  mutations,
  getters,
}