<template>
  <div style="padding: 20px;">
    <a-menu mode="horizontal" style="text-align: left;" :defaultSelectedKeys="['currents']">
      <a-menu-item key="currents">已有商品</a-menu-item>
      <a-menu-item key="add">添加商品</a-menu-item>
    </a-menu>
    <p>
      <a-input-search placeholder="input search text" @search="onSearch" enterButton size="large"
                      style="width: auto; text-align: left"></a-input-search>
    </p>
<!--    <card name="蛇胆口服液" discount=50 price=60 last="5" status="1"/>-->
    <card/>    <card/>
    <card/>

  </div>
</template>

<script>
  import card from './subcommo-card'

  export default {
    name: 'subbg-commodity',
    components: {card}
  }
</script>

<style scoped>

</style>
