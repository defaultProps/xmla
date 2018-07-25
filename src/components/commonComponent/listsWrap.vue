<template>
  <div class="container">
    <div class="header">
      <div class="title">{{listswrap.title}}</div>
      <slot-list>
        <!-- <slot name="guessLike"></slot>
        <slot name="recommend"></slot> -->
        <div class="more">更多<i class="iconfont icon-youjiantou" style="dispaly:block;float:right"></i></div>
      </slot-list>
    </div>
    <div class="lists-wrapper">
      <div class="lists-container">
        <div class="lists" v-for="(item, index) in listswrap.data" :key="index" v-if="index < maxLength">
          <image-wrap :imageWrap="item"/>
        </div>
      </div>
      <update-list v-if="!listswrap.noupdate"/>
    </div>
  </div>
</template>
<script>
import slotList from '@/components/slotWrap/listSlot'
import ImageWrap from '@/components/commonComponent/ImageWrap'
import updateList from '@/components/commonComponent/updateList'
export default {
  components: {
    'image-wrap': ImageWrap,
    'update-list': updateList,
    'slot-list': slotList
  },
  props: {
    listswrap: {
      type: Object,
      default: {
        "title": '',
        "data": []
      }
    },
    maxLength: {
      type: Number,
      default: 3
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
    .more
      float right
      font-size 0.9em
      color #666666
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