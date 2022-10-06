import Logo from '@/components/Logo.vue'
export default {
  title: 'Logo',
  components: { Logo }
}

export const defaultView = () => ({
  components: { Logo },
  template: '<Logo />'
})

defaultView.story = {
  name: 'Стандартный вид'
}
