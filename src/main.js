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

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
