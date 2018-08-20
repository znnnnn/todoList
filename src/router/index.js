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
    component: Todo,
    name: 'app',
    meta: {
      title: 'this is app',
      description: ''
    },
    children: [
      {
        path: 'test',
        component: Login
      }
    ]
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
    base: process.env.NODE_ENV === 'production' ? process.env.PROXY_PATH : '',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior(to, from, savedPosition) {
      // console.log(to, from, savedPosition)
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    fallback: true
    // parseQuery(query) {

    // },
    // stringifyQuery() {

    // }
  })
}
