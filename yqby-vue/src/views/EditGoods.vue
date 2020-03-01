<template>
  <div>
    <van-nav-bar title="上架商品" left-text="返回" left-arrow />
    <van-field type="text" v-model="goods.name" label="商品名" placeholder />
    <van-field
      readonly
      clickable
      label="商品类别"
      placeholder="选择商品类别"
      @click="showPicker = true"
    />
    <van-popup v-model="showPicker" position="bottom">
      <van-picker :columns="columns" @change="onChange" />
    </van-popup>
    <div class="tips">上传商品图片(jpg)，最多5张</div>
    <van-uploader
      :before-read="checkType"
      :after-read="upload"
      v-model="goods.imgList"
      multiple
      :max-count="2"
    />

    <van-field type="text" v-model="goods.oprice" label="原价" placeholder />
    <van-field type="text" v-model="goods.price" label="现价" placeholder />
    <van-field
      type="textarea"
      v-model="goods.description"
      label="商品描述"
      autosize
      placeholder="品牌型号，新旧程度，入手渠道，转手原因......"
    />
    <van-button style="margin-top:10px" type="primary" block @click="submit"
      >提交商品</van-button
    >
  </div>
</template>
<style lang="stylus">
.tips {
  font-size: 13px;
  background-color: #fff;
  padding: 8px 12px;
  color: #969799;
}
</style>
<script>
let initCat = {}
export default {
  data() {
    return {
      showPicker: false,
      goods: {
        name: '2333',
        oprice: '',
        price: '',
        description: '',
        category: '',
        imgList: []
      },
      categories: [],

      columns: []
    }
  },
  created() {
    this.axios({ method: 'get', url: 'goods/category' }).then(res => {
      // 用于查询id
      this.categories = res.data
      res.data.forEach(item => {
        initCat[item.name] = [...item.sub.map(e => e.name)]
      })
      this.columns.push(
        { values: Object.keys(initCat) },
        { values: initCat['书籍'] }
      )
    })
  },
  methods: {
    onChange(picker, values, index) {
      picker.setColumnValues(1, initCat[values[0]])
      console.log(`${values}被选中`)
    },
    checkType(file) {
      if (file.type !== 'image/jpeg') {
        this.$toast('请上传jpg格式图片')
        return false
      }
      return true
    },
    async upload(file) {
      let data = new FormData()
      data.append('file', file.file)
      console.log(file)
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      const res = await this.$http.post('goods/add/pics', data, config)
      console.log(res)
      this.goods.imgList.pop()
      this.goods.imgList.push({ url: res.data, isImage: true })
    },
    async submit() {}
  }
}
</script>
