<template>
    <a-card class="show-commodity-card">
        <b-img thumbnail
               :src="src"
               class="picture"
        />
        <h5>{{name}}</h5>
        <div class="contenter">
                    <span class="price">
                  <span>¥</span><strong>{{price}}</strong>
                </span>
            <span style="float: right;margin-top: 5px">库存{{last}}60</span>
            <div>
                <span>折扣:{{discount}}</span>
                <span>状态:{{status}}</span>
            </div>
            <a-button-group class="bottom-buttons">
                <a-button type="primary" size="large" class="fill-line-button">修改</a-button>
                <a-button type="danger" size="large" class="fill-line-button">删除</a-button>
            </a-button-group>
        </div>

    </a-card>
</template>

<script>
    export default {
        name: 'subcommo-card',
        props: {
            price: Number,
            last: Number,
            discount: Number,
            status: String,
            name: String,
            src: String
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

    .contenter{
        position: absolute;
        bottom: 20px;
    }
    .ant-card-body {
        padding: 0;
    }

</style>
