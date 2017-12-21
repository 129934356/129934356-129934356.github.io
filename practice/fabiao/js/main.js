var img = document.getElementsByTagName("img");
var t = document.getElementsByClassName("t");
for (var i = 0; i < t.length; i++) {
    t[i].style.height = img[4].clientHeight + "px";
    t[i].style.width = img[4].clientWidth + "px";
}
$(".col-xs-12>.t").mouseover(function () {
    $(this).css("background", "rgba(0,0,0,.1)")
}).mouseout(function () {
    $(this).css("background", "rgba(0,0,0,.6)")
})
var big = document.getElementById("big");
var pic = document.querySelectorAll(".pic")[0];
var img = document.getElementsByTagName("img");
// pic.style.width = img.offsetWidth*img.length+"px";
pic.innerHTML = pic.innerHTML + pic.innerHTML;
var t = -2;

function mover() {
    if (pic.offsetLeft < -pic.offsetWidth / 2) {
        pic.style.left = "0";
    }
    pic.style.left = pic.offsetLeft + t + "px";
}
setInterval(mover, 15);

$(function () {
    $('.right .icon li').not('.up,.down').mouseenter(function () {
        $('.right .info').addClass('hover');
        $('.right .info li').hide();
        $('.right .info li.' + $(this).attr('class')).show(); //.right .info li.qq
    });
    $('.right').mouseleave(function () {
        $('.right .info').removeClass('hover');
    });
});




window._bd_share_config = {
    "common": {
        "bdSnsKey": {}
        , "bdText": ""
        , "bdMini": "2"
        , "bdMiniList": false
        , "bdPic": ""
        , "bdStyle": "0"
        , "bdSize": "16"
    }
    , "slide": {
        "type": "slide"
        , "bdImg": "0"
        , "bdPos": "left"
        , "bdTop": "199.5"
    }
    , "image": {
        "viewList": ["qzone", "tsina", "tqq", "renren", "weixin"]
        , "viewText": "分享到："
        , "viewSize": "16"
    }
    , "selectShare": {
        "bdContainerClass": null
        , "bdSelectMiniList": ["qzone", "tsina", "tqq", "renren", "weixin"]
    }
};
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];