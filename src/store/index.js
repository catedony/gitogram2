import { createStore } from 'vuex'
import repositories from './modules/repositories'
import auth from './modules/auth'
import starred from './modules/starred'
export default createStore({
  getters: {
    getUnstarredOnly (state) {
      return state.repositories.data.filter(repo => {
        return !state.starred.data.some(starredRepo => {
          return repo.id === starredRepo.id
        })
      })
    }
  },
  modules: {
    repositories,
    auth,
    starred
  }
}
)
