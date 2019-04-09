<template>
  <div>
    <a-menu mode="horizontal" style="text-align: left;" :defaultSelectedKeys="['currents']">
      <a-menu-item key="currents">已有商品</a-menu-item>
      <a-menu-item key="add">添加商品</a-menu-item>
    </a-menu>
    <p>
      <a-input-search placeholder="input search text" @search="onSearch" enterButton size="large"
                      style="width: auto; text-align: left"></a-input-search>
    </p>
    <card v-for="(commodity,key) in productlist" :name="commodity.name" :price="commodity.price"
    :last="commodity.last" :discount="commodity.discount" :src="commodity.src" :key="key"/>
  </div>
</template>

<script>
    import card from './subcommo-card'
    import postdata from '../postdata'

    export default {
        name: 'subbg-commodity',
        components: {card},
        data() {
            return {
                productlist: postdata.productlist
            }
        }
    }
</script>

<style scoped>

</style>
