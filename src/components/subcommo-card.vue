<template>
    <div>
        <a-card class="show-commodity-card">
            <b-img thumbnail
                   :src="pictureSource"
                   class="picture"
            />
            <h5>{{name}}</h5>
            <img src="../assets/cutline.png" alt="cut line" class="cut_line"/>
            <div class="contenter">
                <span class="price"><span>¥</span><strong>{{price.toFixed(2)}}</strong></span>
                <span style="float: right;margin-top: 3px; margin-right: 24px">库存{{storage}}</span>
                <a-button-group class="bottom-buttons">
                    <a-button type="primary" class="fill-line-button" icon="edit" @click="clickEditButton">修改</a-button>
                    <a-button type="danger" class="fill-line-button" icon="delete" @click="clickDeleteButton">删除
                    </a-button>
                </a-button-group>
            </div>
        </a-card>
    </div>
</template>

<script>

    export default {
        name: 'subcommo-card',
        props: {
            price: Number,
            storage: Number,
            name: String,
            pictureSource: String,
            commodityId: Number
        },
        data() {
            return {
                // editInfoBox: true
            }
        },
        methods: {
            updateSelfCommodity(name, price, storage, pictureSource) {
                return this.axios.post('/api/commodities/update/' + this.commodityId.toString(),
                    {name, price, storage, pictureSource})
            },
            deleteSelfCommodity() {
                return this.axios.get('/api/commodities/delete/' + this.commodityId.toString())
            },

            clickDeleteButton() {
                const vueRoot = this;
                this.$confirm({
                    title: '确认删除此商品？',
                    content: this.name,
                    okText: '确认',
                    okType: 'danger',
                    cancelText: '取消',
                    onOk() {
                        // console.log(this);
                        vueRoot.deleteSelfCommodity().then(() => vueRoot.$emit("refresh"))
                    }
                });
            },
            clickEditButton() {
                this.$emit('edit', this.commodityId, this.name, this.price, this.storage, this.pictureSource);
            }
        }
    }
</script>

<style scoped>
    .show-commodity-card {
        width: 200px;
        height: 350px;
        float: left;
        margin: 10px;
    }

    .price {
        color: red;
        font-size: large;
    }

    .bottom-buttons {
        width: max-content;
    }

    .fill-line-button {
        width: 76px;
    }

    .picture {
        max-width: 150px;
        max-height: 150px;
    }

    .cut_line {
        position: absolute;
        max-width: 150px;
        bottom: 100px;
    }

    .contenter {
        position: absolute;
        bottom: 20px;
    }

    .ant-card-body {
        padding: 0;
    }

</style>
