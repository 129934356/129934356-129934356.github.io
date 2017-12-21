import Vue from "vue"
import app from "./app/app.vue"
import btn from "./app/btn.vue"
import ma from "./app/main.vue"
new Vue({
    el: "#header-nve",
    components: {
        app
    }
})
new Vue({
    el: "#header-footer",
    components: {
        btn
    }
})

new Vue({
    el:"#footer",
    components:{
        ma
    }

})

Vue.component('mc', {
    props: ["mf", "he", "gf"],
    template: `<div class="e">
				<div class="top">
					<h2>{{mf}}</h2>
					<p class="cde">{{he}} <slot></slot></p>
				</div>
				</div>
				`
})


Vue.component('te', {
    props: ["tex", "text", "texts"],
    template: ` <div class="left"></div>
                <div class="right">
                    <h3>{{tex}}</h3>
                    <p>{{text}} <slot></slot> {{texts}}</p>
                </div>
				`
})

Vue.component('me', {
    props: ["me", "se", "mb", "url",],
    template: `<div class="e">
   				<div class="bottom">
					<h2>{{me}}</h2>
					<div class="edg">
					<img v-bind:src='url' alt="">
					</div>
					<p class="cde">{{se}} <slot></slot> {{mb}}</p>
				</div>

</div>`


})


new Vue({
    el: "#fot",
    data: {
        mf: [
            {
                mf: "习近平用这5句话介绍中国新时代",
                me: "农村大集鲤鱼鲫鱼铺满地，鱼的来源让人太生气最好别吃。",
                se: "河北乡土 11-19 ",
                he: "央广网 11-19",
                ge: "置顶",
                get: "图集",
                mb: "打开手机百度",
                url: "img/7.gif",


            },
            {
                mf: "女人情到深处时，才会这样呼唤你，你被这样呼唤过么？",
                me: "超神学院：曾经的雄兵终于集结了，真是不容易啊！",
                se: "透明的车玻璃 11-19 ",
                he: "央广网 11-18",
                ge: "图集",
                get: "",
                mb: "打开手机百度",
                url: "img/8.gif",

            },
            {
                mf: "烤鱼店生意火爆 秘方 ：用漏斗过滤剩菜后的口水油",
                me: "刘鑫称他也不记得当时有没有反锁门，现在是百口莫辩了",
                se: "语七杂八华天下 11-19 ",
                he: "南方都市报 07-23",
                ge: "热点",
                get: "",
                mb: "打开手机百度",
                url: "img/9.gif",

            },
            {
                mf: "结婚70周年!英国女王庆祝白金婚王室发布合影",
                he: "新浪娱乐 11-19",

            },

            {
                mf: "女兵在阅兵时想上厕所怎么办，原来还有这种操作",
                he: "军人魂 11-18",


            },
            {
                mf: "专家发现：女人有没有生过孩子，看下面就知道，非常“与众不同”",
                he: "只要你愿等待 11-19",
            },
            {
                me: "日本女星shinozaki在沙滩玩，漂亮了",
                se: "精选影片 11-07",
                get: "图集",
                mb: "打开手机百度",
                url: "img/10.gif",
            },
            {
                mf: "农村孤寡老人没钱装暖气，施工人员牵走他家羊炖了，还拆掉壁挂炉",
                he: "闻舞视界 11-19",
                get: "图集",
                mb: "打开手机百度",
            },
            {
                me: "马未都：我们为什么不佩戴文玩，说出来你们不要觉得恶心",
                se: "百家人和文 11-18",
                get: "图集",
                mb: "打开手机百度",
                url: "img/11.gif",
            },
        ]
    }
})


function gge() {
    var f = document.querySelectorAll(".i")
    for (var u = 0; u < f.length; u++) {
        if (f[u].innerText == "") {
            f[u].style.display = "none"
        }
    }
}
function gg() {

    var f = document.querySelectorAll("img")
    for (var u = 0; u < f.length; u++) {
        if (f[u].src == "") {
            var le = f[u].parentNode
            var k = le.parentNode
            var el = k.parentNode
            el.parentNode.removeChild(el);
        }
    }
}


function ge() {
    var h2 = document.querySelectorAll("h2")
    for (var u = 0; u < h2.length; u++) {
        if (h2[u].innerHTML == "") {
            var h = h2[u].parentNode
            var hq = h.parentNode
            hq.parentNode.removeChild(hq);
        }
    }
}
gge()
gg()
ge()
