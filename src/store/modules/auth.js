import { getUserData } from '@/api/rest/auth'
export default {
  namespaced: true,
  state: {
    data: null,
    isLoading: false,
    error: false
  },
  // getters: {

  // },
  mutations: {
    setData (state, payload) {
      state.data = payload
    },
    setLoading (state, payload) {
      state.isLoading = payload
    },
    setError (state, payload) {
      state.error = payload
    }
  },
  actions: {
    async fetchUserData ({ commit }) {
      try {
        commit('setLoading', true)
        const { data } = await getUserData()
        commit('setData', data)
      } catch (error) {
        console.error(error)
        commit('setError', error.message)
      } finally {
        commit('setLoading', false)
      }
    }
  }
}
