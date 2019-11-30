<template>
  <div class="container" id="inner" style="margin-top: 50px">
    <div class="jumbotron">
      <h1>您好，{{name}}！</h1>
      <p>总销售额为{{sum}}元，总销量为{{volumn}}件</p>
      <p>
        <!--        <a class="btn btn-lg btn-primary" href="money.html" role="button">查看详情 &raquo;</a>-->
        <a-button type="primary" size="large" @click="$emit('jump')">查看详情>></a-button>
      </p>
    </div>
    <div class="jumbotron">
      <h1>商家信息</h1>
      <p>店铺名称：{{shopname}}</p>
      <p>店铺号：{{shopid}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'submain-hello',
        props: {
            name: String,
            sum: Number,
            volumn: Number,
            shopname: String,
            shopid: String
        }
    }
</script>

<style scoped>

</style>
