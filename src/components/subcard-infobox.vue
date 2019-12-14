<template>
    <a-modal :title="title" v-model="visible">
        商品名称：
        <a-input v-model="name"/>
        商品价格：
        <a-input v-model="price"/>
        库存量：
        <a-input v-model="storage"/>
        商品图片地址：
        <a-input v-model="pictureSource"/>
        <template slot="footer">
            <a-button key="back" @click="handleCancel">取消</a-button>
            <a-button key="submit" type="primary" :loading="loading" @click="onOk">
                {{submitText}}
            </a-button>
        </template>
    </a-modal>
</template>

<script>
    export default {
        name: "subcard-infobox",
        props: {
            //　这个值，update和insert
            type: String
        },
        data() {
            return {
                //　这些值都是commodity传过来的。而commodity传入的值的来源应该是与此组件同级的card组件。
                visible: false,
                loading: false,
                commodityId: 0,
                name: "",
                price: "",
                storage: "",
                pictureSource: ""
            }
        },
        computed: {
            submitText() {
                if (this.type === 'update') {
                    return '更新'
                } else {
                    return '增加'
                }
            },
            title() {
                if (this.type === 'update') {
                    return '更新现有的商品'
                } else {
                    return '添加一个新商品'
                }
            }
        },
        methods: {
            // 不同类型的subcard所起到的功能也不一样。
            addSelfCommodity() {
                return this.axios.post('/api/commodities/insert',
                    {name: this.name, price: this.price, storage: this.storage, pictureSource: this.pictureSource});
            },
            updateSelfCommodity() {
                return this.axios.post('/api/commodities/update/' + this.commodityId.toString(),
                    {name: this.name, price: this.price, storage: this.storage, pictureSource: this.pictureSource})
            },
            handleCancel() {
                this.visible = false
            },
            onOk() {
                this.loading = true;
                if (this.type === 'update') {
                    this.updateSelfCommodity().then(() => {
                        this.$message.success('更新成功');
                        this.$emit('refresh');
                        this.loading = false;
                        this.visible = false
                    })
                } else {
                    this.addSelfCommodity().then(() => {
                        this.$message.success('插入成功');
                        this.$emit('refresh');
                        this.loading = false;
                        this.visible = false
                    });
                }
            }
        }
    }
</script>

<style scoped>

</style>