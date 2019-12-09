<template>
    <div>
        <a-list>
            <a-list-item :key="index" v-for="(mes, index) in messages">
                <div style="margin: 20px 42px; float: left">
                    <h3 style="float: left">{{mes.title}}</h3>
                    <p>{{(new Date(mes.time)).toLocaleDateString()}}</p>
                </div>
                <div style="flex-grow: 1; margin: auto">
                    <div style="font-size: 20px">{{mes.body}}</div>
                </div>
                <a-button style="margin: auto 5%" @click="remove_current_message(index, mes.mes_id)">标记已读</a-button>
            </a-list-item>
        </a-list>
    </div>
</template>

<script>
    import data from "../postdata.json"

    export default {
        name: "subbg-message",
        data() {
            return {
                messages: data.notification,
            }
        },
        methods: {
            remove_current_message: function (index, mesId) {
                this.messages.splice(index, 1);
                this.axios.get('/api/messages/delete/' + mesId.toString())
            }
        },
        mounted() {
            this.$message.loading('loading...', 0);
            this.axios.get('/api/messages').then((messageList) => {
                this.messages = messageList.data;
                this.$message.destroy();
            })
        }
    }
</script>

<style>

</style>