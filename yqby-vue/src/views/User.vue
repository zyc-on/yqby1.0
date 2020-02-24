<template>
  <div>
    <UserBanner userInfo="{}" />
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
    if (!localStorage.token) {
      this.$toast('您还未登录哦')
      this.$router.push('/login')
    } else {
      //  var userInfo =  await this.$http.get('/user', localStorage.token)
    }
  },
  components: { UserBanner, LikeCounts, Sold }
}
</script>
