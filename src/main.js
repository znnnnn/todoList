import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

import './assets/styles/global.css'
import createRouter from './router/index'
import createStore from './store/index'

// const root = document.createElement('div')
// document.body.appendChild(root)

// 创建router、store
const router = createRouter()
const store = createStore()

store.registerModule('c', {
  state: {
    text: 3
  }
})

store.unregisterModule('c')

// // 当getter返回的值有变化，返回回调函数
// store.watch((state) => state.count + 1)

// // 当mutation调用时，则返回回调函数
// store.subscribe((mutation, state) => {
//   // mutation的名称
//   console.log(mutation.type)
//   // mutation的值
//   console.log(mutation.payload)
// })

// // 当action调用时，返回回调函数
// store.subscribeAction((action, state) => {
//   console.log(action.type)
//   console.log(action.payload)
// })

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
