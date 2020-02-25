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
    <BottomNav1></BottomNav1>
  </div>
</template>
<script>
import BottomNav1 from './BottomNav1'
export default {
  components: { BottomNav1 },
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
