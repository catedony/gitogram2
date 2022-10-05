<template>
  <ul>
    <li v-for="rep in reps" :key="rep.id">
      <RepositoryItem :rep="rep">
        <RepositoryDescription :rep="rep"/>
      </RepositoryItem>
    </li>
  </ul>
</template>

<script>
import RepositoryItem from './RepositoryItem.vue'
import RepositoryDescription from './RepositoryDescription.vue'

export default {
  name: 'RepositoryList',
  props: {
    reps: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  },
  components: { RepositoryItem, RepositoryDescription }
}
</script>

<style lang="scss" scoped>
 li {
  margin-top: 30px;
 }
</style>
