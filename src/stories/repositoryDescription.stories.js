import RepositoryDescription from '@/components/RepositoryDescription.vue'
export default {
  title: 'RepositoryDescription',
  components: { RepositoryDescription }
}

export const defaultView = () => ({
  components: { RepositoryDescription },
  template: '<RepositoryDescription :rep="{author: \'John\', title: `Title`, description: `Desctiption`, stars: `10`, fork: `5`}" />'
})

defaultView.story = {
  name: 'Стандартный вид'
}
