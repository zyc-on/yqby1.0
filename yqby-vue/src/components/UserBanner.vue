<template>
  <div class="user-banner-wrapper">
    <div class="user-banner">
      <div class="portrait">
        <img :src="avatar" ></img>
      
      </div>
      <div class="info" @click="setInfo">
        <div class="username">
          <span>{{ name }}</span>
        </div>
        <div class="motto">
          <i v-if="sex" class="iconfont icon-man"></i>
          <i v-else class="iconfont icon-woman"></i>

          <!-- <i class=`iconfont ${{sex=="male"?"icon-man":""icon-man"}`></i> -->

          <span class="motto_content">{{ motto }}</span>
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
      //用户banner 数据
      name: '佛说不2',
      sex: 1,
      motto: '分享我的二手书',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1aCKekPOSd8UrJwB-ssnYev0QEYYa8hjhVaRMEvs3pMLq3Ig1kg&s',

      // 设置选项
      show: false,
      actions: [{ name: '更换账号' }, { name: '注销' }, { name: '关于开发者' }]
    }
  },
  methods: {
    //编辑个人信息
    setInfo() {
      this.$router.push({ path: 'setInfo' })
    },

    // 设置点击
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
    padding-left 15px
    box-sizing border-box
    .motto{
      font-size 13px
      padding-top 10px
      .motto_content{
        padding-left 10px
      }
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
