<template>
<div class="content menu">
    <h1>菜单的内容</h1>
</div>
</template>

<script>
export default {
    name: 'menu-content',
    props: {
        id: [String, Number]
    },
    watch: {
        id: {
            handler(newVal){
                this.$store.dispatch('goods/getCateDetailAction', {id: this.id});
            },
            immediate: true
        }
    },

}
</script>

<style>

</style>
