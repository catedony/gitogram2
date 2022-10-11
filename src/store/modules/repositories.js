import { getRepositories } from '@/api/rest/repositories.js'
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
    async fetchRepositories ({ commit }) {
      try {
        commit('setLoading', true)
        const { data: { items } } = await getRepositories()
        const reps = items.map(({ name, description, ...item }) => {
          return {
            name,
            author: item.owner.login,
            avatarUrl: item.owner.avatar_url,
            description,
            forksCount: item.forks_count,
            starsCount: item.stargazers_count
          }
        })
        commit('setRepositories', reps)
      } catch (error) {
        console.error(error)
        commit('setError', error.message)
      } finally {
        commit('setLoading', false)
      }
    }
  }
}
