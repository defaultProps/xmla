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
  <div class="router">
    <div class="router-wrapper">
       <router-link to="/Home/classify">分类</router-link>
    </div>
    <div class="router-wrapper">
      <router-link to="/Home/recommend">推荐</router-link>
    </div>
    <div class="router-wrapper">
      <router-link to="/Home/member">会员</router-link>
    </div>
    <div class="router-wrapper">
      <router-link to="/Home/directSeeding">直播</router-link>
    </div>
    <div class="router-wrapper">
      <router-link to="/Home/radio">广播</router-link>
    </div>
  </div>
  <keep-alive>
    <router-view>
    </router-view>
  </keep-alive>
</div>
</template>
<script>
import headerTop from '@/components/headerTop/headerTop'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  created() {
    
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
      font-size 14px
      font-weight 500
    i
      position absolute
      top 5px
      left 5px
      color #ccc
      font-size 16px
  .icon-wrapper
    i
      font-size 23px
      color #666
.router
  flex(10px,39px, #f3f4f5)
  box-shadow -1px -1px 1px #d8d8d8
  border-bottom 1px solid #fff
  .router-wrapper
    a
      color #333
      font-size 16px

</style>
