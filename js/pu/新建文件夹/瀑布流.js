window.onload = function(){}
//页面加载完成之执行js代码
function imgLocation(){}
//创建一个函数
imgLocation()
//执行函数
var bJson = [{"img":"1.jpg"},{"img":"2.jpg"}]
//创建一个JSON数组
bJson[0].img
//调用这个函数
window.onscroll = function(){}
//滚动条事件-滚动条滚动时执行代码
if(true){}
//if判断-括号里面的内容为true的时候执行代码
function getScoll(){
    if(true){
        return true;
    }
}
//创建一个函数，这个函数的返回值是true
//执行函数这个函数为true
var box = document.querySelectorAll(".box")
//var一个为box的选择器，取得页面上所有class类带有box类名的标签
box[0]
//取得页面上第一个带有box类名的标签
var lentBox = box.length-1
//等号前面是变量 等号后面是得到box选择器的长度然后减一的值 然后把等号后面的值赋值给等号前面的值
var lastBoxTop = box[lentBox].offsetTop;
// 获取最后一个box距离父级顶部的距离 单位像素
offsetTop //当前对象到其上层顶部的间隔
document.body.clientWidth || document.documentElement.clientWidth;
//获取当前浏览器的可视窗口高度 浏览器的兼容性不同，一些代码不同
document.body.scrollTop;
//    滚动条距离顶部的高度

if (box[lentBox].offsetTop < document.body.clientWidth + document.body.scrollTop) {
    return true;
}//如果最后一张图片的高度大于当前窗口的高度加上滚动条滚动的距离顶部的高度的距离那么就返回true

for(初始值;布尔值;计数器){}
//for循环是在希望创建循环的时候所用的代码
//初始值是在循环代码块之前执行
//布尔值定义循环条件如果通过在执行
//计数器在循环代码块执行后执行
 var s = document.querySelector(".container");
//选择页面中第一个.container类名的标签
var c =document.createElement("div");
//创建一个div标签
c.className = "box";
//给变量C赋值类名为box
s.appendChild(c);
//追加标签到container内
appendChild
//向节点末尾追加节点
box[0].offsetWidth;
//获取.box 盒子的宽度
document.body.clientWidth || document.documentElement.clientWidth;
//获取浏览器当前的可视宽度
Math.floor();
//取整数
document.body.clientWidth / box[0].offsetWidth;
//当前窗口的宽度/一张图片的宽度
Math.floor(document.body.clientWidth / box[0].offsetWidth;);

var boxHeightArr = [];
//    创建盒子高度的数组
for(){}
//循环输出一些内容
box[i].offsetHeight;
//获取box的一些高度

boxHeightArr[i]
//获取数组中的一个值
if(i<3){
    boxHeightArr[i] = box[i].offsetHeight;
}

Math.min.apply(null, boxHeightArr);
//获取数组中的最小值