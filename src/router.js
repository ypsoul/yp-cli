import Vue from 'vue'
import store from './store'

import Router from 'vue-router'
import Home from './views/Home.vue'

const routerList = [];

function importAll(r) {
  r.keys().forEach(
    (key) => {
      routerList.push(r(key).default)
    }
  )
}
importAll(require.context('./router', true, /\.router\.js/))

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...routerList,
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})


//路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (!store.getters.token) {
    store.dispatch('getToken')
    next()
  } else {
    next()
  }
})

router.afterEach((to, form) => {
  console.log(to,form)
})



export default router;