<template>
  <div class="good">
    <div class="pic">
      <img :src="pic" alt="" />
    </div>
    <div class="des">
      <h3 class="name">{{ name }}</h3>
      <div class="cat">
        <span> {{ category }}</span>
      </div>
      <div class="bottom">
        <div class="price">
          <span class="label">￥</span>
          <span class="content">{{ price }}</span>
          <span class="olabel">￥</span>
          <del class="oprice">{{ oprice }}</del>
        </div>
        <div class="owner">
          <img :src="avatar" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const testProps = {
  name: {
    type: String,
    default: '深入浅出vueJS '
  },
  pic: {
    type: String,
    default:
      'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1122195463,3596828118&fm=15&gp=0.jpg'
  },
  oprice: { type: Number, default: 39.99 },
  price: { type: Number, default: 9.99 },
  rate: { type: Number, default: 9 },
  description: { type: String, default: '买了都没看一手书' },
  category: { type: String, default: '计算机书籍' },
  uid: {
    type: Number,
    default: 123
  },
  avatar: {
    type: String,
    default:
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3007002444,3106253283&fm=26&gp=0.jpg'
  }
}
const props = {
  name: String,
  pics: String,
  oprice: Number,
  price: Number,
  rate: Number,
  description: String,
  category: String,
  uid: Number
}
export default {
  data() {
    return {
      //   style: {
      //     height: this.getARandomHeight(150, 250) + 'px'
      //   }
    }
  },
  props: testProps,
  created() {},
  methods: {
    getARandomHeight(start, end) {
      const num = Math.random()
      return Math.ceil(start + (end - start) * num)
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
