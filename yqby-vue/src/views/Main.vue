<template>
  <div id="a">
    <div id="b">
      <router-view></router-view>
    </div>
    <BottomNav1></BottomNav1>
  </div>
</template>
<script>
import BottomNav1 from "./BottomNav1";
export default {
  components: { BottomNav1 }
};
</script>
<style lang="stylus">
#a {
  height: 100vh;
}

#b{
  height: 90vh;
}
</style>
