<template>
  <div class="avatar">
    <img :src="src" alt="Avatar">
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      default: 'ProfilePic.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
img {
  max-width: 100%;
  max-height: 100%;
}
</style>
