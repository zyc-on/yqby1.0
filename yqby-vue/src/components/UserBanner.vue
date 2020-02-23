<template>
  <div class="user-banner-wrapper">
    <div class="user-banner">
      <div class="portrait">
        <img src="../assets/logo.png" />
      </div>
      <div class="info">
        <div class="username">
          <span>佛说不2</span>
        </div>
        <div class="motto">
          <i class="iconfont icon-man"></i>
          <span>Show Me Your Code</span>
        </div>
      </div>
      <div class="setting">
        <i class="iconfont icon-setting" @click="showSetting"> </i>
      </div>
    </div>
    <!-- 设置弹出 -->
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      actions: [{ name: '更换账号' }, { name: '注销' }, { name: '关于开发者' }]
    }
  },
  methods: {
    showSetting() {
      this.show = true
    },
    onSelect(item) {
      this.show = !this.show
      const selectable = {
        更换账号: () => {
          this.$router.push('login')
        },
        注销: () => {
          localStorage.removeItem('token')
          this.$router.go(0)
        },
        关于开发者: () => {
          this.$router.push('aboutdev')
        }
      }
      selectable[item.name]()
    }
  }
}
</script>
<style lang="stylus">
@import '../assets/style/colors.styl';
.user-banner-wrapper{
  background-color #fff
  padding 10px
  .user-banner{
    display flex
    .portrait{
      img{
        height 68px
      }
    }
  }
  .info{
    font-size 15px
    padding-top 18px
    .motto{
      font-size 13px
      padding-top 4px
    }
  }
  .setting{
    flex-grow 1
    text-align right
    padding-top 10px
    i{
      font-size 18px
    }
  }
}
</style>
