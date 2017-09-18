<template>
  <div id="app" @touchstart="start" @touchmove="move">
      <div>
            <transition name="head-fade">
                <div class="tabs" v-if="show">
                    <div class="tab-item" >
                        <router-link to="/wrap" class="header " >{{tourism}}</router-link>
                    </div>
                    <div class="tab-item" >
                      <router-link to="/business" class="header" >{{business}}</router-link>
                    </div>
                </div>
            </transition>
      </div>
    <!-- router(路由) 插槽, 其中所有匹配的组件将在这里呈现 -->
    <transition name="fade"><router-view></router-view></transition>
  </div>
</template>
<script>
import data from "./assets/data.json"

var startY=null,moveY=null,show;
export default {
  name: 'app',
  data () {
    return {
      tourism:data.tourism,
      business:data.business,
      show:true
    }
  },
  methods:{
      start:function(e){
            var touch=e.targetTouches[0];
            startY=touch.pageY;

      },
      move:function(e){
            var touch=e.changedTouches[0];
             moveY=touch.pageY-startY;
            if(moveY<0){
              this.show=false;
            }else{
              this.show=true;
            }

      },
      // head: function(e) {
      //        var el = e.target;
      //       $(el).addClass("current").parent().siblings().find(".header").removeClass("current");
      // }

  },

}

</script>

<style>
*{
  padding: 0;
  margin:0;
}
a{
  text-decoration:none;
  color: #000;
}
.header{
  display: block;
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
.router-link-active{
  color:#ffffff;
  background: #1ad0d6;
}
.title{
  color: #1e7c9e;
  font-size: 32px;
  margin-bottom: 20px;
  text-align: left;
}


.tabs{
  display: flex;
  z-index: 10;
  flex-direction: row;
  justify-content: space-around;
  position: fixed;
  top:0px;
  height: 3rem;
  width: 100%;
  line-height: 3rem;
  font-size: 1rem;
  background: #fff;
  text-align: center;
}
.tabs div{
  width: 50%;
  height: 100%;
  color: #000;
  border-bottom: 2px solid #f1f1f1;
}
.head-fade-enter-active {
  transition: all .2s ease;
}
.head-fade-leave-active {
  transition: all .6s ease;
}
.head-fade-enter, .head-fade-leave-active {
  transform: translateY(-3rem);
  /*opacity: 0;*/
}


.fade-enter-active, .fade-leave-active {
  opacity: 1;
  
  transition: opacity .3s
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}






.active{
  background: red;
}
</style>
