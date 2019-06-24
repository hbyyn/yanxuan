<template>
<div>
    <div class="page" id="home">

        <!-- 头部 -->
        <home-header></home-header>

        <!-- 菜单 -->
        <home-menu v-model="slectMenu"></home-menu>

        <!-- 内容 -->
        <keep-alive>
            <top-content v-if="slectMenu === 0"></top-content>
            <menu-content v-else :id="menuId"></menu-content>
        </keep-alive>

    </div>
    <router-view></router-view>
</div>
</template>

<script>
import HomeHeader from './children/home-header'
import HomeMenu from './children/home-menu'
import topContent from './children/top-content'
import menuContent from './children/menu-content'
export default {
    components: {
        [HomeHeader.name]: HomeHeader,
        [HomeMenu.name]: HomeMenu,
        [topContent.name]: topContent,
        [menuContent.name]: menuContent
    },
    data(){
        return {
            slectMenu: 0
        }
    },
    computed: {
        // 计算选中菜单的id值
        menuId(){
            if(this.slectMenu > 0){
                // 计算id
                let index = this.slectMenu-1;//除去第一个推荐的菜单
                // 获得id
                return this.$store.state.home.menuList[index].id;
            }else{
                return null;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
#home{
    .content{
        width: 100%;
        position: absolute;
        top: 78px;
        left: 0;
        bottom: 0;
    }
}
</style>
