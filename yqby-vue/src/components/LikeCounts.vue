<template>
  <UserCard>
    <div class="like-counts">0超赞</div>
    <div class="line">|</div>
    <div class="like-counts">0关注</div>
    <div class="line">|</div>
    <div class="like-counts">0粉丝</div>
  </UserCard>
</template>
<script>
import UserCard from "./UserCard";
export default {
  components: { UserCard }
};
</script>
<style lang="stylus">
.like-counts {
  font-size: 14px;
  padding: 20px;
}

.line {
  color: #F1F1F1;
  font-size: 12px;
  padding: 20px 0;
}
</style>