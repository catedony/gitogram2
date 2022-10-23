<template>
  <Header class="header">
    <template #topline>
      <div class="top">
        <Logo />
        <Topline/>
      </div>
    </template>
    <template #content>
      <div class="avatars">
        <router-link  class="avatar-link" :to="{name: 'storiesInitialSlide', params: { initialSlide: item.id }}" v-for="item in data" :key="item.id">
          <Avatar class="avatar" :src="item.avatarUrl" />
        </router-link>
      </div>
    </template>
  </Header>
    <div v-if="isLoading">Загрузка...</div>
    <div v-else-if="error">{{ error }}</div>
  <RepositoryList v-if="data" :reps="reps" class="list" />
</template>

<script>
import Header from '@/components/Header.vue'
import Logo from '@/components/Logo.vue'
import Topline from '@/components/Topline.vue'
import Avatar from '@/components/Avatar.vue'
import RepositoryList from '@/components/RepositoryList.vue'
import { mapState, mapActions } from 'vuex'
// import repositories from '@/store/modules/repositories'

export default {
  name: 'Feeds',
  components: { Header, Logo, Avatar, Topline, RepositoryList },
  computed: {
    ...mapState({
      data: state => state.repositories.data,
      isLoading: state => state.repositories.isLoading,
      error: state => state.repositories.error
    }),
    reps () {
      return this.data
    }
  },
  async created () {
    await this.fetchUserData()
    if (!this.data) {
      await this.fetchRepositories()
    }
  },
  methods: {
    ...mapActions({
      fetchRepositories: 'repositories/fetchRepositories',
      fetchUserData: 'auth/fetchUserData'
    })
  }
}
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.avatars {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  overflow: auto;
}
.avatar-link {
  border: 2px solid hsla(313, 54%, 42%, 1);
  border-radius: 50%;
  padding: 3px;
  width: 92px;
  height: 92px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.avatar:not(:last-child) {
  margin-right: 20px;

}
.header {
  box-sizing: border-box;
  padding: 20px 30px;
  @media (min-width: 1270px) {
    padding: 50px 120px;
  }
}
.list {
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
</style>
