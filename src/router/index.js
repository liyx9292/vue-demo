import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import wrap from '@/components/wrap'


Vue.use(Router);

export default new Router({
  routes: [{
    path: '/wrap',
    name: 'wrap',
    component: wrap
  }, {
    path: '/business',
    name: 'Hello',
    component: Hello
  }, {
    path: '*',
    name: 'wrap',
    redirect: '/wrap'

  }]
})