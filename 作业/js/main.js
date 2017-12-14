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


//创建和初始化地图函数：
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
    addMapOverlay();//向地图添加覆盖物
}
function createMap(){
    map = new BMap.Map("map");
    map.centerAndZoom(new BMap.Point(116.592203,38.090322),15);
}
function setMapEvent(){
    map.enableScrollWheelZoom();
    map.enableKeyboard();
    map.enableDragging();
    map.enableDoubleClickZoom()
}
function addClickHandler(target,window){
    target.addEventListener("click",function(){
        target.openInfoWindow(window);
    });
}
function addMapOverlay(){
    var markers = [
        {content:"我的备注",title:"我的标记",imageOffset: {width:0,height:3},position:{lat:38.082995,lng:116.576824}}
    ];
    for(var index = 0; index < markers.length; index++ ){
        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
        var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
                imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
            })});
        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
        var opts = {
            width: 200,
            title: markers[index].title,
            enableMessage: false
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
        marker.setLabel(label);
        addClickHandler(marker,infoWindow);
        map.addOverlay(marker);
    };
}
//向地图添加控件
function addMapControl(){
    var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
    map.addControl(scaleControl);
    var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
    map.addControl(navControl);
    var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
    map.addControl(overviewControl);
}
var map;
initMap();