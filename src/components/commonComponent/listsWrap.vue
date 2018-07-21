<template>
  <div class="container">
    <div class="header">
      <div class="title">猜你喜欢</div>
      <div class="unusual">
        <i class="iconfont icon-bazi" style="dispaly:block;float:left"></i>点我猜测更准
      </div>
      <div class="more">更多 <i class="iconfont icon-youjiantou" style="dispaly:block;float:right"></i></div>
    </div>
    <div class="lists-wrapper">
      <div class="lists-container">
        <div class="lists" v-for="(item, index) in guessLike" :key="index">
          <image-wrap />
        </div>
      </div>
      <update-list />
    </div>
  </div>
</template>
<script>
import ImageWrap from '@/components/commonComponent/ImageWrap'
import updateList from '@/components/commonComponent/updateList'
export default {
  components: {
    'image-wrap': ImageWrap,
    'update-list': updateList
  },
  props: {
    guessLike: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  background-color #ffffff
  padding 0 10px
  box-size border-box
  .header
    height 40px
    line-height 40px
    width 100%
    .title
      float left
      font-weight bold
    .unusual
      margin 0 10px
      color #f86442
      float left
      font-size 0.9em 
    .more
      float right
      font-size 0.9em
  .lists-wrapper
    padding 5px 0
    display block
    clear both
    .lists-container
      display flex
      justify-content space-between
      flex-wrap wrap
      .lists
        width 112px
        margin 5px 0 
        overflow hidden
</style>