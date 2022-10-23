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
  <div class="error" v-else-if="error">{{error}}</div>
  <template v-else>
    <div v-if="issues.length === 0 && issuesVisible" class="no-issues">No issues</div>
    <ul v-show="issuesVisible" class="issues">
      <li class="issue" v-for="issue in issues" :key="issue.id">
      <div class="issue__author">{{issue.user.login}}</div>
      <div v-html="issue.body_html" />
      </li>
    </ul>
  </template>
</div>
</template>

<script>
import Avatar from './Avatar.vue'
import Toggler from './Toggler.vue'
import Loader from './Loader.vue'
import { getIssues } from '@/api/rest/repositories'
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
      issues: null,
      loading: true,
      error: ''
    }
  },
  watch: {
    async issuesVisible (newValue) {
      if (newValue === true && !this.issues) {
        this.loading = true
        try {
          const { data } = await getIssues({ owner: this.rep.author, repo: this.rep.name })
          this.issues = data
        } catch (e) {
          this.error = e.message
          console.log(e)
        } finally {
          this.loading = false
        }
      }
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
.no-issues {
  width: 100%;
  text-align: center;
}
</style>
