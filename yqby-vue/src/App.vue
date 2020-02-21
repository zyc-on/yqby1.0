<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="stylus">
@import './assets/style/colors.styl';

#app {
  height: 100vh;
  background-color: $bgc-light;
  font-family: 'lucida grande', 'lucida sans unicode', lucida, helvetica, 'Hiragino Sans GB', 'MicrosoftYaHei', 'WenQuanYi Micro Hei', sans-serif;
}
</style>
