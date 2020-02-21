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
        <i class="iconfont icon-setting"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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