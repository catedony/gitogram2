import ChangeOnHoverButton from '@/components/ChangeOnHoverButton.vue'
export default {
  title: 'ChangeOnHoverButton',
  components: { ChangeOnHoverButton },
  argTypes: {
    text: {
      control: { type: 'text' }
    },
    hoverText: {
      control: { type: 'text' }
    }
  }
}

const defaultView = (args) => ({
  components: { ChangeOnHoverButton },
  data () {
    return { args }
  },
  template: '<ChangeOnHoverButton v-bind="args" />'
})

export const Default = defaultView.bind({})
Default.story = {
  name: 'Стандартный вид'
}

Default.args = {
  text: 'Follow',
  hoverText: 'Unfollow'
}
