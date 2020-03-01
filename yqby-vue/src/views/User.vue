<template>
  <div>
    <UserBanner :userInfo="user" />
    <LikeCounts />
    <Sold />
  </div>
</template>
<script>
import UserBanner from '../components/UserBanner'
import LikeCounts from '../components/LikeCounts'
import Sold from '../components/Sold'
export default {
  created() {
    // 路由拦截
    if (!localStorage.token) {
      this.$toast('您还未登录哦')
      this.$router.push('/login')
    } else {
      this.axios({
        method: 'get',
        url: 'user/userinfo'
      }).then(res => {
        this.user = res.data
      })
    }
  },
  components: { UserBanner, LikeCounts, Sold },
  data() {
    return {
      user: {}
    }
  }
}
</script>
