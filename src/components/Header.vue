<template>
  <header>
    <div class="topline">
      <slot name="topline">
        <Logo />
      </slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/Logo.vue'
export default {
  name: 'Header',
  components: { Logo }
}
</script>

<style lang="scss" scoped>
  header {
    background-color: hsla(0, 0%, 98%, 1);
  }
.topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
