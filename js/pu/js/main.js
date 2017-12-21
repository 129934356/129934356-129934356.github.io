//获取.box 盒子的宽度
//window.onload 当页面完全加载后执行js代码
//document.body.clientWidth获取浏览器的宽度
//当前窗口的宽度/一张图片的宽度 = 一排能存放的张数
//Math.min.apply(null,boxHeightArr)获取数组中最小的值
window.onload = function () {
          imgLcation();
//        var boxDate = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg"];
    var boxDate = [{"img":"1.jpg"},
                   {"img":"2.jpg"},
                   {"img":"3.jpg"},
                   {"img":"4.jpg"},
                   {"img":"5.jpg"},
                   {"img":"6.jpg"},
                   {"img":"7.jpg"}]
        window.onscroll = function () {
            //        判断只有当浏览器滚动到一定位置之后在执行代码
      
            if (getScroll()) {
                for (var i = 0; i < boxDate.length; i++) {
                    var container = document.querySelector(".container");
                    var createBox = document.createElement("div");//添加一个div
                    createBox.className = "box";//给div赋值一个class名box
                    container.appendChild(createBox);//给container添加createBox
                    var creatImg = document.createElement("img");
                    creatImg.src = "img/" + boxDate[i].img;
                    createBox.appendChild(creatImg);
                }
              
            }
            imgLcation();
        }
    }
    //window.onload 当页面完全加载后执行js代码











function imgLcation() {
    var container = document.querySelector(".container");
    var box = document.querySelectorAll(".box");
    var boxWidth = box[0].offsetWidth;
    //获取.box 盒子的宽度
    var iewidth = document.body.clientWidth || document.documentElement.clientWidth;
    //document.body.clientWidth获取浏览器的宽度 
    var num = Math.floor(iewidth / boxWidth); //当前窗口的宽度/一张图片的宽度 = 一排能存放的张数
    var containerWidth = num * boxWidth;
    //    主题内容的宽度 = 一排图片的个数 * 单个box的宽度
    container.style.width = containerWidth + "px";
    //    将主题内容的宽度赋值给container
    //    创建盒子高度的数组
    var boxHeightArr = [];
    for (var i = 0; i < box.length; i++) {
        if (i < num) {
            boxHeightArr[i] = box[i].offsetHeight;
        }
        else {
            var minHeight = Math.min.apply(null, boxHeightArr);
            //            第一排图片的最小图片的高度
            box[i].style.position = "absolute";
            //            除第一排图片外其余图片给一个绝对定位
            box[i].style.top = minHeight + "px";
            var minIndex = getMinHeightLocation(boxHeightArr, minHeight);
            //            最矮图片的位置
            box[i].style.left = box[minIndex].offsetLeft + "px";
            //          box的左浮动的值 = 最小图片的偏移量
            boxHeightArr[minIndex] += box[i].offsetHeight; //重新赋值三个arr的值
        }
        //      当i的值小于一拍图片的个数（num）时在执行
        //        获取数组中最小的值
    }
    console.log(minIndex);
}












//获取第一排最小图片的位置

function getMinHeightLocation(boxHeightArr,minHeight){
    for(var i in boxHeightArr){
        if(boxHeightArr[i] === minHeight){
            return i ;
        }
    }
}















//判断滚动条是否滚动到最后一张图片
function getScroll() {
    //如果最后一张图片的高度 < 浏览器的高度 + 滚动条距离顶部的高度
    //    返回true
    var box = document.querySelectorAll(".box");
    var lastBox = box.length - 1;
    //    最后一张图片
    var lastBoxTop = box[lastBox].offsetTop;
    //    最后一张图片的高度
    var ieHeight = document.body.clientHeight || document.documentElement.clientHeight;
    //    浏览器的高度
    var scrollTop = document.body.scrollTop;
    //    滚动条距离顶部的高度
    console.log(scrollTop)
    if (lastBox < ieHeight + scrollTop) {
        return true;
    }
}
















