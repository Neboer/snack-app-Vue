<template>
    <div>
        <a-row v-bind:key="mes" v-for="mes in messages">
            {{mes}}
        </a-row>
    </div>
</template>

<script>
    export default {
        name: "subbg-message",
        data() {
            return {
                messages: ["mes one!", "mes two!", "what is thress?"]
            }
        }
    }
</script>

<style scoped>

</style>