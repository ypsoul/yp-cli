
import {
  reqApi
} from '../../mutation-type'

export default {
  namespaced: true,
  state: {
    count: 18
  },
  actions: {
    reqApi (context,payload) {
      setTimeout(() => {
        context.commit(reqApi, payload)
      }, 1000)
    }
  },
  mutations: {
    [reqApi] (state, payload) {
      state.count = state.count + payload
    }
  }
}