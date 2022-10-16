<template>
    <div class="stories">
        <Header class="header">
          <template #topline>
              <router-link to="/">
                <img alt="Gitogram" src="GitogramWhite.png">
              </router-link>
              <router-link to="/">
                <Icon name="close" class="icon" />
              </router-link>
          </template>
        </Header>
        <div class="content">
          <Slider :initialSlide="+$route.params.initialSlide" />
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Icon from '@/components/icons/Icon.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'Stories',
  components: { Header, Icon, Slider }

}
</script>

<style lang="scss" scoped>
.stories {
  background: #101010;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .header {
    background-color: unset;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    padding: 20px 30px;
  @media (min-width: 1270px) {
    padding: 50px 120px;
  }
  }
  .content {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .icon {
    color: white;
    height: 22px;
    width: 22px;
  }
}
</style>
