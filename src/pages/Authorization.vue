<template>
    <div class="auth">
        <div class="main">
          <div class="col-1">
            <div class="content">
              <Logo class="logo" />
              <p class="text">
                More than just one repository. <br/> This is our digital world.
              </p>
              <BaseButton @click="getCode">Authorize with github<span><Icon name="github" class="icon"/></span></BaseButton>
          </div>
          </div>
          <div class="col-2"></div>
        </div>
        <div class="footer">
            © Gitogram from Loftschool
        </div>
    </div>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Icon from '@/components/icons/Icon.vue'
import { getToken } from '@/api/rest/auth'
import BaseButton from '@/components/BaseButton.vue'
import env from './../env'

export default {
  name: 'Authorization',
  components: { Logo, Icon, BaseButton },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')
    try {
      const { data } = await getToken({ clientId: env.clientId, code, clientSecret: env.clientSecret })
      localStorage.setItem('token', data.token)
      this.$router.replace({ name: 'home' })
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    getCode () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'
      const params = new URLSearchParams()
      params.append('client_id', env.clientId)
      params.append('scope', 'repo,user')
      window.location.href = `${githubAuthApi}?${params}`
    }
  }
}
</script>

<style lang="scss" scoped>
.auth {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main {
  height: 100%;
  display: flex;
}
.col-1 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.col-2 {
  flex: 1;
  background-image: url(@/../public/Device.png);
  background-repeat: no-repeat;
  background-position: 100% 50%;
}
.content {
  display: flex;;
  flex-direction: column;
  align-items: flex-start;
}
.text {
  font-weight: 400;
  font-size: 18px;
  color: #6F6F6F;
  text-align: left;
  margin-bottom: 54px;
}
.icon {
  color: white;
  height: 23px;
  width: 23px;
  margin-left: 5px;
}
button {
  font-size: 16px;
  padding: 12px 24px;
}
.logo {
  margin-bottom: 30px;
}
.footer {
  padding: 30px;
  text-align: center;
  box-shadow: 0px -0.33px 0px rgba(60, 60, 67, 0.29);
  font-size: 18px;
  color: #6F6F6F;
}
</style>
