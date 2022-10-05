<template>
<div class="repository">
  <div class="user">
    <Avatar class="user__avatar" />
    <span class="user__name">{{rep.author}}</span>
  </div>
  <slot></slot>
  <Toggler @toggle="issuesVisible = !issuesVisible" :isOpen="issuesVisible">
    <template v-if="issuesVisible">Hide issues</template>
    <template v-else>View issues</template>
  </Toggler>
  <ul v-show="issuesVisible" class="issues">
    <li class="issue" v-for="issue in rep.issues" :key="issue.id">
     <div class="issue__author">{{issue.author}}</div>
     <div>{{issue.text}}</div>
    </li>
  </ul>
</div>
</template>

<script>
import Avatar from './Avatar.vue'
import Toggler from './Toggler.vue'
export default {
  name: 'RepositoryList',
  components: { Avatar, Toggler },
  props: {
    rep: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      issuesVisible: false
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
</style>
