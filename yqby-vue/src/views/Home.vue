<template>
  <div class="home-container">
    <van-search
      shape="round"
      background="#ffffff"
      placeholder="请输入商品名称"
      @focus="onfocus"
    />
    <van-tabs v-model="active" line-width="30px" :sticky="issticky" animated>
      <van-tab title="首页">
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" class="my-swipe">
          <van-swipe-item
            class="swipe-item"
            v-for="(image, index) in images"
            :key="index"
          >
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
        <!-- 商品列表 -->
        <div class="goodslist">
          <div class="_column">
            <ShowGood v-for="index in 10" :key="index"></ShowGood>
          </div>
          <div class="_column">
            <ShowGood v-for="index in 10" :key="index"></ShowGood>
          </div>
        </div>
      </van-tab>
      <van-tab title="附近">
        附近
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import ShowGood from '../components/ShowGood.vue'
export default {
  components: {
    ShowGood
  },
  data() {
    return {
      active: '0',
      issticky: true,
      images: [
        'http://localhost:2999/banners/banner1.png',
        'http://localhost:2999/banners/banner2.jpg'
      ]
    }
  },
  methods: {
    onfocus() {
      console.log('focus')
      this.$router.push({ path: 'search' })
    }
  }
}
</script>

<style lang="stylus">
.home-container {
  width: 100%;
  height: calc(100vh - 50px);

  overflow: scroll;
  .my-swipe .swipe-item {
    width: 100%;
    height: 100px;
    overflow: hidden;
    img {
      width: 100%;
      height: 200px;
    }
  }
  .goodslist {
    display: flex;
    ._column {

      width: 50vw;

    }
  }
}
</style>
