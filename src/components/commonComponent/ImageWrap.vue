<template>
  <div class="image-wrapper">
    <img class="image"/>
    <div class="another">
      <i class="iconfont icon-jingpin"></i>
    </div>
    <div class="playback-wrapper">
      <div class="playback">
        <i class="iconfont icon-bofang"></i>
        2015万
      </div>
    </div>
    <div class="image-detail">
      <div class="detail"> <span>会员免费</span>东华理工大学东华理工</div> 
      <div class="detail-more">
        东华理工大学东华理工  
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  
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
    margin-top 5px
    font-size 0.85em
    overflow hidden
    .detail
      width 100%
      color #333333
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      display inline-block
    span 
      border-radius 3px
      padding 0 1px
      box-size border-box
      color #ffffff
      background-color #c37b2e
      margin-right 3px 
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
      font-size 10px
      i
        font-size 12px !important
        color #ffffff
</style>
