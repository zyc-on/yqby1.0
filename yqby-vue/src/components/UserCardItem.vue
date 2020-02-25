<template>
  <div class="user-card-item">
    <div class="item-icon">
      <i class="iconfont" :class="icon"></i>
    </div>
    <div class="item-name">{{ name }}{{ num }}</div>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      requird: true
    },
    name: {
      type: String,
      requird: true
    },
    num: {
      type: Number,
      requird: true
    }
  }
}
</script>
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
  .item-name{
    color: gray;
    font-size: 14px;
  }
}
</style>
