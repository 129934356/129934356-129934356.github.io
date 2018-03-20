 window.onload = function(){
     var li = document.querySelectorAll("#nav li");
     var o = true;
     li[li.length-1].onclick = function(){
         for(var i =0;i<li.length;i++){
             var n = i - 6;
             if(o){
                  n = n * 30;
             }else{
                 n = 360;
             }
            
             li[i].style.transform = "rotateZ("+ n +"deg)";
         }
         o = !o;     
     }
     //所选中最后一个元素 
     
     for(var i = 0;i<li.length-1;i++){
         li[i].index = i;
         li[i].onclick =function(){
             this.style.transform = "rotateZ(0deg)";
             var left = 0;
             for(var i = this.index-1;i>=0;i--){
                    left -=30
                 li[i].style.transform = "rotateZ("+ left +"deg)";
             }
            //所选中的元素前面的元素 
             var right = 0;
             for(var i = this.index+1;i<li.length;i++){
                 right +=30;
                 li[i].style.transform = "rotateZ("+ right +"deg)";
             }
            //所选中的元素后面的元素 
         }
     }
 }
 
 