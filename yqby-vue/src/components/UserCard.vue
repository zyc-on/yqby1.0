<template>
  <div class="user-card-wrapper">
    <div class="card-title" v-if="title">{{title}}</div>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
};
</script>
<style lang="stylus">
.user-card-wrapper {
  margin: 8px;
  box-shadow: 0 rgba(0, 0, 0, 0.6);
  background-color: #fff;
  border-radius: 10px;

  .card-title {
    padding-top: 10px;
    font-weight: bold;
    font-size: 20px;
    padding-left: 10px;
  }

  .card-content {
    display: flex;
    justify-content: space-around;
  }
}
</style>