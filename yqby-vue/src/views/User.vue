<template>
  <div>
    <UserBanner />
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
    }
  },
  components: { UserBanner, LikeCounts, Sold }
}
</script>
