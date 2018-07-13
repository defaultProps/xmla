<template>
<div>
  <div class="header">
    <div class="login">登录</div>
    <div class="input-wrap">
      <i class="icon-chazhao iconfont"></i>
      <input type="text" placeholder="权谋:升迁有道 | 扶摇皇后 | 穿越" />
    </div>
    <div class="icon-wrapper"><i class="icon-naozhong iconfont"></i></div>
    <div class="icon-wrapper"><i class="icon-xiazai iconfont"></i></div>
  </div>
  <div class="nav">
    <div class="nav-lists">
      <div class="list" 2click="tab">分类</div>
      <div class="list">推荐</div>
      <div class="list">会员</div>
      <div class="list">直播</div>
      <div class="list">广播</div>
    </div>
  </div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" data-hash="slide1">
        <classify />
      </div>
      <div class="swiper-slide" data-hash="slide2">
        推荐
      </div>
      <div class="swiper-slide" data-hash="slide3">
        会员
      </div>
      <div class="swiper-slide" data-hash="slide4">
        直播
      </div>
      <div class="swiper-slide" data-hash="slide5">
        广播
      </div>
    </div>
  </div>
</div>
</template>
<script>
import headerTop from '@/components/headerTop/headerTop'
import Swiper from 'swiper'
import classify from '@/components/classify/classify'
export default {
  components: {
    classify
  },
  created() {
  },
  methods: {
  }
}

</script>
<style>
@import '../../../static/swiper.css';
.swiper-container{
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: 52px
} 
</style>

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
.nav-lists
  flex(10px,39px, #f3f4f5)
  box-shadow -1px -1px 1px #d8d8d8
  border-bottom 1px solid #fff
  .list
      color #333
      font-weight 520
      font-size 17px

</style>
