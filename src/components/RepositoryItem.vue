<template>
<div class="repository">
  <div class="user">
    <Avatar class="user__avatar" :src="rep.avatarUrl" />
    <span class="user__name">{{rep.author}}</span>
  </div>
  <slot></slot>
  <Toggler @toggle="issuesVisible = !issuesVisible" :isOpen="issuesVisible">
    <template v-if="issuesVisible">Hide issues</template>
    <template v-else>View issues</template>
  </Toggler>
  <template  v-if="loading">
    <Loader class="loader" v-show="issuesVisible" />
  </template>
  <template v-else>
    <ul v-show="issuesVisible" class="issues">
      <li class="issue" v-for="issue in rep.issues" :key="issue.id">
      <div class="issue__author">{{issue.author}}</div>
      <div>{{issue.text}}</div>
      </li>
    </ul>
  </template>
</div>
</template>

<script>
import Avatar from './Avatar.vue'
import Toggler from './Toggler.vue'
import Loader from './Loader.vue'
export default {
  name: 'RepositoryList',
  components: { Avatar, Toggler, Loader },
  props: {
    rep: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      issuesVisible: false,
      loading: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .repository {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
.user {
  display: flex;
  align-items: center;

  &__avatar {
    width: 44px;
    height: 44px;
    margin-right: 15px;
  }
  &__name {
    font-weight: bold;
  }
}
.issues {
  margin-top: 15px;
}
.issue {
  display: flex;

  &__author {
    font-weight: bold;
    margin-right: 10px;
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
}
.loader {
  margin-top: 20px;
}
</style>
