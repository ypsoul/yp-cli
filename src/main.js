import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import "./utils/global"
import asyncVuex from './utils/async-vuex'

Vue.use(asyncVuex)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
