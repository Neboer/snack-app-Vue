<template>
  <a-layout>
    <a-layout-sider style="height: fit-content">
      <a-menu :defaultSelectedKeys="['1']" style="width: 200px" class="sidebar">
        <a-menu-item key="1">商品管理</a-menu-item>
        <a-menu-item key="2">订单管理</a-menu-item>
        <a-menu-item key="3">结算中心</a-menu-item>
        <a-menu-item key="4">人员管理</a-menu-item>
        <a-menu-item key="5">消息管理</a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout-content>
      <commodity style="width: auto;text-align: left" />
      <order hidden/>
    </a-layout-content>
  </a-layout>
</template>

<script>
  import commodity from './subbg-commodity'
  import order from './subbg-order'

  export default {
    name: 'submain-background.vue',
    components: {commodity, order}
  }
</script>

<!--<style scoped>-->
<!--</style>-->
