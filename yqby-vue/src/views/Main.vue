<template>
  <div id="a">
    <van-pull-refresh
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <div id="b">
        <router-view></router-view>
      </div>
    </van-pull-refresh>
    <BottomNav></BottomNav>
  </div>
</template>
<script>
import BottomNav from './BottomNav'
export default {
  components: { BottomNav },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  }
}
</script>
<style lang="stylus">
#a {
  height: 100vh;
}
</style>
