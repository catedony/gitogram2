import AvatarWithTitle from '@/components/AvatarWithTitle.vue'
export default {
  title: 'AvatarWithTitle',
  components: { AvatarWithTitle },
  argTypes: {
    src: {
      control: { type: 'text' }
    },
    title: {
      control: { type: 'text' }
    }
  }
}

const defaultView = (args) => ({
  components: { AvatarWithTitle },
  data () {
    return { args }
  },
  template: '<AvatarWithTitle v-bind="args" />'
})

export const Default = defaultView.bind({})
Default.story = {
  name: 'Стандартный вид'
}

Default.args = {
  src: 'http://www.myptzone.com/assets/1/18/placeholder_male.png?9',
  title: 'Title'
}
