<template>
    <Profile>
      <h2 class="title repo-title">Repositories <span>{{repos?.length}}</span></h2>
          <div v-if="isLoading">Loading</div>
          <div v-else-if="error">{{error}}</div>
          <ul v-else>
            <li v-for="repo in repos" :key="repo.id">
              <RepositoryDescription :rep="repo" />
            </li>
          </ul>
    </Profile>
</template>

<script>
import Profile from '../components/Profile.vue'
import { getMyRepos } from '@/api/rest/users'
import { useStore } from 'vuex'
import { computed, watch, ref } from 'vue'
import RepositoryDescription from '@/components/RepositoryDescription.vue'

export default {
  name: 'UserProfile',
  components: {
    Profile, RepositoryDescription
  },
  setup () {
    const isLoading = ref(false)
    const error = ref('')
    const repos = ref([])
    const store = useStore()
    const user = computed(() => store.state.auth.data)
    const fetchRepositories = async () => {
      const { data } = await getMyRepos(user.value.login)
      return data
    }
    watch(user, async (newVal) => {
      if (newVal) {
        isLoading.value = true
        try {
          repos.value = await fetchRepositories()
        } catch (e) {
          error.value = e.message
        } finally {
          isLoading.value = false
        }
      }
    })
    return {
      isLoading,
      error,
      repos
    }
  }
}
</script>

<style lang="scss" scoped>
.repo-title {
  display: flex;
  justify-content: space-between;

  span {
    color: #9E9E9E;
    font-weight: 700;
    font-size: 18px;
  }
}
</style>
