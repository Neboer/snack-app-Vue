<template>
  <a-card class="show-commodity-card">
    <img
      alt="example"
      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
      slot="cover"
    />
    <p style="font-size: large;">{{name}}</p>
    <p style="line-height: 0.4">单价￥{{price}}50</p>
    <p style="line-height: 0.4">库存{{last}}60</p>
    <p style="line-height: 0.4">折扣{{discount}}</p>
    <p style="line-height: 0.4">状态{{status}}</p>
    <a-button type="primary">修改</a-button>
    <a-button type="danger">删除</a-button>
  </a-card>
</template>

<script>
  export default {
    name: 'subcommo-card',
    props: {
      price: Number,
      last: Number,
      discount: Number,
      status: String,
      name: String
    }
  }
</script>

<style scoped>
  .show-commodity-card {
    width: 200px;
    float: left;
    margin: 10px;
    text-align: center;
  }
</style>
