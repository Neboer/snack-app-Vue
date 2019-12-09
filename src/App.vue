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
                this.axios.post('/api/login', {username: values.username, password: values.password}).then((res) => {
                    if (res.status === 200) {
                        this.userid = res.data.id;
                        this.username = values.username;
                        this.isLogin = true
                    } else {
                        this.$message.info('用户名或密码错误！');
                    }
                }, (err) => {
                    if (err) {
                        this.$message.info('用户名或密码错误！');
                    }
                });
            }
        },

        mounted() {
            if (this.$cookies.get('JSESSIONID')) {
                this.$message.loading('Action in progress..', 0);
                this.axios.post('/api/login', "").then((res) => {
                    this.userid = res.data.id;
                    this.username = res.data.username;
                    this.$message.destroy();
                    this.isLogin = true;
                    this.$message.success('欢迎您，' + this.username)
                },() => this.$cookies.remove('JSESSIONID'))
            }
            console.log();
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
