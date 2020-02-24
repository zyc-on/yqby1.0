<template>
  <div>
    <h2 class="title">{{ content }}</h2>
  </div>
</template>
<script>
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="stylus">
.title{
    padding-top: 20px;
    margin: 0;
    padding: 32px 16px 16px;
    color: rgba(69, 90, 100, 0.6);
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
}
</style>
