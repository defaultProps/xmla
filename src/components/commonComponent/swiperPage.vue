<template>
  <div class="swiper-container swiperPage">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in lists" :key="index" ref="swiperSlide">
        <keep-alive>
          <component :is="item.component"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import classify from '@/components/classify/classify'
import recommend from '@/components/recommend/recommend'
import radio from '@/components/radio/radio'
import directSeeding from '@/components/directSeeding/directSeeding'
import member from '@/components/member/member' 
import Swiper from '../../../static/swiper'
import BScroll from '@/common/js/BScroll'
export default {
  data() {
    return {
      lists: [{
        path: '/classify',
        component: classify
      },{
        path: '/recommend',
        component: recommend
      },{
        path: '/radio',
        component: member
      },{
        path: '/directSeeding',
        component: directSeeding
      },{
        path: '/member',
        component: radio
      }],
      currentIndex: 2
    }
  },
  props: {
    
  },
  mounted() {
    let mySwiper = new  Swiper('.swiper-container.swiperPage',{
      initialSlide: 2
    })
    mySwiper.on('slideChange', ()=> {     // 发送滑动事件 index
      this.currentIndex = mySwiper.activeIndex;
      this.$root.eventBus.$emit('slideTab',this.currentIndex)
    })
    this.$root.eventBus.$on('changeTab',index => {
      mySwiper.slideTo(index, 300, false)
    })
    
  },
  methods: {
    slideTab (index) {
      this.currentIndex = index;
      mySwiper.slideTo(index, 1000, false)
      console.log(index);
    }
  }

}
</script>

<style lang="stylus" scroped>
@import '../../common/stylus/mixin.styl';
@import '../../../static/swiper.css';
.swiper-container
  position: absolute;
  top: 84px;
  left: 0;
  right: 0;
  bottom: 52px

</style>
