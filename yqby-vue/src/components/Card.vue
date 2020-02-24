<template>
  <div class="card">
    <slot></slot>
  </div>
</template>
<script>
export default {}
</script>

<style lang="stylus">
.card{
  margin: 0 10px;
  margin-bottom: 24px;
    padding: 10px 0;

    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 12px #ebedf0;
}
</style>
