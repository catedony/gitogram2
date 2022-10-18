<template>
  <div class="progress">
    <div ref="filler" :style="style" class="filler"></div>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    seconds: {
      type: Number,
      required: true
    },
    active: {
      type: Boolean,
      default: true
    }
  },
  emits: ['finish'],
  data () {
    return {
      style: {}
    }
  },
  mounted () {
    if (this.active) {
      setTimeout(() => {
        this.style = {
          width: '100%',
          transition: 'all ' + this.seconds + 's'
        }
      }, 0)
    }

    this.$refs.filler.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.filler.removeEventListener('transitionend', this.emitOnFinish)
  },
  watch: {
    active (newValue) {
      if (newValue) {
        setTimeout(() => {
          this.style = {
            width: '100%',
            transition: 'all ' + this.seconds + 's'
          }
        }, 0)
      } else {
        this.style = {
          width: '0%'
        }
      }
    }
  },
  methods: {
    emitOnFinish () {
      this.$emit('finish')
    }
  }
}
</script>

<style lang="scss" scoped>
.progress {
  position: relative;
  height: 5px;
  border-radius: 1px;
  background: rgba(49, 174, 84, 0.3);
}

.filler {
  position: absolute;
  width: 0;
  height: 5px;
  border-radius: 1px;
  background: #31AE54;;

}
</style>
