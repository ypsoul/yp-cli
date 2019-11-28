import {
  GET_TOKEN
} from '../../mutation-type'

export default {
  namespaced: true,
  state: {
    token: ""

  },
  actions: {
    getToken(context, payload) {
      // 请求token 接口
      context.commit(GET_TOKEN, payload)
    }
  },
  mutations: {
    [GET_TOKEN](state, payload) {
      state.token = payload
    }
  }
}