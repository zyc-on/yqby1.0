<template>
  <div>
    <van-nav-bar title="" left-text="" left-arrow>
      <template #right>
        <van-icon name="search" />
      </template>
    </van-nav-bar>
    <nav class="userInfo">
      <section class="avatarBox"><img :src="avatar" alt="" /></section>
      <section class="user">
        <h3 class="nickname">{{ name }}</h3>
        <section class="publishtime">
          {{ publishtime }}发布于{{ address }}
        </section>
      </section>
      <van-button
        round
        type="info"
        size="small"
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
        >关注</van-button
      >
    </nav>
    <section class="detail">
      <h3 class="price">
        <span class="label">￥</span>
        <span class="content">{{ price }}</span>
        <span class="olabel">￥</span>
        <del class="oprice">{{ oprice }}</del>
      </h3>
      <article class="description">
        {{ description }}
      </article>
      <section class="imgbox">
        <img v-for="(img, index) in images" :src="img" :key="index" alt="" />
      </section>
    </section>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="举报" />
      <van-goods-action-icon icon="shop-o" text="喜欢" />
      <van-goods-action-button color="#7232dd" type="danger" text="私聊" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'bulubulu',
      id: 1,
      price: 100,
      oprice: 200,
      publishtime: '5天前',
      address: '武汉工程大学',
      images: [
        'data:image/jpeg;base64,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',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJA9xKHyJ7oQTSbtTji86ZHlDxdshWhrHSosi0RYog2ULw6GPL'
      ],
      description:
        'mac mini 1500包邮，很久以前给爸妈买的，他们用不惯iOS系统，一直没怎么用了，侧面漆面有一点小瑕疵，不知道怎么造成的，一直放那也没动过，，，最近换了windows，这个也没什么用，也老了。',
      avatar:
        'https://images.pexels.com/photos/3747446/pexels-photo-3747446.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
  },
  created() {
    this.id = this.$route.params.id
  }
}
</script>

<style lang="stylus">
.userInfo {
  position: sticky;
  top: 0;
  height: 60px;
  background-color: #fff;
  overflow: hidden;
  display: flex;

  .avatarBox {
    overflow: hidden;
    margin: 5px 0 0 20px;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    img {
      width: 100%;
    }
  }
  .user {
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .nickname {
      font-weight: 600;
    }
    .publishtime{
        font-size: 14px;
        color: gray;
    }
  }
  .van-button{
    margin: 20px;
  }
}

.detail{
display: flex;
flex-direction: column;
  padding: 20px;
  background-color: #fff;

  .price{
           float: left;
           .label{
               font-size: 10px;
               vertical-align: middle;
           }
          .content, .label{
               color: red;
           }
           .olabel, .oprice{
            font-size: 10px;
            color: grey;
           }
       }
       .description{
         text-indent: 2em;
         line-height: 30px;
          margin: 15px 0;
       }
       .imgbox{
         border-radius: 20px;
         margin: 0 auto;
         width: 100%;
         overflow: hidden;


         img{
           width: 100%;
           height: auto;
         }
       }
}
</style>
