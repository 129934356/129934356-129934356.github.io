Vue.component('ck', {
    props: ['img','url','meny','qian','title'],
    template:`
           <li>								
			<a class="product-img"  href="#" title="">
			<p class="lazyimg"><img :src="img" class="product"></p></a>								
			<div class="product-price">
				<del>￥{{meny}}</del>
				<span>￥{{qian}}</span>
				</div>
			    <a>{{title}}</a>
			</li>`
})

new Vue({
    el:"#app",
    data:{
        lifes:[
            {img:"img/n1.jpg",meny:"19990.00",qian:"995.00",title:"男士休闲背提包 HH1307"},
            {img:"img/n2.jpg",meny:"2990.00",qian:"1495.00",title:"男士休闲羽绒服 J305546"},
            {img:"img/n3.jpg",meny:"4990.00",qian:"2994.00",title:"男士两面穿拼色羽绒服"},
            {img:"img/n4.jpg",meny:"1390.00",qian:"695.00",title:"男士手拿包 HH1270"},

            {img:"img/n1.jpg",meny:"19990.00",qian:"995.00",title:"男士休闲背提包 HH1307"},
            {img:"img/n2.jpg",meny:"2990.00",qian:"1495.00",title:"男士休闲羽绒服 J305546"},
            {img:"img/n3.jpg",meny:"4990.00",qian:"2994.00",title:"男士两面穿拼色羽绒服"},
            {img:"img/n4.jpg",meny:"1390.00",qian:"695.00",title:"男士手拿包 HH1270"},

            {img:"img/n1.jpg",meny:"19990.00",qian:"995.00",title:"男士休闲背提包 HH1307"},
            {img:"img/n2.jpg",meny:"2990.00",qian:"1495.00",title:"男士休闲羽绒服 J305546"},
            {img:"img/n3.jpg",meny:"4990.00",qian:"2994.00",title:"男士两面穿拼色羽绒服"},
            {img:"img/n4.jpg",meny:"1390.00",qian:"695.00",title:"男士手拿包 HH1270"},

            {img:"img/n1.jpg",meny:"19990.00",qian:"995.00",title:"男士休闲背提包 HH1307"},
            {img:"img/n2.jpg",meny:"2990.00",qian:"1495.00",title:"男士休闲羽绒服 J305546"},
            {img:"img/n3.jpg",meny:"4990.00",qian:"2994.00",title:"男士两面穿拼色羽绒服"},
            {img:"img/n4.jpg",meny:"1390.00",qian:"695.00",title:"男士手拿包 HH1270"},

            {img:"img/n1.jpg",meny:"19990.00",qian:"995.00",title:"男士休闲背提包 HH1307"},
            {img:"img/n2.jpg",meny:"2990.00",qian:"1495.00",title:"男士休闲羽绒服 J305546"},
            {img:"img/n3.jpg",meny:"4990.00",qian:"2994.00",title:"男士两面穿拼色羽绒服"},
            {img:"img/n4.jpg",meny:"1390.00",qian:"695.00",title:"男士手拿包 HH1270"},

            {img:"img/n1.jpg",meny:"19990.00",qian:"995.00",title:"男士休闲背提包 HH1307"},
            {img:"img/n2.jpg",meny:"2990.00",qian:"1495.00",title:"男士休闲羽绒服 J305546"},
            {img:"img/n3.jpg",meny:"4990.00",qian:"2994.00",title:"男士两面穿拼色羽绒服"},
            {img:"img/n4.jpg",meny:"1390.00",qian:"695.00",title:"男士手拿包 HH1270"},

            {img:"img/n1.jpg",meny:"19990.00",qian:"995.00",title:"男士休闲背提包 HH1307"},
            {img:"img/n2.jpg",meny:"2990.00",qian:"1495.00",title:"男士休闲羽绒服 J305546"},
            {img:"img/n3.jpg",meny:"4990.00",qian:"2994.00",title:"男士两面穿拼色羽绒服"},
            {img:"img/n4.jpg",meny:"1390.00",qian:"695.00",title:"男士手拿包 HH1270"},

            {img:"img/n1.jpg",meny:"19990.00",qian:"995.00",title:"男士休闲背提包 HH1307"},
            {img:"img/n2.jpg",meny:"2990.00",qian:"1495.00",title:"男士休闲羽绒服 J305546"},
            {img:"img/n3.jpg",meny:"4990.00",qian:"2994.00",title:"男士两面穿拼色羽绒服"},
            {img:"img/n4.jpg",meny:"1390.00",qian:"695.00",title:"男士手拿包 HH1270"},


        ]
    }
})








Vue.component('ck', {
    props: ['img','url','meny','qian','title'],
    template:`
           <li>								
			<a class="product-img"  href="#" title="">
			<p class="lazyimg"><img :src="img" class="product"></p></a>								
			<div class="product-price">
				<span>￥{{qian}}</span>
				</div>
			    <a>{{title}}</a>
			</li>`
})

new Vue({
    el:"#app1",
    data:{
        lifes:[
            {img:"img/h1.png",meny:"19990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h2.png",meny:"2990.00",qian:"790.00",title:"男士时尚圆领T恤"},
            {img:"img/h3.png",meny:"4990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h4.png",meny:"1390.00",qian:"695.00",title:"男士时尚圆领T恤"},


            {img:"img/h1.png",meny:"19990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h2.png",meny:"2990.00",qian:"790.00",title:"男士时尚圆领T恤"},
            {img:"img/h3.png",meny:"4990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h4.png",meny:"1390.00",qian:"695.00",title:"男士时尚圆领T恤"},

            {img:"img/h1.png",meny:"19990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h2.png",meny:"2990.00",qian:"790.00",title:"男士时尚圆领T恤"},
            {img:"img/h3.png",meny:"4990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h4.png",meny:"1390.00",qian:"695.00",title:"男士时尚圆领T恤"},

            {img:"img/h1.png",meny:"19990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h2.png",meny:"2990.00",qian:"790.00",title:"男士时尚圆领T恤"},
            {img:"img/h3.png",meny:"4990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h4.png",meny:"1390.00",qian:"695.00",title:"男士时尚圆领T恤"},

            {img:"img/h1.png",meny:"19990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h2.png",meny:"2990.00",qian:"790.00",title:"男士时尚圆领T恤"},
            {img:"img/h3.png",meny:"4990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h4.png",meny:"1390.00",qian:"695.00",title:"男士时尚圆领T恤"},

            {img:"img/h1.png",meny:"19990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h2.png",meny:"2990.00",qian:"790.00",title:"男士时尚圆领T恤"},
            {img:"img/h3.png",meny:"4990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h4.png",meny:"1390.00",qian:"695.00",title:"男士时尚圆领T恤"},

            {img:"img/h1.png",meny:"19990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h2.png",meny:"2990.00",qian:"790.00",title:"男士时尚圆领T恤"},
            {img:"img/h3.png",meny:"4990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h4.png",meny:"1390.00",qian:"695.00",title:"男士时尚圆领T恤"},

            {img:"img/h1.png",meny:"19990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h2.png",meny:"2990.00",qian:"790.00",title:"男士时尚圆领T恤"},
            {img:"img/h3.png",meny:"4990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h4.png",meny:"1390.00",qian:"695.00",title:"男士时尚圆领T恤"},

            {img:"img/h1.png",meny:"19990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h2.png",meny:"2990.00",qian:"790.00",title:"男士时尚圆领T恤"},
            {img:"img/h3.png",meny:"4990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h4.png",meny:"1390.00",qian:"695.00",title:"男士时尚圆领T恤"},

            {img:"img/h1.png",meny:"19990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h2.png",meny:"2990.00",qian:"790.00",title:"男士时尚圆领T恤"},
            {img:"img/h3.png",meny:"4990.00",qian:"750.00",title:"男士圆领时尚T恤"},
            {img:"img/h4.png",meny:"1390.00",qian:"695.00",title:"男士时尚圆领T恤"},
        ]
    }
})