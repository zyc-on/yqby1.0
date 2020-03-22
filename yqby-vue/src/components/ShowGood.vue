<template>
  <div class="good" @click="handleClick">
    <div class="pic">
      <img :src="`http://localhost:3000${images}`" alt="" />
    </div>
    <div class="des">
      <h3 class="name">{{ name }}</h3>
      <div class="cat">
        <span> {{ subcategory.name }}</span>
      </div>
      <div class="bottom">
        <div class="price">
          <span class="label">￥</span>
          <span class="content">{{ price }}</span>
          <span class="olabel">￥</span>
          <del class="oprice">{{ oprice }}</del>
        </div>
        <div class="owner">
          <img :src="`http://localhost:3000${images}`" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const props = {
  id: Number,
  name: String,
  images: String,
  oprice: Number,
  price: Number,
  rate: Number,
  description: String,
  category: Object,
  categoryId: Number,
  subcategory: Object,
  subcategoryId: Number,
  avatar: String,
  userId: Number
}
export default {
  data() {
    return {}
  },
  props: props,
  created() {
    console.log('haha')
  },
  methods: {
    getARandomHeight(start, end) {
      const num = Math.random()
      return Math.ceil(start + (end - start) * num)
    },
    //点击跳转详情
    handleClick() {
      this.$router.push({
        name: `detail`,
        params: {
          id: this.id
        }
      })
    }
  }
}
</script>

<style lang="stylus">

.good{
width: 94%;
margin: 0 3% 16px 3%;
overflow: hidden;
border-radius: 10px;
/* background-color: red; */
.pic{
    img{
        width: 100%;
    }

}
.des{
    height: 90px;
    width: 100%;
    background-color: #fff;
    padding:0 16px;
    box-sizing: border-box;
    .name{
        margin-top:10px;
        font-size:14px;
        display: inline-block;
        white-space: nowrap;
        width: 100%;
        overflow: hidden;

    }
    .cat{

        span{
            font-size: 6px;
            padding: 0 5px;
            border: 0.5px solid   GREY;
            border-radius: 3px;
            color: GREY;
        }
    }
    .bottom{
        margin: 10px 0;
        width: 100%;
        height: 20px;
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
       .owner{
           float: right;
           width: 20px;
           height: 20px;
           border-radius: 100%;
           overflow: hidden;
           img{
               width: 100%;
           }
       }

    }

}
}
</style>
