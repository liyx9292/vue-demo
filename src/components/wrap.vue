<template>
    <div>
        <top-progress ref="topProgress"></top-progress>
        <div class="hello">
          <h1 class="title">{{ title }}</h1>
          <!-- <img src="../assets/hrtt.png"> -->
          <swiper :options="swiperOption" ref="mySwiper" >
            <swiper-slide v-for="(slide, index) in swiperSlides" :key="slide.imgUrl" >
                <a :href="slide.aUrl"><img :src="slide.imgUrl"/></a>
            </swiper-slide>
          </swiper>
          <a :href="pUrl"><p>点我</p></a>
          <textp :logo="contentss.num1" class="aaa" v-on:click.native="dianji"></textp>
          <textp :logo="contentss.num2" class="bbb"></textp>
          <img  src="static/memberCard.png">
          <textp :logo="contentss.msg"></textp>
          <img  src="static/memberCard.png">
          <a :href="pUrl"><p>分割线</p></a>

          <div v-for="slide in swiperSlides">
              <img v-lazy="slide.imgUrl">
          </div>
        </div>
        <div class="foot" @click="enroll">立即报名</div>

    </div>
</template>

<script>
 import jQuery from "../js/jquery-1.8.3";
 import textp from "./textp.vue";
 import data from "../assets/data.json";
 import {
   swiper,
   swiperSlide
 } from 'vue-awesome-swiper'
 import topProgress from 'vue-top-progress' //浏览器顶部进度条
 export default {
   name: 'hello',
   data() {
     return {
       pUrl: data.pUrl,
       title: data.title,
       msgf: data.msgf,
       contentss: data.contents,
       message: 'yes !! I do',
       swiperOption: {
         autoplay: 30000, //自动播放时间
         effect: 'coverflow', //效果
         slidesPerView: 1.2, //效果
         centeredSlides: true, //效果
         setWrapperSize: true,
         speed: 900, //滑动速度
         loop: true, //无边界
         autoplayDisableOnInteraction: false, //手指滑动后 自动播放继续
         // paginationClickable :true,
         // mousewheelControl : true,
         // observeParents:true,
       },
       swiperSlides: [{
         "imgUrl": "../static/memberCard.png",
         "aUrl": "https://www.baidu.com"
       }, {
         "imgUrl": "../static/memberCard.png",
         "aUrl": "https://www.taobao.com"
       }, {
         "imgUrl": "../static/memberCard.png",
         "aUrl": "https://www.jd.com"
       }, {
         "imgUrl": "../static/memberCard.png",
         "aUrl": "https://www.360.com"
       }, {
         "imgUrl": "../static/memberCard.png",
         "aUrl": "https://www.baidu.com"
       }]
     }
   },
   mounted() { //浏览器顶部进度条


     this.$refs.topProgress.start()
       // Use setTimeout for demo
     setTimeout(() => {
       this.$refs.topProgress.done()
     }, 2000)
   },
   methods: {

     enroll: () => {
       alert("对不起，名额已经没有啦")
     },
     dianji: () => {
       alert("点击了我")
     }
     

   },
   beforeCreate() {
     console.group('beforeCreate 创建前状态===============》');
     console.log("el     : " + this.$el); //undefined
     console.log("data   : " + this.$data); //undefined
     console.log("message: " + this.message)
   },
   created() {
     console.group('created 创建完毕状态===============》');
     console.log("el     : " + this.$el); //undefined
     console.log("data   : " + this.$data); //已被初始
     console.log("message: " + this.message); //已被初始化
   },
   beforeMount() {
     console.group('beforeMount 挂载前状态===============》');
     console.log("el     : " + (this.$el)); //已被初始化
     console.log(this.$el);
     console.log("data   : " + this.$data); //已被初始化
     console.log("message: " + this.message); //已被初始化
   },
   mounted() {
     console.group('mounted 挂载结束状态===============》');
     console.log("el     : " + this.$el); //已被初始化
     console.log(this.$el);
     console.log("data   : " + this.$data); //已被初始化
     console.log(this.$data)
     console.log("message: " + this.message); //已被初始化
   },
   beforeUpdate() {
     console.group('beforeUpdate 更新前状态===============》');
     console.log("el     : " + this.$el);
     console.log(this.$el);
     console.log("data   : " + this.$data);
     console.log("message: " + this.message);
   },
   updated() {
     console.group('updated 更新完成状态===============》');
     console.log("el     : " + this.$el);
     console.log(this.$el);
     console.log("data   : " + this.$data);
     console.log("message: " + this.message);
   },
   beforeDestroy() {
     console.group('beforeDestroy 销毁前状态===============》');
     console.log("el     : " + this.$el);
     console.log(this.$el);
     console.log("data   : " + this.$data);
     console.log("message: " + this.message);
   },
   destroyed: function() {
     console.group('destroyed 销毁完成状态===============》');
     console.log("el     : " + this.$el);
     console.log(this.$el);
     console.log("data   : " + this.$data);
     console.log("message: " + this.message)

   },
   components: {
     textp,
     topProgress
   } /*注册小组件*/

 }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}
.aaa{
  color: red;
}
.bbb{
background: #f1f1f1;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.hello{
  padding: 2.9rem 1rem;
}
.title{
  font-size: 1.2rem;
  color: #444;
  font-weight: bold;
  margin: 0.8rem 0;
}
img{
  display: block;
  width: 100%;
  height: 15rem;
  margin: 25px auto;
}

.foot{
  width: 100%;
  height: 3rem;
    position: fixed;
  bottom: 0px;
  line-height: 3rem;
  font-size: 1.2rem;
  text-align: center;
  background: #fe864a;
  color: #fff;

}
p{
  height: 1rem;
  width: 2rem;
  background-color: #000;
  color:#fff;
  line-height: 1rem;
  text-align: center;
}
/*img{
  transition:all 0.5s;
}
img[lazy=loading]{
}
img[lazy=loaded]{
  animation:fade 0.5s;
}
@keyframes fade {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}*/
img[lazy=error]
{
    transition: all 5s;
    width: 100%;
  }

img[lazy=loading]
{
    transition: all 5s;
    width: 100%;
  }
img[lazy=loaded]{
    transition: all 5s;
    width: 100%;
    }


</style>
