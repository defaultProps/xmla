<template>
 <div class="recommend" ref="recommend">
    <!-- <div class="recommend-wrapper">
      <div style="width:100%;overflow:hidden;background-color:#f8f8f8;"><swiper-ad :swiperAD="swiperAD"/></div>
    </div> -->
 </div>
</template>

<script>
import swiperAd from '@/components/swiperAD/swiperAD'
export default {
  // data() {
  //   swiperAD: []
  // },
  // mounted() {
  //   this.$http.get('static/member.json').then(res => {
  //     if(res.confirm) {
  //       this.swiperAD = res.data.swiperAD;
  //     }
  //   })
  // }
  
}
</script>

<style lang="stylus" scoped>
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
</style>

