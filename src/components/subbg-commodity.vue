<template>
    <div>
        <a-menu mode="horizontal" style="text-align: left;" :defaultSelectedKeys="['currents']">
            <a-menu-item key="currents">已有商品</a-menu-item>
            <a-menu-item key="add">添加商品</a-menu-item>
        </a-menu>
        <!--        <p>-->
        <!--            <a-input-search placeholder="input search text" @search="onSearch" enterButton size="large"-->
        <!--                            style="width: auto; text-align: left"/>-->
        <!--        </p>-->
        <card v-for="(commodity,key) in commodityList"
              :name="commodity.name" :price="commodity.price" :commodityId="commodity.id"
              :storage="commodity.storage" :pictureSource="commodity.pictureSource" :key="key"
              @refreah="getCommodityList"/>
    </div>
</template>

<script>
    import card from './subcommo-card'

    export default {
        name: 'subbg-commodity',
        components: {card},
        data() {
            return {
                commodityList: [],
            }
        },
        methods: {
            success() {
                const hide = this.$message.loading('Action in progress..', 0);
                setTimeout(hide, 2500);
            },
            getCommodityList() {
                return this.axios.get('/api/commodities').then(dataer => {
                    this.commodityList = dataer.data;
                })
            },
            addCommodity(name, price, storage, pictureSource) {
                this.axios.post('/api/commodities/',
                    {name, price, storage, pictureSource})
                    .then(() => this.$message.success("成功。"));
            },
        },
        mounted() {
            this.$message.loading('加载商品信息...', 0);
            this.getCommodityList().then(() => this.$message.destroy());
        }
    }
</script>