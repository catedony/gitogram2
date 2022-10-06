import Toggler from '@/components/Toggler.vue'
import { action } from '@storybook/addon-actions'

const methods = {
  onToggle: action('onToggle')
}

export default {
  title: 'Toggler',
  components: { Toggler }
}

export const defaultView = () => ({
  components: { Toggler },
  template: '<Toggler @toggle="onToggle" :isOpen="false">Show</Toggler>',
  methods
})

defaultView.story = {
  name: 'Закрытый'
}

export const openedView = () => ({
  components: { Toggler },
  template: '<Toggler @toggle="onToggle" :isOpen="true">Hide</Toggler>',
  methods
})

openedView.story = {
  name: 'Открытый'
}
