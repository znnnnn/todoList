import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

Vue.use(VueRouter)

import './assets/styles/global.css'
import createRouter from './router/index'

// const root = document.createElement('div')
// document.body.appendChild(root)

const router = createRouter()

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
