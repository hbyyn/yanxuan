<template>
<div class="home-menu">
    <span v-for="(item, index) in menuList" :key="item.id"
        :class="{active: value === index}"
        @click="selectMenuItem(index)">
        {{item.name}}
    </span>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'home-menu',
    props: {
        value: Number
    },
    computed: {
        ...mapState({
            // 获得菜单列表数据
            list: state=>state.home.menuList
        }),
        menuList(){
            return [{id: 0, name: '推荐'}, ...this.list];
        }
    },
    methods: {
        // 菜单选项的点击事件
        selectMenuItem(index){
            this.$emit('input', index);
        }
    },
    created(){
        // 请求菜单列表
        this.$store.dispatch('home/getMenuAction');
    }
}
</script>

<style socped>
.home-menu{
    width: 100%;
    height: 34px;
    background: paleturquoise;
    position: absolute;
    left: 0;
    top: 44px;
}
.active{
    color: brown;
}
</style>
