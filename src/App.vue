<template>
  <div id="app">
    <Login v-if="!isLogin" @login="login"/>
    <Main :username="username" :userid="userid" v-if="isLogin"/>
  </div>
</template>

<script>
    import Login from './components/login-form'
    import Main from './components/main'

    export default {
        name: 'App',
        components: {Login, Main},
        data() {
            return {
                isLogin: false,
                username: '',
                userid: ''
            }
        },
        methods: {
            login: function (values) {
                this.username = values.username;
                this.userid = values.userid;
                this.isLogin = true
            }
        }
    }
</script>
<!--<style>-->
<!--  #app {-->
<!--    font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
<!--    -webkit-font-smoothing: antialiased;-->
<!--    -moz-osx-font-smoothing: grayscale;-->
<!--    text-align: center;-->
<!--    color: #2c3e50;-->
<!--  }-->
<!--</style>-->
