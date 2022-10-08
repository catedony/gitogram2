import Progress from '@/components/Progress.vue'
import { action } from '@storybook/addon-actions'

const methods = {
  onFinish: action('onFinish')
}

export default {
  title: 'Progress',
  components: { Progress },
  argTypes: {
    seconds: {
      control: { type: 'number' }
    }
  }
}

const defaultView = (args) => ({
  components: { Progress },
  data () {
    return { args }
  },
  template: '<Progress @finish="onFinish" v-bind="args" />',
  methods
})

export const Default = defaultView.bind({})
Default.story = {
  name: 'Стандартный вид'
}

Default.args = {
  seconds: 10
}
