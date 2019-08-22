import Vue from "vue"
// 1.  导入 vue-router 包
import VueRouter from 'vue-router'
// 2.  手动安装 VueRouter
Vue.use(VueRouter)


// 导入对应的路由组件
import homeContainer from './components/tabbar/homeContainer.vue'
import memberContainer from './components/tabbar/memberContainer.vue'
import shopcarContainer from './components/tabbar/shopcarContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'


// 3.  创建路由对象

var router = new VueRouter({
  routes: [ // 配置路由规则
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: homeContainer
    },
    {
      path: '/member',
      component: memberContainer
    },
    {
      path: '/shopcar',
      component: shopcarContainer
    },
    {
      path: '/search',
      component: searchContainer
    }
  ],
  linkActiveClass: 'mui-active' // 覆盖默认路由高亮类    router-link-active 
})

// 把路由对象暴露出去
export default router