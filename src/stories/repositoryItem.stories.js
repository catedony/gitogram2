import RepositoryItem from '@/components/RepositoryItem.vue'
import RepositoryDescription from '@/components/RepositoryDescription.vue'
export default {
  title: 'RepositoryItem',
  components: { RepositoryItem, RepositoryDescription }
}

export const defaultView = () => ({
  components: { RepositoryItem, RepositoryDescription },
  template: '<RepositoryItem :rep="{author: \'John\', issues: [{id: `0`, author: `Camille`, text: `Issue text`}]}"><RepositoryDescription :rep="{author: \'John\', title: `Title`, description: `Desctiption`, stars: `10`, fork: `5`}" /></RepositoryItem'
})

defaultView.story = {
  name: 'Стандартный вид'
}
