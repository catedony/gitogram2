import Header from '@/components/Header.vue'
export default {
  title: 'Header',
  components: { Header }
}

export const defaultView = () => ({
  components: { Header },
  template: '<Header><template #topline>Topline</template><template #content>Content</template></ Header>'
})

defaultView.story = {
  name: 'Стандартный вид'
}
