import Router from 'vue-router'

import Todo from '../view/todo/todo.vue'
import Login from '../view/login/login.vue'

const routes = [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: Todo
  },
  {
    path: '/login/exact',
    component: Login
  }

]

export default () => {
  return new Router({
    routes,
    mode: 'history',
    base: process.env.NODE_ENV === 'production' ? process.env.PROXY_PATH : '',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link'
  })
}
