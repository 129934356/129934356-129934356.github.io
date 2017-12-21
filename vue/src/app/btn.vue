<template>
    <div>
        <ul>
            <li v-for="list in lists">
                <img :src="list.src" alt="">
                <p>{{list.text}}</p>
            </li>
        </ul>
        <div><span></span><span></span><span></span></div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                lists:[
                    {src:"img/4.png",text:"关注"},
                    {src:"img/2.png",text:"新闻"},
                    {src:"img/book.png",text:"小说"},
                    {src:"img/1.png",text:"视频"},
                    {src:"img/5.png",text:"糯米"},
                    {src:"img/6.png",text:"地图"}
                ]
            }
        }
    }
</script>
<style scoped>
    ul{
        list-style: none;
        margin-right: -20px;
        margin-left: -20px;

    }
    li{
        float: left;
        padding-left: 20px;
        padding-right: 20px;
    }
    div{
        clear: both;
        display: table;
        content: "";
        padding-top: 22px;
        margin: auto;

    }
    span{
        width: 10px;
        height: 10px;
        margin-right: 5px;
        border-radius: 50%;
        background-color: #929292;
        display: table;
        float: left;

    }
</style>