<template>
  <div class="slide" :class="{active}">
    <div class="header">
      <Progress :seconds="20" :active="activeProgress" @finish="$emit('progressFinish')"/>
      <AvatarWithTitle :src="data.userAvatar" :title="data.username" class="avatar" />
    </div>
    <div class="content">
      <Spinner class="loader" v-if="loading" />
      <template v-else>
        <p v-if="data.content?.length" v-html="data.content"></p>
        <Placeholder v-else :paragraphs="2" />
      </template>
    </div>
    <div class="footer">
      <BaseButton>Follow</BaseButton>
    </div>
    <template v-if="active">
      <button v-if="btnsShown.includes('prev')" @click="$emit('prevSlide')" class="btn btn-prev">
        <Icon class="icon" name="arrowLeft"/>
      </button>
      <button v-if="btnsShown.includes('next')" @click="$emit('nextSlide')" class="btn btn-next">
        <Icon  class="icon" name="arrowRight"/>
      </button>
    </template>
  </div>
</template>

<script>
import AvatarWithTitle from './AvatarWithTitle.vue'
import Progress from './Progress.vue'
import Placeholder from './Placeholder.vue'
import Spinner from './Spinner.vue'
import Icon from './icons/Icon.vue'
import BaseButton from './BaseButton.vue'
export default {
  name: 'Slide',
  components: { AvatarWithTitle, Progress, Placeholder, Spinner, Icon, BaseButton },
  emits: ['progressFinish', 'nextSlide', 'prevSlide'],
  props: {
    data: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every(item => item === 'next' || item === 'prev')
      }
    }
  },
  data () {
    return {
      activeProgress: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.activeProgress = this.active
    }, 0)
  },
  watch: {
    active (newValue) {
      this.activeProgress = newValue
    }
  }
}
</script>

<style lang="scss" scoped>
.slide {
  width: 375px;
  border-radius: 8px;
  background: #FFFFFF;
  border: 1px solid #CACACA;
  position: relative;

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
    height: 400px;
    overflow: auto;
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
  .btn {
    position: absolute;
    width: 36.67px;
    height: 36.67px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 2px solid #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover .icon {
      color: #31AE54;
    }
  }
  .btn-prev {
    left: calc(0% - 18.335px - 36.67px);
    top: calc(53% - 36.67px);
  }
  .btn-next {
    left: calc(100% - 18.335px + 30px);
    top: calc(50% - 36.67px/2 + 0px);
  }
  .icon {
    width: 18px;
    height: 18px;
    color: #404040;
  }
  &.active {
    transform: scale(1.2);
    margin-right: 100px;
    margin-left: 100px;
  }
  .loader {
    margin: auto;
  }
}
</style>
