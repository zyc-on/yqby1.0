<template>
  <div class="user-card-wrapper">
    <h3 class="card-title" v-if="title">{{ title }}</h3>
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
}
</script>
<style lang="stylus">
.user-card-wrapper {
  margin: 16px 8px;
  /* box-shadow: 0 rgba(0, 0, 0, 0.6); */
  background-color: #fff;
  border-radius: 10px;

  .card-title {
    padding-top: 10px;
    font-weight: 600;
    font-size: 16px;
    padding-left: 10px;
  }

  .card-content {
    padding:10px 0;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>
