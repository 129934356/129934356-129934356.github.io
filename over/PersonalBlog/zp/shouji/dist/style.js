var b = 1;
var li = document.querySelector('#li');
function t() {
    if (b==1){
        li.innerHTML = "即赠送旅行袋1个（每单限送一个）。新用户注册即获20元优惠券，欢迎选购";
        b--
    }else{
        li.innerHTML ="2017/12/28-2018/1/2期间：购买CKP男士运动系列新品";
        b++
    }
}
setInterval("t()",2000);

var i = 1;
$(".list").click(function(){
    if(i==1){
        $(".nav-bigbox").stop().animate({ "margin-left":"0rem"},500);
        $(".body").css("overflow","hidden");
      i=0;
    }else if(i==0){
        $(".nav-bigbox").stop().animate({ "margin-left":"-7.75rem"},500);
        i = 1;
        $(".body").css("overflow","");
    }
})

$("#g-w").click(function(){
        $("#show").stop().animate({ "left":"0rem"},500);
})

$("#s-h").click(function(){
    $("#show").stop().animate({ "left":"7.75rem"},500);
})