import Vuex from 'vuex'

import defaultState from './state/index'

export default () => {
  return new Vuex.Store({
    state: defaultState,
    mutations: {
      updateCount(state, num) {
        state.count = num
      }
    }
  })
}
