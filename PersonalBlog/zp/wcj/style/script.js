var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        navigation: {
            nextEl: '.swiper-button-next',
        },
    pagination: {
        el: '.swiper-pagination',
    },
        on:{
            init: function(){
                swiperAnimateCache(this); //隐藏动画元素
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function(){
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            }
        }
    })

var music=document.querySelector('.music');
var music_off=document.querySelector('.music_off');
var audio=document.querySelector('audio');
var flag=1;
music.onclick=function (){
    if(flag==1){
        music.style.animation="none";
        music_off.style.display="none";
        audio.pause();
        flag=0;
    }
    else{
        music.style.animation="cube 3s infinite linear";
        music_off.style.display="block";
        audio.play();
        flag=1;
    }
}