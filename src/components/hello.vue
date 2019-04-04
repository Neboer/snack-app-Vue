<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header style="text-align: left;
        color: white;font-size: xx-large">
        <img src="../assets/logo-sm.png" alt="logo"/>
        凌遇卖家版
        <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['2']"
          :style="{ lineHeight: '64px' }"
          style="float: right;"
        >
          <a-menu-item key="1">概览</a-menu-item>
          <a-menu-item key="2">后台</a-menu-item>
          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper">我的</span>
            <a-menu-item key="setting:1">修改密码</a-menu-item>
            <a-menu-item key="setting:2">注销</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-header>
      <a-layout-content style="margin-left: 50px">
        <h1>您好， {{username}}！</h1>
        <p1>总销售额为{{sell_money}}元，总销量为{{sell_amount}}件</p1>
      </a-layout-content>
      <a-layout-content>商家信息 店铺名称： 店铺号：</a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
  export default {
    name: 'hello',
    // props: ['username'],
    props: {
      isHidden: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        username: 'ok',
        sell_money: '0',
        sell_amount: '0'
      }
    },
    methods: {
      setUsername(name) {
        this.username = name
      }
    }
  }
</script>
