<template>
<div class="login-container">
  <div class="login-box">
    <div class="text">Admin</div>
    <div class="form-container">
      <el-form :model="admin" :rules="rules" ref="loginFormRef">
        <el-form-item prop="account">
          <el-input v-model="admin.account" size="large" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="admin.password" size="large" type="password" prefix-icon="el-icon-lock"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      admin: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 11, message: '长度在 6 到 11 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        const res = await this.$http.post('/admin/login', this.admin)
        localStorage.token = res.data.token
        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-container
  display flex
  justify-content center
  align-items center
  background: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%)
  height 100%
  box-shadow: 0 0 28px 3px rgba(63, 112, 179, 0.5)
  .login-box
    width: 360px
    height: 250px
    background-color #fff
    border-radius 4px
    padding 20px 30px
    .text
      text-align center
      line-height: 1.5em
      font-size 25px
      padding-bottom 10px

.btn
  width 100%
</style>
