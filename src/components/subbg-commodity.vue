<template>
    <div>
        <a-button style="float: right; margin: 10px" @click="showInsertInfoBox">添加商品</a-button>
        <a-menu mode="horizontal" style="text-align: left;" :defaultSelectedKeys="['currents']">
            <a-menu-item key="currents">已有商品</a-menu-item>
            <!--            <a-menu-item key="add">添加商品</a-menu-item>-->
        </a-menu>
        <!--        <p>-->
        <!--            <a-input-search placeholder="input search text" @search="onSearch" enterButton size="large"-->
        <!--                            style="width: auto; text-align: left"/>-->
        <!--        </p>-->
        <card v-for="(commodity,key) in commodityList"
              :name="commodity.name" :price="commodity.price" :commodityId="commodity.id"
              :storage="commodity.storage" :pictureSource="commodity.pictureSource" :key="key"
              @refresh="getCommodityList" @edit="showUpdateInfoBox"/>
        <info name-in="good" type="update" ref="infobox" @refresh="getCommodityList"/>
        <info name-in="good" type="insert" ref="insertbox" @refresh="getCommodityList"/>
    </div>
</template>

<script>
    import card from './subcommo-card'
    import info from './subcard-infobox'

    export default {
        name: 'subbg-commodity',
        components: {card, info},
        data() {
            return {
                commodityList: [],
            }
        },
        methods: {
            getCommodityList() {
                return this.axios.get('/api/commodities').then(dataer => {
                    this.commodityList = dataer.data;
                })
            },
            showUpdateInfoBox(id, name, price, storage, pictureSource) {
                this.$refs.infobox.name = name;
                this.$refs.infobox.price = price;
                this.$refs.infobox.storage = storage;
                this.$refs.infobox.pictureSource = pictureSource;
                this.$refs.infobox.commodityId = id;
                this.$refs.infobox.visible = true
            },
            showInsertInfoBox(event) {
                this.$refs.insertbox.visible = true
            }
        },
        mounted() {
            this.$message.loading('加载商品信息...', 0);
            this.getCommodityList().then(() => this.$message.destroy());
        }
    }
</script>