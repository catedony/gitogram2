<template>
  <ul>
    <li class="icon"><Icon name="home" /></li>
    <li class="avatar"><Avatar class="avatar" :src="user?.avatar_url" /></li>
    <li class="icon"><Icon name="logout" @click="logout"/></li>
  </ul>
</template>

<script>
import Avatar from './Avatar.vue'
import Icon from '@/components/icons/Icon.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Topline',
  components: { Avatar, Icon },
  computed: {
    ...mapState({
      user: state => state.auth.data
    })
  },
  methods: {
    ...mapActions({ logout: 'auth/logout' })
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  place-items: center;
  list-style: none;
}
.avatar{
  width: 32px;
  height: 32px;
}
li:not(:last-child) {
  margin-right: 10px;
}
.icon {
  width: 25px;
  height: 25px;
  color: #262626;
}
</style>
