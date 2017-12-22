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