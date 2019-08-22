// 入口文件
import Vue from 'vue'
// 1.1 导入路由
import VueRouter from 'vue-router'
// 1.2 安装路由 
Vue.use(VueRouter)

import app from './app.vue'
// 导入mint-ui
import {Header,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem); 
// 导入MUI
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 1.3 导入自有的router.js 模块
import router from './router.js'

// 2.1 导入 vue-resource
import VueResource from 'vue-resource'
// 2.2 安装vue-resource
Vue.use(VueResource) 

var vm = new  Vue({
  el:"#app",
  render : c => c(app),
  router   // 1.4 挂载路由到 vm 实例上
})