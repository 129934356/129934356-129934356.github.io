<template>
    <div><ul><li v-for="(list,index) in lists" class="g"><a href="#">{{list}}</a></li><span>+</span></ul></div>
</template>
<script>
    export default{
        data(){
            return{
                lists:["推荐","视频","热点","娱乐","时尚"]
            }
        }
    }
</script>
<style scoped>
    ul{
        list-style: none;
        overflow: hidden;
        border-bottom: solid 1px #f0f0f0;
        margin-bottom: 5px;
    }
    li a,span{
        float: left;
        padding: 14px 15px;
        font-size: 18px;
        text-decoration: none;
        color: #a0a0a0;

    }
    /*a{*/
        /*border-bottom: solid 2px #f0f0f0;*/
    /*}*/
    span{
        font-size:24px;
        line-height: 20px;
    }
   ul li:nth-of-type(1) a{
        color: #4391fe;
        border-bottom: solid 2px #4391fe;
       padding: 14px 15px 12px;
    }
    a:hover{
        color: #4391fe;
        border-bottom: solid 2px #4391fe;
        padding: 14px 15px 12px;
    }
</style>