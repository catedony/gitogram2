<template>
  <div class="slider">
    <div class="header">
      <Progress :seconds="20"/>
      <AvatarWithTitle :src="avatar" :title="title" class="avatar" />
    </div>
    <div class="content">
      <div class="img" v-if="pic">
        <img :src="pic" :alt="title">
      </div>
      <p>{{text}}</p>
    </div>
    <div class="footer">
      <ChangeOnHoverButton />
    </div>
  </div>
</template>

<script>
import ChangeOnHoverButton from './ChangeOnHoverButton.vue'
import AvatarWithTitle from './AvatarWithTitle.vue'
import Progress from './Progress.vue'
export default {
  name: 'Slide',
  components: { ChangeOnHoverButton, AvatarWithTitle, Progress },
  props: {
    title: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    pic: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  max-width: 375px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.0001);
  border: 1px solid #CACACA;

  .header {
    border-bottom: 2px solid #CACACA;
    padding: 10px 15px;

  }
  .footer {
    border-top: 2px solid #CACACA;
    padding: 30px 50px;
  }
  .avatar {
    margin-top: 10px;
  }
  .content {
    padding: 20px;
    p {
      margin: 0;
    }
    .img {
      margin-bottom: 20px;

    }
    img {
       max-width: 100%;
    }
  }
}
</style>
