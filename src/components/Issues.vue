<template>
    <Toggler @toggle="issuesVisible = !issuesVisible" :isOpen="issuesVisible">
    <span class="toggler-text">
        <template v-if="issuesVisible">Hide issues</template>
        <template v-else>View issues</template>
    </span>
  </Toggler>
  <template  v-if="loading">
    <Loader class="loader" v-show="issuesVisible" />
  </template>
  <div class="error" v-else-if="error">{{error}}</div>
  <template v-else>
    <div v-if="issues?.length === 0 && issuesVisible" class="no-issues">No issues</div>
    <ul v-if="issuesVisible" class="issues">
      <li class="issue" v-for="issue in issues" :key="issue.id">
        <div class="issue__author">{{issue.user.login}}</div>
        <div v-html="issue.body_html" />
      </li>
    </ul>
  </template>
</template>

<script>
import Toggler from './Toggler.vue'
import Loader from './Loader.vue'
export default {
  name: 'RepositoryList',
  components: { Toggler, Loader },
  props: {
    issues: {
      type: [Array, null],
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    }

  },
  data () {
    return {
      issuesVisible: false
    }
  },
  watch: {
    async issuesVisible (newValue) {
      if (newValue === true && !this.issues) {
        this.$emit('loadIssues')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
