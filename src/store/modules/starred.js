import { getStarredRepos } from '@/api/rest/starred'

export default {
  namespaced: true,
  state: {
    data: null,
    isLoading: false,
    error: false
  },
  mutations: {
    setRepositories (state, payload) {
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
    async fetchStarredRepos ({ commit }) {
      try {
        commit('setLoading', true)
        const { data } = await getStarredRepos()
        console.log(data)
        commit('setRepositories', data)
      } catch (error) {
        console.error(error)
        commit('setError', error.message)
      } finally {
        commit('setLoading', false)
      }
    }
  }
}
