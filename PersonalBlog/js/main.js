//轮播图
$( window ).load( function() {
	$( '.sldr' ).each( function() {
		var th = $( this );
		th.sldr({
			focalClass    : 'focalPoint',
			offset        : th.width() / 2,
			sldrWidth     : 'responsive',
			nextSlide     : th.nextAll( '.sldr-nav.next:first' ),
			previousSlide : th.nextAll( '.sldr-nav.prev:first' ),
			selectors     : th.nextAll( '.selectors:first' ).find( 'li' ),
			toggle        : th.nextAll( '.captions:first' ).find( 'div' ),
			sldrInit      : sliderInit,
			sldrStart     : slideStart,
			sldrComplete  : slideComplete,
			sldrLoaded    : sliderLoaded,
			sldrAuto      : true,
			sldrTime      : 5000,
			hasChange     : true
		});
	});

});

/**
 * Sldr Callbacks
 */

/**
 * When the sldr is initiated, before the DOM is manipulated
 * @param {object} args the slides, callback, and config of the slider
 * @return null
 */
function sliderInit( args ) {

}

/**
 * When individual slides are loaded
 * @param {object} args the slides, callback, and config of the slider
 * @return null
 */
function slideLoaded( args ) {

}

/**
 * When the full slider is loaded, after the DOM is manipulated
 * @param {object} args the slides, callback, and config of the slider
 * @return null
 */
function sliderLoaded( args ) {

}

/**
 * Before the slides change focal points
 * @param {object} args the slides, callback, and config of the slider
 * @return null
 */
function slideStart( args ) {

}

/**
 * After the slides are done changing focal points
 * @param {object} args the slides, callback, and config of the slider
 * @return null
 */
function slideComplete( args ) {

}



//进度条
var l = 0;
var l1= 1;
  function mo(){
    if(l==0){
	new Progress().renderOne('canvas7',100,5,40);
	new Progress().renderOne('canvas8',100,5,60);
	new Progress().renderOne('canvas9',100,5,70);
    l++;
    }else{
        
    }

    }
     
     window.onscroll = function(){
       
        
        //它距离顶部是多少。（获取出来）a
        var mian_study = document.querySelector(".mian-study")
        var a = mian_study.offsetTop
         
         //当前的屏幕高度是多少（获取出来）b
         
         var b = document.documentElement.clientHeight;
             
         //滚动条的高度是多少？（获取出来）c
         
         var c = document.body.scrollTop;
//         
         
         if(a < b + c){
             
            mo()
            
         }
         
         
     }



 var Progress = function () {
    var progress = {
        textheight: null
        , renderOne: function (id, length, r, percent) {
            var canvas = document.getElementById(id);
            var context = canvas.getContext("2d");
            canvas.width = length;
            canvas.height = length;
            var i = 0;
            var interval = setInterval(function () {
                i++;
                progress.render(context, length, r, i, percent);
                if (i >= percent) {
                    clearInterval(interval)
                }
            }, 10)
        }
        , render: function (context, length, r, i, percent) {
            context.clearRect(0, 0, length, length);
            context.beginPath();
            var gradient = context.createLinearGradient(length, 0, 0, 0);
            gradient.addColorStop("0", "#76EEC6");
            gradient.addColorStop("1.0", "#63B8FF");
            context.strokeStyle = gradient;
            context.lineWidth = r;
            context.arc(length / 2, length / 2, length / 2 - r, -0.5 * Math.PI, -0.5 * Math.PI + i * 0.02 * Math.PI, false);
            context.stroke();
            context.closePath();
            context.beginPath();
            context.strokeStyle = "#8d8d8d";
            context.lineWidth = 2;
            context.fillStyle = "#ffffff";
            context.arc(length / 2, r, 0.6 * r, 0, 2 * Math.PI, false);
            context.stroke();
            context.fill();
            context.closePath();
            context.beginPath();
            var radian = percent / 100 * 2 * Math.PI - 0.5 * Math.PI;
            var x = Math.cos(radian) * (length / 2 - r) + length / 2;
            var y = Math.sin(radian) * (length / 2 - r) + length / 2;
            context.arc(x, y, 0.6 * r, 0, 2 * Math.PI, false);
            context.stroke();
            context.fill();
            context.closePath();
            context.beginPath();
            context.lineWidth = 1;
            context.strokeStyle = "#54DDAF";
            context.fillStyle = "#54DDAF";
            context.arc(length / 2, length / 2, length / 2 - 2 * r, 0, 2 * Math.PI);
            context.fill();
            context.closePath();
            context.beginPath();
            context.font = "bold " + (length / 2 - 2.5 * r) / 2 + "px 微软雅黑";
            context.fillStyle = "#ffffff";
            var text = percent + "%";
            textwidth = context.measureText(text).width;
            if (this.textheight == null) {
                var div = document.createElement("div");
                document.body.appendChild(div);
                div.innerHTML = text;
                div.style.fontSize = ((length / 2 - 2.5 * r) / 2) + "px";
                this.textheight = div.offsetHeight;
                div.parentNode.removeChild(div)
            }
            textheight = this.textheight;
            context.fillText(text, (length - textwidth) / 2, length / 2 + textheight / 4);
            context.fill();
            context.closePath()
        }
    };
    return progress
};



 

 

//表单



function jd(jdclass,jdtext){
				jdclass.className = "luse"
				jdclass.innerHTML = jdtext;	
			
	} 
	function nojd(id1,idText,id1html,idRag,idelseifText,idelseText){
		if(id1.value == ""){
			idText.className ="text-danger"
			idText.innerHTML = id1html;
			return false;
		}else if (idRag){
			idText.className ="text-danger"
			idText.innerHTML = idelseifText;
			return false;
			}else{
				idText.className ="text-success"
				idText.innerHTML =idelseText;
				return true;
			}
	}

	
		var ipt = document.getElementById("ipt")
		var sp = document.getElementById("sp")
		var vivo = /^[0-9a-zA-Z]{6,18}$/
		ipt.onfocus = function(){
			jd(sp,"请输入用户名")
		}
		ipt.onblur = function(){
			nojd(ipt,sp,"不能为空！",vivo.test(ipt.value) != true,"请输入6-18位的英文或数字。","通过！");
		}

		 
		var email = document.getElementById("email")
		var sp3 =document.getElementById("sp3")
		var emailReg = /[_a-zA-Z\d\-\.]+@[_a-zA-Z\d\-]+(\.[_a-zA-Z\d\-]+)+$/;
		email.onfocus = function(){
			jd(sp3,"请输入你的电子邮箱");
		}
		email.onblur = function(){
			nojd(email,sp3,"不能为空！",emailReg.test(email.value) != true,"电子邮箱输入有误。","通过！");
		}
		var tel =document.getElementById("tel")
		var sp4 =document.getElementById("sp4")
		var telReg = /1\d{10}$/;
		tel.onfocus = function(){
			jd(sp4,"请输入手机号码");
		}
		tel.onblur = function(){
			nojd(tel,sp4,"不能为空！",telReg.test(tel.value) != true,"手机号码格式有误。","通过！");
		}
        
        
 function asd(){
		var ipt = document.getElementById("ipt")
		var sp = document.getElementById("sp")
		var vivo = /^[0-9a-zA-Z]{6,18}$/;
		var x =nojd(ipt,sp,"不能为空！",vivo.test(ipt.value) != true,"请输入6-18位的英文或数字。","通过！");
		return x
	}
 
	function emailx(){
		var email = document.getElementById("email")
		var sp3 =document.getElementById("sp3")
		var emailReg = /[_a-zA-Z\d\-\.]+@[_a-zA-Z\d\-]+(\.[_a-zA-Z\d\-]+)+$/;
		 var x =nojd(email,sp3,"不能为空！",emailReg.test(email.value) != true,"电子邮箱输入有误。","通过！");
		 return x;
	}
	function telxN(){
		var tel =document.getElementById("tel")
		var sp4 =document.getElementById("sp4")
		var telReg = /1\d{10}$/;
		var x =nojd(tel,sp4,"不能为空！",telReg.test(tel.value) != true,"手机号码格式有误。","通过！");
		return x;
	}
 

var button = document.getElementById("button");
var text = document.getElementById("text");
button.onclick = function(){
        alert("提交成功");
        ipt.value="";
        email.value="";
        tel.value="";
        text.value="";
    }





//图片

 $(".slow .box .i-top").mouseover(function(){
$(this).stop().animate({"margin-top":"-215px",},1000,function(){
  $(this).animate({"opacity":".0"},800) 
})
 }).mouseout(function(){
     $(this).stop().animate({"opacity":"1",},500,function(){
  $(this).animate({"margin-top":"0"},650) 
})
 })

 $(".slow .box .i-buttom").mouseover(function(){
$(this).stop().animate({"margin-top":"195px",},1000,function(){
  $(this).animate({"opacity":".0"},800) 
})
 }).mouseout(function(){
     $(this).stop().animate({"opacity":"1",},500,function(){
  $(this).animate({"margin-top":"0"},650) 
})
 })

 $(".slow .box .i-left").mouseover(function(){
$(this).stop().animate({"margin-left":"450px",},1000,function(){
  $(this).animate({"opacity":".0"},800) 
})
 }).mouseout(function(){
     $(this).stop().animate({"opacity":"1",},500,function(){
  $(this).animate({"margin-left":"0"},650) 
})
 })




var uli = document.querySelectorAll(".nav ul li a");
var ula = document.querySelector(".a");
for(var i = 0;i<uli.length;i++){
     uli[i].onclick=function () {
         uli[i].style.color = "#ccc";
         ula.style.color = "#777";
     }
}












 
