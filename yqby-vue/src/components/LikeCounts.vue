<template>
  <UserCard class="like-container">
    <div class="like-counts">0超赞</div>
    <div class="line">|</div>
    <div class="like-counts">0关注</div>
    <div class="line">|</div>
    <div class="like-counts">0粉丝</div>
  </UserCard>
</template>
<script>
import UserCard from './UserCard'
export default {
  components: { UserCard }
}
</script>
<style lang="stylus">

.like-container{
  position: relative;
    margin-top: -30px;
}
.like-counts {
  font-size: 14px;
  padding: 20px;
}

.line {
  color: grey;
  font-size: 12px;
  padding: 20px 0;
}
</style>
