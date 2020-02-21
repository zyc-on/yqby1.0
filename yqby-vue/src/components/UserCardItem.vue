<template>
  <div class="user-card-item">
    <div class="item-icon">
      <i class="iconfont" :class="icon"></i>
    </div>
    <div class="item-name">{{name}}</div>
  </div>
</template>
<style lang="stylus">
.user-card-item {
  .item-icon {
    padding 3px 0
    i {
      display: block;
      text-align: center;
      font-size: 40px;
    }
  }
}
</style>
<script>
export default {
  props: {
    icon: String,
    name: String
  }
};
</script>