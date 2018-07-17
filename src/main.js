// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from '@/components/Home/Home'
import Listen from '@/components/listen/listen'
import find from '@/components/find/find'
import personal from '@/components/personal/personal'


import classify from '@/components/classify/classify'
import recommend from '@/components/recommend/recommend'
import member from '@/components/member/member'
import directSeeding from '@/components/directSeeding/directSeeding'
import Radio from '@/components/radio/radio'


import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueAxios,axios)
/* eslint-disable no-new */

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Home',
    component: Home,
    children: [
      {
        path: '/Home/classify',
        component: classify
      },
      {
        path: '/Home/recommend',
        component: recommend
      },
      {
        path: '/Home/member',
        component: member
      },
      {
        path: '/Home/directSeeding',
        component: directSeeding
      },
      {
        path: '/Home/radio',
        component: Radio
      }
    ]
  },
  {
    path: '/listen',
    component: Listen
  },
  {
    path: '/find',
    component: find
  },
  {
    path: '/personal',
    component: personal
  }
]
const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})
new Vue({
  el: '#app',
  components: { App },
  router,
  render: h => h(App),
  template: '<App/>',
  data: {
    eventBus: new Vue()   //  event 统一处理事件、数据
  }
})
