<template>
    <el-row class="home" :gutter="20" >
        <el-col :span="8">
            <el-card shadow="hover">
                <div class="user">
                    <img :src="userImg"/>
                    <div class="userinfo">
                        <p class="name">admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login-info">

                    <p>上次登录时间：<span>2022-08-11</span></p>
                    <p>上次登录地点：<span>湘潭</span></p>
                </div>
            </el-card>
            <el-card style="margin-top:10px;height:400px">
                <el-table :data="tableData">
                    <el-table-column
                        v-for="(val,index) in tableLabel"
                        :key="index"
                        :prop="index"
                        :label="val"
                    >
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col  :span="16">
            <div class="num">
                <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
                    <div class="detail">
                        <p class="num">￥{{item.value}}</p>
                        <p class="txt">{{item.name}}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height:220px">
                <div style="height:220px" ref="echarts1">

                </div>
            </el-card>
            <div class="graph">
                <el-card style="height:215px">
                    <div style="height:215px" ref="echarts2"></div>
                </el-card>
                <el-card style="height:215px">
                    <div style="height:195px" ref="echarts3"></div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import {getData} from '../../api/data.js'
    // import {getData} from '../api'
     import * as echarts from 'echarts'
    export default {
        name: "Home",
        data() {
            return{
                userImg: require('../assets/images/user.png'),
                tableData:[],
                // tableData: [
                //     {
                //         name: 'oppo',
                //         todayBuy: 100,
                //         monthBuy: 300,
                //         totalBuy: 800
                //     },
                //     {
                //         name: 'vivo',
                //         todayBuy: 100,
                //         monthBuy: 300,
                //         totalBuy: 800
                //     },
                //     {
                //         name: '苹果',
                //         todayBuy: 100,
                //         monthBuy: 300,
                //         totalBuy: 800
                //     },
                //     {
                //         name: '小米',
                //         todayBuy: 100,
                //         monthBuy: 300,
                //         totalBuy: 800
                //     },
                //     {
                //         name: '三星',
                //         todayBuy: 100,
                //         monthBuy: 300,
                //         totalBuy: 800
                //     },
                //     {
                //         name: '魅族',
                //         todayBuy: 100,
                //         monthBuy: 300,
                //         totalBuy: 800
                //     }
                // ],
                tableLabel:{
                     name:'课程',
                     todayBuy:'今日购买',
                     monthBuy:'本月购买',
                     totalBuy:'总购买',
                },
                countData: [
                    {
                        name: "今日支付订单",
                        value: 1234,
                        icon: "success",
                        color: "#2ec7c9",
                    },
                    {
                        name: "今日收藏订单",
                        value: 210,
                        icon: "star-on",
                        color: "#ffb980",
                    },
                    {
                        name: "今日未支付订单",
                        value: 1234,
                        icon: "s-goods",
                        color: "#5ab1ef",
                    },
                    {
                        name: "本月支付订单",
                        value: 1234,
                        icon: "success",
                        color: "#2ec7c9",
                    },
                    {
                        name: "本月收藏订单",
                        value: 210,
                        icon: "star-on",
                        color: "#ffb980",
                    },
                    {
                        name: "本月未支付订单",
                        value: 1234,
                        icon: "s-goods",
                        color: "#5ab1ef",
                    },
                ],

            }
        },
        mounted() {
            getData().then(({data}) =>{
                const {tableData} = data.data;
                console.log(data.data)
                this.tableData = tableData
                //基于准备好的dom，初始化echarts实例
                 const echarts1 = echarts.init(this.$refs.echarts1)
                //指定图标的配置项和数据
                 var echarts1Option = {}
                 //处理数据xAxis
                 const {orderData,userData,videoData} = data.data
                const xAxis = Object.keys(orderData.data[0])
                const xAxisData = {
                    data:xAxis
                }
                echarts1Option.xAxis = xAxisData
                echarts1Option.yAxis = {}
                echarts1Option.legend = xAxisData
                echarts1Option.series = []
                xAxis.forEach(key => {
                    echarts1Option.series.push({
                        name: key,
                        data:orderData.data.map(item => item[key]),
                        type: 'line'
                    })
                })
                console.log(echarts1Option)
                // 使用刚指定的配置项和数据显示图表
                echarts1.setOption(echarts1Option)

                //柱状图
                const  echarts2 = echarts.init(this.$refs.echarts2)
                const echarts2Option = {
                            legend: {
                                // 图例文字颜色
                                textStyle: {
                                    color: "#333",
                                },
                            },
                            grid: {
                                left: "20%",
                            },
                            // 提示框
                            tooltip: {
                                trigger: "axis",
                            },
                            xAxis: {
                                type: "category", // 类目轴
                                    data: userData.map(item=>item.date),
                                    axisLine: {
                                    lineStyle: {
                                        color: "#17b3a3",
                                    },
                                },
                                axisLabel: {
                                    interval: 0,
                                        color: "#333",
                                },
                            },
                            yAxis: [
                                {
                                    type: "value",
                                    axisLine: {
                                        lineStyle: {
                                            color: "#17b3a3",
                                        },
                                    },
                                },
                            ],
                                color: ["#2ec7c9", "#b6a2de"],
                                series: [
                                    {
                                        name:'新增用户',
                                        data:userData.map(item=>item.new),
                                        type:'bar'
                                    },
                                    {
                                        name:'活跃用户',
                                        data:userData.map(item=>item.active),
                                        type:'bar'
                                    }
                                ],

                }
                echarts2.setOption(echarts2Option)

                //饼状图
                const echarts3 = echarts.init(this.$refs.echarts3)
                const echarts3Option={
                    tooltip: {
                        trigger: "item",
                    },
                    color: [
                        "#0f78f4",
                        "#dd536b",
                        "#9462e5",
                        "#a6a6a6",
                        "#e1bb22",
                        "#39c362",
                        "#3ed1cf",
                    ],
                    series: [
                        {
                            data: videoData,
                            type:'pie'
                        }
                    ],
                }
                echarts3.setOption(echarts3Option)
            })
            // getData().then(res=>{
            //     const {code,data}=res.data;
            //     if(code === 20000){
            //         // this.tableData = tableData;
            //         this.tableData=data.tableData;
            //         const order = data.tableData;
            //         //处理x轴数据
            //         const xData = order.date;
            //         const keyArray = Object.keys(order.data[0]);
            //         const series=[];
            //         keyArray.forEach(key=>{
            //             series.push({
            //                 name: key,
            //                 data:order.data.map(item => item[key]),
            //                 type:'line'
            //             })
            //         });
            //         const option={
            //             xAxis:{
            //                 data:xData,
            //             },
            //             yAxis:{},
            //             legend:{
            //                 data:keyArray,
            //             },
            //             series
            //         };
            //         const E = echarts.init(this.$refs.echarts);
            //         E.setOption(option);
            //
            //         //用户图
            //         const userOption= {
            //             legend: {
            //                 // 图例文字颜色
            //                 textStyle: {
            //                     color: "#333",
            //                 },
            //             },
            //             grid: {
            //                 left: "20%",
            //             },
            //             // 提示框
            //             tooltip: {
            //                 trigger: "axis",
            //             },
            //             xAxis: {
            //                 type: "category", // 类目轴
            //                     data: data.userData.map(item=>item.date),
            //                     axisLine: {
            //                     lineStyle: {
            //                         color: "#17b3a3",
            //                     },
            //                 },
            //                 axisLabel: {
            //                     interval: 0,
            //                         color: "#333",
            //                 },
            //             },
            //             yAxis: [
            //                 {
            //                     type: "value",
            //                     axisLine: {
            //                         lineStyle: {
            //                             color: "#17b3a3",
            //                         },
            //                     },
            //                 },
            //             ],
            //                 color: ["#2ec7c9", "#b6a2de"],
            //                 series: [
            //                     {
            //                         name:'新增用户',
            //                         data:data.userData.map(item=>item.new),
            //                         type:'bar'
            //                     },
            //                     {
            //                         name:'活跃用户',
            //                         data:data.userData.map(item=>item.active),
            //                         type:'bar'
            //                     }
            //                 ],
            //         };
            //         const U = echarts.init(this.$refs.userEcharts);
            //         U.setOption(userOption);
            //
            //         //饼图
            //         const videoOption={
            //             tooltip: {
            //                 trigger: "item",
            //             },
            //             color: [
            //                 "#0f78f4",
            //                 "#dd536b",
            //                 "#9462e5",
            //                 "#a6a6a6",
            //                 "#e1bb22",
            //                 "#39c362",
            //                 "#3ed1cf",
            //             ],
            //             series: [
            //                 {
            //                     data: data.videoData,
            //                     type:'pie'
            //                 }
            //             ],
            //         }
            //         const V = echarts.init(this.$refs.videoEcharts);
            //         V.setOption(videoOption);
            //
            //     }
            //     console.log(res);
            // })
        }
    }
</script>

<style scoped>

</style>