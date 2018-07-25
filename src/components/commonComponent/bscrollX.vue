<template>
  <div class="bscroll-x" ref="bscrollX">
    <div class="bscroll-lists">
      <div class="list" v-for="(item, index) in bscrollX" :key="index">
        <div class="img">
          <i class="iconfont" :class="item.icon" :style="{'color': item.color}"></i>
        </div>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import _BScroll from '@/common/js/BScroll'
export default {
  props: {
    bscrollX: {
      type: Array
    }
  },
  updated() {
    this.$nextTick(()=>{
      var hello = new  _BScroll(this.$refs.bscrollX,{
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        },
        click: true
      });
    });
  },
}
</script>
<style lang="stylus" scoped>
.bscroll-x
  background-color #ffffff
  width 100%
  padding-bottom 10px
  .bscroll-lists
    display flex
    justify-content flex-start
    flex-direction row
    .list
      .img
        width 35px
        height 35px
        border-radius 50%
        background-color #f8f8f8
        text-align center
        margin 10px auto 2px 
        img 
          width 100%
          height 100%
      .title
        text-align center
        width 70px
        padding-top 3px
</style>
