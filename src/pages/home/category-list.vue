<template>
<div class="page subpage" id="category-list">
    <app-header ></app-header>
    <menu-content :id="id"></menu-content>
</div>
</template>

<script>
import menuContent from './children/menu-content'
export default {
    components: {
        [menuContent.name]: menuContent
    },
    props: ['id']

}
</script>

<style scoped lang="scss">
#category-list{
    .content{
        padding-top: 44px;
    }
}
</style>
