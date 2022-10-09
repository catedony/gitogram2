<template>
  <Header class="header">
    <template #topline>
      <div class="top">
        <Logo />
        <Topline/>
      </div>
    </template>
    <template #content>
      <div class="avatars"><Avatar class="avatar" v-for="n in 10" :key="n"/></div>
    </template>
  </Header>
  <RepositoryList :reps="reps" class="list" />
</template>

<script>
import Header from '@/components/Header.vue'
import Logo from '@/components/Logo.vue'
import Topline from '@/components/Topline.vue'
import Avatar from '@/components/Avatar.vue'
import RepositoryList from '@/components/RepositoryList.vue'
// import reps from '@/repositories.json'
import { getRepositories } from '@/api/rest/repositories.js'
export default {
  name: 'Feeds',
  components: { Header, Logo, Avatar, Topline, RepositoryList },
  data () {
    return {
      reps: {}
    }
  },
  async created () {
    try {
      const { data: { items } } = await getRepositories()
      // console.log(res)
      this.reps = items.map(({ name, description, ...item }) => {
        return {
          name,
          author: item.owner.login,
          avatarUrl: item.owner.avatar_url,
          description,
          forksCount: item.forks_count,
          starsCount: item.stargazers_count
        }
      })
    } catch (error) {
      console.error(error)
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
.avatars {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  overflow: auto;
}
.avatar {
  border: 2px solid hsla(313, 54%, 42%, 1);
  padding: 3px;
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
