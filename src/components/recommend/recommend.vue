<template>
  <div class="recommend" ref="recommend">
    <div class="recommend-wrapper">
      <!-- <div style="width:100%;overflow:hidden;background-color:#f8f8f8;"><swiper-ad :swiperAD="swiperAD"/></div>
      <flex-lists :flexList1="flexList1" :flexList2="flexList2"/>
      <div class="quickNews">
        <div class="quickNews-container">
          <div class="quickNews-logo">
            快报
          </div>
          <div class="quickNews-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item, index) in quickNews" :key="index">
                {{item}}
              </div>
            </div>
          </div>
          <div class="quick-more"></div>
        </div>
      </div> -->
      <!-- <cut-line />
      <lists-wrap :listswrap="guessLike" :maxLength="6" />
      <cut-line />
      <lists-wrap :listswrap="recommend" :maxLength="3" />
      <cut-line />
      <lists-down :listsdown="listsDown" />
      <cut-line />
      <lists-down :listsdown="history" />
      <cut-line />
      <recommend-ad :commendAD="commendAD"/>
      <cut-line />
      <lists-down :listsdown="listenList"/> -->
      <cut-line />
      <lazy-radio :lazyRadio="lazyRadio"/>
    </div>
  </div>
</template>

<script>
import lazyRadio from '@/components/commonComponent/lazyRadio'
import listsDown from '@/components/commonComponent/listsDown'
import swiperAd from '@/components/swiperAD/swiperAD'
import _BScroll from '@/common/js/BScroll'
import Swiper from '../../../static/swiper'
import flexLists from '@/components/flexLists/flexLists'
import cutLine from '@/components/cutLine/cutLine'
import listsWrap from '@/components/commonComponent/listsWrap'
import recommendFreeVue from '../commonComponent/recommendFree.vue';
import recommendAD from '@/components/commonComponent/recommendAd'
export default {
  data() {
    return {
      flexLists: [],
      swiperAD: [],
      flexList1: [],
      flexList2: [],
      quickNews: [],
      guessLike: {},
      recommend: {},
      listsDown: {},
      commendAD: {},
      history: {},
      listenList: {},
      lazyRadio: {}
    }
  },

  components: {
    'swiper-ad': swiperAd,
    'flex-lists': flexLists,
    'cut-line': cutLine,
    'lists-wrap': listsWrap,
    'lists-down': listsDown,
    'recommend-ad': recommendAD,
    'lazy-radio': lazyRadio
  },
  created() {
    this.$nextTick( () => {
      _BScroll(this.$refs.recommend);
      new Swiper('.flex-container');
      new Swiper('.quickNews-swiper',{
        loop: true,
        direction : 'vertical',
        autoplay: true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents:true,//修改swiper的父元素时，自动初始化swiper 
      });
    })
  },
  mounted() {
    this.$http.get('static/recommend.json').then(res => {
      if(res.confirm) {
        this.flexLists = res.data.flexLists;
        this.swiperAD = res.data.swiperAD;
        this.flexList1 = this.flexLists.slice(0,10);
        this.flexList2 = this.flexLists.slice(11);
        this.quickNews = res.data.quickNews;
        this.guessLike = res.data.guessLike;
        this.recommend = res.data.recommend;
        this.listsDown = res.data.listsdown;
        this.history = res.data.history;
        this.commendAD = res.data.commendAD;
        this.listenList = res.data.listenList;
        this.lazyRadio = res.data.lazyRadio;
      }
    });
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl';
.recommend
  padding 0
  margin 0
  position absolute
  top 0px
  left 0
  right 0
  bottom 0
  background-color #f8f8f8
  overflow hidden
  .quickNews
    padding  0 10px
    box-sizing border-box
    background-color #fff
    height 40px
    box-size border-box
    .quickNews-container
      width 100%
      height 100%
      border-top 1px solid #f8f8f8
      display flex
      justify-content space-around
      line-height 40px
      .quickNews-logo
        color #f86442
        font-weight 600
        font-style italic
      .quickNews-swiper
        width 80%
        height 100%
        overflow hidden
        .swiper-slide
          overflow hidden
          text-overflow ellipsis
          white-space: nowrap
          width 100%
          height 100%
      .quick-more
        width 18px
        height 18px
        border-radius 50%
        background-color #d9d9d9
        margin-top 10px
  .guessLike
    background-color #ffffff
    padding 0 10px
    box-size border-box
    .guessLike-header
      height 40px
      line-height 40px
      .guessLike-title
        float left
        font-weight bold
      .guessLike-click
        margin 0 10px
        color #f86442
        float left
        font-size 0.9em
      .guessLike-more
        float right 
    .guessLike-wrapper
      padding 5px 0
      display block
      clear both
      .guessLike-lists
        display flex
        justify-content space-between
        flex-wrap wrap
        .guessLike-list
          width 112px
          margin 5px 0 
          overflow hidden
            








    

        

      
</style>
