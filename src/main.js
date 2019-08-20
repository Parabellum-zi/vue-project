// 入口文件
import Vue from 'vue'
import app from './app.vue'
// 导入mint-ui
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)
// 导入MUI
import './lib/mui/css/mui.css'
var vm = new  Vue({
  el:"#app",
  render : c => c(app)
})