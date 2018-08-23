import Vuex from 'vuex'

import defaultState from './state/index'
import mutations from './mutations/index'
import getters from './getters/index'

export default () => {
  return new Vuex.Store({
    state: defaultState,
    mutations,
    getters
  })
}
