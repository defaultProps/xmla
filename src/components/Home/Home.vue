<template>
<div>
  <header-top />
  <header-nav :routes="routes" />
  <swiper-page :routes="routes" />
</div>
</template>
<script>
import headerTop from '@/components/commonComponent/headerTop'
import headerNav from '@/components/commonComponent/headerNav'
import swiperPage from '@/components/commonComponent/swiperPage'
import fs from 'fs'
export default {
  data() {
    return {
      routes: ['/classify', '/recommend', '/member', '/radio', '/directSeeding']
    }
  },
  components: {
    'header-nav': headerNav,
    'header-top': headerTop,
    'swiper-page': swiperPage
  },
  methods: {
    tabClick() {

    }
  },
  mounted() {
    
    const routeArr = ['/classify1', '/classify2', '/classify3', '/classify4'];
    let index = routeArr.findIndex( route => {
      return route === this.$route.path
    });
    // console.log("index: "+index +"\n"+"this.$route: "+ this.$route.path);
    
    // var mySwiper = new Swiper('.swiper-container', {
    //   // initialSlide: index
    // })
  }
}

</script>

<style lang="stylus">
@import '../../common/stylus/mixin.styl';
html,body
  font-size 14px
  font-family "Microsoft YaHei" ! important
  font-weight bold
  overflow hidden
.loading
  position absolute
  left 0
  top 80px
  right 0
  bottom 0
  background-color #000000
  img
    position absolute
    width 480px
    height 270px
    top 50%
    left 50%
    margin-top -135px
    margin-left -240px 



</style>
