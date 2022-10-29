<template>
<div class="repository">
  <div class="user">
    <Avatar class="user__avatar" :src="rep.avatarUrl" />
    <span class="user__name">{{rep.author}}</span>
  </div>
  <slot></slot>
  <Issues @loadIssues="loadIssues" :rep="rep" :loading="loading" :error="error" :issues="issues" />
</div>
</template>

<script>
import Avatar from './Avatar.vue'
import Issues from './Issues.vue'
import { getIssues } from '@/api/rest/repositories'
export default {
  name: 'RepositoryList',
  components: { Avatar, Issues },
  props: {
    rep: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      issues: null,
      loading: true,
      error: ''
    }
  },
  methods: {
    async loadIssues () {
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
</style>
