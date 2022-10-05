<template>
  <component :is="name" />
</template>

<script>
import Home from './variants/Home.vue'
import Logout from './variants/Logout.vue'
import Star from './variants/Star.vue'
import Fork from './variants/Fork.vue'
import Toggler from './variants/Toggler.vue'
export default {
  name: 'Icon',
  components: { Home, Logout, Star, Fork, Toggler },
  props: {
    name: {
      type: String,
      required: true,
      validator (value) {
        return ['home', 'logout', 'star', 'fork', 'toggler'].includes(value)
      }
    }
  }
}
</script>
