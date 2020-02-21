<template>
  <div class="nav-wrapper">
    <router-link tag="div" to="/" class="nav-item">
      <i class="iconfont icon-home"></i>
    </router-link>
    <router-link tag="div" to="/" class="nav-item">
      <i class="iconfont icon-shop"></i>
    </router-link>
    <router-link tag="div" to="/" class="nav-item">
      <i class="iconfont icon-medicinebox"></i>
    </router-link>
    <router-link tag="div" to="/" class="nav-item">
      <i class="iconfont icon-aliwangwang"></i>
    </router-link>
    <router-link tag="div" to="/user" class="nav-item">
      <i class="iconfont icon-user"></i>
    </router-link>
  </div>
</template>
<style lang="stylus">
.nav-wrapper {
  height: 6vh;
  display: flex;
  justify-content: space-around;
  align-content: flex-end;

  .nav-item {
    height: 100%;
    i {
      font-size: 35px;
    }
  }
 .router-link-active{
    color blue
  }
}
</style>