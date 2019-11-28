export default {
  state: {
    LOADING: false
  },
  mutations: {
    showLoading(state) {
      state.LOADING = true
    },
    hideLoading(state) {
      state.LOADING = false;
    }
  }
}

