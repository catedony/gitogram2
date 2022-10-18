<template>
    <div class="slider">
      <ul class="slider-list" ref="slider">
        <li ref="slide" class="slider-item" v-for="(item, i) in data" :key="item.id">
          <Slide
            :data="getData(item)"
            :active="slideIndex === i"
            @nextSlide="handleSlide(i + 1)"
            @prevSlide="handleSlide(i - 1)"
            @progressFinish = "handleSlide(i + 1)"
            :btnsShown="activeBtns"
            :loading="loading && i === slideIndex"/>
        </li>
      </ul>
    </div>
</template>

<script>
import Slide from './Slide.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('repositories')
export default {
  name: 'Slider',
  components: { Slide },
  props: {
    initialSlide: {
      type: Number
    }
  },
  data () {
    return {
      slideIndex: 0,
      slidePosition: 0,
      loading: false,
      showBtns: true
    }
  },
  computed: {
    ...mapState(['data']),
    activeBtns () {
      if (this.showBtns === false) return []
      if (this.slideIndex === 0) return ['next']
      if (this.slideIndex === this.data.length - 1) return ['prev']
      return ['prev', 'next']
    }
  },
  async mounted () {
    if (!this.data) {
      await this.fetchRepositories()
    }
    if (this.initialSlide) {
      const index = this.data.findIndex(item => item.id === this.initialSlide)
      this.handleSlide(index)
    }
    // await this.fetchRepositories()
    await this.loadReadme()
  },
  methods: {
    ...mapActions(['fetchRepositories', 'fetchReadme']),
    getData (obj) {
      return {
        id: obj.id,
        userAvatar: obj.avatarUrl,
        username: obj.author,
        content: obj.content
      }
    },
    async fetchReadmeForActiveSlide () {
      const { id, author, name } = this.data[this.slideIndex]
      await this.fetchReadme({ id, repo: name, owner: author })
    },
    async loadReadme () {
      this.loading = true
      this.showBtns = false
      try {
        await this.fetchReadmeForActiveSlide()
      } catch (e) {
        console.error(e)
      } finally {
        this.loading = false
        this.showBtns = true
      }
    },
    moveSlider (slideIndex) {
      const { slide, slider } = this.$refs
      const slideWidth = parseInt(getComputedStyle(slide[slideIndex]).getPropertyValue('width'), 10)
      const slideMargin = parseInt(getComputedStyle(slide[slideIndex]).getPropertyValue('margin-right'), 10)

      this.slideIndex = slideIndex
      this.slidePosition = -((slideWidth + slideMargin) * this.slideIndex)
      slider.style.transform = `translateX(${this.slidePosition}px)`
    },
    async handleSlide (slideIndex) {
      this.moveSlider(slideIndex)
      await this.loadReadme()
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  height: 660px;
}
.slider-list {
  display: flex;
  align-items: center;
  position: absolute;
  margin-left: -188px;
  transition: all 400ms;
}
.slider-item {
  margin-right: 70px;
}
</style>
