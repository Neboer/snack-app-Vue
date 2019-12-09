<template>
    <a-layout>
        <a-layout-sider style="height: fit-content">
            <a-menu :defaultSelectedKeys="['3']" style="width: 200px">
                <a-menu-item key="1" @click="bg_page_status='commodity'">商品管理</a-menu-item>
                <a-menu-item key="2" @click="bg_page_status='order'">订单管理</a-menu-item>
                <a-menu-item key="3" @click="bg_page_status='check'">结算中心</a-menu-item>
                <a-menu-item key="4" @click="bg_page_status='stuff'">人员管理</a-menu-item>
                <a-menu-item key="5" @click="bg_page_status='message'">消息管理
                    <a-badge :count="message_count" style="float: right"/>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout-content>
            <commodity style="padding: 20px;width: auto;text-align: left" v-if="bg_page_status==='commodity'"/>
            <order style="padding: 20px;width: auto;text-align: left" v-if="bg_page_status==='order'"/>
            <check :totalmoney="0" v-if="bg_page_status==='check'"/>
            <stuff v-if="bg_page_status==='stuff'"/>
            <message v-if="bg_page_status==='message'"/>
        </a-layout-content>
    </a-layout>
</template>

<script>
    import commodity from './subbg-commodity'
    import order from './subbg-order'
    import check from './subbg-check'
    import stuff from './subbg-staff'
    import message from './subbg-message'

    export default {
        name: 'submain-background.vue',
        components: {commodity, order, check, stuff, message},
        props: {origion_page_status: String, message_count: Number},
        data() {
            return {
                bg_page_status: this.origion_page_status
            }
        }
    }
</script>

<!--<style scoped>-->
<!--</style>-->
