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
      :value="category"
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
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      showPicker: false,
      // 表单分类
      category: '未分类',
      goods: {
        name: '',
        images: '',
        oprice: '',
        price: '',
        rate: '',
        description: '',
        subcategoryId: '1',
        categoryId: '1'
      }
    }
  },
  created() {
    this.getAllCategories()
  },
  computed: {
    ...mapGetters('categories', ['sub', 'columns', 'getSubId', 'getMainId'])
  },
  methods: {
    ...mapActions('goods', ['addGood']),
    ...mapActions('categories', ['getAllCategories']),

    // 分类
    onChange(picker, values, index) {
      // 动态改变
      picker.setColumnValues(1, this.sub(values[0]))
      this.category = values.join(',')
      // 获得Id
      this.goods.subcategoryId = this.getSubId(values[1])
      this.goods.categoryId = this.getMainId(values[0])
    },

    // 图片格式化
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
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      const res = await this.$http.post('/goods/images', data, config)
      console.log(res);
      
    },
    submit() {
      console.log(this.goods)

      this.addGood(this.goods)
    }
  }
}
</script>
