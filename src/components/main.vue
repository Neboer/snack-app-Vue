<template>
  <div id="main-profile-vue" class="main-profile-vue">
    <a-layout>
      <a-layout-header style="text-align: left;
        color: white;font-size: xx-large">
        <img src="../assets/logo-sm.png" alt="logo"/>
        凌遇卖家版
        <small style="font-size: large">{{username}} ({{userid}})</small>
        <a-menu
          theme="dark"
          mode="horizontal"
          :defaultSelectedKeys="['1']"
          :style="{ lineHeight: '64px' }"
          style="float: right;"
        >
          <a-menu-item key="1" @click="page_status='overview'">概览</a-menu-item><!-- overview -->
          <a-menu-item key="2" @click="page_status='background'">后台</a-menu-item><!-- background -->
          <a-sub-menu>
            <span slot="title" class="submenu-title-wrapper">我的</span>
            <a-menu-item key="setting:1">修改密码</a-menu-item>
            <a-menu-item key="setting:2">注销</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-header>
      <a-layout-content>
        <hello name="曹子帆" sum=100 volumn=10 shopname="曹子帆de店" shopid="12df4sdff" v-if="page_status==='overview'"/>
        <background v-if="page_status==='background'"/>
      </a-layout-content>
      <a-layout-footer>陕ICP备16001080-1<br/>
        西安凌遇光来网络科技服务部@2019
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<script>
  import hello from './submain-hello'
  import background from './submain-background'

  export default {
    name: 'main',
    components: {hello, background},
    comments: {hello},
    props: {
      username: String,
      userid: String
    },
    data() {
      return {page_status: 'overview'}
    }
    // methods: {
    //   setUsername(name) {
    //     this.username = name
    //   }
    // }
  }
</script>
<style>
  .main-profile-vue {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
