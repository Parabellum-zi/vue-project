<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,i) in swipeList" :key="i">
        <img :src="item" alt />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 六宫格功能区  -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-redo">
           
          </span>
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-chat"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-videocam"></span>
          <div class="mui-media-body">视屏专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-list"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>     
    </ul>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      swipeList: [
        'http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg',

        'http://www.itcast.cn/images/slidead/BEIJING/2017511009514700.jpg',

        'http://www.itcast.cn/images/slidead/BEIJING/2017421414422600.jpg'
      ] // 保存轮播图的数组
    }
  },
  created() {
    this.getSwipe()
  },
  methods: {
    getSwipe() {
      // 获取轮播图数据得方法
      // // this.$http.get('').then(result => {
      //   console.log(result)
      // if(){
      // }else
      // {
      //   Toast('加载失败')
      // }
      //     })
    }
  }
}
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: blue;
    }
    &:nth-child(2) {
      background-color: yellow;
    }
    &:nth-child(3) {
      background-color: #ff6700;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>