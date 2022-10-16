import { getRepositories } from '@/api/rest/repositories.js'
import { getReadme } from '@/api/rest/readme.js'
export default {
  namespaced: true,
  state: {
    data: null,
    isLoading: false,
    error: false
  },
  getters: {
    getRepoById: (state) => (id) => state.data.find(item => item.id === id)
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
    },
    setReadme (state, payload) {
      state.data = state.data.map(item => {
        if (payload.id === item.id) {
          item.content = payload.content
        }
        return item
      })
    }
  },
  actions: {
    async fetchRepositories ({ commit }) {
      try {
        commit('setLoading', true)
        const { data: { items } } = await getRepositories()
        const reps = items.map(({ id, name, description, ...item }) => {
          return {
            id,
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
    },
    async fetchReadme ({ commit, getters }, { id, repo, owner }) {
      const currentRepo = getters.getRepoById(id)
      if (currentRepo.content !== undefined) return
      try {
        const { data } = await getReadme({ owner, repo })
        commit('setReadme', { id, content: data })
      } catch (e) {
        console.log(e)
      }
    }
  }
}
