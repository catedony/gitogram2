<template>
  <div class="avatar-with-title">
    <Avatar class="avatar" :src="src" />
    <span class="title">{{title}}</span>
  </div>
</template>

<script>
import Avatar from './Avatar.vue'
export default {
  name: 'AvatarWithTitle',
  components: { Avatar },
  props: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-with-title {
  display: flex;
  align-items: center;

  .avatar {
    width: 44px;
    height: 44px;
    margin-right: 15px;
  }
  .title {
    font-weight: bold;
  }
}
</style>
