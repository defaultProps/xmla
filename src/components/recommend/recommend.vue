<template>
  <div style="width:100vw" class="recommend">
    <div style="width:100%;overflow:hidden"><swiper-ad :swiperAD="swiperAD"/></div>
    <flex-lists :flexList1="flexList1" :flexList2="flexList2"/>
    <div class="quickNews">
      <div class="quickNews-container">
        <div class="quickNews-logo">
          <!-- <img src="" /> 图片找不到合适的 -->
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
        
      </div>
    <div class="guessLike">
      <div class="guessLike-header">
        <div class="guessLike-title"></div>
        <div class="guessLike-click"></div>
        <div class="guessLike-more"></div>
      </div>
      <div class="guessLike-wrapper">
        <div class="guessLike-lists">
          <div class="guessLike-list" v-for="(item, index) in ":key="index">
            <div class="image">
              <img src="" alt="" />
              <div class="image-detail">
                <i></i>
                {{}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import swiperAd from '@/components/swiperAD/swiperAD'
import BScroll from 'better-scroll'
import Swiper from '../../../static/swiper'
import flexLists from '@/components/flexLists/flexLists'
export default {
  data() {
    return {
      flexLists: [],
      swiperAD: [],
      flexList1: [],
      flexList2: [],
      quickNews: [],
    }
  },
  created() {

  },
  components: {
    'swiper-ad': swiperAd,
    'flex-lists': flexLists
  },
  mounted() {
    this.axios.get('https://www.easy-mock.com/mock/5b4c4627189fc57b63eb84cc/data#!method=get').then(res => {
      if(res.data.confirm) { 
        this.flexLists = res.data.data.flexLists
        this.swiperAD = res.data.data.swiperAD
        this.flexList1 = this.flexLists.slice(0,10)
        this.flexList2 = this.flexLists.slice(11)
        this.quickNews = res.data.data.quickNews;
      }
    });
    this.axios.get('').then(res => {

    })
    this.$nextTick( () => {
      new Swiper('.flex-container')
      new Swiper('.quickNews-swiper',{
        loop: true,
        direction : 'vertical',
        autoplay: true,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper 
        observeParents:true,//修改swiper的父元素时，自动初始化swiper 
      });
    })
    


  }
}
</script>

<style lang="stylus">
.flex-container
  padding 10px
  width 100%
  background-color #ffffff
  box-sizing border-box
  .flex-lists
    display flex
    justify-content flex-start
    flex-wrap wrap
    width 100%
    .list
      width 20%
      display flex
      justify-content center
      flex-direction column
      .list-logo
        width 35px
        height 35px
        border 1px solid #e3e4e5
        border-radius 50%
        margin 0 auto
        img 
          margin 0 auto
      .name
        text-align center
        padding 5px 0 10px 0
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



    

        

      
</style>
