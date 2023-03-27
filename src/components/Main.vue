<template>

    <el-container style="height: 100%">
        <el-aside width="auto">
            <common-aside></common-aside>
        </el-aside>
        <el-container>
            <el-header>
                <common-header></common-header>
<!--                <router-view></router-view>-->
            </el-header>
            <el-main>

                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import CommonAside from './CommonAside';
    import CommonHeader from "./CommonHeader";
    export default {
        name: "Main",
        components:{
            CommonAside,
            CommonHeader
        }
    }
</script>

<style lang="less" scoped>
    .el-header{
        background-color: #000000;
        /*color: #333;*/
        /*text-align: center;*/
        /*line-height: 10px;*/
    }

    /*.el-aside {*/
    /*    background-color: #70e67a;*/
    /*    color: #333;*/
    /*    text-align: center;*/
    /*    line-height: 200px;*/
    /*}*/

    /*.el-main {*/
    /*    background-color: #f9fdff;*/
    /*    color: #333;*/
    /*    text-align: center;*/
    /*    line-height: 160px;*/
    /*    !*height:100%*!*/
    /*}*/

</style>