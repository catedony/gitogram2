<template>
    <Header class="header">
      <template #topline>
        <div class="top">
          <Logo />
          <Topline/>
        </div>
      </template>
    </Header>
    <div class="main">
        <div class="col-1">
          <h2 class="title">My Profile</h2>
          <div class="user">
            <div>
              <Avatar class="user-avatar" :src="user?.avatar_url" />
            </div>
            <div>
              <div class="user-login">{{user?.login}}</div>
              <!-- <div>
                <div class="reposts"><span class="number"></span> reposts</div>
                <div class="watchers"><span class="number"></span> watches</div>
              </div> -->
              <div class="name">{{user?.name}}</div>
            </div>
          </div>
        </div>
        <div class="col-2">
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
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Logo from '@/components/Logo.vue'
import Topline from '@/components/Topline.vue'
import Avatar from '@/components/Avatar.vue'
import { mapState, mapActions } from 'vuex'
import ChangeOnHoverButton from '@/components/ChangeOnHoverButton.vue'
import { unstarRepo } from '@/api/rest/starred'

export default {
  name: 'Starred',
  components: { Header, Logo, Topline, Avatar, ChangeOnHoverButton },
  computed: {
    ...mapState({
      repos: state => state.starred.data,
      isLoading: state => state.starred.isLoading,
      error: state => state.starred.error,
      user: state => state.auth.data
    }),
    reps () {
      return this.data
    }
  },
  async created () {
    await this.fetchUserData()
    await this.fetchRepositories()
  },
  methods: {
    ...mapActions({
      fetchRepositories: 'starred/fetchStarredRepos',
      fetchUserData: 'auth/fetchUserData'
    }),
    async unfollow (repo) {
      await unstarRepo({ owner: repo.owner.login, repo: repo.name })
      await this.fetchRepositories()
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.header {
  box-sizing: border-box;
  padding: 20px 30px;
  @media (min-width: 1270px) {
    padding: 50px 120px;
  }
}
.main {
  display: flex;
  height: 100%;
  border-top: 1px solid #D3D3D3;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 1270px) {
    max-width: 980px;
    margin-left: auto;
    margin-right: auto;
  }
  padding-bottom: 30px;
}
.col-1 {
  flex: 1;
  height: 100%;
  border-right: 1px solid #D3D3D3;
}
.col-2 {
  flex: 2;
  height: 100%;
  padding: 0 70px;
}
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
.user {
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-login {
  font-weight: 700;
  font-size: 24px;
  color: #262626;
}
.name {
  color: #9E9E9E;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
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
