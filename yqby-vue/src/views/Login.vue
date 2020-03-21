<template>
  <div class="tab-wrapper">
    <h1>YQBY</h1>
    <van-image id="logo" :src="icon" type="contain" />
    <van-tabs v-model="activeTab" swipeable animated>
      <van-tab title="登录" name="login">
        <van-field
          type="text"
          label="账号"
          v-model="user.account"
          placeholder="输入账号"
        />
        <van-field
          type="password"
          label="密码"
          v-model="user.password"
          placeholder="输入密码"
        />
        <van-button plain block class="submit-button" @click="login"
          >登录</van-button
        >
      </van-tab>
      <van-tab title="注册" name="signup">
        <van-field
          type="text"
          label="账号"
          v-model="user.account"
          placeholder="账号"
        />
        <van-field
          type="password"
          label="密码"
          v-model="user.password"
          placeholder="密码"
        />
        <van-field
          type="password"
          label="确认密码"
          v-model="comfirm_pwd"
          placeholder="再次输入密码"
        />
        <van-button plain block class="submit-button" @click="signup"
          >注册</van-button
        >
      </van-tab>
    </van-tabs>
  </div>
</template>
<style lang="stylus">
.tab-wrapper {
  h1 {
    padding: 15px;
    font-size: 25px;
    text-align: center;
  }

  #logo {
    display: block;
    margin: 0 auto;
    height: 200px;
    width: 200px;
    padding-bottom: 25px;
  }
}
</style>
<script>
export default {
  data() {
    return { 
      activeTab: 'login',
      user: {
        account: '',
        password: ''
      },
      comfirm_pwd: '',
     
      icon: require('../assets/logo.png')
    }
  },
  methods: {
    checked() {
      let passed = this.user.account && this.user.password
      if (!passed) {
        this.$toast('请输入用户名和密码')
      }
      return passed
    },
    verifyPwd() {
      if (!this.checked()) {
        return
      }

      let passed = this.user.password === this.comfirm_pwd
      if (!passed) {
        this.$toast('密码不一致')
      }
      return passed
    },
    async login() {
      if (!this.checked()) {
        return;
      }
      const res = await this.$http.post("user/login", this.user)
      localStorage.token = res.data.token;
      this.$router.push("/");
      this.$notify({
        type: 'success',
        message: '登录成功'
      })
    },
    async signup() {
      if (!this.verifyPwd()) {
        return
      }

      const res = await this.$http.post('user/register', this.user)
      this.activeTab = 'login'
      this.$notify({
        type: 'success',
        message: '注册成功，请登录'
      })
    }
    }
  }
</script>
