import Router from 'vue-router'

import Todo from '../view/todo/todo.vue'
import Login from '../view/login/login.vue'

const routes =  [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    component: Todo
  },
  {
    path: '/login',
    component: Login
  }
]

export default () => {
  return new Router({
    routes,
    mode: 'history',
    base: '/base/'
  })
}