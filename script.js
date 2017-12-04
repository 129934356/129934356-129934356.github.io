 
window.onscroll=function(){
    var about = document.querySelector(".about")
    var span = document.querySelector("#a")
    var scrollTop = document.body.scrollTop;
    var top = about.scrollHeight + 250
    console.log(top)
     console.log(scrollTop)
     span.onclick =function(){
       document.body.scrollTop =top
     }
}
 