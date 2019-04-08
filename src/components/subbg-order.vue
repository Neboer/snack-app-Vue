<template>
  <a-menu mode="horizontal" style="text-align: left;" :defaultSelectedKeys="['undelivered']">
    <a-menu-item key="undelivered">未派送</a-menu-item>
    <a-menu-item key="delivered">已派送</a-menu-item>
    <a-menu-item key="received">已收货</a-menu-item>
    <a-menu-item key="returned">已退款</a-menu-item>
  </a-menu>
</template>

<script>
  export default {
    name: 'subbg-order'
  }
</script>

<style scoped>

</style>
