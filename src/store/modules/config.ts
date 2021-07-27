/**
 * 配置
 */

import { MutationTree, ActionTree } from 'vuex'

interface configState {
  codeThemeDark: boolean
}

const state: configState = {
  codeThemeDark: false
}

export default {
  state,
  namespace: true
}