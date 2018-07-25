<template>
  <div class="image-wrapper">
    <img class="image" :src="imageWrap.img"/>
    <div class="another" v-show="imageWrap.hascrown">
      <i class="iconfont icon-jingpin"></i>
    </div>
    <div class="playback-wrapper">
      <div class="playback" v-if="imageWrap.type">
        <i class="iconfont " :class="imageWrap.type == 2 ? 'icon-xingxing':'icon-bofang'"></i>
        {{imageWrap.number}}
      </div>
    </div>
    <div class="image-detail" v-if="!imageWrap.total">
      <div class="detail">
        <recommendFree v-if="imageWrap.ismember"/>
        {{imageWrap.title}}
      </div>
      <div class="detail-more" v-if="imageWrap.detail">
        {{imageWrap.detail}}
      </div>
    </div>
    <div class="image-detail" v-else>
      <div class="title">
        {{imageWrap.title}}
      </div>
      <div class="total">
        <span>{{imageWrap.total}}</span>喜点
      </div>
      <recommendFree v-if="imageWrap.ismember"/>
    </div>
  </div>
</template>
<script>
import vipHot from '@/components/commonComponent/vipHot'
import recommendFree from '@/components/commonComponent/recommendFree'
export default {
  props: {
    imageWrap: {
      type: Object,
      default: null
    }
  },
  components: {
    
    'recommendFree': recommendFree
  }
}
</script>
<style lang="stylus" scoped>
.image-wrapper
  width 112px
  position relative
  .image
    width 112px
    height 112px
    background-color #d9d9d9
  .image-detail
    overflow hidden
    .detail
      width 100%
      color #333333
      font-size 0.8rem
      margin-top: 5px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      display inline-block
      span 
        border-radius 3px
        padding 0 2px
        font-size 0.85em
        box-size border-box
        color #ffffff
        background-color #c37b2e
        margin-right 3px
    .title
      width 100%
      color #333333
      font-size 1rem
      margin-top: 5px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      display inline-block
    .total
      font-size .8em
      span
        font-size 1.1em
        margin-right 2px 
        color #fc5832
    .detail-more
      color #999999
      margin-top -8px
      font-size 0.8rem
  .another
    position absolute
    top 0
    left 0
    height: 0px;
    width: 0px;
    border-top 11px solid #ff4612
    border-left 11px solid #ff4612
    border-bottom 11px solid transparent
    border-right 11px solid transparent
    i
      position absolute
      font-size 13px
      color #ffffff
      left -11px
      top -11px
      transform scale(0.7, 0.7)
      transform rotate(-45deg)
  .playback-wrapper
    width 100%
    height 20px 
    margin-top -28px
    position relative
    left 0
    color #fff
    background-color rgba(255,255,255, 0.1)
    .playback
      line-height 20px
      color #ffffff
      font-size 9px
      i
        font-size 10px !important
        color #ffffff
</style>
