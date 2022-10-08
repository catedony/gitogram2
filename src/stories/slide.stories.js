import Slide from '@/components/Slide.vue'
export default {
  title: 'Slide',
  components: { Slide },
  argTypes: {
    title: {
      control: { type: 'text' }
    },
    pic: {
      control: { type: 'text' }
    },
    text: {
      control: { type: 'text' }
    },
    avatar: {
      control: { type: 'text' }
    }
  }
}

const defaultView = (args) => ({
  components: { Slide },
  data () {
    return { args }
  },
  template: '<Slide v-bind="args" />'
})

export const Default = defaultView.bind({})
Default.story = {
  name: 'Стандартный вид'
}

Default.args = {
  title: 'Title',
  avatar: 'http://www.myptzone.com/assets/1/18/placeholder_male.png?9',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ratione harum tenetur necessitatibus, inventore eaque at consequatur perferendis. Officiis aliquid voluptatibus tenetur sint autem laboriosam suscipit porro mollitia fugit atque!',
  pic: 'http://www.myptzone.com/assets/1/18/placeholder_male.png?9'

}
