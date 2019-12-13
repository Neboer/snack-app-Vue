<template>
    <div>
        <a-list>
            <a-list-item :key="index" v-for="(mes, index) in messages">
                <div style="margin: 20px 42px; float: left">
                    <h3 style="float: left">{{mes.title}}</h3>
                    <p>{{(new Date(mes.time)).toLocaleString()}}</p>
                </div>
                <div style="flex-grow: 1; margin: auto">
                    <div style="font-size: 20px">{{mes.body}}</div>
                </div>
                <a-button style="margin: auto 5%" @click="removeCurrentMessage(index, mes.mes_id)">标记已读</a-button>
            </a-list-item>
            <a-list-item v-if="addNew">
                <div style="margin: 20px 42px; float: left; text-align: left">
                    <h3 style="float: left">
                        <a-input placeholder="标题" style="height: 43px" v-model="newTitle"/>
                    </h3>
                    <p>{{(new Date()).toLocaleString()}}</p>
                </div>
                <div style="flex-grow: 1; margin: auto">
                    <div style="font-size: 20px">
                        <a-textarea placeholder="内容" :autosize="{ minRows: 2, maxRows: 6 }"
                                    v-model="newBody"/>
                    </div>
                </div>
                <a-button type="primary" style="margin: auto 5%" @click="addNewMessage">确定
                </a-button>
            </a-list-item>
            <div style="text-align: center;">
                <div style="width: fit-content;padding: 10px;margin: auto;border: solid black;font-size: large"
                     v-if="!addNew" @click="triggerEdit($event)">
                    <a-icon type="plus-square" theme="filled"
                            style="font-size: large;position: relative;top: -4px;"/>
                    <span>添加新消息</span>
                </div>
                <div style="width: fit-content;padding: 10px;margin: auto;border: solid black;font-size: large"
                     v-if="addNew" @click="triggerEdit($event)">
                    <a-icon type="minus-square" theme="filled"
                            style="font-size: large;position: relative;top: -4px;"/>
                    <span>收回编辑器</span>
                </div>
            </div>
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
                addNew: false,
                newTitle: "",
                newBody: ""
            }
        },
        methods: {
            removeCurrentMessage: function (index, mesId) {
                this.axios.get('/api/messages/delete/' + mesId.toString()).then(() => {
                    this.updateMessages();
                })
            },
            updateMessages: function () {
                this.$message.loading('loading...', 0);
                this.axios.get('/api/messages').then((messageList) => {
                    this.messages = messageList.data;
                    this.$emit('updateCounts');
                    this.$message.destroy();
                })
            },
            addNewMessage: function () {
                const stringer = {title: this.newTitle, body: this.newBody};
                this.axios.post('/api/messages/insert', stringer).then(() => {
                    this.$message.success('成功提交');
                    this.newTitle = "";
                    this.newBody = "";
                    this.addNew = false;
                    this.updateMessages();
                })
            },
            triggerEdit: function (event) {
                this.addNew = !this.addNew
            }
        },
        mounted() {
            this.updateMessages();
        }
    }
</script>

<style>

</style>