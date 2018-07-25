<template>
  <div class="classify" ref="classify">
    <div class="classify-content">
      <!-- 最近浏览 -->
      <div class="recent-view-wrapper">
        <span class="recent-view">最近浏览</span>
        <span>二次元</span>
        <span>悬疑</span>
        <span>景观</span>
      </div>
      <!-- 列表 -->
      <div class="lists" v-for="(items, indexs) in classifyData.headList" :key="indexs">
        <div class="list" v-for="(item, index) in items" :key="index">
          <i class="iconfont" :class="item.icon" :style="{'color':items.color}"></i>
          <span>{{item.name}}</span>
        </div>
      </div>
      <span class="title-lists">娱乐</span>
      <div class="table-wrapper">
        <div class="list" v-for="(item, index) in classifyData.enjoy" :key="index">
          <i class="iconfont" :class="item.icon" :style="{'color':item.color}"></i>
          <span>{{item.name}}</span>
        </div>
      </div>
      <span class="title-lists">知识</span>
      <div class="table-wrapper">
        <div class="list" v-for="(item, index) in classifyData.knowledge" :key="index">
          <i class="iconfont" :style="{'color':item.color}" :class="item.icon"></i>
          <span>{{item.name}}</span>
        </div>
      </div>
      <span class="title-lists">生活</span>
      <div class="table-wrapper">
        <div class="list" v-for="(item, index) in classifyData.life" :key="index">
          <i class="iconfont" :style="{'color':item.color}" :class="item.icon"></i>
          <span>{{item.name}}</span>
        </div>
      </div>
      <span class="title-lists">特色</span>
      <div class="table-wrapper">
        <div class="list" v-for="(item, index) in classifyData.feature" :key="index">
          <i class="iconfont" :style="{'color':item.color}" :class="item.icon"></i>
          <span>{{item.name}}</span>
        </div>
      </div>
      <!-- 广告 -->
      <div class="swiper-container-ad">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(url, index) in classifyData.AD" :key="index">
            <img :src="url" style="width: 100%;height:100%">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tableList from '@/components/commonComponent/tableList'
import _BScroll from '@/common/js/BScroll'
import Swiper from '../../../static/swiper'
// import axois from '@/api/interface'

export default {
  data() {
    return {
     classifyData: {}
    }
  },
  components: {
    'table-list': tableList
  },
  created() {
    this.$nextTick(()=>{
      _BScroll(this.$refs.classify);
    });
    this.$nextTick(() => {
      this.init();
    })
  },
  methods: {
    init() {
      this.$http.get('static/classify.json').then((response)=>{
        this.classifyData = response.data
        this.initSwiper();
      }).catch((error)=>{
        console.log(error);
      })
    },
    initSwiper() {
      new Swiper('.swiper-container-ad',{
        autoplay:1000,//每秒中轮播一次
        loop:true,//可以让图片循环轮播
        autoplayDisableOnInteraction:false,//在点击之后可以继续实现轮播
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl';
i
  color:#a392ec
  &:before
    position relative
    left -2px
    top 2px
    font-size 19px
.classify
  padding 0
  margin 0
  position absolute
  top 0px
  left 0
  right 0
  bottom 0
  background-color #f8f8f8
  overflow hidden
  .classify-content
    width 100%
    .recent-view-wrapper
      height 46px
      display flex
      justify-content space-around
      align-items center
      span
        color #333333
        padding 2px 5px
        text-align center
        background-color #fff
        border-radius 40px
        width 19%
        line-height 20px
      .recent-view
        color #999999
        background-color #f8f8f8

      
    .lists
      flex-lists(46px,#ffffff,6px)
      .list
        width 25%
        text-align center
        height 100%
        border-right 1px solid #f8f8f8
    .title-lists
      height 46px
      line-height 46px
      margin-left 10px
      color #666666
      position relative
      &:before
        content ''
        width 4px
        height 13px
        border-radius 5px
        left -8px
        top 4px
        position absolute
        background-color red
    .table-wrapper
      flex-lists(46px,#ffffff,0)
      flex-wrap wrap
      .list
          width 100px
          text-align left
          height 100%
          border-right 1px solid #f8f8f8
          background-color #ffffff
          width 33.3333333%
          box-sizing border-box
          border-bottom 1px solid #f8f8f8
          .iconfont
            margin-left 15px
    .swiper-container-ad
      width 100%
      height 110px
</style>
