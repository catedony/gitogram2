<template>
    <Header class="header">
      <template #topline>
        <div class="top">
          <Logo />
          <Topline/>
        </div>
      </template>
    </Header>
    <div class="main">
        <div class="col-1">
          <h2 class="title">My Profile</h2>
          <div class="user">
            <div>
              <Avatar class="user-avatar" :src="user?.avatar_url" />
            </div>
            <div>
              <div class="user-login">{{user?.login}}</div>
              <!-- <div>
                <div class="reposts"><span class="number"></span> reposts</div>
                <div class="watchers"><span class="number"></span> watches</div>
              </div> -->
              <div class="name">{{user?.name}}</div>
            </div>
          </div>
        </div>
        <div class="col-2">
          <slot></slot>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Logo from '@/components/Logo.vue'
import Topline from '@/components/Topline.vue'
import Avatar from '@/components/Avatar.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'Starred',
  components: { Header, Logo, Topline, Avatar },
  setup () {
    const store = useStore()
    const fetchUserData = () => {
      store.dispatch('auth/fetchUserData')
    }
    fetchUserData()
    const user = computed(() => store.state.auth.data)

    return {
      user
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.header {
  box-sizing: border-box;
  padding: 20px 30px;
  @media (min-width: 1270px) {
    padding: 50px 120px;
  }
}
.main {
  display: flex;
  height: 100%;
  border-top: 1px solid #D3D3D3;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 1270px) {
    max-width: 980px;
    margin-left: auto;
    margin-right: auto;
  }
  padding-bottom: 30px;
}
.col-1 {
  flex: 1;
  height: 100%;
  border-right: 1px solid #D3D3D3;
}
.col-2 {
  flex: 2;
  height: 100%;
  padding: 0 70px;
}
.user-avatar {
  width: 90px;
  height: 90px;
  margin-right: 20px;
}
.user {
  display: flex;
  align-items: center;
  justify-content: center;
}
.user-login {
  font-weight: 700;
  font-size: 24px;
  color: #262626;
}
.name {
  color: #9E9E9E;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
}
.title {
  margin-bottom: 30px;
  margin-top: 30px;
}

</style>
