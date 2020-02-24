<template>
  <div id="setInfo">
    <van-nav-bar
      title="我的资料"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <Title content="基本信息"></Title>
    <Card>
      <van-cell title="会员id" :value="id" />
      <van-cell title="头像" is-link value-class="" @click="changeAvatar">
        <van-image width="30" height="30" :src="avatar" />
      </van-cell>
      <van-cell title="昵称" is-link :value="name" />
      <van-cell v-if="sex" title="性别" is-link value="男" />
      <van-cell v-else title="性别" is-link value="女" />
      <van-cell title="院校" is-link :value="school" />
      <van-cell title="地址" is-link :value="location" />

      <van-cell title="自我介绍" is-link value="" />
    </Card>
  </div>
</template>
<script>
import Title from '../components/Title.vue'
import Card from '../components/Card.vue'

export default {
  components: { Title, Card },
  data() {
    return {
      id: 123,
      name: '大坏蛋',
      sex: 1,
      motto: '分享我的二手书',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1aCKekPOSd8UrJwB-ssnYev0QEYYa8hjhVaRMEvs3pMLq3Ig1kg&s',
      school: '武汉工程大学',
      location: '泰塑10栋'
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },

    // 改变头像
    changeAvatar() {
      this.$router.push({ path: 'changeAvatar' })
    }
  }
}
</script>
<style lang="stylus"></style>
