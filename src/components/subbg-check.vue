<template>
  <div class="jumbotron">
    <h1>总收入</h1>
    <p>{{totalmoney}}元</p>
    <a-button>提现</a-button>
  </div>
</template>

<script>
    import postdata from '../postdata'

    export default {
        name: 'check',
        data() {
            return {
                totalmoney: postdata.sum
            }
        }
    }
</script>

<style scoped>

</style>