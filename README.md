### 这是一个 Vue 项目


###[主流开源协议之间有何异同？]https://www.zhihu.com/question/19568896


### 制作首页App组件
1. 使用miut-ui中的 Header组件，完成Header区域
2. 使用MUI 中 tabbar.html 完成底部tabbar
3. 在中间区域放置router-view来展示匹配到的路由组件
###  改造tabbar为 router-link
###  设置路由为高亮
###  点击tabber中的路由链接，展示对应路由组件

###  制作首页轮播图
1. vue-resource 使用获取数据。    ( npm i vue-resource -S )
2. 使用vue-resource的  this.$http.get 获取数据
3. 获取到的数据要保存到 data 身上 
4. 使用 v-for 循环渲染每个 item 项