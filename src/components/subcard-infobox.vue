<template>
    <a-modal title="Title" onOk="handleOk">
        <template slot="footer">
            <a-button key="back" @click="handleCancel">取消</a-button>
            <a-button key="submit" type="primary" :loading="loading" @click="handleOk">
                {{submitText}}
            </a-button>
        </template>

    </a-modal>
</template>

<script>
    export default {
        name: "subcard-infobox",
        props: {
            submitText: String,

        },
        data() {
            return {
                loading: false
            }
        }
    }
</script>

<style scoped>

</style>