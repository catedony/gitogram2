<template>
    <div class="auth">
        <div class="main">
          <div class="col-1">
            <div class="content">
              <Logo class="logo" />
              <p class="text">
                More than just one repository. <br/> This is our digital world.
              </p>
              <button>Authorize with github<span><Icon name="github" class="icon"/></span></button>
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
export default {
  name: 'Authorization',
  components: { Logo, Icon }
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
  background: #31AE54;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: none;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  cursor: pointer;
}
.logo {
  margin-bottom: 30px;
}
</style>
