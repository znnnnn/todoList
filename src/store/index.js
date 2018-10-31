import Vuex from 'vuex'

import defaultState from './state/index'
import mutations from './mutations/index'
import getters from './getters/index'
import actions from './actions/index'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions
    // modules: {
    //   a: {
    //     namespaced: true,
    //     state: {
    //       text: 1
    //     },
    //     mutations: {
    //       updateText(state, text) {
    //         console.log('a.state', state)
    //         state.text = text
    //       }
    //     },
    //     getters: {
    //       // getters为全局getter方法、rootState为全局的State
    //       textPlus(state, getters, rootState) {
    //         return state.text + rootState.b.text
    //       }
    //     },
    //     actions: {
    //       add({ state, commit, rootState }) {
    //         // 此处commit的updateText会默认在当前模块下查找
    //         // 如果需要在全局范围内查找，则需要增加第三个参数 { root: true}
    //         commit('updateCount', { num: 56789 }, { root: true })
    //       }
    //     }
    //   },
    //   b: {
    //     namespaced: true,
    //     state: {
    //       text: 2
    //     },
    //     actions: {
    //       testAction({ commit }) {
    //         commit('a/updateText', 'test text', { root: true })
    //       }
    //     }
    //   }
    // }
  })

  if (module.hot) {
    module.hot.accept([
      './state/index.js',
      './mutations/index.js',
      './getters/index.js',
      './actions/index.js'
    ], () => {
      const newState = require('./state/index.js').default
      const newMutations = require('./mutations/index.js').default
      const newGetters = require('./getters/index.js').default
      const newActions = require('./actions/index.js').default

      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        actions: newActions,
        getters: newGetters
      })
    })
  }

  return store
}
