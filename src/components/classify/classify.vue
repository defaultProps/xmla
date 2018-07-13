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
        <div class="list" v-for="(item, index) in classifyData.life">
          <i class="iconfont" :style="{'color':item.color}" :class="item.icon"></i>
          <span>{{item.name}}</span>
        </div>
      </div>
      <span class="title-lists">特色</span>
      <div class="table-wrapper">
        <div class="list" v-for="(item, index) in classifyData.feature">
          <i class="iconfont" :style="{'color':item.color}" :class="item.icon"></i>
          <span>{{item.name}}</span>
        </div>
      </div>
      <!-- 广告 -->
      <div class="swiper-warpper">
        <swiper class="swiper-ad">
          <swiper-slide v-for="(url, index) in classifyData.AD" :key="index">
            <img :src="url" style="width: 100%;height:100%">
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import tableList from '@/components/tableList/tableList';
import BScroll from 'better-scroll';
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
      let scroll = new BScroll(this.$refs.classify,{
        scrollY: true,
        click: true
      })
    })
    this.$nextTick(() => {
      this.init();
    })
  },
  methods: {
    init() {
      this.axios.get('https://www.easy-mock.com/mock/5b356985e58cad501f557b8c/xmla/xmla#!method=get').then((response)=>{
        this.classifyData = response.data.data
        console.log(this.classifyData);
      }).catch((error)=>{
        console.log(error);
      })
    }
  }
}
</script>

<style lang="stylus">
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
    border-left 4px solid #f86442
    padding-left 5px
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
  .swiper-warpper
    swiper(100%, 120px)
    position relative
    .swiper-ad
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      height 120px
      background-color #fff
</style>
