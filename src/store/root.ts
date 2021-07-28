import { CHANGE_CURRENT_PAGE_ROUTE, CHANGE_SIDEBAR_OPEN, GET_HUMAN_CURRENT_PAGE_ROUTE } from "./namespace"
import { MutationTree, GetterTree } from 'vuex'

export interface rootState {
  currentPageRoute: string
  sidebarHasOpen: boolean
}

const state: rootState = {
  currentPageRoute: '',
  sidebarHasOpen: false
}

const mutations: MutationTree<rootState> = {
  [CHANGE_CURRENT_PAGE_ROUTE](state, route: string) {
    state.currentPageRoute = route
  },
  [CHANGE_SIDEBAR_OPEN](state, flag: boolean) {
    state.sidebarHasOpen = flag
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