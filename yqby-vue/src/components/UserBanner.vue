<template>

  <div class="user-banner-wrapper">
    <div class="mask">
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
      avatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3007002444,3106253283&fm=26&gp=0.jpg',

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
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
  .mask{
  width: 1000px;
  height: 400px;  
  margin-top:-250px;
  margin-left: -300px;
  border-radius: 100%;
 background-image: linear-gradient(to right ,#00d2f1, #01a8ff);;
  }
 
  .user-banner{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding 10px
    display flex
    color: white;
    .portrait{
      overflow: hidden;
      img{
        border-radius: 100%;
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
