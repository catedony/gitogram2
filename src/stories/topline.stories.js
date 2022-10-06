import Topline from '@/components/Topline.vue'
export default {
  title: 'Topline',
  components: { Topline }
}

export const defaultView = () => ({
  components: { Topline },
  template: '<Topline />'
})

defaultView.story = {
  name: 'Стандартный вид'
}
