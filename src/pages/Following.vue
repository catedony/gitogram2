<template>
    <Profile>
      <h2 class="title repo-title">Following <span>{{repos?.length}}</span></h2>
          <div v-if="isLoading">Loading</div>
          <div v-else-if="error">{{error}}</div>
          <ul v-else>
            <li v-for="repo in repos" :key="repo.id" class="repo">
              <div class="repo-owner">
                <div>
                  <Avatar class="repo-avatar" :src="repo.owner.avatar_url" />
                </div>
                <div>
                  <div class="owner-login">{{repo.owner.login}}</div>
                  <div class="owner-type">{{repo.owner.type}}</div>
                </div>
              </div>
              <div class="repo-btn">
                <ChangeOnHoverButton text="Following" hoverText="Unfollow" @click="unfollow(repo)"/>
              </div>

            </li>
          </ul>
    </Profile>
</template>

<script>
import Avatar from '@/components/Avatar.vue'
import { useStore } from 'vuex'
import ChangeOnHoverButton from '@/components/ChangeOnHoverButton.vue'
import { unstarRepo } from '@/api/rest/starred'
import { computed } from 'vue'
import Profile from '../components/Profile.vue'

export default {
  name: 'Following',
  components: { Avatar, ChangeOnHoverButton, Profile },
  setup () {
    const store = useStore()

    const fetchRepositories = () => {
      store.dispatch('starred/fetchStarredRepos')
    }
    fetchRepositories()
    const repos = computed(() => store.state.starred.data)
    const isLoading = computed(() => store.state.starred.isLoading)
    const error = computed(() => store.state.starred.error)

    const unfollow = async (repo) => {
      await unstarRepo({ owner: repo.owner.login, repo: repo.name })
      fetchRepositories()
    }
    return {
      repos,
      isLoading,
      error,
      unfollow
    }
  }
}
</script>

<style lang="scss" scoped>
.user-avatar {
  width: 90px;
  height: 90px;
  margin-right: 20px;
}
.repo-avatar {
  width: 72px;
  height: 72px;
  margin-right: 20px;
}
.title {
  margin-bottom: 30px;
  margin-top: 30px;
}
.repo {
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin-bottom: 30px;
}
.repo-title {
  display: flex;
  justify-content: space-between;

  span {
    color: #9E9E9E;
    font-weight: 700;
    font-size: 18px;
  }
}

.repo-owner {
  display: flex;
  align-items: center;
  justify-content: center;
}
.owner-login, .owner-type {
  text-align: left;
}
.owner-login {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
}
.owner-type {
  font-weight: 400;
  font-size: 12px;
  color: #9E9E9E;
}
</style>
