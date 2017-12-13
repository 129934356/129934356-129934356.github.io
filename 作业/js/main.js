var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    // loop: true,
    navigation: {
        nextEl: '.swiper-button-next',

    },
    pagination: {
        el: '.swiper-pagination',
    },
    on:{
        init: function(){
            swiperAnimateCache(this);
            swiperAnimate(this);
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this);
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

var form = document.querySelector('form');
function tb(){
    var name  = document.querySelector(".name");
    var text = document.querySelector(".text");
    var e = document.querySelector('.e');
    if(name.value!=="" && text.value !== "" && e.value!==""){
       form.submit()
        return true;
        alert("提交成功");
    }else {
        alert("请填写对应内容");
    }
}


