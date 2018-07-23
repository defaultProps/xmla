<template>
  <div class="lazyRadio-container">
    <div class="header">
      <div class="title">{{lazyRadio.title}}</div>
      <div class="more">更多<i class="iconfont icon-youjiantou" style="dispaly:block;float:right"></i></div>
    </div>
    <div class="lazyRadio-lists">
      <div class="list" v-for="(item, index) in lazyRadio.data" :key="index" v-if="index <3 ">
        <img :src="item.img" />
        <i class="iconfont icon-bofang1 st"></i>
        <span>{{item.title}}</span>
      </div>
    </div>
    <update-list />
  </div>
</template>

<script>
import updateList from '@/components/commonComponent/updateList'
export default {
  components: {
    'update-list': updateList
  },
  props: {
    lazyRadio: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="stylus" scoped>
.lazyRadio-container
  background-color #ffffff
  padding 0 10px 10px 10px
  .header
    height 40px
    line-height 40px
    width 100%
    .title
      float left
      font-weight bold
    .more
      float right
      font-size 0.9em
      color #666666
  .lazyRadio-lists
    display flex
    justify-content space-around
    align-items center
    .list
      display flex
      justify-content center
      flex-direction column
      align-items center
      position relative
      img 
        width 65px
        height 65px
        background-color #f8f8f8
        border-radius 50%
      .st
        color #e1dede
        font-size 1.5em
        position absolute
        top 23px
      span
        color #333333
        margin 0 auto
      
</style>
