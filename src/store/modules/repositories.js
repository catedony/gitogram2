import { getRepositories } from '@/api/rest/repositories.js'
import { getReadme } from '@/api/rest/readme.js'
import { starRepo, unstarRepo, getStarredRepos } from '@/api/rest/starred'
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
      state.data = payload.map(item => {
        // item.following = {
        //   status: false,
        //   loading: false,
        //   error: ''
        // }
        return item
      })
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
    },
    setFollowing (state, payload) {
      state.data = state.data.map(item => {
        if (item.id === payload.id) {
          item.following = {
            ...item.following,
            ...payload.data
          }
        }
        console.log(item)
        return item
      })
    }
  },
  actions: {
    async fetchRepositories ({ commit }) {
      try {
        commit('setLoading', true)
        const { data: { items } } = await getRepositories()
        const starredRepos = await getStarredRepos()
        console.log(starredRepos.data)
        const reps = items.map(({ id, name, description, ...item }) => {
          return {
            id,
            name,
            author: item.owner.login,
            avatarUrl: item.owner.avatar_url,
            description,
            forksCount: item.forks_count,
            starsCount: item.stargazers_count,
            following: {
              error: '',
              loading: false,
              status: starredRepos.data.some(item => item.id === id)
            }
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
    },
    async starRepo ({ commit, getters }, id) {
      const { name, author } = getters.getRepoById(id)

      commit('setFollowing', {
        id,
        data: {
          status: false,
          loading: true,
          error: ''
        }
      })

      try {
        await starRepo({ owner: author, repo: name })
        commit('setFollowing', {
          id,
          data: {
            status: true
          }
        })
      } catch (error) {
        commit('setFollowing', {
          id,
          data: {
            status: false,
            error: error.message
          }
        })
      } finally {
        commit('setFollowing', {
          id,
          data: {
            loading: false
          }
        })
      }
    },
    async unstarRepo ({ commit, getters }, id) {
      console.log(getters.getRepoById(id))
      const { name, author } = getters.getRepoById(id)

      commit('setFollowing', {
        id,
        data: {
          status: true,
          loading: true,
          error: ''
        }
      })

      try {
        await unstarRepo({ owner: author, repo: name })
        commit('setFollowing', {
          id,
          data: {
            status: false
          }
        })
      } catch (error) {
        commit('setFollowing', {
          id,
          data: {
            status: true,
            error: error.message
          }
        })
      } finally {
        commit('setFollowing', {
          id,
          data: {
            loading: false
          }
        })
      }
    }
  }
}
