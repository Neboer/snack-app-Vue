<template>
  <div id="app">
    <img src="./assets/logo-bg.png" alt="snack-logo" v-if="false">
    <Login :isHidden="!isLogin"/>
    <Hello :isHidden="isLogin" @login="login"/>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'
  import Login from './components/login-form'
  import Hello from './components/hello'

  export default {
    name: 'App',
    components: {Login, Hello},
    data() {
      return {
        isLogin: false
      }
    },
    methods: {
      login() {
        this.isLogin = true;
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
