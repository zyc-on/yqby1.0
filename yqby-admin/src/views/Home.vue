<template>
  <el-container class="home-container">
    <el-aside>
      <el-menu>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>用户管理</span>
          </template>
          <el-menu-item>
            <template slot="title">
              <i class="el-icon-user"></i>
              <span>用户管理</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span>YQBY后台管理系统</span>
        <el-button type="text">退出</el-button>
      </el-header>
      <el-main>m</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      menu: []
    }
  },
  created () {
    this.getMenu()
  },
  methods: {
    getMenu () {
      this.$http.get('/')
    },
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="stylus" scoped>
.home-container
  height: 100%

.el-header
  background-color: #EEF4F9
  display flex
  align-items center
  padding: 0
  span
    font-size 22px
    line-height:70px
    text-align center
    flex-grow 1
.el-aside
  background: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%)

.el-main
  background-color: #F8F9FA
</style>
