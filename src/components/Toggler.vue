<template>
  <button @click="$emit('toggle')" class="toggler"><slot></slot><span ><Icon name="toggler" :class="['toggler__icon', {isOpen: isOpen}]" /></span></button>
</template>

<script>
import Icon from '@/components/icons/Icon.vue'
export default {
  name: 'Toggler',
  components: { Icon },

  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.toggler {
  background: none;
  border: none;
  padding: 0;
  font-weight: bold;
  &__icon {
    transition: all 200ms;
    margin-left: 5px;
    width: 10px;
    color: #212121;
  }
  &__icon.isOpen {
    transform: rotate(180deg)
  }
}
</style>
