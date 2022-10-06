import Avatar from '@/components/Avatar.vue'
export default {
  title: 'Avatar',
  components: { Avatar }
}

export const defaultView = () => ({
  components: { Avatar },
  template: '<Avatar style="width: 200px" src="http://www.myptzone.com/assets/1/18/placeholder_male.png?9" />'
})

defaultView.story = {
  name: 'Стандартный вид'
}
