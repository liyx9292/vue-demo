// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//引入vue
import Vue from 'vue'

//引入同级目录下的文件(导入App组件)
import App from './App'

//全局引入路由
import router from './router'
//使用路由
Vue.use(router);

//vue-awesome-swiper轮播官方插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

//引入懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, { //配置懒加载
  preLoad: 1.3,
  error: './static/error.jpg', //加载失败
  loading: './static/loading.gif', //加载ing
  attempt: 1
})

import VueTabs from 'vue-nav-tabs'
import 'vue-nav-tabs/dist/vue-tabs.min.css'
Vue.use(VueTabs)


//全局引入JQ
import jQuery from "./js/jquery-1.8.3"

import axios from 'axios'
Vue.prototype.$ajax = axios

//提示信息
Vue.config.productionTip = false

/* eslint-disable no-new */

//new  vue实例化(跑起来)
new Vue({

  //最后的效果将会替换页面中id为app的div元素
  el: '#app',

  //使用路由
  router,

  //组件用这样的标签来包裹
  template: '<App/>',

  // 当前页面想使用app这个组件
  components: {
    App
  }
})