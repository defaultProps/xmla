<template>
  <div class="header">
    <div class="login">登录</div>
    <div class="input-wrap">
      <i class="icon-chazhao iconfont"></i>
      <input type="text" placeholder="权谋:升迁有道 | 扶摇皇后 | 穿越" />
    </div>
    <div class="icon-wrapper"><i class="icon-naozhong iconfont"></i></div>
    <div class="icon-wrapper"><i class="icon-xiazai iconfont"></i></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scroped>

@import '../../common/stylus/mixin.styl';

.header
  flex(10px, 46px, #ffffff)
  .login
    font-weight bolder
    color #666
  .input-wrap
    position relative
    color #cccccc
    input
      -webkit-appearance none
      background-color #eff1f4
      background-image none
      border-radius 30px
      border 1px solid #e7e7e7  
      -webkit-box-sizing border-box
      box-sizing border-box
      color #000
      display inline-block
      height 30px
      line-height 30px
      outline 0
      padding 0 20px
      width 68vw
      text-indent 5px
      font-size 14px
      font-weight 500
    i
      position absolute
      top 2px
      left 5px
      color #ccc
      font-size 16px
  .icon-wrapper
    i
      font-size 23px
      color #666
</style>
