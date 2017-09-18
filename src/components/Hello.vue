<template>
  <div class="business">
    <div class="hellodd">
        <textp :logo="contentss.msg"></textp>
        <span class="other">{{other}}</span>
          <swiper :options="swiperOption" >
            <swiper-slide v-for="slide in swiperSlides" :key="slide.id">我是第{{ slide }}页</swiper-slide>
          </swiper>
        <leibiao :logo="titlea.num1" :time="titlea.num2" :imgs="titlea.pic"></leibiao>
        <leibiao :logo="titleb.num1" :time="titleb.num2" :imgs="titleb.pic"></leibiao>
        <leibiao :logo="titlec.num1" :time="titlec.num2" :imgs="titlec.pic"></leibiao>
         <leibiao :logo="titlea.num1" :time="titlea.num2" :imgs="titlea.pic"></leibiao>
        <leibiao :logo="titleb.num1" :time="titleb.num2" :imgs="titleb.pic"></leibiao>
        <leibiao :logo="titlec.num1" :time="titlec.num2" :imgs="titlec.pic"></leibiao>
         <leibiao :logo="titlea.num1" :time="titlea.num2" :imgs="titlea.pic"></leibiao>
        <leibiao :logo="titleb.num1" :time="titleb.num2" :imgs="titleb.pic"></leibiao>
        <leibiao :logo="titlec.num1" :time="titlec.num2" :imgs="titlec.pic"></leibiao>
         <leibiao :logo="titlea.num1" :time="titlea.num2" :imgs="titlea.pic"></leibiao>
        <leibiao :logo="titleb.num1" :time="titleb.num2" :imgs="titleb.pic"></leibiao>
        <leibiao :logo="titlec.num1" :time="titlec.num2" :imgs="titlec.pic"></leibiao>
    </div>
    <div class="header current foot">拨打电话</div>
  </div>
</template>
<script>

import textp from "./textp.vue"
import leibiao from "./leibiao.vue"
import data from "../assets/data.json"
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'hello',
  data () {
    return {
      title:data.title, 
      msgf:data.msgf,
      contentss:data.contents,
      other:data.other,
      titlea:data.titlea,
      titleb:data.titleb,
      titlec:data.titlec,
      swiperOption: {
          autoplay: 1000,
          speed:900,//滑动速度
          // setWrapperSize :true,
          effect : 'cube',
          cube: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 10,
                shadowScale: 0.9
              },
           loop : true,
           autoplayDisableOnInteraction : false,//手指滑动后 自动播放继续
          // paginationClickable :true,
          // mousewheelControl : true,
          // observeParents:true,
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }

  },

      components:{
      textp,    /*多个组件时  一定要这样写 不能单独写*/
      leibiao,
      swiper,
    swiperSlide
    }         /*注册小组件*/
}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
  cursor:pointer;
}

.business{
  margin-top: 3.5rem;
}
.hellodd{
  padding: 0 30px;
}
.foot{
    width: 100%;
  height: 3rem;
  position: fixed;
  bottom: 0px;
  line-height: 3rem;
  font-size: 1.2rem;
  text-align: center;
  background: #1ad0d6;
  color: #fff;
}
.other{
  display: block;
  font-size: 1.1rem;
  margin-top: 1rem;
  text-align: center;
}
.other:after
{ 
content:"";
height: 0.2rem;
display: block;
width: 2.5rem;
background: #1ad0d6;
margin:0.1rem auto;
}

.swiper-container{
  height: 10rem;
  
}
.swiper-slide{
  background: #149ea4;
  height: 10rem;
  line-height: 10rem;
  text-align: center;
  color: red;
}
</style>
