
import Vue from 'vue'
import Vuex from 'vuex'
import vuexAlong from 'vuex-along'

import home from './modules/home'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters: {
    token: state => state.user.token,
  },
  actions: {

  },
  mutations: {

  },
  modules: {
    home,
    user
  },
  plugins:[vuexAlong()]
})