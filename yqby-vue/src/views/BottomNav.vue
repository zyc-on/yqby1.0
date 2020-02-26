<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="home">主页</van-tabbar-item>
      <van-tabbar-item icon="chat-o" info="99+" to="messages"
        >消息</van-tabbar-item
      >
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created() {
    var active = localStorage.getItem('active')
    if (typeof active !== 'undefined') this.active = Number(active)
    else this.active = 0
  },
  data() {
    return {
      active: 0
    }
  },
  watch: {
    active: function(newActive) {
      localStorage.setItem('active', newActive)
    }
  }
}
</script>
